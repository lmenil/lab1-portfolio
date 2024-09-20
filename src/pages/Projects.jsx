// Projects.jsx
import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/SPA.jpg';
import project2 from '../assets/form.jpg';
import project3 from '../assets/orderxpress.jpg';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: project1,
      title: 'Project One',
      description: "Played a pivotal role in developing a comprehensive spa website. My responsibilities included creating user-friendly interfaces, and integrating features like a survey page that allows visitors to provide valuable feedback directly to the company. The end result is a visually appealing and informative website that effectively showcases the spa's services and fosters customer engagement.",
      role: 'Member Developer',
    },
    {
      id: 2,
      image: project2,
      title: 'Project Two',
      description: "I was responsible for developing a membership application form using JavaScript. This form captures essential user data and securely stores it for future reference. The successful completion of this project has provided the company with a valuable tool for efficiently managing membership applications and streamlining their onboarding process.",
      role: 'Javascript Developer',
    },
    {
      id: 3,
      image: project3,
      title: 'Project Three',
      description: "As part of the OrderXpress project, I conducted a thorough investigation into existing software requirements and system procedures. This research involved analyzing current processes, identifying pain points, and gathering input from stakeholders. By understanding the current state of the system, I was able to lay a solid foundation for developing effective and efficient solutions that meet the project's objectives.",
      role: 'Researcher',
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
