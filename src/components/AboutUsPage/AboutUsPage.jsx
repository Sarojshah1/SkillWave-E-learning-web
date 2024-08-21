import React from 'react';
import { FaUserFriends, FaLightbulb, FaStar, FaQuoteLeft, FaTrophy, FaEnvelope } from 'react-icons/fa';

const AboutUsPage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-75"></div>
                    <div className="relative z-10 text-center text-white py-16 px-6">
                        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
                        <p className="text-xl mb-8">Empowering Learners for a Brighter Future</p>
                        <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors">Get Started</a>
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <div className="p-8 bg-gray-50">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Mission & Vision</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-3xl font-semibold mb-4 text-blue-600 flex items-center">
                                <FaLightbulb className="text-4xl mr-2" />
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to provide high-quality, accessible education that empowers individuals to achieve their goals and excel in their careers. We are committed to delivering innovative learning experiences that are engaging, practical, and impactful.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-3xl font-semibold mb-4 text-blue-600 flex items-center">
                                <FaStar className="text-4xl mr-2" />
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We envision a world where education is a bridge to success for everyone. Our platform aims to become a global leader in e-learning, fostering a community of learners who are motivated, knowledgeable, and equipped to make a difference.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-gray-100 p-8">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                            <img src="https://via.placeholder.com/150" alt="Jane Doe" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"/>
                            <h3 className="text-2xl font-semibold mb-2">Jane Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                            <p className="mt-2">
                                Jane is a visionary leader with a passion for education and technology. She is dedicated to creating an inclusive learning environment that empowers students worldwide.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                            <img src="https://via.placeholder.com/150" alt="John Smith" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"/>
                            <h3 className="text-2xl font-semibold mb-2">John Smith</h3>
                            <p className="text-gray-600">CTO</p>
                            <p className="mt-2">
                                John is a tech enthusiast with expertise in e-learning solutions. He drives innovation to enhance our platform's functionality and user experience.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                            <img src="https://via.placeholder.com/150" alt="Emily Johnson" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"/>
                            <h3 className="text-2xl font-semibold mb-2">Emily Johnson</h3>
                            <p className="text-gray-600">Content Manager</p>
                            <p className="mt-2">
                                Emily curates and creates engaging content that resonates with learners. Her goal is to ensure that our educational materials are relevant, up-to-date, and impactful.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="p-8 bg-gray-50">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">What Our Users Say</h2>
                    <div className="flex flex-wrap gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-auto">
                            <FaQuoteLeft className="text-4xl text-blue-600 mb-4"/>
                            <p className="text-gray-700 mb-4">
                                "This platform has transformed the way I learn. The courses are well-structured and engaging. Highly recommended!"
                            </p>
                            <p className="font-semibold text-gray-800">Alex Johnson</p>
                            <p className="text-gray-600">Software Developer</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-auto">
                            <FaQuoteLeft className="text-4xl text-blue-600 mb-4"/>
                            <p className="text-gray-700 mb-4">
                                "An exceptional e-learning experience! The interactive content and expert instructors make learning enjoyable and effective."
                            </p>
                            <p className="font-semibold text-gray-800">Sarah Lee</p>
                            <p className="text-gray-600">Marketing Specialist</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-auto">
                            <FaQuoteLeft className="text-4xl text-blue-600 mb-4"/>
                            <p className="text-gray-700 mb-4">
                                "The platform offers a variety of courses that cater to different learning styles. The support team is also very helpful."
                            </p>
                            <p className="font-semibold text-gray-800">Michael Brown</p>
                            <p className="text-gray-600">Graphic Designer</p>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="p-8 bg-white">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Achievements</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
                            <FaTrophy className="text-5xl mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">500+ Courses</h3>
                            <p>We offer a diverse range of over 500 high-quality courses across various domains.</p>
                        </div>
                        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
                            <FaTrophy className="text-5xl mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">100K+ Users</h3>
                            <p>Our platform is trusted by over 100,000 learners around the world.</p>
                        </div>
                        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
                            <FaTrophy className="text-5xl mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">Award-Winning</h3>
                            <p>Recognized for excellence in e-learning with multiple industry awards.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="p-8 bg-gray-100">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-semibold mb-4">How can I get started?</h3>
                            <p className="text-gray-700">Getting started is easy! Click on the "Get Started" button at the top of the page, sign up, and explore our wide range of courses.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-semibold mb-4">What is the cost of the courses?</h3>
                            <p className="text-gray-700">We offer both free and paid courses. You can find detailed pricing information on each course page.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-semibold mb-4">How do I contact support?</h3>
                            <p className="text-gray-700">You can reach out to our support team through the "Contact Us" page or email us directly at support@skillwave.com.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-600 text-white text-center py-16 px-6 mt-12">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg mb-6">
                        Have any questions or feedback? We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.
                    </p>
                    <a href="/contactus" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">Contact Us</a>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-600 text-white text-center py-16 px-6 mt-12">
                    <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
                    <p className="text-lg mb-6">
                        Are you ready to be part of our mission to revolutionize education? Join us today and start your learning adventure with our cutting-edge platform.
                    </p>
                    <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
