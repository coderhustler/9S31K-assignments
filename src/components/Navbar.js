import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Flipkart Plus</div>
        <input type="text" className="search-bar" placeholder="Search for Products, Brands and More" />
        <div className="right-section">
          <button className="login-btn">Login</button>
          <span className="cart">Cart</span>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>Grocery</li>
          <li>Mobiles</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Home & Furniture</li>
          <li>Appliances</li>
          <li>Travel</li>
          <li>Beauty, Toys & More</li>
          <li>Two Wheelers</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
