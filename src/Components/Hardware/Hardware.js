
import React from 'react';
import './Hardware.css'; // Create a CSS file for styling

const Hardware = () => {
  return (
    <div className="hardware-container">
      <h2 className="hardware-heading">Hardware Materials</h2>
      <p className="hardware-description">
        Welcome to our hardware materials section. We provide a comprehensive range of tools, equipment, and construction supplies to meet the needs of both professionals and DIY enthusiasts. Explore our catalog for products designed to ensure precision, efficiency, and durability.
      </p>
      <ul className="hardware-list">
        <li>Construction Tools</li>
        <li>Industrial Hardware</li>
        <li>Electrical Supplies</li>
        <li>Plumbing Materials</li>
        <li>Painting Accessories</li>
        <li>Fasteners and Fixtures</li>
      </ul>
      <p>
        Visit our store or contact us to learn more about how we can assist with your projects!
      </p>
    </div>
  );
};

export default Hardware;
