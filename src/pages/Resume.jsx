import React from 'react';
import './Resume.css';
export default function Resume() {
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML", "CSS", "Responsive Web Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "C#", ".NET Framework"],
    "Database": ["MongoDB", "SQL Database Management"],
    "Languages": ["JavaScript", "C#", "Python", "Java"],
    "Tools & Platforms": ["GitHub", "Visual Studio", "Git", "Vercel", "Render"],
    "Soft Skills": ["Team Collaboration", "Critical Thinking", "Time Management", "Communication"]
  };

  const experience = [
    {
      title: "Operations & QA Specialist",
      company: "Sphere",
      location: "Vancouver, BC",
      period: "May 2025 – Present",
      highlights: [
        "Conduct detailed functionality testing on smartphones, tablets, and laptops to ensure quality standards for resale",
        "Maintain accurate records of diagnostics, shipping, and device history within internal tracking systems",
        "Communicate with customers and internal teams to coordinate device processing and resolve inquiries",
        "Identify and propose workflow improvements to enhance efficiency and operational throughput",
        "Contribute to startup growth by bringing a problem-solving mindset and adaptability in dynamic tech environment"
      ]
    },
    {
      title: "Line Cook",
      company: "Jan's on the Beach",
      location: "White Rock, Canada",
      period: "July 2022 – March 2024",
      highlights: [
        "Collaborated with team in fast-paced environment, demonstrating strong interpersonal skills and ability to work under pressure",
        "Managed time effectively during peak hours, ensuring timely delivery of high-quality dishes",
        "Maintained clean and organized workspace, applying attention to detail essential for code quality in software development",
        "Adapted quickly to changing work conditions, demonstrating flexibility and problem-solving similar to learning new technologies"
      ]
    },
    {
      title: "Kitchen Supervisor",
      company: "Juke Fried Chicken",
      location: "Vancouver, BC",
      period: "January 2020 – June 2022",
      highlights: [
        "Supervised kitchen operations, ensuring food quality, cleanliness, and team efficiency in high-volume environment",
        "Trained and supported new staff, fostering collaborative and respectful team culture",
        "Managed inventory, placed supplier orders, and reduced food waste through effective stock control",
        "Adapted to customer volume fluctuations by reallocating staff and streamlining prep workflows",
        "Developed leadership, multitasking, and time management skills under pressure"
      ]
    }
  ];

  const projects = [
    {
      title: "Parkify – Smart City Parking Availability App",
      period: "May 2025 – June 2025",
      tech: "React.js, JavaScript, Node.js, MongoDB, Express.js, Google Maps API",
      description: "A full-stack web application designed to predict and display real-time parking availability using user-reported data and external APIs."
    },
    {
      title: "GuessMate – Image Guessing Game",
      period: "Sep 2024 - Dec 2024",
      tech: "C# .NET, SQL, WPF, Visual Studio",
      description: "An interactive desktop game that challenges users to identify the correct image from a shuffled set within limited attempts."
    }
  ];

  return (
    <div className="resume-page">
      <div className="container">
        {/* Header */}
        <div className="resume-header">
          <h1>Resume</h1>
          <p className="resume-subtitle">Computer Systems Technology Student & Full-Stack Developer</p>
          <a 
          href="/ParveenMaan_Resume.pdf" 
          className="cta-button" 
          download="ParveenMaan_Resume.pdf"
        >
          <span style={{ marginRight: '0.5rem' }}>📄</span>
          Download Resume
        </a>

        </div>

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar">PM</div>
          <h2>Parveen Maan</h2>
          <p className="citizenship">Canadian Citizen</p>
          <div className="contact-info">
            <div className="contact-item">
              <span>📍</span>
              Vancouver, BC
            </div>
            <div className="contact-item">
              <span>📞</span>
              <a href="tel:+17783873242">(778) 387-3242</a>
            </div>

            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:maanparveen47@gmail.com">maanparveen47@gmail.com</a>
            </div>
            <div className="contact-item">
            <span>📁</span>
            <a
              href="https://github.com/Pmaan01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

            <div className="contact-item">
          <span>💼</span>
            <a
              href="https://www.linkedin.com/in/parveenmaan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>👤</span>
            Professional Summary
          </h2>
          <p className="summary-text">
            Motivated and versatile Computer Systems Technology student at Vancouver Community College with 
            hands-on experience in full-stack development, software testing, and collaborative team projects. 
            Skilled in React, C#, JavaScript, SQL, and RESTful APIs, with a solid foundation in object-oriented 
            programming and responsive web design. Successfully built and deployed real-world applications like 
            Parkify and GuessMate, demonstrating strong problem-solving, attention to detail, and effective use 
            of tools like Git, Visual Studio, and MongoDB. Eager to contribute to meaningful technology solutions 
            and grow in dynamic, fast-paced environments.
          </p>
        </div>

        {/* Project-Based Experience */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>🚀</span>
            Project-Based Experience
          </h2>
          {projects.map((project, index) => (
            <div key={index} className={`experience-item ${index !== projects.length - 1 ? 'bordered' : ''}`}>
              <div className="experience-header">
                <h3>{project.title}</h3>
                <span className="period">{project.period}</span>
              </div>
              <p className="tech-stack">{project.tech}</p>
              <p className="description">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>💼</span>
            Work History
          </h2>
          {experience.map((job, index) => (
            <div key={index} className={`experience-item ${index !== experience.length - 1 ? 'bordered' : ''}`}>
              <div className="experience-header">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company} – {job.location}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul className="highlights">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>🎓</span>
            Education
          </h2>
          <div className="education-item">
            <div className="experience-header">
              <div className="job-info">
                <h3>Diploma: Computer System Technology</h3>
                <p className="company">Vancouver Community College - Vancouver, BC</p>
              </div>
              <span className="period">Expected Dec 2025</span>
            </div>
            <p className="description">
              Two-year hands-on program focused on software development, networking, and IT systems.
            </p>
            <ul className="education-details">
              <li>Gained skills in programming (C++, Python, C#, JavaScript), databases, and UI/UX design</li>
              <li>Completed real-world projects including Parkify, a full-stack web app built using React.js, HTML, JavaScript, Node.js, and MongoDB</li>
              <li>Trained in cloud computing, computer security, and mobile application development</li>
              <li>Used modern tools such as Visual Studio Code, Git, and Microsoft Copilot throughout development workflows</li>
            </ul>
          </div>
          
          <div className="education-item">
            <div className="experience-header">
              <div className="job-info">
                <h3>Associate of Arts: Health Sciences</h3>
                <p className="company">Langara College - Vancouver, BC</p>
              </div>
              <span className="period">Apr 2019</span>
            </div>
            <ul className="education-details">
              <li>Gained skills in data analysis, research methods, and ethics</li>
              <li>Built strong critical thinking and communication abilities</li>
              <li>Studied privacy and information handling relevant to IT roles</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>⚡</span>
            Technical Skills
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Work */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>🤝</span>
            Volunteer Work
          </h2>
          <div className="experience-item">
            <div className="experience-header">
              <div className="job-info">
                <h3>Elections Canada</h3>
                <p className="company">Surrey, BC</p>
              </div>
              <span className="period">Apr 2025</span>
            </div>
            <ul className="highlights">
              <li>Ensured accuracy and transparency in vote counting during Election Day</li>
              <li>Maintained attention to detail while processing ballots under tight deadlines</li>
              <li>Collaborated with team members for efficient vote counting</li>
              <li>Followed strict guidelines to ensure compliance with election standards</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="resume-section">
          <h2 className="section-title">
            <span>🌐</span>
            Languages
          </h2>
          <div className="languages-grid">
            <div className="language-item english">
              <h3>English</h3>
              <p>Fluent</p>
            </div>
            <div className="language-item hindi">
              <h3>Hindi</h3>
              <p>Native</p>
            </div>
            <div className="language-item punjabi">
              <h3>Punjabi</h3>
              <p>Native</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="resume-cta">
          <div className="cta-content">
            <h3>Ready to Make an Impact</h3>
            <p>
              I'm actively seeking opportunities to contribute to innovative tech projects and grow as a developer. 
              Let's connect and discuss how I can add value to your team.
            </p>
            <div className="cta-buttons">
              <a href="mailto:maanparveen47@gmail.com" className="cta-button secondary">
                Contact Me
              </a>
              <a href="/Projects" className="cta-button">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}