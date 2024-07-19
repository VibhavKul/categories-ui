// CategoryList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://13.74.99.5:5000/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.CategoryID}>
            {category.CategoryName} - {category.Description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
