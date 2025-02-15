import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import axios from "axios";

const ForumPostCard = ({ post, updatePost }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentsToShow, setCommentsToShow] = useState(3);
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);

  const token = localStorage.getItem("token");

  const toggleShowComments = () => {
    setShowComments(!showComments);
  };

  const loadMoreComments = () => {
    setCommentsToShow(commentsToShow + 3);
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/post/${post._id}/comments`,
          { content: newComment },
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        setNewComment("");

        // Update the post comments state here
        updatePost((prevPost) => ({
          ...prevPost,
          comments: [response.data, ...prevPost.comments].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        }));
      } catch (error) {
        console.error("Error adding comment:", error.response ? error.response.data : error.message);
      }
    }
  };

  const handleAddReply = async (commentId) => {
    if (newReply.trim()) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/post/${post._id}/comments/${commentId}/replies`,
          { content: newReply },
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        setNewReply("");
        setReplyToCommentId(null);

        // Optionally, update the comments list state to include the new reply
        updatePost((prevPost) => ({
          ...prevPost,
          comments: prevPost.comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, replies: [response.data, ...comment.replies] }
              : comment
          )
        }));
      } catch (error) {
        console.error("Error adding reply:", error.response ? error.response.data : error.message);
      }
    }
  };

  const handleLikePost = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/post/${post._id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      // Optionally, update the like count state
      updatePost((prevPost) => ({
        ...prevPost,
        likes: response.data.likes
      }));
    } catch (error) {
      console.error("Error liking post:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      {/* User info */}
      <div className="flex items-center mb-4">
        <img
          src={`http://localhost:3000/profile/${post.user_id.profile_picture}`}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{post.user_id.name}</h3>
          <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Post content */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content}</p>
      </div>

      {/* Post Tags */}
      <div className="mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-600 text-sm font-medium mr-2 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Like and Comment button */}
      <div className="flex items-center mb-4">
        <button
          onClick={handleLikePost}
          className="text-blue-600 hover:text-blue-700 flex items-center mr-6"
        >
          <FaThumbsUp className="w-6 h-6 mr-1" />
          {post.likes.length} Likes
        </button>
        <button
          onClick={toggleShowComments}
          className="text-blue-600 hover:text-blue-700 flex items-center"
        >
          <BiCommentDetail className="w-6 h-6 mr-1" />
          {showComments ? 'Hide Comments' : `Show Comments (${post.comments.length})`}
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner max-h-96 overflow-y-scroll">
          {post.comments.slice(0, commentsToShow).map((comment) => (
            <div key={comment._id} className="mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={`http://localhost:3000/profile/${comment.user_id.profile_picture}`}
                  alt="Commenter"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-800">{comment.user_id.name}</h4>
                  <p className="text-xs text-gray-500">{new Date(comment.created_at).toLocaleDateString()}</p>
                  <p className="text-gray-600 mt-1">{comment.content}</p>
                </div>
              </div>

              {/* Replies */}
              <div className="ml-12">
                {comment.replies.map((reply) => (
                  <div key={reply._id} className="flex items-center mb-2">
                    <img
                      src={`http://localhost:3000/profile/${reply.user_id.profile_picture}`}
                      alt="Replier"
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="ml-2">
                      <h5 className="text-xs font-semibold text-gray-800">{reply.user_id.name}</h5>
                      <p className="text-xs text-gray-500">{new Date(reply.created_at).toLocaleDateString()}</p>
                      <p className="text-gray-600 mt-1">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Reply Section */}
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  value={replyToCommentId === comment._id ? newReply : ''}
                  onChange={(e) => setNewReply(e.target.value)}
                  onFocus={() => setReplyToCommentId(comment._id)}
                  placeholder="Add a reply..."
                  className="border rounded-lg p-2 w-full"
                />
                <button
                  onClick={() => handleAddReply(comment._id)}
                  className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                  Reply
                </button>
              </div>
            </div>
          ))}
          {post.comments.length > commentsToShow && (
            <button
              onClick={loadMoreComments}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Load More Comments
            </button>
          )}
        </div>
      )}

      {/* Add Comment Section */}
      <div className="mt-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="border rounded-lg p-2 w-full"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ForumPostCard;
