import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../corpora-images/Logo/corpora-logo.png.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImg} alt="CORPORA Logo" className="navbar-logo-img" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav">
          <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/programs" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Programs</NavLink>
          <NavLink to="/learning-model" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Learning Model</NavLink>
          <NavLink to="/career-pathways" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Career Pathways</NavLink>
          <NavLink to="/insights" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Insights</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>

        {/* Apply Now Button (Desktop) */}
        <div className="navbar-cta-wrapper">
          <NavLink to="/apply-now" className="btn-register-header">Apply Now</NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`navbar-toggle-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span>Menu</span>
          <div className="navbar-toggle-icon">
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile menu dropdown */}
        <nav className={`navbar-mobile-dropdown ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-dropdown-list">
            <li><NavLink to="/" className="mobile-dropdown-link" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className="mobile-dropdown-link" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/programs" className="mobile-dropdown-link" onClick={closeMenu}>Programs</NavLink></li>
            <li><NavLink to="/learning-model" className="mobile-dropdown-link" onClick={closeMenu}>Learning Model</NavLink></li>
            <li><NavLink to="/career-pathways" className="mobile-dropdown-link" onClick={closeMenu}>Career Pathways</NavLink></li>
            <li><NavLink to="/insights" className="mobile-dropdown-link" onClick={closeMenu}>Insights</NavLink></li>
            <li><NavLink to="/contact" className="mobile-dropdown-link" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
          <div className="mobile-dropdown-divider"></div>
          <NavLink to="/apply-now" className="mobile-dropdown-cta" onClick={closeMenu}>Apply Now</NavLink>
        </nav>
      </div>
    </header>
  );
}
