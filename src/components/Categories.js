import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Category 1', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' },
  { name: 'Category 2', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_3X3._SY116_CB602731451_.jpg' },
  { name: 'Category 3', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_1X1._SY116_CB602731451_.jpg' },
  { name: 'Category 4', image: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg' },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2>Top Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
