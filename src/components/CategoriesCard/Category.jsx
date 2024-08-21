import React from 'react';
import PropTypes from 'prop-types';
import { FaCode, FaDatabase, FaBullhorn, FaPalette, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa';

const categoryIcons = {
    'Web Development': <FaCode size={40} className="text-primary" />,
    'Data Science': <FaDatabase size={40} className="text-primary" />,
    'Digital Marketing': <FaBullhorn size={40} className="text-primary" />,
    'Graphic Design': <FaPalette size={40} className="text-primary" />,
    'Cyber Security': <FaShieldAlt size={40} className="text-primary" />,
    'Project Management': <FaProjectDiagram size={40} className="text-primary" />,
};

const CategoriesCard = ({ title, description, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center p-6"
            onClick={onClick}
        >
            <div className="mb-4">
                {categoryIcons[title]}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4 text-center">{description}</p>
            <a
                href="#"
                className="text-primary font-semibold hover:underline"
            >
                Learn More
            </a>
        </div>
    );
};

CategoriesCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default CategoriesCard;

