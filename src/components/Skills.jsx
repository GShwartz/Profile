import React from 'react';
import '../styles/Skills.css';
import { FaCode, FaServer, FaDocker, FaLaptopCode, FaCloud, FaDatabase, FaLinux, FaWindows, FaCodeBranch  } from 'react-icons/fa';
import { SiAnsible, SiAzuredevops, SiTerraform, SiGrafana } from 'react-icons/si';

function Skills() {
  const skills = [
    {
      category: 'Scripting',
      details: 'Bash, Python, PowerShell',
      icon: <FaCode style={{ color: '#F0DB4F' }} />, // Yellow for coding
      proficiency: 85,
    },
    {
      category: 'Web',
      details: 'HTML, CSS, JS, React, NGINX, Apache',
      icon: <FaLaptopCode style={{ color: '#61DBFB' }} />, // Light blue for web development
      proficiency: 75,
    },
    {
      category: 'Databases',
      details: 'MySQL, MariaDB, PostgreSQL',
      icon: <FaDatabase style={{ color: '#4CAF50' }} />, // Green for databases
      proficiency: 85,
    },
    {
      category: 'Virtualization',
      details: 'VMware, KVM, Hyper-V, Proxmox',
      icon: <FaServer style={{ color: '#FF9800' }} />, // Orange for virtualization
      proficiency: 90,
    },
    {
      category: 'Containerization',
      details: 'Docker, Docker-Compose, Kubernetes, HELM',
      icon: <FaDocker style={{ color: '#0db7ed' }} />, // Docker blue
      proficiency: 75,
    },
    {
      category: 'Configuration Management',
      details: 'Ansible',
      icon: <SiAnsible style={{ color: '#EE0000' }} />, // Ansible red
      proficiency: 75,
    },
    {
      category: 'CI/CD Tools',
      details: 'Azure DevOps, Jenkins',
      icon: <SiAzuredevops style={{ color: '#0078d7' }} />, // Azure blue
      proficiency: 80,
    },
    {
      category: 'Monitoring',
      details: 'Grafana, Prometheus, Elastic',
      icon: <SiGrafana style={{ color: '#F46800' }} />, // Grafana orange
      proficiency: 75,
    },
    {
      category: 'Cloud Platforms',
      details: 'Azure, On-Premise',
      icon: <FaCloud style={{ color: '#0078d7' }} />, // Azure blue for cloud platforms
      proficiency: 75,
    },
    {
      category: 'Infrastructure as Code (IaC)',
      details: 'Terraform',
      icon: <SiTerraform style={{ color: '#623CE4' }} />, // Purple for Terraform
      proficiency: 75,
    },
    {
      category: 'Windows OS',
      details: 'AD, DNS, DHCP, IIS, CA, FTP, GPO',
      icon: <FaWindows style={{ color: '#0078D6' }} />, // Windows blue
      proficiency: 95,
    },
    {
      category: 'Linux OS',
      details: 'RedHat family, Debian family',
      icon: <FaLinux style={{ color: '#FCC624' }} />, // Yellow for Linux
      proficiency: 85,
    },
    {
      category: 'SCM',
      details: 'GitHub, GitTea, Azure Repos, BitBucket',
      icon: <FaCodeBranch style={{ color: '#F1502F' }} />, // Red for Git
      proficiency: 75,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <p>{skill.details}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
