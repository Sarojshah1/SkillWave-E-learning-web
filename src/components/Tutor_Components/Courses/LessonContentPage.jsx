import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const LessonContentPage = () => {
  const { lessonId } = useParams();
  const location = useLocation();
  const lessons = location.state?.lessons || [];
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return <p>Lesson not found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-700">{lesson.content}</p>
      {/* Add additional content or video player here */}
    </div>
  );
};

export default LessonContentPage;
