import React from 'react';
import CategoriesCard from '../../CategoriesCard/Category';

const categories = [
    {
        title: 'Web Development',
        description: 'Build websites with HTML, CSS, and JavaScript.',
        onClick: () => console.log('Web Development clicked'),
    },
    {
        title: 'Data Science',
        description: 'Analyze data and create visualizations using Python.',
        onClick: () => console.log('Data Science clicked'),
    },
    {
        title: 'Digital Marketing',
        description: 'Master SEO, SEM, and social media strategies.',
        onClick: () => console.log('Digital Marketing clicked'),
    },
    {
        title: 'Graphic Design',
        description: 'Create stunning visuals using design software.',
        onClick: () => console.log('Graphic Design clicked'),
    },
    {
        title: 'Cyber Security',
        description: 'Learn to protect systems and data from attacks.',
        onClick: () => console.log('Cyber Security clicked'),
    },
    {
        title: 'Project Management',
        description: 'Manage projects efficiently using modern methodologies.',
        onClick: () => console.log('Project Management clicked'),
    },
];

const CategoriesPage = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Explore Our Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <CategoriesCard
                        key={index}
                        title={category.title}
                        description={category.description}
                        onClick={category.onClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
