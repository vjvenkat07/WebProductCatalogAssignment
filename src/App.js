import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import SortBar from './components/SortBar';
import PriceFilter from './components/PriceFilter';
import { fetchCategories, fetchAllProducts, fetchProductsByCategory } from './services/requests';
import './index.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    fetchCategories().then(setCategories);
    getAllProducts()
  }, []);

  const getAllProducts = () => {
    fetchAllProducts().then(data => {
      setProducts(data.sort((a, b) => a.price - b.price));
      setFilteredProducts(data);
    });
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (category === 'all') {
      getAllProducts()
    } else {
      fetchProductsByCategory(category).then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
    }
    setPriceRange([0, 1000]);

  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    const filtered = products.filter(p => p.price >= min && p.price <= max);
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="app-container d-flex">
      <Sidebar categories={categories} active={activeCategory} onSelect={handleCategoryClick} />
      <main className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between mb-4 flex-wrap">
          <SortBar products={filteredProducts} setProducts={setFilteredProducts} category={activeCategory} />
          <PriceFilter onChange={handlePriceChange} priceRange={priceRange} />
        </div>
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default App;
