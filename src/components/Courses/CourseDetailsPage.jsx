import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMobileAlt, FaCertificate, FaInfinity, FaDownload, FaMoneyBillWave } from 'react-icons/fa';
import { useLocation,useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseDetailsPage = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const { state } = useLocation();
    const navigate = useNavigate();

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

    const [reviewList, setReviewList] = useState(state?.course?.reviews || dummyReviews); // Initialize with state or dummy reviews
    const [newReview, setNewReview] = useState({ comment: "", rating: 0 });
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

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
    } = state.course;

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReviewData = {
            id: reviewList.length + 1,
            user: "Anonymous", // or handle user name if available
            rating: rating,
            comment: newReview.comment,
            date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
        };
        setReviewList([...reviewList, newReviewData]);
        setNewReview({ comment: "", rating: 0 }); // Reset form
        setRating(0);
    };

    const handleBuyNow = () => {
        navigate('/payments', { state: { course: state.course } });
    };
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row">
                {/* Main Content */}
                <div className="flex-1 p-8">
                    <div className="relative">
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-80 rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 flex items-end p-6">
                            <h1 className="text-4xl font-bold text-white">{title}</h1>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex space-x-2 mb-6">
                            {["overview", "description", "reviews"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-3 px-6 rounded-t-lg text-lg font-semibold transition-colors ${
                                        activeTab === tab ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className={`bg-white rounded-2xl shadow-md p-6 ${activeTab === 'reviews' ? 'mb-12' : 'mb-8'}`}>
                            {activeTab === "overview" && (
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
                                    <div className="space-y-2 text-gray-800">
                                        <p><strong>Description:</strong> {description}</p>
                                        <p><strong>Duration:</strong> {duration}</p>
                                        <p><strong>Level:</strong> {level}</p>
                                        <p><strong>Created By:</strong> {creator}</p>
                                        <p><strong>Created Date:</strong> {createdDate}</p>
                                        <p><strong>Total Lessons:</strong> {totalLessons}</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === "description" && (
                                <div className="text-gray-800">
                                    <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                                    <p>{description}</p>
                                </div>
                            )}
                            {activeTab === "reviews" && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                                    <div className="space-y-4 mb-6">
                                        {reviewList.map((review) => (
                                            <div key={review.id} className="p-4 border rounded-lg bg-white shadow-sm">
                                                <p className="font-semibold">{review.user}</p>
                                                <div className="text-yellow-500 flex space-x-1 mb-2">
                                                    {[...Array(5)].map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            className={`w-5 h-5 ${index < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700">{review.comment}</p>
                                                <p className="text-gray-500 text-sm">{review.date}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Review Section */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Add Your Review</h3>
                                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, index) => {
                                                    const ratingValue = index + 1;
                                                    return (
                                                        <label key={index}>
                                                            <input
                                                                type="radio"
                                                                name="rating"
                                                                className="hidden"
                                                                value={ratingValue}
                                                                onClick={() => setRating(ratingValue)}
                                                            />
                                                            <FaStar
                                                                className={`w-8 h-8 cursor-pointer transition-colors ${
                                                                    ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                                                                }`}
                                                                onMouseEnter={() => setHover(ratingValue)}
                                                                onMouseLeave={() => setHover(0)}
                                                            />
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                            <textarea
                                                placeholder="Your Review"
                                                value={newReview.comment}
                                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                required
                                                className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="5"
                                            ></textarea>
                                            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                                                Submit Review
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-80 lg:ml-6 lg:mt-8 lg:mr-4 p-6 bg-white sticky top-0 h-1/4 rounded-2xl shadow-lg ">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-40 object-cover rounded-2xl mb-4"
                    />
                    <p className="text-2xl font-semibold text-gray-800 mb-4">Npr.{price}</p>
                    <button
                     onClick={handleBuyNow}
                     className="bg-primary text-white w-full py-3 rounded-full hover:bg-primary transition duration-300 mb-4">
                        Buy Now
                    </button>

                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-4">
                        <h2 className="text-xl font-semibold mb-4">Course Includes</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-700">
                                <FaMobileAlt className="text-primary" />
                                <span>Access on all devices</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700">
                                <FaCertificate className="text-primary" />
                                <span>Certification on completion</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700">
                                <FaInfinity className="text-primary" />
                                <span>Lifetime access</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700">
                                <FaDownload className="text-primary" />
                                <span>Downloadable resources</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-700">
                                <FaMoneyBillWave className="text-primary" />
                                <span>30-day money-back guarantee</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Share Links */}
                    <div className="flex space-x-4 text-gray-600 mt-6">
                        <FaFacebookF className="w-6 h-6 hover:text-primary transition duration-300" />
                        <FaTwitter className="w-6 h-6 hover:text-primary transition duration-300" />
                        <FaLinkedinIn className="w-6 h-6 hover:text-primary transition duration-300" />
                        <FaInstagram className="w-6 h-6 hover:text-primary transition duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
