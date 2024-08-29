import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TutorBlogCard = ({creatorName, title, createdDate, tags, id,content }) => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        navigate(`/tutor/blogs/${id}`, {
            state: {
                title,
                date: createdDate,
                tags,
                content,
                creatorName
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
                <p className="text-gray-600 text-sm mb-4">Created by {creatorName} on {new Date(createdDate).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

TutorBlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired, // Ensure 'id' is required and of the correct type
    content:PropTypes.string.isRequired,
    creatorName: PropTypes.string.isRequired,
};

export default TutorBlogCard;
