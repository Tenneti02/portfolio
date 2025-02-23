import React from 'react';
import '../css/Section.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My work experience as a developer and other roles on different clubs and team projects.</p>
      <div className="experience-grid">
        <div className="experience-card">
          <h3 className="experience-role">Infosys Spring-Board — Full-Stack Web Developer Intern</h3>
          <p className="experience-period">September - December 2024</p>
          <ul className="experience-list">
            <li>Designed and deployed a responsive inventory management system, improving operational efficiency by 35%.</li>
            <li>Integrated real-time data visualization, enhancing inventory accuracy and user experience by 40%.</li>
            <li>Optimized application responsiveness and accessibility, increasing user engagement by 30%.</li>
            <li>Ensured cross-browser compatibility for a seamless user experience.</li>
          </ul>
          <p className="experience-tech"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, MongoDB, Vercel, Agile, Git</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;