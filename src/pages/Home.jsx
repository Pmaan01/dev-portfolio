import React from 'react';
import './Home.css'; // Import the new Home.css file

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-avatar">
           <div className="hero-avatar">
            <img src="/parveenmaan.jpg" alt="Parveen Maan" className="avatar-image" />
          </div>

            <h1 className="hero-title">
              Hello, I'm <span className="hero-name">Parveen Maan</span> 👋
            </h1>
            <p className="hero-subtitle">Full-stack Developer | Problem Solver | Tech Enthusiast</p>
            <p className="hero-description">Computer Systems Technology Student at Vancouver Community College</p>
          </div>
          
          <div className="action-buttons">
            <a href="mailto:maanparveen47@gmail.com" className="btn-primary">
              <span style={{ marginRight: '0.5rem' }}>📧</span>
              Get In Touch
            </a>
          <a 
            href="/ParveenMaan_Resume.pdf" 
            className="cta-button" 
            download="ParveenMaan_Resume.pdf"
          >
            <span style={{ marginRight: '0.5rem' }}>📄</span>
            Download Resume
          </a>


          </div>

          <div className="contact-info">
            <div className="contact-item">
              <span>📍</span>
              <span>Vancouver, BC</span>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <span>(778) 387-3242</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <h3 className="stat-number">2+ Years</h3>
            <p className="stat-label">Coding Experience</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌐</div>
            <h3 className="stat-number">2 Projects</h3>
            <p className="stat-label">Full-Stack Apps</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🗄️</div>
            <h3 className="stat-number">Multiple</h3>
            <p className="stat-label">Tech Stacks</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📱</div>
            <h3 className="stat-number">Current</h3>
            <p className="stat-label">QA Specialist</p>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <div className="about-grid">
            <div>
              <p className="about-text">
                I'm a motivated Computer Systems Technology student with hands-on experience in full-stack development and software testing. I'm passionate about building meaningful technology solutions that solve real-world problems.
              </p>
              <p className="about-text">
                Currently working as an Operations & QA Specialist while completing my diploma, I bring a unique blend of technical skills and practical experience to every project I work on.
              </p>
            </div>
            <div>
              <h3 className="about-focus-title">Current Focus:</h3>
              <ul className="about-list">
                <li>Completing Computer Systems Technology Diploma (Dec 2025)</li>
                <li>Building full-stack applications with React & Node.js</li>
                <li>Quality assurance in tech environments</li>
                <li>Exploring cloud computing and mobile development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Skills */}
        <div className="skills-section">
          <h2 className="skills-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="skills-category-title">Frontend</h3>
              <div className="skills-tags">
                {["React", "JavaScript", "HTML", "CSS", "Responsive Web Design"].map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Backend</h3>
              <div className="skills-tags">
                {["Node.js", "Express.js", "RESTful APIs", "C#", ".NET Framework"].map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Database & Tools</h3>
              <div className="skills-tags">
                {["MongoDB", "SQL", "GitHub", "Visual Studio", "Git", "Python"].map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="connect-section">
          <h3 className="connect-title">Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/Pmaan01" className="social-link social-github">
              <span>📁</span>
            </a>
            <a href="https://www.linkedin.com/in/parveenmaan/" className="social-link social-linkedin">
              <span>💼</span>
            </a>
            <a href="mailto:maanparveen47@gmail.com" className="social-link social-email">
              <span>📧</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}