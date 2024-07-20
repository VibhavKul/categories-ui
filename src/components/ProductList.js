// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://vibhavkulshrestha.xyz:5000/api/categories/${categoryId}/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [categoryId]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.ProductID}>
            {product.ProductName} - ${product.Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
