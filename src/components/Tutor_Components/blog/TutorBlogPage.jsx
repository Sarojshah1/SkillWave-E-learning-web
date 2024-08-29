import React, { useState,useEffect } from 'react';
import BlogCard from './TutorBlogCard'; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const TutorBlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/blog/blogs',{
                    headers: {
                      Authorization: `Bearer ${token}`
                    },
                  });
                  console.log(response);
                setBlogs(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch blogs. Please try again later.');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter(blog =>
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className=" min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Our Blog</h1>
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Search by tags..."
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute top-5 left-4 text-gray-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <BlogCard
                            id={blog._id}
                                key={blog._id}
                                title={blog.title}
                                createdDate={blog.created_at}
                                tags={blog.tags}
                                creatorName={blog.user_id.name}
                                content={blog.content}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600">
                            <p className="text-lg">No blogs found. Try a different search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TutorBlogPage;
