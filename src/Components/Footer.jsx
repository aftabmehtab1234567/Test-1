// Footer.js
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import './mystyle.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer>
      <div className='line'></div>
      <div className="footer-section">
        <h1>C.R.I FLUID SYSTEM PRODUCT TO CATTER DIVERT SEGMENTS</h1>
      </div>

      <div className="footer-section">
        <p>Products Name | Product2 | Product3 | Product4 | Product5 | Product6 | Product7 | Product8 | Product9 | Product10 | Product11 | Product12 | Product13 | Product14 | Product15 | Product16</p>
      </div>

      <div className="footer-section i">
        {/* Toll-Free Number */}
        <div className="icon-text-container">
          <LocalPhoneIcon className="icon" />
          <span>TOLL FREE NUMBER 1800200400</span>
        </div>

        {/* Facebook */}
        <div className="icon-text-container">
          <FacebookIcon className="icon" />
          <span>www.facebook.com</span>
        </div>

        {/* CRI Groups */}
        <div className="icon-text-container">
          <LanguageIcon className="icon" />
          <span>www.CRIgroups.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
