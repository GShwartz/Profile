import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Quick-AD',
      description: 'An easier, more comfortable way to interact with Active Directory.',
      language: 'PowerShell',
      year: '2023',
      githubLink: 'https://github.com/GShwartz/Quick-AD',
    },
    {
      title: 'Profile WebApp',
      description: 'Build & Deploy My Profile',
      language: 'React | HTML | CSS | Docker | CI/CD',
      year: '2024',
      githubLink: 'https://github.com/GShwartz/Profile',
      demoLink: 'https://myprofiledemo.com', // Add your demo link here
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <h3>{project.title}</h3>
              <h4>{project.language}</h4>
              <h4>{project.year}</h4>
              <p>{project.description}</p>
              <div className="button-group">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View on GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button demo-button"
                  >
                    DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
