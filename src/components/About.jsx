import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/images/profile.jpg'; 

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-wrapper">
        <div className="profile-wrapper">
          <img src={profilePic} alt="Gil Shwartz" className="profile-pic" />
        </div>
        <div className="about-text-wrapper">
          <div className="about-text">
            <p>
              As a <strong>Junior DevOps Engineer & Tier 3 support</strong> for <a href="https://omc.co.il/omcgroup/" target="_blank" rel="noopener noreferrer">OMC GROUP</a>, <br />
              I am focused on building my skills in problem solving, troubleshooting, automating deployments and optimizing systems for efficiency with security best practices always in mind. 
              <br />
              I am working with tools like Docker, Elastic, Jenkins CI/CD pipelines and many others to help streamline processes. 
              <br />
              I am constantly learning and improving, aiming to grow into more advanced areas of Cloud & On-Premise infrastructure and automation.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
