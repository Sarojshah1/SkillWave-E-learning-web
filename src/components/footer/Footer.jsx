import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS for animations

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-700 pb-8">
                    {/* Logo and Description */}
                    <div className="mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
                        <h1 className="text-4xl font-extrabold mb-2 text-primary">SkillWave</h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Empowering your learning journey with interactive and comprehensive online courses.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-2s">
                        <div className="mr-8">
                            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-primary transition duration-300">Home</a></li>
                                <li><a href="#courses" className="hover:text-primary transition duration-300">Courses</a></li>
                                <li><a href="#about" className="hover:text-primary transition duration-300">About Us</a></li>
                                <li><a href="#contact" className="hover:text-primary transition duration-300">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Support</h2>
                            <ul className="space-y-2">
                                <li><a href="#faq" className="hover:text-primary transition duration-300">FAQ</a></li>
                                <li><a href="#privacy-policy" className="hover:text-primary transition duration-300">Privacy Policy</a></li>
                                <li><a href="#terms" className="hover:text-primary transition duration-300">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-3s">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="mb-2">123 Learning Lane, Knowledge City</p>
                        <p className="mb-2">Email: <a href="mailto:support@skillwave.com" className="hover:text-primary transition duration-300">support@skillwave.com</a></p>
                        <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-primary transition duration-300">+123 456 7890</a></p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-6 animate__animated animate__fadeIn animate__delay-4s">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition duration-300 transform hover:scale-110">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700 transition duration-300 transform hover:scale-110">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600 transition duration-300 transform hover:scale-110">
                        <FaInstagram size={24} />
                    </a>
                </div>

                {/* Call to Action */}
                <div className="text-center animate__animated animate__fadeIn animate__delay-5s">
                    <p className="mb-4 text-gray-400">© 2024 SkillWave. All rights reserved.</p>
                    <a href="#join" className="bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-105">
                        Join Our Community
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
