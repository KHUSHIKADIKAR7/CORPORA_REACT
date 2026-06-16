import React from 'react';
import { Link } from 'react-router-dom';
import modelHeroImg from '../../corpora-images/hero/learning_model_hero.png';
import './LearningModel.css';

export default function LearningModel() {
  const whyPracticalCards = [
    {
      title: 'Beyond Theory',
      text: 'Learning should go beyond concepts and help learners understand real application.',
      icon: '🌱',
      colorClass: 'soft-blue-card'
    },
    {
      title: 'Practical Exposure',
      text: 'Exposure helps learners connect learning with real tasks and environments.',
      icon: '🔍',
      colorClass: 'soft-green-card'
    },
    {
      title: 'Skill Development',
      text: 'Skills grow stronger through practice, engagement, and guided effort.',
      icon: '⚡',
      colorClass: 'soft-orange-card'
    },
    {
      title: 'Career Relevance',
      text: 'Learning becomes more valuable when it supports real pathways and future direction.',
      icon: '💼',
      colorClass: 'soft-purple-card'
    }
  ];

  const pathSteps = [
    { title: 'Industry', text: 'gives the experience', icon: '🏭' },
    { title: 'Experience', text: 'gives practical exposure', icon: '🔍' },
    { title: 'Practical Exposure', text: 'gives skill', icon: '🛠️' },
    { title: 'Theory + Skill', text: 'gives right knowledge', icon: '🧠' },
    { title: 'Real Education', text: 'The ultimate outcome of practical learning', icon: '🎓', isFinal: true }
  ];

  const journeySteps = [
    {
      step: '1',
      title: 'Orientation',
      desc: 'Learners understand the program, purpose, and possible direction.',
      icon: '🧭'
    },
    {
      step: '2',
      title: 'Program Selection',
      desc: 'Learners choose a pathway based on interest and future goals.',
      icon: '🎯'
    },
    {
      step: '3',
      title: 'Guided Learning',
      desc: 'Structured learning begins with trainer support and clear foundations.',
      icon: '📖'
    },
    {
      step: '4',
      title: 'Practice & Exposure',
      desc: 'Learners engage with practical tasks and real-use understanding.',
      icon: '🔬'
    },
    {
      step: '5',
      title: 'Readiness Review',
      desc: 'Skills, confidence, and progress are reviewed and strengthened.',
      icon: '🔄'
    },
    {
      step: '6',
      title: 'Career Pathway',
      desc: 'Learners move forward with greater clarity, confidence, and direction.',
      icon: '🚀'
    }
  ];

  const buildQualities = [
    {
      title: 'Practical Understanding',
      desc: 'Learners connect concepts with real situations and expectations.',
      icon: '💡'
    },
    {
      title: 'Skill Confidence',
      desc: 'Practice and exposure help learners become more confident in applying skills.',
      icon: '✅'
    },
    {
      title: 'Career Clarity',
      desc: 'Learners gain better direction about where they can move next.',
      icon: '🧭'
    },
    {
      title: 'Workplace Awareness',
      desc: 'Learners begin to understand behaviour, discipline, and work expectations.',
      icon: '🏢'
    },
    {
      title: 'Growth Mindset',
      desc: 'Learners build a more active and improvement-focused attitude.',
      icon: '📈'
    },
    {
      title: 'Readiness for Opportunity',
      desc: 'Learners become better prepared for future pathways and progression.',
      icon: '🌟'
    }
  ];

  const leftSectors = [
    { title: 'Retail & Customer Service', icon: '🛒' },
    { title: 'Pharma & Healthcare', icon: '🧪' },
    { title: 'Operations & Supply Chain', icon: '📦' },
    { title: 'Hospitality & Tourism', icon: '🏨' },
    { title: 'BFSI & Office Support', icon: '💼' }
  ];

  const rightSectors = [
    { title: 'Automotive & Manufacturing', icon: '🚗' },
    { title: 'Electrical & Technical Skills', icon: '⚡' },
    { title: 'Digital & Data Support', icon: '💻' },
    { title: 'Apparel, Textile & Fabric', icon: '👕' },
    { title: 'Food Processing', icon: '🌾' },
    { title: 'Housekeeping & Facility Management', icon: '🧹' }
  ];

  return (
    <div className="learning-model-page">
      {/* SECTION 1: HERO */}
      <section className="model-hero-section" style={{ backgroundImage: `url(${modelHeroImg})` }}>
        <div className="model-hero-overlay"></div>
        <div className="container model-hero-container">
          <div className="model-hero-left">
            <span className="section-label animate-pill">THE MODEL</span>
            <h1 className="model-hero-title">The CORPORA Learning Model</h1>
            <p className="model-hero-subheading">
              A practical and growth-focused learning approach that helps learners move beyond theory and build real education through exposure, skill, knowledge, and guided development.
            </p>
            <div className="model-hero-actions">
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
              <Link to="/apply-now" className="btn-outline">Apply Now</Link>
            </div>
          </div>
          <div className="model-hero-right-empty"></div>
        </div>
      </section>

      {/* SECTION 2: WHY THIS MODEL MATTERS */}
      <section className="why-model-section section-padding">
        <div className="container why-model-container">
          <div className="why-model-left-panel">
            <span className="section-label">THE NEED</span>
            <h2 className="why-model-title">Why Learning Needs to Be More Practical</h2>
            <p className="why-model-main-intro">
              Many learners complete education but still lack clarity, practical confidence, and real-world readiness. CORPORA uses a more practical learning model that connects understanding with application and growth.
            </p>
          </div>

          <div className="why-model-right-grid">
            {whyPracticalCards.map((card, idx) => (
              <div key={idx} className={`why-practical-card ${card.colorClass}`}>
                <div className="why-card-top">
                  <span className="why-card-icon">{card.icon}</span>
                  <h3 className="why-card-title">{card.title}</h3>
                </div>
                <p className="why-card-desc">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CORPORA PATH TO REAL EDUCATION */}
      <section className="path-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">THE FORMULA</span>
            <h2 className="section-title">The CORPORA Path to Real Education</h2>
            <p className="section-desc">
              At CORPORA, we believe real education is not created by theory alone. It is built step by step through experience, exposure, skill, and meaningful understanding. This learning philosophy forms the core of the CORPORA model.
            </p>
          </div>

          <div className="signature-vertical-timeline">
            <div className="timeline-glowing-line"></div>
            
            <div className="timeline-steps-container">
              {pathSteps.map((step, idx) => {
                if (step.isFinal) {
                  return (
                    <div key={idx} className="timeline-step-row final-outcome-row">
                      <div className="timeline-step-node-card card-3d">
                        <span className="node-icon-wrap">{step.icon}</span>
                        <div className="node-text-wrap">
                          <h4 className="node-title">{step.title}</h4>
                          <p className="node-desc">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                const positionClass = idx % 2 === 0 ? 'left-step' : 'right-step';
                return (
                  <div key={idx} className={`timeline-step-row ${positionClass}`}>
                    <div className="timeline-step-node-card card-3d glass-card">
                      <span className="node-icon-wrap">{step.icon}</span>
                      <div className="node-text-wrap">
                        <h4 className="node-title">{step.title}</h4>
                        <p className="node-desc">{step.text}</p>
                      </div>
                    </div>
                    <div className="timeline-node-dot">
                      <span className="dot-inner"></span>
                    </div>
                    {idx < pathSteps.length - 1 && (
                      <div className="timeline-node-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="var(--brand-emerald)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="timeline-supporting-box glass-card">
              <span className="explanation-badge">HOW IT WORKS</span>
              <p>
                This path explains how real learning becomes meaningful. Industry creates experience. Experience creates practical exposure. Practical exposure develops skill. When theory and skill come together, learners gain the right knowledge. That is what CORPORA calls real education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORPORA LEARNER JOURNEY MAP */}
      <section className="journey-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">THE JOURNEY</span>
            <h2 className="section-title">How Learners Move Through the CORPORA Model</h2>
            <p className="section-desc">
              The CORPORA learner journey is designed to help learners move step by step from orientation to confidence and readiness.
            </p>
          </div>

          <div className="journey-roadmap-container">
            <div className="roadmap-curved-line-svg">
              <svg width="100%" height="100%" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M10 60 C 250 120, 750 0, 990 60" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="4" strokeDasharray="8 8" fill="none" />
              </svg>
            </div>
            
            <div className="roadmap-milestones-grid">
              {journeySteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`roadmap-step-col ${isEven ? 'top-card' : 'bottom-card'}`}>
                    <div className="roadmap-milestone-marker">
                      <span className="milestone-num">{step.step}</span>
                      <span className="milestone-icon">{step.icon}</span>
                    </div>
                    <div className="roadmap-card card-3d glass-card">
                      <h4 className="milestone-title">{step.title}</h4>
                      <p className="milestone-desc">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT LEARNERS BUILD */}
      <section className="build-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">CAPABILITIES</span>
            <h2 className="section-title">What This Learning Model Helps Learners Build</h2>
            <p className="section-desc">
              The CORPORA learning model is designed to build more than information. It helps learners develop qualities that matter for real growth and practical progress.
            </p>
          </div>

          <div className="build-qualities-redesign">
            {buildQualities.map((item, idx) => (
              <div key={idx} className="card-3d build-quality-card glass-card">
                <div className="quality-gradient-glow"></div>
                <div className="quality-accent-bar"></div>
                <div className="quality-icon-bubble">{item.icon}</div>
                <h3 className="quality-title">{item.title}</h3>
                <p className="quality-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LEARNING MODEL ACROSS CAREER AREAS */}
      <section className="multi-sector-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">UNIVERSAL SCOPE</span>
            <h2 className="section-title">One Learning Model, Multiple Career Pathways</h2>
            <p className="section-desc">
              CORPORA’s learning model works across different career areas because the core foundation remains the same: practical exposure, skill development, knowledge-building, and readiness.
            </p>
          </div>

          {/* Hub-and-Spoke Ecosystem Layout */}
          <div className="ecosystem-network-layout">
            <div className="ecosystem-column left-column">
              {leftSectors.map((sector, idx) => (
                <div key={idx} className="ecosystem-spoke-card left-spoke card-3d glass-card">
                  <span className="spoke-icon">{sector.icon}</span>
                  <span className="spoke-title">{sector.title}</span>
                  <div className="spoke-connector-line">
                    <span className="connector-dot"></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="ecosystem-center-hub">
              <div className="hub-center-card card-3d">
                <div className="hub-pulse-border"></div>
                <div className="hub-center-content">
                  <span className="hub-icon">🌱</span>
                  <h3>CORPORA Learning Model</h3>
                  <span className="hub-tag">Multi-Sector Core</span>
                </div>
              </div>
            </div>

            <div className="ecosystem-column right-column">
              {rightSectors.map((sector, idx) => (
                <div key={idx} className="ecosystem-spoke-card right-spoke card-3d glass-card">
                  <div className="spoke-connector-line">
                    <span className="connector-dot"></span>
                  </div>
                  <span className="spoke-icon">{sector.icon}</span>
                  <span className="spoke-title">{sector.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="model-cta-section section-padding">
        <div className="container">
          <div className="model-cta-card">
            <h2 className="cta-headline">Learn the CORPORA Way. Grow with Real Education.</h2>
            <p className="cta-subtext">
              Explore a learning model built on practical exposure, skill development, guided growth, and real understanding.
            </p>
            <Link to="/apply-now" className="btn-primary cta-btn">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
