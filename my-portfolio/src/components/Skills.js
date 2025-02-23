import React from 'react';
import '../css/Section.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Here are some of my skills on which I have been working!</p>
      <div className="skills-grid">
        <div className="skill-card">
          <h3 className="skill-category">Frontend</h3>
          <div className="skill-list">
            {['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind'].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card">
          <h3 className="skill-category">Backend</h3>
          <div className="skill-list">
            {['Python', 'Node.js', 'MongoDB', 'Express.js'].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card">
          <h3 className="skill-category">AI/ML</h3>
          <div className="skill-list">
            {['Python', 'OpenCV', 'NumPy', 'Pandas'].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card">
          <h3 className="skill-category">Others</h3>
          <div className="skill-list">
            {['Git', 'GitHub', 'Agile Scrum'].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;