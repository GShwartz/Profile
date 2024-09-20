import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="container home-content">
        <h1>Hi! 👋</h1>
        <a href="#about" className="button">Lets Go</a>
      </div>
    </section>
  );
}

export default Home;
