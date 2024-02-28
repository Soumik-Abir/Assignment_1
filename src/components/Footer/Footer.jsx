import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaPhoneSquareAlt, FaFacebook, FaGlobe } from 'react-icons/fa'; // Import icons from react-icons library

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="red-box">
        <div className="row">
          <FaPhoneSquareAlt className="icon phone-icon" />
          <p>Toll-Free: 1-800-123-4567</p>
        </div>
        <div className="row">
          <FaFacebook className="icon" />
          <a href="https://www.facebook.com">www.facebook.com/cripumps</a>
        </div>
        <div className="row">
          <FaGlobe className="icon" />
          <a href="https://www.example.com">www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
