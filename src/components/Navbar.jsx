import { useState } from "react";
import './Navbar.css'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo/Brand */}
        <div className="navbar-logo">
  <a href="/" className="navbar-brand">
    <img 
      src="/favicon.png" 
      alt="Portfolio Logo" 
      className="navbar-logo-image" 
      style={{ width: '32px', height: '32px', marginRight: '8px' }} 
    />
    Portfolio
  </a>
</div>


          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <div className="navbar-desktop-links">
              <NavLink href="/" text="Home" />
              <NavLink href="/projects" text="Projects" />
              <NavLink href="/resume" text="Resume" />
              <NavLink href="/contact" text="Contact" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div>
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
                <span className="hamburger-line hamburger-line-top">
                  <div></div>
                </span>
                <span className="hamburger-line hamburger-line-middle">
                  <div></div>
                </span>
                <span className="hamburger-line hamburger-line-bottom">
                  <div></div>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="mobile-menu-content">
          <MobileNavLink href="/" text="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/projects" text="Projects" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/resume" text="Resume" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/contact" text="Contact" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, text }) {
  return (
    <a href={href} className="nav-link">
      {text}
      <span className="nav-link-underline"></span>
    </a>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="mobile-nav-link"
    >
      {text}
    </a>
  );
}