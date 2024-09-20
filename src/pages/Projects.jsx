// Projects.jsx
import React from 'react';
import '../styles/Projects.css';
// import project1 from '../assets/projects/project1.png';
// import project2 from '../assets/projects/project2.png';
// import project3 from '../assets/projects/project3.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
    //   image: project1,
      title: 'Project One',
      description: 'Developed a web application that does amazing things.',
      role: 'Lead Developer',
    },
    {
      id: 2,
    //   image: project2,
      title: 'Project Two',
      description: 'Created a mobile app to solve real-world problems.',
      role: 'Full Stack Developer',
    },
    {
      id: 3,
    //   image: project3,
      title: 'Project Three',
      description: 'Implemented an AI solution for data analysis.',
      role: 'AI Specialist',
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Role:</strong> {project.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
