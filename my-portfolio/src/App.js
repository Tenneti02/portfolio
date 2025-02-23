import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="navbar-title">MyPortfolio</h1>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
        </div>
        <a
          href="your-github-url"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          GitHub Profile
        </a>
      </nav>
      <main className="main-content">
        <Header />
        <Skills />
        <Projects />
        <Education />
        <Experience />
       
        <Contact />
      </main>
    </div>
  );
}

export default App;