// components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <div className="contact-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;