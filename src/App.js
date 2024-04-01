// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;