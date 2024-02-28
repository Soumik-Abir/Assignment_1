import React from 'react';
import header from "../../assets/logo.png";
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img src={header} className="centered-image" alt="Logo" />
    </div>
  );
};

export default Header;
