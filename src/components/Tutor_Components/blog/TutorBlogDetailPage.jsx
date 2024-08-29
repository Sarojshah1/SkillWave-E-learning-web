import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCalendarDay, FaTags, FaUser, FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const TutorBlogDetailPage = () => {
    const { state } = useLocation();
    const { title, date, tags, content, creatorName } = state || {};
    const [numPages, setNumPages] = useState(null);

    if (!state) {
        return <div className="p-8 bg-gray-100 min-h-screen">No blog data available.</div>;
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{title}</h1>
                    <div className="flex items-center text-gray-500 text-sm mb-8">
                        <FaCalendarDay className="mr-2" />
                        <span>{date}</span>
                        <span className="mx-4">•</span>
                        <FaUser className="mr-2" />
                        <span>{creatorName}</span>
                        <span className="mx-4">•</span>
                        <span>Reading time: 5 min</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-10">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-700 text-xs py-1 px-3 rounded-full border border-blue-200">
                                <FaTags className="mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="prose lg:prose-xl text-gray-800 mb-10">
                        {content && (
                            <iframe src={`http://localhost:3000/uploads/pdfs/${content}`} className="w-full h-[800px] border rounded-lg shadow" title="PDF Viewer" />
                        )}
                    </div>
                    <div className="flex items-center justify-between text-gray-600 mb-8">
                        <div className="flex items-center">
                            <FaThumbsUp className="mr-2 text-gray-500" />
                            <span>120 Likes</span>
                        </div>
                        <div className="flex items-center">
                            <FaCommentDots className="mr-2 text-gray-500" />
                            <span>45 Comments</span>
                        </div>
                    </div>
                    <div className="text-gray-600 mb-10">
                        <h2 className="text-3xl font-semibold mb-6">Share this Post</h2>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow">
                                Share on Facebook
                            </button>
                            <button className="bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-colors shadow">
                                Share on Twitter
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl mb-10 shadow">
                        <h2 className="text-2xl font-semibold mb-6">About the Author</h2>
                        <div className="flex items-center">
                            <FaUser className="mr-4 text-gray-500 text-4xl" />
                            <div>
                                <p className="font-bold text-lg">{creatorName}</p>
                                <p>John is a web developer with over 10 years of experience in the industry. He specializes in frontend technologies and enjoys writing about the latest trends in web development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl mb-10 shadow">
                        <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
                        <ul className="list-disc pl-5 space-y-4 text-blue-600">
                            <li>
                                <a href="#" className="hover:underline">Understanding React Hooks</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">A Guide to Node.js for Beginners</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Best Practices for Writing Clean Code</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl mb-10 shadow">
                        <h2 className="text-2xl font-semibold mb-6">Leave a Comment</h2>
                        <form>
                            <textarea
                                className="w-full p-4 border border-gray-300 rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="5"
                                placeholder="Write your comment here..."
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow"
                            >
                                Submit Comment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorBlogDetailPage;
