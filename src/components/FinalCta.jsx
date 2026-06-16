import React from 'react';
import { Link } from 'react-router-dom';
import './FinalCta.css';

export default function FinalCta() {
  return (
    <section className="final-cta-section section-padding">
      <div className="container">
        <div className="final-cta-card">
          <span className="cta-pill">LEARN IN COLLEGE. EXPERIENCE INDUSTRY.</span>
          <h2 className="cta-title">Gain real industry exposure while you study.</h2>
          <p className="cta-desc">
            CORPORA helps students go beyond classroom learning by connecting them with practical training, hands-on industry experience, career guidance, and workplace readiness during their academic journey.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Start Your Journey</Link>
            <Link to="/programs" className="btn-secondary">Explore Programs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
