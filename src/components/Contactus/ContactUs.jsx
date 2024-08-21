import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUsPage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-75"></div>
                    <div className="relative z-10 text-center text-white py-16 px-6">
                        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
                        <p className="text-xl mb-8">We'd Love to Hear From You!</p>
                    </div>
                </div>

                {/* Contact Details Section */}
                <div className="p-8 bg-gray-50">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Get in Touch</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-3xl text-blue-600 mr-4"/>
                                <p className="text-gray-700 text-lg">1234 Learning Lane, Education City, ED 56789</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaPhone className="text-3xl text-blue-600 mr-4"/>
                                <p className="text-gray-700 text-lg">+1 (234) 567-8901</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-3xl text-blue-600 mr-4"/>
                                <p className="text-gray-700 text-lg">support@skillwave.com</p>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold mb-4 text-blue-600">Follow Us</h3>
                            <div className="flex justify-center gap-6">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                                    <FaFacebook className="text-3xl"/>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
                                    <FaTwitter className="text-3xl"/>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">
                                    <FaLinkedin className="text-3xl"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    );
};

export default ContactUsPage;
