import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ name, role, testimonial, avatar, rating }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 relative"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
        >
            <FaQuoteLeft className="absolute top-3 left-3 text-gray-300 text-xl" />
            <div className="flex items-center mb-4">
                <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{testimonial}</p>
            <FaQuoteRight className="absolute bottom-3 right-3 text-gray-300 text-xl" />
            <div className="flex items-center">
                {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
            </div>
        </motion.div>
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
            name: "Jane Doe",
            role: "Web Developer",
            testimonial: "This platform improved my coding skills and helped me land my dream job!",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
        },
        {
            name: "John Smith",
            role: "Data Scientist",
            testimonial: "The courses are very comprehensive, and the instructors are top-notch. Highly recommend it!",
            avatar: "https://via.placeholder.com/150",
            rating: 4,
        },
        {
            name: "Emily Johnson",
            role: "Digital Marketer",
            testimonial: "Amazing content and great community. It keeps me updated with the latest marketing trends.",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
        },
        {
            name: "Michael Brown",
            role: "Software Engineer",
            testimonial: "A must-have for anyone looking to upskill! The practical exercises were really helpful.",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
        },
    ];

    return (
        <motion.div
            className="p-8 bg-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>

            {/* Animated Testimonials Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <TestimonialCard {...testimonial} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Additional Details Section */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-2xl font-semibold mb-4">Our Students’ Achievements</h3>
                <div className="flex flex-wrap justify-center gap-8">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h4 className="text-xl font-bold text-primary">95%</h4>
                        <p className="text-gray-600">Course Completion Rate</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h4 className="text-xl font-bold text-primary">50K+</h4>
                        <p className="text-gray-600">Students Enrolled</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h4 className="text-xl font-bold text-primary">4.8/5</h4>
                        <p className="text-gray-600">Average Rating</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TestimonialsSection;
