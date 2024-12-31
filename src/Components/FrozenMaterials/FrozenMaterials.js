import React from 'react';
import './FrozenMaterials.css'; // Import the CSS file

const FrozenMaterials = () => {
  return (
    <div className="frozen-container">
      <h1 className="frozen-heading">Frozen Goods</h1>
      <p className="frozen-description">
        Explore our wide range of premium frozen products, including meats, seafood, vegetables, and ready-to-eat items. Quality and freshness are guaranteed!
      </p>
      <div className="frozen-grid">
        <div className="frozen-card">
          <img
            src="https://i.postimg.cc/9ffqKGP6/istockphoto-519722065-612x612.jpg"
            alt="Frozen Meat"
            className="frozen-image"
          />
          <h3 className="frozen-card-title">Frozen Meats</h3>
          <p className="frozen-card-description">
            High-quality frozen meats sourced from trusted suppliers.
          </p>
        </div>
        <div className="frozen-card">
          <img
            src="https://i.postimg.cc/K8SkG6PD/istockphoto-520490716-612x612.jpg"
            alt="Seafood"
            className="frozen-image"
          />
          <h3 className="frozen-card-title">Seafood</h3>
          <p className="frozen-card-description">
            Fresh and flavorful frozen seafood for every recipe.
          </p>
        </div>
        <div className="frozen-card">
          <img
            src="https://i.postimg.cc/C1HJ7CwW/download.jpg"
            alt="Vegetables"
            className="frozen-image"
          />
          <h3 className="frozen-card-title">Vegetables</h3>
          <p className="frozen-card-description">
            Nutritious frozen vegetables picked at their peak.
          </p>
        </div>
        <div className="frozen-card">
          <img
            src="https://i.postimg.cc/43pYHB5R/download-1.jpg"
            alt="Ready-to-Eat"
            className="frozen-image"
          />
          <h3 className="frozen-card-title">Ready-to-Eat</h3>
          <p className="frozen-card-description">
            Convenient frozen meals for busy lifestyles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrozenMaterials;
