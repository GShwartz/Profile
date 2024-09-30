import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash';
import '../styles/Projects.css';
import '../styles/Modal.css';

Modal.setAppElement('#root');

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper function to get YouTube embed link
  const getYouTubeEmbedLink = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length >= 11
      ? `https://www.youtube.com/embed/${match[2].substring(0,11)}`
      : null;
  };

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
      videoLink: 'https://www.youtube.com/watch?v=C7zVusDfsiA',
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
  const toggleModal = async (contentType, link = null) => {
    setLoading(true);
    setError(null);
    setModalContentType(contentType);

    if (contentType === 'script' && link) {
      // Fetch and set script content
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error('Failed to fetch the script');
        }
        const script = await response.text();
        setModalContent(script);
      } catch (err) {
        setError(err.message);
      }
    } else if (contentType === 'video' && link) {
      // Set video embed link
      const embedLink = getYouTubeEmbedLink(link);
      if (embedLink) {
        setModalContent(embedLink);
      } else {
        setError('Invalid YouTube link');
      }
    }

    setLoading(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Apply Prism.js syntax highlighting for scripts
  useEffect(() => {
    if (isOpen && modalContent && modalContentType === 'script') {
      setTimeout(() => Prism.highlightAll(), 0);
    }
  }, [isOpen, modalContent, modalContentType]);

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
                    <button
                      onClick={() => toggleModal('video', project.videoLink)}
                      className="button demo-button"
                    >
                      DEMO
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying content */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Content Modal"
        className={`modal-content ${modalContentType === 'video' ? 'video-modal' : ''}`}
        overlayClassName="modal-overlay"
      >
        {modalContentType === 'script' ? (
          <h2>Bash Script</h2>
        ) : (
          <h2>Video Demo</h2>
        )}
        {loading ? (
          <p>Loading content...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : modalContentType === 'script' ? (
          // Render script content
          <div className="scrollable-content">
            <pre>
              <code className="language-bash">{modalContent}</code>
            </pre>
          </div>
        ) : modalContentType === 'video' ? (
          // Render video content
          <div className="video-container">
            <iframe
              src={modalContent}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
        <button className="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </section>
  );
}

export default Projects;
