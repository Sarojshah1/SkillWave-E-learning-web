import React from 'react';

const Success = () => {
    return (
        <div className="text-center py-12 px-4 bg-gray-100">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Our Success</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Empowering students with knowledge and skills through interactive learning. Discover our achievements and milestones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-primary mb-2">15K+</span>
                    <span className="text-gray-500 text-lg">Students</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-primary mb-2">75%</span>
                    <span className="text-gray-500 text-lg">Total Success</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-primary mb-2">35</span>
                    <span className="text-gray-500 text-lg">Main Questions</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-primary mb-2">26</span>
                    <span className="text-gray-500 text-lg">Chief Experts</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-5xl font-bold text-primary mb-2">16</span>
                    <span className="text-gray-500 text-lg">Years of Experience</span>
                </div>
            </div>
        </div>
    );
};

export default Success;
