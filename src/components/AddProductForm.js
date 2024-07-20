// // AddProductForm.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProductForm = () => {
//   const [productName, setProductName] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://vibhavkulshrestha.xyz:5000/api/products', {
//         ProductName: productName,
//         CategoryID: categoryId,
//         Price: parseFloat(price),
//         Quantity: parseInt(quantity, 10)
//       });
//       alert('Product added successfully!');
//       // Optionally reset form fields or update state after successful submission
//       setProductName('');
//       setCategoryId('');
//       setPrice('');
//       setQuantity('');
//     } catch (error) {
//       console.error('Error adding product:', error);
//       alert('Error adding product. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Product Name:
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Category ID:
//           <input
//             type="text"
//             value={categoryId}
//             onChange={(e) => setCategoryId(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input
//             type="text"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Quantity:
//           <input
//             type="text"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
