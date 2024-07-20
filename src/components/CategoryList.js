// src/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching categories...');
        const categoryResponse = await axios.get('https://vibhavkulshrestha.xyz:5000/api/categories'); // Adjust the URL based on your API endpoint
        console.log('Categories fetched:', categoryResponse.data);
        const categories = categoryResponse.data;

        console.log('Fetching products...');
        const productResponse = await axios.get('https://vibhavkulshrestha.xyz:5000/api/products'); // Adjust the URL based on your API endpoint
        console.log('Products fetched:', productResponse.data);
        const products = productResponse.data;

        const categoriesWithProducts = categories.map(category => {
          return {
            ...category,
            products: products.filter(product => product.CategoryID === category.CategoryID)
          };
        });

        console.log('Categories with Products:', categoriesWithProducts); // Debug log
        setCategories(categoriesWithProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (categories.length === 0) {
    return <div>No categories found.</div>;
  }

  return (
    <div>
      <h2>Category List</h2>
      <table>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {categories.slice(0, 2).map(category => (
            <tr key={category.CategoryID}>
              <td>{category.CategoryID}</td>
              <td>{category.CategoryName}</td>
              <td>
                {category.products.map(product => (
                  <div key={product.ProductID}>{product.ProductName}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
//      <Link to="/add-category">Add Category</Link>

export default CategoryList;
