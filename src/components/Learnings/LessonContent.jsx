import React from 'react';

const LessonContent = ({ lesson, getYouTubeVideoId }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-t-lg flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-extrabold">{lesson?.title || 'Select a Lesson'}</h1>
                {lesson?.videoUrl && (
                    <a
                        href={lesson.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                    >
                        <span className="font-semibold text-lg">Watch Video</span>
                    </a>
                )}
            </div>

            {lesson?.videoUrl && (
                <div className="relative mb-6 mt-4">
                    <iframe
                        className="w-full h-64 md:h-96 rounded-lg shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(lesson.videoUrl)}`}
                        title="Lesson Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            <div className="p-4">
                {lesson && (
                    <>
                        <p className="text-gray-800 mt-4 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
                            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Key Takeaways</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Understand the core concepts of <strong>{lesson.title}</strong></li>
                                <li>Apply best practices in <strong>{lesson.title}</strong></li>
                                <li>Practice with real-world examples and exercises</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LessonContent;
