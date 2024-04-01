// components/Contact.js
import React from 'react';
const Button = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="contact-links">
      {children}
    </a>
  );
};

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <Button url = "https://github.com/rishy05/">Github</Button>
        <Button url = "https://www.linkedin.com/in/rishywanth-ambalam/">Linkedin</Button>
        <h3>Phone Number - +91 9840499600</h3>
        <h3>Mail id - rishywanthambalam@gmail.com</h3>
      </div>
    </section>
  );
}

export default Contact;