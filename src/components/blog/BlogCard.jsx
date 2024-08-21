import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ title, createdDate, tags, id }) => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        navigate(`/blogs/${id}`, {
            state: {
                title,
                date: createdDate,
                tags,
                content: 'This is a placeholder content for the blog. Replace this with actual content or fetch from a backend.' // Placeholder content
            }
        }); 
    };
    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={handleClick}
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">Created on {new Date(createdDate).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired, // Ensure 'id' is required and of the correct type
};

export default BlogCard;
