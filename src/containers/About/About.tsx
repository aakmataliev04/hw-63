import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className={'about-title'}>About Us</h1>
      <div className="about-content">
        <p className={'about-text'}>We are a leading company in the industry with over 20 years of experience.</p>
        <p className={'about-text'}>Our mission is to provide the best services and products to our customers.</p>
        <p className={'about-text'}>We value innovation, quality, and customer satisfaction above all.</p>
      </div>
    </div>
  );
};

export default AboutUs;
