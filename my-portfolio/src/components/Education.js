import React from 'react';
import '../css/Section.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      <div className="education-grid">
        <div className="education-card">
          <h3 className="education-institution">Gandhi Institute of Technology and Management</h3>
          <p>B.Tech, Computer Science</p>
        </div>
        <div className="education-card">
          <h3 className="education-institution">Ascent Jr College</h3>
          <p>Intermediate</p>
        </div>
        <p className="education-coursework"><strong>Relevant Coursework:</strong> Software Engineering, Data Structures & Algorithms, Database Systems, Web Development, Object-Oriented Programming, Computer Networks</p>
      </div>
    </section>
  );
};

export default Education;