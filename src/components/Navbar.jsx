import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Function to scroll to a section programmatically
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${activeSection !== 'home' ? 'navbar-scrolled' : ''}`}>
      <nav className="container navbar-content">
        <div className="logo">
          {/* Prevent default and scroll manually on logo click */}
          <a href="#about" onClick={handleLogoClick}>Gil Shwartz</a>
          <span className="slogan">You define the goal, I make it happen.</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
