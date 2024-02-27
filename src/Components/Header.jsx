// Header.js
import React from 'react';
import './mystyle.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="common-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="text-container">
          <h2 className="app-title">C.R.I FLUID SYSTEM</h2>
          <p className="app-description">Pumping trust worldwide</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
