// src/components/CategoryDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../api';

const CategoryDetail = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const data = await getCategoryById(id);
                setCategory(data);
            } catch (error) {
                console.error('Failed to fetch category:', error);
            }
        };

        fetchCategory();
    }, [id]);

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Category Detail</h2>
            <p>ID: {category.CategoryID}</p>
            <p>Name: {category.CategoryName}</p>
        </div>
    );
};

export default CategoryDetail;
