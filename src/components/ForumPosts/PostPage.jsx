import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ForumPostCard from "./PostCard";
import { RingLoader } from "react-spinners";
import { FaSync, FaUserCircle } from "react-icons/fa";
import CreatePostModal from "./CreatePostModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [newPostContent, setNewPostContent] = useState("");
  const [posting, setPosting] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const loaderRef = useRef(null);
  const token = localStorage.getItem("token");

  const fetchPosts = async (pageNo = 1) => {
    try {
      if (token) {
        const userResponse = await axios.get(
          "http://localhost:3000/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserProfile(userResponse.data);
      }

      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/post", {
        params: { page: pageNo, limit: 6 },
      });

      const sortedPosts = response.data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // If no posts are returned, set hasMore to false
      if (sortedPosts.length === 0) {
        setHasMore(false);
      }

      // If the response has fewer posts than the limit, we assume there are no more posts
      if (sortedPosts.length < 6) {
        setHasMore(false);
      }

      setPosts((prevPosts) =>
        pageNo === 1 ? sortedPosts : [...prevPosts, ...sortedPosts]
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    if (!postTitle.trim() || !newPostContent.trim()) return;

    try {
      setPosting(true);
      const response = await axios.post(
        "http://localhost:3000/api/post",
        {
          title: postTitle,
          content: newPostContent,
          tags: postTags,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPosts([response.data, ...posts]);
      setNewPostContent("");
      setPostTitle("");
      setPostTags("");
      setModalIsOpen(false);
      setPosting(false);
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Error creating post");
      setPosting(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore]);

  const handleRefresh = () => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
    fetchPosts(1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  if (loading && page === 1)
    return (
      <p className="text-blue-600 font-semibold text-center">Loading...</p>
    );
  if (error)
    return (
      <p className="text-red-600 font-semibold text-center">Error: {error}</p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4 rounded-lg shadow-md mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Forum Posts</h1>
        <button
          onClick={handleRefresh}
          className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition flex items-center"
        >
          <FaSync className="mr-2" />
          Refresh
        </button>
      </header>

      <section className="mb-8 p-6 bg-white shadow-md rounded-lg flex items-center space-x-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        {/* Profile Picture */}
        {userProfile.profile_picture ? (
          <img
            src={`http://localhost:3000/profile/${userProfile.profile_picture}`}
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 "
          />
        ) : (
          <FaUserCircle className="text-3xl text-blue-500 border-2 border-gray-300 p-1 rounded-full shadow-md" />
        )}

        {/* Post Input Area */}
        <div className="flex-1">
          <div
            onClick={openModal}
            className="border border-gray-300 p-4 rounded-full bg-gray-50 cursor-pointer hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-3"
          >
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <FaUserCircle className="text-sm" />
            </div>
            <p className="text-gray-700 font-semibold">
              What's on your mind, {userProfile.name}?
            </p>
          </div>
        </div>
      </section>

      <CreatePostModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSubmit={handlePostSubmit}
      />

      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <ForumPostCard key={post._id} post={post} />
        ))}
        {loading && hasMore && page > 1 && (
          <div className="mt-4 flex justify-center">
            <RingLoader color="#3490dc" size={60} />
          </div>
        )}
        {!hasMore && !loading && (
          <p className="text-gray-600 text-center mt-4">
            No more posts to show.
          </p>
        )}
        <div ref={loaderRef} className="mt-4 flex justify-center">
          {loading && hasMore && <RingLoader color="#3490dc" size={60} />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
