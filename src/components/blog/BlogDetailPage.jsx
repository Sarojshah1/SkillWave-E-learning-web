import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCalendarDay, FaTags, FaUser, FaThumbsUp, FaCommentDots, FaRegEdit } from 'react-icons/fa';

const BlogDetailPage = () => {
    const { state } = useLocation(); // Retrieve state from location
    const { title, date, tags } = state || {}; // Use default empty object to handle cases where state is undefined

    if (!state) {
        return <div className="p-8 bg-gray-100 min-h-screen">No blog data available.</div>;
    }

    const content = `
        ## Introduction
        Welcome to our blog! In this post, we will explore the fascinating world of modern web development. We will cover a range of topics including best practices, the latest technologies, and tips for success.

        ## The Rise of Frontend Frameworks
        In recent years, frontend frameworks like React, Angular, and Vue.js have become incredibly popular. These frameworks offer a structured approach to building complex user interfaces and have revolutionized how developers build web applications.

        ## Backend Technologies
        On the backend, technologies such as Node.js, Python, and Ruby on Rails continue to evolve. These technologies allow developers to build robust server-side applications that power the dynamic features of modern web applications.

        ## Best Practices
        When developing web applications, it's essential to follow best practices to ensure your application is maintainable and scalable. This includes writing clean code, using version control, and implementing automated testing.

        ## Conclusion
        As technology continues to advance, staying up-to-date with the latest trends and best practices in web development is crucial. We hope you found this overview informative and inspiring. Stay tuned for more articles and insights on web development!
        
        ## Additional Resources
        - [React Documentation](https://reactjs.org/docs/getting-started.html)
        - [Node.js Official Site](https://nodejs.org/en/)
        - [MDN Web Docs](https://developer.mozilla.org/)
    `;

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h1>
                    <div className="flex items-center text-gray-600 text-sm mb-6">
                        <FaCalendarDay className="mr-2 text-gray-500" />
                        <span>{date}</span>
                        <span className="mx-4">•</span>
                        <FaUser className="mr-2 text-gray-500" />
                        <span>John Doe</span>
                        <span className="mx-4">•</span>
                        <span>Reading time: 5 min</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-600 text-xs py-1 px-2 rounded-full border border-blue-300">
                                <FaTags className="mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="prose lg:prose-xl text-gray-700 mb-8">
                        <p>{content}</p>
                    </div>
                    <div className="flex items-center justify-between text-gray-600 mb-6">
                        <div className="flex items-center">
                            <FaThumbsUp className="mr-2 text-gray-500" />
                            <span>120 Likes</span>
                        </div>
                        <div className="flex items-center">
                            <FaCommentDots className="mr-2 text-gray-500" />
                            <span>45 Comments</span>
                        </div>
                    </div>
                    <div className="text-gray-600 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Share this Post</h2>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Share on Facebook</button>
                            <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors">Share on Twitter</button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4">About the Author</h2>
                        <div className="flex items-center">
                            <FaUser className="mr-4 text-gray-500" />
                            <div>
                                <p className="font-bold">John Doe</p>
                                <p>John is a web developer with over 10 years of experience in the industry. He specializes in frontend technologies and enjoys writing about the latest trends in web development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <a href="#" className="text-blue-600 hover:underline">Understanding React Hooks</a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-600 hover:underline">A Guide to Node.js for Beginners</a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-600 hover:underline">Best Practices for Writing Clean Code</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
                        <form>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                                rows="4"
                                placeholder="Write your comment here..."
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
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

export default BlogDetailPage;
