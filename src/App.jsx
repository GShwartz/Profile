import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(() => {
    const savedNavbarState = localStorage.getItem('isNavbarVisible');
    return savedNavbarState ? JSON.parse(savedNavbarState) : false; // Navbar hidden by default
  });

  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    const firstVisit = localStorage.getItem('hasVisited');
    return !firstVisit; // If there's no 'hasVisited' in localStorage, it's the first visit
  });

  const handleLetsGoClick = () => {
    setIsNavbarVisible(true); // Show Navbar
    localStorage.setItem('isNavbarVisible', true); // Persist Navbar state

    setIsFirstVisit(false); // User has clicked "Let's Go"
    localStorage.setItem('hasVisited', true); // Mark the first visit complete
  };

  useEffect(() => {
    // On mount, check if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(false); // Hide the Home section on subsequent visits
    }
  }, []);

  return (
    <>
      {/* Conditionally render the Navbar based on visibility */}
      {isNavbarVisible && (
        <div className="navbar fade-in">
          <Navbar />
        </div>
      )}

      <main>
        {/* Only render Home section if this is the first visit */}
        {isFirstVisit && <Home onLetsGoClick={handleLetsGoClick} />}
        
        {/* Render other sections */}
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default App;
