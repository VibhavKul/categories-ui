// CategoryDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryDetail = ({ categoryId }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get(`https://vibhavkulshrestha.xyz:5000/api/categories/${categoryId}`)
      .then(response => {
        
        setCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Category Details</h2>
      <p>
        <strong>Name:</strong> {category.CategoryName}
      </p>
      <p>
        <strong>Description:</strong> {category.Description}
      </p>
      <p>
        <strong>Created Date:</strong> {category.CreatedDate}
      </p>
      <p>
        <strong>Active:</strong> {category.IsActive ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default CategoryDetail;
