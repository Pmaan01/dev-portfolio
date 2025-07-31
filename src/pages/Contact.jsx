import React, { useState } from 'react';
import '../Portfolio.css'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData_new = new FormData();
      formData_new.append('access_key', '6178ea00-19e0-4c5f-ac69-f1ace5b1032d'); // You need to get this from web3forms.com
      formData_new.append('name', formData.name);
      formData_new.append('email', formData.email);
      formData_new.append('subject', formData.subject);
      formData_new.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData_new
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }

    } catch (err) {
      console.error('Form submission error:', err);
      
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:maanparveen47@gmail.com?subject=${subject}&body=${body}`;
      
      if (window.confirm('Unable to send message automatically. Would you like to open your email client instead?')) {
        window.location.href = mailtoLink;
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      } else {
        setError('Failed to send message. Please try again or contact me directly at maanparveen47@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm always interested in new opportunities, collaborations, and meaningful conversations about technology. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div>
            <div className="contact-card">
              <h2>
                <span>📞</span>
                Contact Information
              </h2>
              
              <div>
                <div className="contact-info-item">
                  <div className="contact-icon email">
                    <span>📧</span>
                  </div>
                  <div className="contact-info-content">
                    <h3>Email</h3>
                    <a href="mailto:maanparveen47@gmail.com">
                      maanparveen47@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon phone">
                    <span>📞</span>
                  </div>
                  <div className="contact-info-content">
                    <h3>Phone</h3>
                    <a href="tel:+17783873242">
                      (778) 387-3242
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon location">
                    <span>📍</span>
                  </div>
                  <div className="contact-info-content">
                    <h3>Location</h3>
                    <p>Vancouver, BC, Canada</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon linkedin">
                    <span>💼</span>
                  </div>
                  <div className="contact-info-content">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/parveenmaan/" target="_blank" rel="noopener noreferrer">
                      Connect with me professionally
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon github">
                    <span>📁</span>
                  </div>
                  <div className="contact-info-content">
                    <h3>GitHub</h3>
                    <a href="https://github.com/Pmaan01" target="_blank" rel="noopener noreferrer">
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="availability-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.25rem', marginRight: '0.75rem' }}>⏰</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', margin: 0 }}>
                  Current Availability
                </h3>
              </div>
              <div>
                <div className="availability-item">
                  <span className="availability-label">Full-time Opportunities</span>
                  <span className="availability-status status-available">
                    Available
                  </span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Freelance Projects</span>
                  <span className="availability-status status-open">
                    Open
                  </span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Response Time</span>
                  <span className="availability-status status-time">
                    24-48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card">
            <h2>
              <span>💬</span>
              Send a Message
            </h2>
            
            {error && (
              <div className="error-message">
                <div className="error-icon">❌</div>
                <p className="error-text">{error}</p>
              </div>
            )}
            
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-text">
                  Thank you for reaching out. I'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? '⏳' : '📩'}</span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="contact-card bottom-card">
          <h3>Let's Build Something Amazing Together</h3>
          <p>
            I'm currently seeking opportunities in full-stack development, software testing, or related tech roles. 
            Whether you have a project in mind, want to discuss potential collaborations, or just want to connect, 
            I'd love to hear from you!
          </p>
          <div className="status-badges">
            <span className="status-badge badge-fulltime">
              Available for Full-time
            </span>
            <span className="status-badge badge-freelance">
              Open to Freelance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}