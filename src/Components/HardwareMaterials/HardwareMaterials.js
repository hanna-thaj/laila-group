import React from 'react';
import './HardwareMaterials.css'; // Import the CSS file

const HardwareMaterials = () => {
  return (
    <div className="hardware-container">
      <h1 className="hardware-heading">Hardware Materials</h1>
      <p className="hardware-description">
        Discover a comprehensive selection of durable hardware tools, equipment, and construction supplies tailored to meet your project needs.
      </p>
      <div className="hardware-grid">
        <div className="hardware-card">
          <img
            src="https://i.postimg.cc/3rnnDRyx/construction-hammer-indoors-still-life-23-2150563176.avif"
            alt="Tools"
            className="hardware-image"
          />
          <h3 className="hardware-card-title">Tools</h3>
          <p className="hardware-card-description">
            A variety of high-quality tools for all your construction and DIY projects.
          </p>
        </div>
        <div className="hardware-card">
          <img
            src="https://i.postimg.cc/pLpWtpjh/tools-table-144627-8671.avif"
            alt="Construction Supplies"
            className="hardware-image"
          />
          <h3 className="hardware-card-title">Construction Supplies</h3>
          <p className="hardware-card-description">
            Reliable materials for residential and industrial construction.
          </p>
        </div>
        <div className="hardware-card">
          <img
            src="https://i.postimg.cc/Ghp8H3Yr/360-F-479304103-TQMTuk-ZPm-Sl9-PMm-Oitkq-U9-AC63fd4-Y0-P.jpg"
            alt="Electrical Supplies"
            className="hardware-image"
          />
          <h3 className="hardware-card-title">Electrical Supplies</h3>
          <p className="hardware-card-description">
            Comprehensive electrical components for efficient installations.
          </p>
        </div>
        <div className="hardware-card">
          <img
            src="https://i.postimg.cc/nr1nkmDr/plumbing-tools-128406-766.avif"
            alt="Plumbing Materials"
            className="hardware-image"
          />
          <h3 className="hardware-card-title">Plumbing Materials</h3>
          <p className="hardware-card-description">
            Durable plumbing materials for all your water system needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HardwareMaterials;
