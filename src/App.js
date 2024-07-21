// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import ProductList from './components/ProductList';
import AddCategoryForm from './components/AddCategoryForm';
import AddProductForm from './components/AddProductForm';
import './App.css';  // Import the CSS file


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header centered-header">
          <h1>Categories and Products Management</h1>
          <h2>(A Product by Vibhav's Corporation!)</h2>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/products/:categoryId" element={<ProductList />} />
            <Route path="/add-category" element={<AddCategoryForm />} />
            <Route path="/add-product" element={<AddProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
