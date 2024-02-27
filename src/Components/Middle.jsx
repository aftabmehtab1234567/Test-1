// Middle.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './mystyle.css'; // Import the separate CSS file for styling

const Middle = () => {
  return (
    <div className="middle-container">
      <Header />
      <main>
        <div className="image-row">
          {/* Image 1 */}
          <div className="image-container">
            <img src="minar.png" alt="First Image" />
          </div>

          {/* Image 2 with Text */}
          <div className="image-container with-text">
            <h4>C.R.I Pumps Wins National conservation Award in 2018 for the 4th time</h4>
            <ul>
              <li>C.R.I. Fluid Systems products cater to diverse segments such as: Chemical & Process, Power, Water & Waste Water, Oil & Gas, Pharma, Sugar & Distilleries.</li>
              <li>C.R.I. Fluid Systems products cater to diverse segments such as: Chemical & Process, Power, Water & Waste Water, Oil & Gas, Pharma, Sugar & Distilleries, Paper & Pulp.</li>
            </ul>
            <img src="Award.png" alt="Second Image" className='Award' />
            <p>C.R.I. ranks high among the <b>NATIONAL ENERGY CONSERVATION AWARD 2018</b> world's fastest-growing fluid management solution providers with a wide global presence. C.R.I. offers Pumps, Motors, Valves.</p>
          </div>
        </div>

        <div className='product'>
          <p>C.R.I. Fluid Systems products cater to diverse segments such as: Chemical & Process, Power, Water & Waste Water, Oil & Gas, Pharma, Sugar & Distilleries, Paper & Pulp, Marine.</p>
        </div>

        {/* Image after the existing content */}
        <div className="prize">
          <img src="prize.png" alt="Additional Image" />
          <p>Valves Pumps Pipes-controller Walves& cables Solar-system Motors</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Middle;
