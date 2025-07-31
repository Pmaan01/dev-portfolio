import React from 'react';
import './Projects.css'; // Import the new Projects.css file

export default function Projects() {
  const projects = [
    {
      title: "Parkify",
      subtitle: "Smart City Parking Availability App",
      description: "A full-stack web application that predicts and displays real-time parking availability using user-reported data and external APIs. Helps drivers locate free and paid parking spots across major city areas.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Maps API", "Vercel", "Render"],
      highlights: [
        "Interactive map with React Leaflet displaying dynamic parking spot markers",
        "Integrated Google Maps API for navigation with return confirmation",
        "Crowdsourcing feedback system with reward points for user engagement",
        "Unified paid (API) and free (MongoDB) parking data into single schema",
        "Deployed frontend on Vercel and backend API on Render for seamless integration"
      ],
      github: "https://github.com/Pmaan01/Parkify-Web-App.git", 
      demo: "https://parkify-web-app-xi.vercel.app/", 
      period: "May 2025 – June 2025",
      featured: true
    },
    {
      title: "GuessMate",
      subtitle: "Interactive Image Guessing Game",
      description: "An interactive desktop game challenging users to identify correct images from shuffled sets within limited attempts. Built with object-oriented programming principles and SQL database integration for high scores.",
      tech: ["C# .NET", "SQL", "WPF", "Visual Studio", "GitHub Actions"],
      highlights: [
        "Built interactive user experience with real-time feedback and engagement",
        "Integrated SQL database for data persistence, mirroring eCommerce customer tracking",
        "Set up GitHub Actions for automated testing and deployment workflows",
        "Applied clean architecture and OOP best practices for maintainable code",
        "Implemented game logic with limited attempts and scoring system"
      ],
      github: "https://github.com/Pmaan01/GuessMate.git", 
      demo: null,
      period: "Sep 2024 - Dec 2024",
      featured: false
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Full-stack applications showcasing my development skills and problem-solving approach. 
            Each project demonstrates different aspects of modern web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured-ring' : ''}`}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured Project</span>
                </div>
              )}
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <div className="project-period">
                      <span>📅</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                  
                  <div className="project-links">
                    <a href={project.github} className="project-link github-link">
                      <span>📁</span>
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="project-link demo-link">
                        <span>🔗</span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="project-section">
                    <h4>
                      <span style={{ color: '#3b82f6' }}>💻</span>
                      Key Highlights
                    </h4>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="highlight-item">
                          <span className="highlight-bullet"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h4>
                      <span style={{ color: '#8b5cf6' }}>🗄️</span>
                      Technologies Used
                    </h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Stats */}
                    <div className="project-stats">
                      <div className="stats-grid">
                        <div>
                          <div className="stat-item">Team Project</div>
                          <div className="stat-label">Collaborative</div>
                        </div>
                        <div>
                          <div className="stat-item">Full-Stack</div>
                          <div className="stat-label">End-to-End</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-icon">🌐</div>
            <h3 className="cta-title">Want to see more?</h3>
            <p className="cta-description">
              Check out my GitHub profile for additional projects, code samples, and contributions to open source projects.
            </p>
            <div className="cta-buttons">
              <a href="https://github.com/Pmaan01" className="cta-button cta-primary">
                <span>📁</span>
                View GitHub Profile
              </a>
              <a href="mailto:maanparveen47@gmail.com" className="cta-button cta-secondary">
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="skills-showcase">
          <h3 className="skills-title">Technologies I Work With</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">💻</div>
              <h4 className="skill-name">Frontend</h4>
              <p className="skill-description">React, JavaScript, HTML, CSS</p>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🗄️</div>
              <h4 className="skill-name">Backend</h4>
              <p className="skill-description">Node.js, Express, C#, .NET</p>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🌐</div>
              <h4 className="skill-name">Database</h4>
              <p className="skill-description">MongoDB, SQL, Data Management</p>
            </div>
            <div className="skill-category">
              <div className="skill-icon">📁</div>
              <h4 className="skill-name">Tools</h4>
              <p className="skill-description">Git, GitHub, Visual Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}