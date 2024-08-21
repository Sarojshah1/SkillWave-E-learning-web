import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard'; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        id:1,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Web Development',
        description: 'Build websites with HTML, CSS, and JavaScript.',
        price: 'Npr.1999',
        duration: '12 weeks',
        level: 'Beginner',
        creator: 'John Doe',
    },
    {
        id:2,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Data Science',
        description: 'Analyze data and create visualizations using Python.',
        price: 'Npr.2999',
        duration: '16 weeks',
        level: 'Intermediate',
        creator: 'Jane Smith',
    },
    {
        id:3,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Digital Marketing',
        description: 'Master SEO, SEM, and social media strategies.',
        price: 'Npr.1499',
        duration: '8 weeks',
        level: 'Advanced',
        creator: 'Emily Johnson',
    },
    {
        id:4,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Graphic Design',
        description: 'Learn design principles and tools like Photoshop and Illustrator.',
        price: 'Npr.1999',
        duration: '10 weeks',
        level: 'Beginner',
        creator: 'Michael Brown',
    },
    {
        id:5,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Machine Learning',
        description: 'Explore algorithms and build models using machine learning techniques.',
        price: 'Npr.19999',
        duration: '14 weeks',
        level: 'Advanced',
        creator: 'Lisa White'
    },
    {
        id:6,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Cybersecurity',
        description: 'Understand security threats and how to protect systems.',
        price: 'Npr.1999',
        duration: '12 weeks',
        level: 'Intermediate',
        creator: 'James Wilson',
    },
    {
        id:6,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'App Development',
        description: 'Develop mobile apps for Android and iOS platforms.',
        price: 'Npr.1999',
        duration: '16 weeks',
        level: 'Intermediate',
        creator: 'Natalie Lewis',
    },
    {
        id:7,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Database Management',
        description: 'Learn to design, implement, and manage databases.',
        price: 'Npr.1999',
        duration: '10 weeks',
        level: 'Beginner',
        creator: 'David Martinez',
    },
    {
        id:8,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Cloud Computing',
        description: 'Understand cloud services and infrastructure.',
        price: 'Npr.1999',
        duration: '12 weeks',
        level: 'Intermediate',
        creator: 'Sarah Taylor',
       
    },
    {
        id:9,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Artificial Intelligence',
        description: 'Dive into AI concepts and applications.',
        price: 'Npr.1999',
        duration: '14 weeks',
        level: 'Advanced',
        creator: 'Robert Harris',
       
    },
    {
        id:10,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Game Development',
        description: 'Create and design interactive video games.',
        price: 'Npr.1999',
        duration: '16 weeks',
        level: 'Intermediate',
        creator: 'Olivia Clark',
     
    },
    {
        id:11,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Business Analysis',
        description: 'Learn to analyze business needs and create solutions.',
        price: 'Npr.1999',
        duration: '8 weeks',
        level: 'Beginner',
        creator: 'Ethan Davis',
       
    },
    {
        id:12,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Project Management',
        description: 'Master the skills needed to manage projects effectively.',
        price: 'Npr.1999',
        duration: '10 weeks',
        level: 'Intermediate',
        creator: 'Sophia Johnson',
       
    },
    {
        id:13,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'UX/UI Design',
        description: 'Understand user experience and user interface design principles.',
        price: 'Npr.19999',
        duration: '12 weeks',
        level: 'Beginner',
        creator: 'Michael Wilson',
    
    },
    {
        id:14,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Software Engineering',
        description: 'Learn software development methodologies and practices.',
        price: 'Npr.1999',
        duration: '16 weeks',
        level: 'Advanced',
        creator: 'Ava Thompson',
        
    },
    {
        id:15,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Blockchain Technology',
        description: 'Explore the fundamentals of blockchain and cryptocurrencies.',
        price: 'Npr.1999',
        duration: '12 weeks',
        level: 'Intermediate',
        creator: 'Liam Garcia',
 
    },
    {
        id:16,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'DevOps',
        description: 'Learn about DevOps practices and tools for continuous integration.',
        price: 'Npr.1999',
        duration: '14 weeks',
        level: 'Advanced',
        creator: 'Isabella Martinez',
   
    },
    {
        id:17,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Cyber Law',
        description: 'Understand the legal aspects of technology and cybersecurity.',
        price: 'Npr.1999',
        duration: '8 weeks',
        level: 'Beginner',
        creator: 'Jacob Scott',

    },
    {
        id:18,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Digital Photography',
        description: 'Learn the art of digital photography and editing.',
        price: 'Npr.19999',
        duration: '10 weeks',
        level: 'Beginner',
        creator: 'Emily Adams',

    },
    {
        id:19,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Financial Analysis',
        description: 'Gain skills in financial modeling and analysis.',
        price: 'Npr.19999',
        duration: '12 weeks',
        level: 'Intermediate',
        creator: 'Mason King',

    },
    {
        id:20,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Technical Writing',
        description: 'Master the art of writing technical documentation.',
        price: 'Npr.1999',
        duration: '8 weeks',
        level: 'Beginner',
        creator: 'Harper Bell',
   
    },
    {
        id:21,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Public Speaking',
        description: 'Improve your public speaking and presentation skills.',
        price: 'Npr.1999',
        duration: '6 weeks',
        level: 'Beginner',
        creator: 'Ella Wright',
    
    },
    {
        id:22,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Creative Writing',
        description: 'Enhance your creative writing skills and techniques.',
        price: 'Npr.19999',
        duration: '8 weeks',
        level: 'Beginner',
        creator: 'Oliver Young',

    },
    {
        id:23,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Social Media Management',
        description: 'Learn to manage and grow social media platforms.',
        price: 'Npr.19999',
        duration: '6 weeks',
        level: 'Beginner',
        creator: 'Charlotte Nelson',
  
    },
    {
        id:24,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Virtual Reality',
        description: 'Explore the world of virtual reality and its applications.',
        price: 'Npr.19999',
        duration: '14 weeks',
        level: 'Advanced',
        creator: 'Benjamin Carter',
       
    },
    {
        id:25,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Ethical Hacking',
        description: 'Learn to identify and exploit security vulnerabilities ethically.',
        price: 'Npr.19999',
        duration: '16 weeks',
        level: 'Advanced',
        creator: 'Avery Mitchell',
    },
];

const CoursePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const navigate = useNavigate();

    const handleCardClick = (courseId,course) => {
        console.log(course);
        navigate(`/course-details/${courseId}`, { state: { course } }); // Replace with your actual route
    };

    return (
        <div className="bg-gradient-to-r   min-h-screen py-4">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Discover Our Courses</h1>
                <div className="relative mb-10">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute top-5 left-4 text-gray-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <CourseCard
                                key={index}
                                thumbnail={course.thumbnail}
                                title={course.title}
                                description={course.description}
                                price={course.price}
                                duration={course.duration}
                                level={course.level}
                                creator={course.creator}
                                onClick={() => handleCardClick(course.id,course)}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600">
                            <p className="text-lg">No courses found. Try a different search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;