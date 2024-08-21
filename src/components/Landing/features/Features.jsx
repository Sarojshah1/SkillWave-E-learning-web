import React from 'react';
import { FaChalkboardTeacher, FaRegClock, FaRegThumbsUp, FaRegStar } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Features We Offer</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the features that make our e-learning platform unique and effective in empowering your learning journey.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-primary mb-4">
                            <FaChalkboardTeacher size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Instructors</h3>
                        <p className="text-gray-600">
                            Learn from experienced professionals who are experts in their fields.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-primary mb-4">
                            <FaRegClock size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Learning</h3>
                        <p className="text-gray-600">
                            Access courses anytime, anywhere, and learn at your own pace.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-primary mb-4">
                            <FaRegThumbsUp size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Interactive Content</h3>
                        <p className="text-gray-600">
                            Engage with interactive and multimedia content to enhance learning.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-primary mb-4">
                            <FaRegStar size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Certifications</h3>
                        <p className="text-gray-600">
                            Earn certificates upon course completion to showcase your skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
