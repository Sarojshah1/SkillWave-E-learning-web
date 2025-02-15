import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaLightbulb, FaStar, FaQuoteLeft, FaTrophy, FaEnvelope } from 'react-icons/fa';
import profile from '../../assets/profile.png';

const AboutUsPage = () => {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Hero Section */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-75"></div>
                    <div className="relative z-10 text-center text-white py-16 px-6">
                        <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg">About Us</h1>
                        <p className="text-xl mb-8 text-shadow-md">Empowering Learners for a Brighter Future</p>
                        <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors">Get Started</a>
                    </div>
                </motion.div>

                {/* Mission and Vision Section */}
                <motion.div 
                    className="p-8 bg-gray-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Mission & Vision</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div 
                            className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-semibold mb-4 text-blue-600 flex items-center">
                                <FaLightbulb className="text-4xl mr-2" />
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to provide high-quality, accessible education that empowers individuals to achieve their goals and excel in their careers. We are committed to delivering innovative learning experiences that are engaging, practical, and impactful.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-semibold mb-4 text-blue-600 flex items-center">
                                <FaStar className="text-4xl mr-2" />
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We envision a world where education is a bridge to success for everyone. Our platform aims to become a global leader in e-learning, fostering a community of learners who are motivated, knowledgeable, and equipped to make a difference.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div 
                    className="bg-gray-100 p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <img src={profile} alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"/>
                                <h3 className="text-2xl font-semibold mb-2">Saroj kumar Sah</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                                <p className="mt-2">
                                    Saroj is a visionary leader with a passion for education and technology. He is dedicated to creating an inclusive learning environment that empowers students worldwide.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div 
                    className="p-8 bg-gray-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">What Our Users Say</h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-auto"
                                whileHover={{ scale: 1.05 }}
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <FaQuoteLeft className="text-4xl text-blue-600 mb-4"/>
                                <p className="text-gray-700 mb-4">
                                    "This platform has transformed the way I learn. The courses are well-structured and engaging. Highly recommended!"
                                </p>
                                <p className="font-semibold text-gray-800">Alex Johnson</p>
                                <p className="text-gray-600">Software Developer</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div 
                    className="p-8 bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Achievements</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center"
                                whileHover={{ scale: 1.05 }}
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <FaTrophy className="text-5xl mb-4"/>
                                <h3 className="text-2xl font-semibold mb-2">500+ Courses</h3>
                                <p>We offer a diverse range of over 500 high-quality courses across various domains.</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className="bg-blue-600 text-white text-center py-16 px-6 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg mb-6">
                        Have any questions or feedback? We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.
                    </p>
                    <a href="/contactus" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">Contact Us</a>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="bg-blue-600 text-white text-center py-16 px-6 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
                    <p className="text-lg mb-6">
                        Are you ready to be part of our mission to revolutionize education? Join us today and start your learning adventure with our cutting-edge platform.
                    </p>
                    <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">Get Started</a>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUsPage;
