import React from 'react';
import '../css/Section.css';

const Projects = () => {
  const projects = [
    {
      title: 'Online Bookstore Website',
      description: 'Built a responsive online bookstore with advanced search functionality, improving accessibility and user satisfaction by 25%. Implemented real-time content updates, reducing inquiries by 40% and boosting sales by 25%.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      image: '/path-to-project-image-1.jpg', // Replace with project image or remove
    },
    {
      title: 'Flappy Bird Game',
      description: 'Developed a browser-based Flappy Bird game with optimized performance and intuitive controls, improving user engagement by 20%.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/path-to-project-image-2.jpg', // Replace with project image or remove
    },
    {
      title: 'Facial Recognition System',
      description: 'Created a facial recognition system achieving 95% accuracy using Python and OpenCV, with optimized image processing for speed.',
      tech: ['Python', 'OpenCV', 'NumPy'],
      image: '/path-to-project-image-3.jpg', // Replace with project image or remove
    },
    {
      title: 'Number Plate Recognition System',
      description: 'Developed a number plate recognition system with 92% accuracy, reducing latency by 30% using real-time detection.',
      tech: ['Python', 'OpenCV'],
      image: '/path-to-project-image-4.jpg', // Replace with project image or remove
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">I have worked on a wide range of projects. From web apps to AI/ML applications. Here are some of my projects.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;