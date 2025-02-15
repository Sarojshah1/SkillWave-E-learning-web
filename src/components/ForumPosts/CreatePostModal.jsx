// src/components/CreatePostModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
Modal.setAppElement('#root'); // Set the app root for accessibility

const CreatePostModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postTags, setPostTags] = useState('');
  const [posting, setPosting] = useState(false);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    try {
      setPosting(true);
      const response = await axios.post('http://localhost:3000/api/post', {
        title: postTitle,
        content: postContent,
        tags: postTags
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(response.data)


      setPostTitle("");
      setPostTags("");
      setPosting(false);
    } catch (error) {
      console.error('Error creating post:', error);
      setPosting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Post"
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
    >
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create a New Post</h2>
        <form onSubmit={handlePostSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Content"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              value={postTags}
              onChange={(e) => setPostTags(e.target.value)}
              placeholder="Tags (comma separated)"
              className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              disabled={posting}
            >
              {posting ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreatePostModal;
