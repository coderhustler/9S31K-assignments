import React from 'react';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Categories from './components/Categories.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
