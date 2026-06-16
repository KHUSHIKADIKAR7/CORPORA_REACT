import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'Student',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      setFormSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whoContactCards = [
    {
      title: 'Students & Learners',
      desc: 'For learners who want to understand programs, eligibility, and career direction.',
      icon: '🧭'
    },
    {
      title: 'Parents',
      desc: 'For parents who want guidance about practical learning and career-focused pathways.',
      icon: '👨‍👩-👦'
    },
    {
      title: 'Colleges & Institutions',
      desc: 'For institutions interested in employability-focused skilling and student development programs.',
      icon: '🏫'
    },
    {
      title: 'Employers & Partners',
      desc: 'For organizations looking to collaborate, support training, or connect with future-ready learners.',
      icon: '💼'
    }
  ];

  const helpTopics = [
    { title: 'Program Enquiry', icon: '📖' },
    { title: 'Apply Now Support', icon: '📝' },
    { title: 'Career Pathway Guidance', icon: '🛣️' },
    { title: 'Institution Partnership', icon: '🤝' },
    { title: 'Employer Collaboration', icon: '🏢' },
    { title: 'General Query', icon: '💬' }
  ];

  return (
    <div className="contact-page">
      {/* SECTION 1: HERO */}
      <section className="contact-hero">
        <div className="contact-hero-glow"></div>
        <div className="container contact-hero-container">
          <div className="contact-hero-left">
            <span className="section-label animate-pill">GET IN TOUCH</span>
            <h1 className="contact-hero-title">Contact CORPORA</h1>
            <p className="contact-hero-subtext">
              Have questions about programs, learning pathways, career guidance, or partnerships? Connect with CORPORA and take the next step toward practical learning and career growth.
            </p>
          </div>

          <div className="contact-hero-right">
            <div className="contact-hero-visual">
              {/* Abstract 3D Network SVG */}
              <svg className="contact-visual-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="140" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="2" strokeDasharray="5 5" />
                <circle cx="200" cy="200" r="80" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="2" strokeDasharray="5 5" />
                
                {/* Connecting lines */}
                <line x1="200" y1="200" x2="100" y2="120" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="200" y1="200" x2="300" y2="120" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="200" y1="200" x2="200" y2="310" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="200" y1="200" x2="80" y2="250" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="200" y1="200" x2="320" y2="250" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />

                {/* Nodes */}
                <circle cx="200" cy="200" r="28" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="3" />
                <text x="200" y="206" fill="white" fontSize="18" textAnchor="middle">💬</text>
                
                <circle cx="100" cy="120" r="22" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <text x="100" y="125" fill="white" fontSize="14" textAnchor="middle">✉️</text>
                
                <circle cx="300" cy="120" r="22" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <text x="300" y="125" fill="white" fontSize="14" textAnchor="middle">📞</text>
                
                <circle cx="200" cy="310" r="22" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <text x="200" y="315" fill="white" fontSize="14" textAnchor="middle">📍</text>

                <circle cx="80" cy="250" r="16" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <text x="80" y="254" fill="white" fontSize="10" textAnchor="middle">🤝</text>

                <circle cx="320" cy="250" r="16" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <text x="320" y="254" fill="white" fontSize="10" textAnchor="middle">🎓</text>
              </svg>
              
              {/* Floating indicators */}
              <div className="contact-float-badge badge-top-left">Responsive Support</div>
              <div className="contact-float-badge badge-bottom-right">Ecosystem Connect</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GET IN TOUCH */}
      <section className="get-in-touch-section section-padding">
        <div className="container touch-container">
          <div className="touch-left-info">
            <span className="section-label">COMMUNICATION</span>
            <h2 className="touch-title">Let’s Start a Conversation</h2>
            <p className="touch-intro-desc">
              Whether you are a student, learner, institution, employer, or partner, our team is here to guide you. Reach out to learn more about CORPORA programs, learning model, career pathways, and collaboration opportunities.
            </p>

            <div className="contact-info-cards-stack">
              <div className="info-detail-card card-3d">
                <span className="detail-icon">📞</span>
                <div className="detail-texts">
                  <h4>Phone Number</h4>
                  <p>Add Contact Number</p>
                </div>
              </div>

              <div className="info-detail-card card-3d">
                <span className="detail-icon">✉️</span>
                <div className="detail-texts">
                  <h4>Email Address</h4>
                  <p>Add Email Address</p>
                </div>
              </div>

              <div className="info-detail-card card-3d">
                <span className="detail-icon">📍</span>
                <div className="detail-texts">
                  <h4>Office Address</h4>
                  <p>Add Office Address</p>
                </div>
              </div>

              <div className="info-detail-card card-3d">
                <span className="detail-icon">📅</span>
                <div className="detail-texts">
                  <h4>Working Hours</h4>
                  <p>Monday to Saturday, 10:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="touch-right-form-container">
            <div className="contact-form-box card-3d glass-card">
              {formSubmitted ? (
                <div className="form-success-wrapper">
                  <div className="success-icon-shield">✓</div>
                  <h3>Details Received</h3>
                  <p>Thank you! Your details have been received. Our team will contact you soon.</p>
                  <button onClick={() => setFormSubmitted(false)} className="btn-secondary">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-react-form">
                  <h3>Send a Direct Query</h3>
                  <p className="form-instruction">Please enter your basic information below.</p>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="phone">Mobile Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="Enter mobile number" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Enter email address" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">I am a:</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange}>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Institution">Institution</option>
                      <option value="Employer">Employer</option>
                      <option value="Partner">Partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Question</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO CAN CONTACT US */}
      <section className="who-contact-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">AUDIENCE STREAMS</span>
            <h2 className="section-title">Who Can Contact Us</h2>
            <p className="section-desc">
              CORPORA engages with multiple nodes in the skilling ecosystem. Reach out to the team for specific support.
            </p>
          </div>

          <div className="who-contact-grid">
            {whoContactCards.map((card, idx) => (
              <div key={idx} className="who-card card-3d glass-card">
                <span className="who-icon-bubble">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: QUICK HELP TOPICS */}
      <section className="quick-help-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">RESOLVE FASTER</span>
            <h2 className="section-title">Quick Help Topics</h2>
            <p className="section-desc">
              Identify your topic area to help connect you directly with the concerned program and guidance team.
            </p>
          </div>

          <div className="quick-help-grid">
            {helpTopics.map((topic, idx) => (
              <div key={idx} className="help-topic-card card-3d">
                <span className="topic-icon">{topic.icon}</span>
                <h4>{topic.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="contact-cta-section section-padding">
        <div className="container">
          <div className="contact-cta-banner">
            <h2>Ready to Begin with CORPORA?</h2>
            <p>Explore practical learning programs and take your next step toward skill development, confidence, and career growth.</p>
            <div className="contact-cta-actions">
              <Link to="/apply-now" className="btn-primary">Apply Now</Link>
              <Link to="/programs" className="btn-outline-white">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
