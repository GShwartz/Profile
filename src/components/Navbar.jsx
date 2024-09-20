import React, { useEffect, useState } from 'react';
import '../styles//Navbar.css';

function Navbar() {
  const [isHomeInView, setIsHomeInView] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHomeInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the Home section is visible
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

   // Function to scroll to the About section programmatically
   const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${!isHomeInView ? 'navbar-scrolled' : ''}`}>
      <nav className="container navbar-content">
        <div className="logo">
           {/* Prevent default and scroll manually on logo click */}
          <a href="#about" onClick={handleLogoClick}>Gil Shwartz</a>
          <span className="slogan">You define the goal, I make it happen.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
