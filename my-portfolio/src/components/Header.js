import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <section id="about" className="header-section">
      <div className="header-content">
        <img
          src="/path-to-your-photo.jpg" // Replace with your photo path or URL
          alt="T S V Subrahmanyam"
          className="profile-photo"
        />
        <h1 className="header-name">T S V Subrahmanyam</h1>
        <p className="header-description">
          I am a Full Stack Developer and AI/ML enthusiast. I’m passionate about creating innovative solutions that shape the future.
        </p>
        <a
          href="/path-to-your-cv.pdf" // Replace with your CV path or URL
          download
          className="cv-button"
        >
          Check My CV
        </a>
        <div className="contact-info">
          <p>Email: <a href="mailto:your-email@gmail.com" className="contact-link">your-email@gmail.com</a></p>
          <p>Phone: 8919630782</p>
          <p>
            LinkedIn: <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </p>
          <p>
            GitHub: <a href="your-github-url" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;