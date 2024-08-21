import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMobileAlt, FaCertificate, FaInfinity, FaDownload, FaMoneyBillWave } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const CourseDetailsPage = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const { state } = useLocation();

    // Ensure state contains course data
    if (!state || !state.course) {
        return <div className="p-6 text-center text-red-500">No course data available.</div>;
    }

    const {
        thumbnail,
        title,
        description,
        price,
        duration,
        level,
        creator,
        createdDate,
        totalLessons,
        reviews
    } = state.course;

    // Dummy reviews if not provided
    const dummyReviews = [
        {
            id: 1,
            user: "Alice Johnson",
            rating: 5,
            comment: "This course was fantastic! It covered everything I needed to know and more. Highly recommend!",
            date: "2024-08-10"
        },
        {
            id: 2,
            user: "Bob Smith",
            rating: 4,
            comment: "Great course, but the pace was a bit fast. Overall, very informative and useful.",
            date: "2024-08-12"
        },
        {
            id: 3,
            user: "Carol White",
            rating: 3,
            comment: "The content was good, but I expected more hands-on examples. Good for beginners though.",
            date: "2024-08-15"
        }
    ];

    // Fallback to dummy reviews if not provided in state
    const reviewList = reviews || dummyReviews;

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg flex">
                {/* Main Content */}
                <div className="flex-1 p-8">
                    <div className="relative">
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-80 rounded-md object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 flex items-end p-6">
                            <h1 className="text-4xl font-bold text-white">{title}</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="flex space-x-2 w-full border-b mb-6">
                            {["overview", "description", "reviews"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-3 px-6 rounded-t-lg ${
                                        activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div>
                            {activeTab === "overview" && (
                                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
                                    <div className="space-y-3">
                                        <p className="text-gray-700"><strong>Description:</strong> {description}</p>
                                        <p className="text-gray-700"><strong>Duration:</strong> {duration}</p>
                                        <p className="text-gray-700"><strong>Level:</strong> {level}</p>
                                        <p className="text-gray-700"><strong>Created By:</strong> {creator}</p>
                                        <p className="text-gray-700"><strong>Created Date:</strong> {createdDate}</p>
                                        <p className="text-gray-700"><strong>Total Lessons:</strong> {totalLessons}</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === "description" && (
                                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                                    <p className="text-gray-700">{description}</p>
                                </div>
                            )}
                            {activeTab === "reviews" && (
                                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                                    <div className="space-y-4">
                                        {reviewList.map((review) => (
                                            <div key={review.id} className="p-4 border rounded-md bg-white">
                                                <p className="font-semibold">{review.user}</p>
                                                <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                                                <p className="text-gray-700">{review.comment}</p>
                                                <p className="text-gray-500 text-sm">{review.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-80 h-full bg-gray-200 p-6 rounded-xl shadow-lg center  ml-4 mt-20 mr-4">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-32 object-cover rounded-md"
                    />
                    <p className="text-2xl font-semibold text-gray-800">{price}</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                        Buy Now
                    </button>

                    <div className="bg-gray-100 rounded-xl mt-6">
                        <h2 className="text-xl font-semibold mb-2 pl-2">Course Includes</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-gray-700 border-b border-gray-300 pl-2">
                                <FaMobileAlt className="text-blue-600" />
                                <span>Access on all devices</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700 border-b border-gray-300 pl-2">
                                <FaCertificate className="text-blue-600" />
                                <span>Certification on completion</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700 border-b border-gray-300 pl-2">
                                <FaInfinity className="text-blue-600" />
                                <span>Lifetime access</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700 border-b border-gray-300 pl-2">
                                <FaDownload className="text-blue-600" />
                                <span>Downloadable resources</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700 pl-2 ">
                                <FaMoneyBillWave className="text-blue-600" />
                                <span>30-day money-back guarantee</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-2 rounded-xl mt-6">
                        <h2 className="text-lg font-semibold">Share This Course</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                                <FaLinkedinIn size={18} />
                            </a>
                            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
