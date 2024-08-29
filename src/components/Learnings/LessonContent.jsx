import React from 'react';

const LessonContent = ({ lesson, getYouTubeVideoId }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-t-lg flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-extrabold">{lesson?.title || 'Select a Lesson'}</h1>
                {lesson?.video_url && (
                    <a
                        href={lesson.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                    >
                        <span className="font-semibold text-lg">Watch Video</span>
                    </a>
                )}
            </div>

            <div className="p-4">
                {lesson && (
                    <>
                    {lesson.content && (
            <div className="relative w-full h-[600px]">
              <iframe
                src={`http://localhost:3000/uploads/pdfs/${lesson.content}`}
                title="Lesson PDF"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
              ></iframe>
            </div>
          )}
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
