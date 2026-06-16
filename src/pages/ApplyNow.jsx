import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplyNow.css';

export default function ApplyNow() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    education: '10th',
    programArea: 'Not Sure / Need Guidance',
    status: 'Student',
    goal: 'Skill Development',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.city && formData.state) {
      setFormSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    const element = document.getElementById('application-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processSteps = [
    {
      step: '1',
      title: 'Submit Your Details',
      desc: 'Your application helps us understand your background, interest, and learning goal.',
      icon: '📝'
    },
    {
      step: '2',
      title: 'Guidance Call',
      desc: 'Our team connects with you to explain suitable programs and possible pathways.',
      icon: '📞'
    },
    {
      step: '3',
      title: 'Program Selection',
      desc: 'You choose the right program based on your education, interest, and career direction.',
      icon: '🎯'
    },
    {
      step: '4',
      title: 'Start Learning',
      desc: 'Begin your CORPORA journey with practical learning, exposure, and guidance.',
      icon: '🚀'
    }
  ];

  const whoApplyCards = [
    { text: 'Students who want practical skills', icon: '💡' },
    { text: '10th / 12th / ITI / Diploma learners', icon: '🛠️' },
    { text: 'BA / B.Com / BCA / B.Pharm learners', icon: '🎓' },
    { text: 'Young learners and job seekers', icon: '💼' },
    { text: 'Learners looking for career clarity', icon: '🧭' },
    { text: 'Learners interested in Learn & Earn pathways', icon: '💰' }
  ];

  const programExplore = [
    { title: 'Retail & Customer Service', icon: '🛒' },
    { title: 'Pharma & Healthcare', icon: '🧪' },
    { title: 'Operations & Supply Chain', icon: '📦' },
    { title: 'Automotive & Manufacturing', icon: '🚗' },
    { title: 'BFSI & Office Support', icon: '💼' },
    { title: 'Hospitality & Tourism', icon: '🏨' },
    { title: 'Electrical & Technical Skills', icon: '⚡' },
    { title: 'Apparel, Textile & Fabric', icon: '👕' },
    { title: 'Food Processing', icon: '🌾' }
  ];

  return (
    <div className="apply-page">
      {/* SECTION 1: HERO */}
      <section className="apply-hero">
        <div className="apply-hero-glow"></div>
        <div className="container apply-hero-container">
          <div className="apply-hero-left">
            <span className="section-label animate-pill">ADMISSIONS</span>
            <h1 className="apply-hero-title">Apply Now for CORPORA Programs</h1>
            <p className="apply-hero-subtext">
              Start your journey toward practical learning, skill development, career confidence, and future-ready growth with CORPORA.
            </p>
            <div className="apply-hero-actions">
              <button onClick={scrollToForm} className="btn-primary">Start Application</button>
            </div>
          </div>

          <div className="apply-hero-right">
            <div className="apply-hero-visual">
              {/* Abstract 3D Application Scroll SVG */}
              <svg className="apply-visual-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Visual Pathway Ring */}
                <circle cx="200" cy="200" r="130" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="3" strokeDasharray="8 8" />
                
                {/* Custom Vector Scroll */}
                <path d="M120 130 H280 C290 130, 290 170, 280 170 H120 C110 170, 110 130, 120 130 Z" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="3" />
                <path d="M130 170 V270 C130 280, 160 290, 200 290 C240 290, 270 280, 270 270 V170" fill="var(--bg-light)" stroke="var(--brand-navy)" strokeWidth="3" />
                <path d="M150 200 H250" stroke="rgba(11, 15, 25, 0.15)" strokeWidth="3" strokeLinecap="round" />
                <path d="M150 225 H250" stroke="rgba(11, 15, 25, 0.15)" strokeWidth="3" strokeLinecap="round" />
                <path d="M150 250 H210" stroke="rgba(11, 15, 25, 0.15)" strokeWidth="3" strokeLinecap="round" />
                
                {/* Seal Node */}
                <circle cx="250" cy="250" r="18" fill="var(--brand-emerald)" />
                <polygon points="250,238 254,248 264,248 256,254 259,264 250,258 241,264 244,254 236,248 246,248" fill="white" />

                {/* Floating Cap */}
                <path d="M160 105 L200 90 L240 105 L200 120 Z" fill="var(--brand-navy)" stroke="var(--brand-emerald)" strokeWidth="2" />
                <path d="M175 112 V125 C175 132, 225 132, 225 125 V112" fill="var(--brand-navy)" />
                <path d="M232 108 V125" stroke="var(--brand-emerald)" strokeWidth="2" />
                <circle cx="232" cy="125" r="3" fill="var(--brand-emerald)" />
              </svg>

              {/* Floating badges */}
              <div className="apply-float-badge float-badge-1">📁 Quick Approval</div>
              <div className="apply-float-badge float-badge-2">🎓 100% Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPLICATION FORM */}
      <section id="application-form-section" className="apply-form-section section-padding">
        <div className="container">
          <div className="apply-form-container card-3d glass-card">
            {formSubmitted ? (
              <div className="form-success-wrapper">
                <div className="success-icon-shield">✓</div>
                <h3>Application Received</h3>
                <p>Thank you! Your details have been received. Our team will contact you soon.</p>
                <button onClick={() => setFormSubmitted(false)} className="btn-secondary">Submit Another Application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apply-react-form">
                <div className="form-header text-center">
                  <h2>Start Your CORPORA Application</h2>
                  <p>Fill in your basic details and our team will connect with you for guidance, program information, and the next steps.</p>
                </div>

                <div className="form-grid-inputs">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Enter your full name" 
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
                      <label htmlFor="whatsapp">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        name="whatsapp" 
                        placeholder="Enter WhatsApp number (Optional)" 
                        value={formData.whatsapp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
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

                    <div className="form-group">
                      <label htmlFor="city">City / Location</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        required 
                        placeholder="Enter your city" 
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input 
                        type="text" 
                        id="state" 
                        name="state" 
                        required 
                        placeholder="Enter state" 
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="education">Education Level</label>
                      <select id="education" name="education" value={formData.education} onChange={handleChange}>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="ITI">ITI</option>
                        <option value="Diploma">Diploma</option>
                        <option value="BA">BA</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BCA">BCA</option>
                        <option value="B.Pharm">B.Pharm</option>
                        <option value="Other Graduation Course">Other Graduation Course</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="programArea">Interested Program Area</label>
                      <select id="programArea" name="programArea" value={formData.programArea} onChange={handleChange}>
                        <option value="Retail & Customer Service">Retail & Customer Service</option>
                        <option value="Pharma & Healthcare">Pharma & Healthcare</option>
                        <option value="Operations & Supply Chain">Operations & Supply Chain</option>
                        <option value="Automotive & Manufacturing">Automotive & Manufacturing</option>
                        <option value="BFSI & Office Support">BFSI & Office Support</option>
                        <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                        <option value="Electrical & Technical Skills">Electrical & Technical Skills</option>
                        <option value="Apparel, Textile & Fabric">Apparel, Textile & Fabric</option>
                        <option value="Food Processing">Food Processing</option>
                        <option value="Housekeeping & Facility Management">Housekeeping & Facility Management</option>
                        <option value="Not Sure / Need Guidance">Not Sure / Need Guidance</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="status">Current Status</label>
                      <select id="status" name="status" value={formData.status} onChange={handleChange}>
                        <option value="Student">Student</option>
                        <option value="Pass-out">Pass-out</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Looking for Skill Upgrade">Looking for Skill Upgrade</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goal">Preferred Learning Goal</label>
                    <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
                      <option value="Skill Development">Skill Development</option>
                      <option value="Learn & Earn">Learn & Earn</option>
                      <option value="Career Readiness">Career Readiness</option>
                      <option value="Placement Support">Placement Support</option>
                      <option value="Entrepreneurship Confidence">Entrepreneurship Confidence</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Question (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Specify program interest, questions, or timeline preferences..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary apply-submit-btn">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS AFTER YOU APPLY? */}
      <section className="after-apply-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">THE PROCESS</span>
            <h2 className="section-title">What Happens After You Apply?</h2>
            <p className="section-desc">
              Your application triggers a step-by-step career alignment support path to match skills with opportunities.
            </p>
          </div>

          <div className="apply-steps-network">
            {processSteps.map((step, idx) => (
              <div key={idx} className="apply-step-node card-3d glass-card">
                <span className="step-count-badge">{step.step}</span>
                <span className="step-icon-orb">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="step-arrow-line">
                    <span className="arrow-dot"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO SHOULD APPLY? */}
      <section className="who-apply-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">ELIGIBILITY</span>
            <h2 className="section-title">Who Should Apply?</h2>
            <p className="section-desc">
              CORPORA skilling tracks are open to diverse backgrounds seeking to build practical confidence.
            </p>
          </div>

          <div className="who-apply-grid">
            {whoApplyCards.map((card, idx) => (
              <div key={idx} className="apply-eligibility-card card-3d">
                <span className="eligibility-icon">{card.icon}</span>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAM AREAS YOU CAN EXPLORE */}
      <section className="explore-programs-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">DOMAINS</span>
            <h2 className="section-title">Program Areas You Can Explore</h2>
            <p className="section-desc">
              Choose from a wide variety of sector directions matching local employment demands and skilling frameworks.
            </p>
          </div>

          <div className="program-explore-grid">
            {programExplore.map((item, idx) => (
              <div key={idx} className="explore-chip card-3d">
                <span className="chip-icon">{item.icon}</span>
                <span className="chip-text">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="explore-footer text-center">
            <Link to="/programs" className="btn-outline explore-all-btn">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="apply-cta-section section-padding">
        <div className="container">
          <div className="apply-cta-banner">
            <h2>Your Career Growth Journey Starts Here</h2>
            <p>Apply today and take your first step toward practical learning, confidence, and better career direction.</p>
            <button onClick={scrollToForm} className="btn-primary">Submit Application</button>
          </div>
        </div>
      </section>
    </div>
  );
}
