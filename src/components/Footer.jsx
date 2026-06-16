import React from 'react';
import { Link } from 'react-router-dom';
const logoImg = "/Logo/corpora-logo.png.png";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src={logoImg} alt="CORPORA Logo" className="footer-logo-img" />
              <span className="footer-logo-text">CORPORA</span>
            </Link>
            <p className="footer-description">
              CORPORA helps students and youth move beyond theory through practical learning, skill development, and career-focused pathways.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/programs" className="footer-link">Our Programs</Link></li>
              <li><Link to="/learning-model" className="footer-link">Learning Model</Link></li>
              <li><Link to="/career-pathways" className="footer-link">Career Pathways</Link></li>
              <li><Link to="/insights" className="footer-link">Insights & Resources</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Skill Areas */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Skill Areas</h4>
            <ul className="footer-links-list">
              <li><Link to="/programs" className="footer-link">Practical Learning</Link></li>
              <li><Link to="/programs" className="footer-link">Skill Development</Link></li>
              <li><Link to="/programs" className="footer-link">Earning Confidence</Link></li>
              <li><Link to="/programs" className="footer-link">Employability</Link></li>
              <li><Link to="/programs" className="footer-link">Real-World Exposure</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Subtle Divider Line */}
        <div className="footer-divider"></div>
        
        {/* Bottom Footer Row */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} CORPORA. All rights reserved.
          </div>
          <div className="footer-taglines">
            <span>Practical Learning</span>
            <span className="tagline-dot">&bull;</span>
            <span>Earning Confidence</span>
            <span className="tagline-dot">&bull;</span>
            <span>Career Readiness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
