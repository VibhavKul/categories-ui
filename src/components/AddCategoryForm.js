// AddCategoryForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://vibhavkulshrestha.xyz:5000/api/categories', {
        CategoryName: categoryName,
        Description: description,
        CreatedDate: new Date().toISOString(),
        IsActive: true
      });
      alert('Category added successfully...!');
      // Optionally reset form fields or update state after successful submission
      setCategoryName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
