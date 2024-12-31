import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="about-container">
      <div className="about-section">
        <h2 className="about-heading">About Us</h2>
        <p className="about-description">
          Welcome to <strong>Laila International Trading</strong>, your trusted partner in delivering top-quality hardware materials and frozen goods to meet diverse industrial and household needs.
        </p>

        <h3 className="sub-heading">Our Specializations</h3>
        <div className="specializations-list">
          <div className="specialization">
            <h4>Hardware Materials</h4>
            <p>
              Our hardware division provides a wide range of durable and reliable materials, including tools, equipment, and construction supplies. Whether you're working on a large-scale project or a small DIY task, our products are designed to ensure precision, efficiency, and long-lasting performance.
            </p>
            {/* Button to Navigate to Hardware Page */}
            <Link to={'/hardware-materials'}>
              <button
                className="specialization-button"
                onClick={() => navigate('/hardware')}
              >
                Explore Hardware
              </button>
            </Link>
          </div>
          <div className="specialization">
            <h4>Frozen Materials</h4>
            <p>
              From premium frozen meats and seafood to a variety of frozen vegetables and ready-to-eat products, our frozen materials section guarantees freshness and quality. We prioritize proper storage and handling to deliver goods that retain their original taste and nutritional value.
            </p>
            <Link to={'/frozen-materials'}>
              <button
                className="specialization-button"
                onClick={() => navigate('/frozen')}
              >
                Explore Frozen Goods
              </button>
            </Link>
          </div>
        </div>

        <h3 className="sub-heading">Why Choose Us?</h3>
        <ul className="why-choose-list">
          <li><strong>Quality Assurance:</strong> Every product in our inventory is sourced from reputable suppliers and undergoes strict quality checks.</li>
          <li><strong>Customer-Centric Approach:</strong> We are committed to understanding and fulfilling our customers' unique requirements with tailored solutions.</li>
          <li><strong>Timely Delivery:</strong> With a robust logistics network, we ensure timely and efficient delivery of our products to your doorstep.</li>
          <li><strong>Affordable Pricing:</strong> Competitive rates without compromising on quality, ensuring you get the best value for your money.</li>
        </ul>

        <h3 className="sub-heading">Our Mission</h3>
        <p className="about-mission">
          Our mission is to be a one-stop destination for superior hardware materials and frozen goods, building long-lasting relationships with our customers based on trust, quality, and reliability.
        </p>
      </div>

      {/* New Section: Our Trusted Partners */}
      <div className="partners-section">
        <h3 className="sub-heading">Our Trusted Partners</h3>
        <div className="partners-grid">
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/CMCg5ftk/images-2.webp"
              alt="Partner 1"
              className="partner-logo"
            />
          </div>
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/G3g4MVLX/weber.webp"
              alt="Partner 2"
              className="partner-logo"
            />
          </div>
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/g285t9WR/legrand.webp"
              alt="Partner 3"
              className="partner-logo"
            />
          </div>
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/pr8jKJwf/download-1.jpg"
              alt="Partner 4"
              className="partner-logo"
            />
          </div>
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/5NQ34wjS/download.png"
              alt="Partner 5"
              className="partner-logo"
            />
          </div>
          <div className="partner-card">
            <img
              src="https://i.postimg.cc/8z7WTD5J/bosch.webp"
              alt="Partner 6"
              className="partner-logo"
            />
          </div>
          {/* Add more partner cards as needed */}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <h3 className="contact-heading">Contact Us</h3>
        <div className="locations-list">
          <div className="location-card">
            <h4>Ajman Free Zone, UAE</h4>
            <p><strong>Phone:</strong> +97126769009, +97125504283</p>
            <p><strong>Email:</strong> sales.lailagroup@gmail.com</p>
          </div>
          <div className="location-card">
            <h4>Musaffah, M-45, Abu Dhabi, UAE</h4>
            <p><strong>Phone:</strong> 0526996607</p>
            <p><strong>Email:</strong> lailafze@gmail.com</p>
          </div>
          <div className="location-card">
            <h4>Yasmeen, Helio, Bldg No.22, Ajman, UAE</h4>
            <p><strong>Phone:</strong> +97167044291, +971588262965</p>
            <p><strong>Email:</strong> info@lailagroup.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
