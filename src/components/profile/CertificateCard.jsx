import React from 'react';
import { useNavigate } from 'react-router-dom';

const CertificateCard = ({ badge, title, issuedDate, description, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Example navigation, modify as needed
      navigate('/certificate-details'); 
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center mb-4">
        <img
          src={badge}
          alt={title}
          className="w-16 h-16 rounded-full border-2 border-primary mr-4"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-700 mb-2"><strong>Issued Date:</strong> {issuedDate}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CertificateCard;
