// components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <a href="#">Rishywanth Ambalam</a>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://docs.google.com/document/d/1QE8jMhRopjy81QYeUvmKfWr3Bqr50u9-q7pekikUbZ0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;