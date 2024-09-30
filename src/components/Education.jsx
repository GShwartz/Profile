import React from 'react';
import '../styles/Education.css';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      institution: 'SELA',
      entries: [
        {
          year: '2022',
          course: 'DevOps Bootcamp',
        },
      ],
      details: 'Terraform | Azure DevOps | GIT | GitHub | Azure & AWS | Ansible | Grafana & Prometheus',
      icon: <FaGraduationCap style={{ color: '#FCC624' }} />,
    },
    {
      institution: 'ITQ & Ministry of Innovation',
      entries: [
        {
          year: '2021',
          course: 'Cyber Security Hands-On Bootcamp',
        },
      ],
      details: 'Windows Server 2019 | Cisco networking CCNA v7.0 | Linux Essentials | Cisco CyberOps IBM QRADAR | Checkpoint R80',
      icon: <FaGraduationCap style={{ color: '#F1502F' }} />, 
    },
    {
      institution: 'INT',
      entries: [
        {
          year: '2019 – 2020',
          course: 'Cybersecurity Practitioner – Graduated with distinction.',
        },
        {
          year: '2018',
          course: 'Windows Server 2016',
        },
        {
          year: '2017',
          course: 'MCSA',
        },
      ],
      icon: <FaGraduationCap style={{ color: '#4CAF50' }} />,
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">{edu.icon}</div>
              <h3>{edu.institution}</h3>
              <ul>
                {edu.entries.map((entry, idx) => (
                  <li key={idx}>
                    <strong>{entry.year}</strong>: {entry.course}
                  </li>
                ))}
              </ul>
              {edu.details && <p>{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
