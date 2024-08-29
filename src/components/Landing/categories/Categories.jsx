import React, { useState, useEffect } from 'react';
import CategoriesCard from '../../CategoriesCard/Category';
import axios from 'axios';


const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/category'); // Adjust the endpoint as needed
                console.log(response)
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Explore Our Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <CategoriesCard
                        key={index}
                        title={category.name}
                        icon={category.icon}
                        description={category.description}
                        onClick={category.onClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
