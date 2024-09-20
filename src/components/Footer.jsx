import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Built and Deployed by Gil Shwartz. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gilshwartz/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
            <span className="linkedin-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
