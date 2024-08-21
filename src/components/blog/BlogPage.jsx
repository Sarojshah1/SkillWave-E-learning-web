import React, { useState } from 'react';
import BlogCard from './BlogCard'; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa';

const blogs = [
    {
        id:1,
        title: 'Understanding React Hooks',
        createdDate: '2024-08-12',
        tags: ['React', 'JavaScript', 'Frontend']
    },
    {
        id:2,
        title: 'Introduction to Tailwind CSS',
        createdDate: '2024-07-29',
        tags: ['Tailwind', 'CSS', 'Design']
    },
    {
        id:3,
        title: 'Building REST APIs with Node.js',
        createdDate: '2024-06-18',
        tags: ['Node.js', 'Backend', 'API']
    },
    {
        id:4,
        title: 'Mastering Python for Data Science',
        createdDate: '2024-08-05',
        tags: ['Python', 'Data Science', 'Machine Learning']
    },

];

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

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
                            id={blog.id}
                                key={blog.id}
                                title={blog.title}
                                createdDate={blog.createdDate}
                                tags={blog.tags}
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

export default BlogPage;
