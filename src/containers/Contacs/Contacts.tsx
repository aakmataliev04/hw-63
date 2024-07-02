import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className={'contacts-title'}>Contact Us</h1>
      <div className="contact-details">
        <p className={'contact-text'}><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p className={'contact-text'}><strong>Phone:</strong> +123 456 7890</p>
        <p className={'contact-text'}><strong>Email:</strong> info@example.com</p>
      </div>
    </div>
  );
};

export default Contacts;
