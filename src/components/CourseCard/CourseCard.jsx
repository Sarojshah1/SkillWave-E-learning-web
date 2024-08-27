import React from 'react';
import PropTypes from 'prop-types';
import { FaClock, FaStar, FaUser } from 'react-icons/fa';

const CourseCard = ({ thumbnail, title, description, price, duration, level, creator, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-0 right-0 m-4 bg-gray-800 text-white px-3 py-1 text-xs font-medium rounded-full">
                    {level}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                        <FaClock className="mr-1 text-gray-600" />
                        {duration}
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <FaStar className="mr-1 text-gray-600" />
                        {level}
                    </div>
                    <div className="flex items-center">
                        <FaUser className="mr-1 text-gray-600" />
                        {creator}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">Npr.{price}</span>
                    <button
                        className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-secondary transition duration-300"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevents triggering the onClick of the card
                            onClick();
                        }}
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default CourseCard;
