import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Prism from 'prismjs'; // Import Prism.js
import 'prismjs/themes/prism-okaidia.css'; // Import Prism theme (choose your preferred theme)
import 'prismjs/components/prism-bash'; // Import Bash language syntax highlighting
import '../styles/Projects.css'; // Existing project styles
import '../styles/Modal.css'; // Modal styles

Modal.setAppElement('#root'); // Accessibility

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(''); // To store content for the modal
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Project data array
  const projects = [
    {
      title: 'Quick-AD',
      description: 'An easier, more comfortable way to interact with Active Directory.',
      language: 'PowerShell',
      year: '2023',
      githubLink: 'https://github.com/GShwartz/Quick-AD',
    },
    {
      title: 'K8s install automation',
      description: 'Install K8s Master/Agents',
      language: 'BASH',
      year: '2024',
      githubLink: 'https://github.com/GShwartz/Tools/tree/main/Kubernetes/K8s',
      demoLink: 'https://raw.githubusercontent.com/GShwartz/Tools/main/Kubernetes/K8s/install_k8s.sh',
    },
    {
      title: 'Profile WebApp',
      description: 'Build & Deploy My Profile',
      language: 'React | HTML | CSS | Docker | CI/CD',
      year: '2024',
      githubLink: 'https://github.com/GShwartz/Profile',
    },
  ];

  // Function to toggle the modal and fetch content if necessary
  const toggleModal = async (contentType, demoLink = null) => {
    setLoading(true);
    setError(null);

    if (contentType === 'script' && demoLink) {
      try {
        const response = await fetch(demoLink);
        if (!response.ok) {
          throw new Error('Failed to fetch the script');
        }
        const script = await response.text();
        setModalContent(script); // Set the script content to be displayed
      } catch (err) {
        setError(err.message);
      }
    }

    setLoading(false);
    setIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Apply Prism.js syntax highlighting once the modal content changes and modal is open
  useEffect(() => {
    if (isOpen && modalContent) {
      setTimeout(() => Prism.highlightAll(), 0); // Ensure Prism.js applies highlighting after state updates
    }
  }, [isOpen, modalContent]);

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
                  GitHub
                </a>
                {project.title === 'K8s install automation' && (
                  <>
                    <button
                      onClick={() => toggleModal('script', project.demoLink)}
                      className="button demo-button"
                    >
                      Script
                    </button>
                    <button className="button demo-button" disabled>
                      DEMO
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the bash script */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // Close modal on request
        contentLabel="Bash Script Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Bash Script</h2>
        {loading ? (
          <p>Loading script...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="scrollable-content">
            <pre>
              <code className="language-bash">
                {modalContent} {/* Display script content */}
              </code>
            </pre>
          </div>
        )}
        <button className="button" onClick={closeModal}>Close</button>
      </Modal>
    </section>
  );
}

export default Projects;
