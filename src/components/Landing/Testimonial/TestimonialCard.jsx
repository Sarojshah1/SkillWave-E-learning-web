import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, role, testimonial, avatar, rating }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-gray-700">{testimonial}</p>
            </div>
            <div className="flex items-center">
                {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
            </div>
        </div>
    );
};

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            role: 'Web Developer',
            testimonial: 'This platform has significantly improved my coding skills and helped me land my dream job!',
            avatar: 'https://via.placeholder.com/150',
            rating: 5,
        },
        {
            name: 'John Smith',
            role: 'Data Scientist',
            testimonial: 'The courses are very comprehensive and the instructors are top-notch. Highly recommend it!',
            avatar: 'https://via.placeholder.com/150',
            rating: 4,
        },
        {
            name: 'Emily Johnson',
            role: 'Digital Marketer',
            testimonial: 'Amazing content and great community. It helped me to stay updated with the latest marketing trends.',
            avatar: 'https://via.placeholder.com/150',
            rating: 5,
        },
    ];

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        role={testimonial.role}
                        testimonial={testimonial.testimonial}
                        avatar={testimonial.avatar}
                        rating={testimonial.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
