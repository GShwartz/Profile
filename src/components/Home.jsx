import React from 'react';
import '../styles/Home.css';

function Home({ onLetsGoClick }) {
  return (
    <section id="home" className="home">
      <div className="container home-content">
        <h1>Hi! 👋</h1>
        {/* Clicking this button will reveal the Navbar */}
        <a href="#about" className="button" onClick={onLetsGoClick}>Let's Go</a>
      </div>
    </section>
  );
}

export default Home;
