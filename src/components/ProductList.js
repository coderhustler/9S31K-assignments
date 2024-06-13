import React from 'react';
import './ProductList.css';

const products = [
  { name: 'Product 1', price: '₹1000', image: 'https://images-eu.ssl-images-amazon.com/images/I/81iss3ldpLL._AC_UL165_SR165,165_.jpg' },
  { name: 'Product 2', price: '₹2000', image: 'https://m.media-amazon.com/images/I/710Ci0F2WQL._AC_SY175_.jpg' },
  { name: 'Product 3', price: '₹3000', image: 'https://m.media-amazon.com/images/I/51fFgtFBshL._AC_SY145_.jpg' },
  { name: 'Product 4', price: '₹4000', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg' },
];

const ProductList = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
