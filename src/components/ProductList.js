// // src/components/ProductList.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { getProducts } from '../api';

// const ProductList = () => {
//     const { CategoryID } = useParams();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const data = await getProducts();
//                 const filteredProducts = data.filter(product => product.CategoryID === CategoryID);
//                 setProducts(filteredProducts);
//             } catch (error) {
//                 console.error('Failed to fetch products:', error);
//             }
//         };

//         fetchProducts();
//     }, [CategoryID]);

//     return (
//         <div>
//             <h2>Product List</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.ProductID}>{product.ProductName}</li>
//                 ))}
//             </ul>
//             <Link to="/add-product">Add Product</Link>
//         </div>
//     );
// };

// export default ProductList;
