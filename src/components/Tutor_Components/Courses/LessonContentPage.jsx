import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const LessonContentPage = () => {
  const { lessonId } = useParams();
  const location = useLocation();
  const lessons = location.state?.lessons || [];
  const lesson = lessons.find(l => l._id === lessonId);
  console.log(lessons);

  if (!lesson) {
    return <p className="text-center text-red-500 text-xl">Lesson not found.</p>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">{lesson.title}</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lesson Content</h2>
          {lesson.video_url && (
            <div className="mb-6">
              <a
                href={lesson.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-lg font-medium"
              >
                Watch Video
              </a>
            </div>
          )}
          {lesson.content && (
            <div className="relative w-full h-[600px]">
              <iframe
                src={`http://localhost:3000/uploads/pdfs/${lesson.content}`}
                title="Lesson PDF"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonContentPage;
