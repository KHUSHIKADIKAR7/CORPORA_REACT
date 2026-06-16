import React from 'react';
import { Link } from 'react-router-dom';

// Section 2 Image
const imgVisionGrowth = `${import.meta.env.BASE_URL}corpora-images/Other images/about-vision-growth.jpg`;

// Section 5 Image
const imgPharmaTraining = `${import.meta.env.BASE_URL}corpora-images/Other images/pharma-traning.png.jpg`;

// Section 7 Serve Images
const imgStudentSuccess = `${import.meta.env.BASE_URL}corpora-images/Other images/hero-student-success.jpg.png`;
const imgInfrastructure = `${import.meta.env.BASE_URL}corpora-images/Other images/industry-infrastructure-work-01.jpg`;
const imgPlantOverview = `${import.meta.env.BASE_URL}corpora-images/Other images/industry-plant-overview-01.jpg`;
const imgEmployers = `${import.meta.env.BASE_URL}corpora-images/Other images/home-employers.jpg`;

// Program Preview Images
const imgRetail = `${import.meta.env.BASE_URL}corpora-images/programs/retail-customer-service.jpg.jpg`;
const imgPharma = `${import.meta.env.BASE_URL}corpora-images/programs/pharma-healthcare.jpg.jpg`;
const imgLogistics = `${import.meta.env.BASE_URL}corpora-images/programs/logistics-supply-chain.jpg.jpg`;
const imgAutomotive = `${import.meta.env.BASE_URL}corpora-images/programs/automobile-manufacturing.jpg.jpg`;
const imgBfsi = `${import.meta.env.BASE_URL}corpora-images/programs/bfsi-office-support.jpg.jpg`;
const imgHospitality = `${import.meta.env.BASE_URL}corpora-images/programs/hospitality-tourism.jpg.jpg`;

// Section 11 Founder Image
const imgFounder = `${import.meta.env.BASE_URL}corpora-images/founder/founder.jpg.jpg`;

import './About.css';

export default function About() {
  const whyExistsGaps = [
    {
      title: 'The Practical Learning Gap',
      text: 'Standard academics delivers conceptual understanding but lacks hands-on practice, leaving candidates raw for professional tasks.'
    },
    {
      title: 'The Workplace Exposure Gap',
      text: 'Learners enter active companies without understanding professional workflows, safety briefing standards, or teamwork ethics.'
    },
    {
      title: 'The Presentation Confidence Gap',
      text: 'Candidates often possess graduation certificates but lack mock interview preparation, resume styling, and communication training.'
    },
    {
      title: 'The Guidance Gap',
      text: 'Many students make sector decisions without career counselling, resulting in mismatch between interest and job roles.'
    }
  ];

  const philosophySteps = [
    {
      title: 'Learn with Purpose',
      text: 'Align skilling tracks with interest, educational background, and sector growth pathways.'
    },
    {
      title: 'Practice with Guidance',
      text: 'Acquire capabilities through structured exercises, operational toolkits, and interactive modules.'
    },
    {
      title: 'Build Skills through Experience',
      text: 'Bridge theory and execution by studying actual workplace operations and safety briefs.'
    },
    {
      title: 'Grow with Confidence',
      text: 'Refine professional grooming, mock interviews, and work-integrated communication.'
    },
    {
      title: 'Move Toward Opportunity',
      text: 'Secure access to traineeships, apprenticeships, and employment readiness connections.'
    }
  ];

  const differentiatorCards = [
    {
      title: 'Practical vs. Theoretical Learning',
      text: 'Interactive skilling models focused on doing, utilizing tools and workspace case studies.'
    },
    {
      title: 'Career-Focused Support',
      text: 'Every learning element is mapped directly to actual job pathways and employability requirements.'
    },
    {
      title: 'Guided Learner Journey',
      text: 'From initial career counselling to final confidence preparation, candidates receive mentoring.'
    },
    {
      title: 'Learn & Earn Mindset',
      text: 'Vocational training tracks enabling learners to build earning orientation early in their career.'
    },
    {
      title: 'Multi-Sector Skilling',
      text: 'Upskilling options spanning retail, pharma, logistics, offices, tech, and services.'
    },
    {
      title: 'Confidence & Readiness',
      text: 'Building presentation ethics and soft capabilities alongside technical skilling.'
    }
  ];

  const whoWeServe = [
    {
      image: imgStudentSuccess,
      title: 'Students',
      text: 'Complement graduation streams with high-demand skilling modules and employability confidence.'
    },
    {
      image: imgInfrastructure,
      title: 'Young Learners / Job Seekers',
      text: 'Accelerate entry into the workforce with specialized learn & earn modules.'
    },
    {
      image: imgPlantOverview,
      title: 'Colleges & Institutions',
      text: 'Integrate career-centric training tracks to boost student placement readiness.'
    },
    {
      image: imgEmployers,
      title: 'Employers / Partners',
      text: 'Source qualified, groomed, and workplace-ready talent aligned with operational needs.'
    }
  ];

  const programCategories = [
    {
      title: 'Retail & Customer Service',
      description: 'Explore customer coordination, retail operations, billing setups, sales, and retail store management.',
      image: imgRetail
    },
    {
      title: 'Pharma & Healthcare',
      description: 'Medicine manufacturing basics, documentation controls, safety hygiene, and clinic support.',
      image: imgPharma
    },
    {
      title: 'Operations & Supply Chain',
      description: 'Warehouse workflows, inventory tracking, dispatch processes, and logistics coordination.',
      image: imgLogistics
    },
    {
      title: 'Automotive & Manufacturing',
      description: 'Vehicle assembly technology, quality check processes, workshop technology, and assembly safety.',
      image: imgAutomotive
    },
    {
      title: 'BFSI & Office Support',
      description: 'Office documentation basics, computer applications, banking, and admin coordination.',
      image: imgBfsi
    },
    {
      title: 'Hospitality & Tourism',
      description: 'Hotel operations, front office management, guest handling, and customer relations.',
      image: imgHospitality
    }
  ];

  const approachFlow = [
    { step: '01', title: 'Learning', text: 'Gaining core domain understanding under expert mentors.' },
    { step: '02', title: 'Practice', text: 'Engaging with interactive modules and workspace tools.' },
    { step: '03', title: 'Exposure', text: 'Studying active operations, safety rules, and workspace setups.' },
    { step: '04', title: 'Confidence', text: 'Preparing for interviews, presentation ethics, and resume styling.' },
    { step: '05', title: 'Grow / Earn', text: 'Entering professional career pathways and unlocking independence.' }
  ];

  return (
    <div className="about-page">
      {/* SECTION 1: ABOUT HERO (Connected 3D Ecosystem Design) */}
      <section className="about-hero-section">
        {/* Moving gradient background */}
        <div className="hero-gradient-bg"></div>
        
        {/* Floating abstract 3D shapes in the background */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>

        <div className="container about-hero-container">
          {/* Left Side: Content */}
          <div className="about-hero-content-left">
            <span className="category-pill animate-pill">OUR MISSION</span>
            <h1 className="about-hero-title">About CORPORA</h1>
            <p className="about-hero-subtitle">
              A practical education and career development platform helping learners move from classroom knowledge to real-world confidence.
            </p>
          </div>

          {/* Right Side: The 3D Connected Ecosystem */}
          <div className="about-hero-ecosystem-wrapper">
            <div className="ecosystem-container-3d">
              {/* Animated Connecting Lines */}
              <svg className="ecosystem-svg-lines" viewBox="0 0 500 500">
                {/* Lines from center (250, 250) to the six positions */}
                <line x1="250" y1="250" x2="250" y2="70" className="eco-line line-students" />
                <line x1="250" y1="250" x2="420" y2="160" className="eco-line line-institutions" />
                <line x1="250" y1="250" x2="420" y2="340" className="eco-line line-programs" />
                <line x1="250" y1="250" x2="250" y2="430" className="eco-line line-mentors" />
                <line x1="250" y1="250" x2="80" y2="340" className="eco-line line-employers" />
                <line x1="250" y1="250" x2="80" y2="160" className="eco-line line-pathways" />
              </svg>

              {/* Central Core: CORPORA */}
              <div className="ecosystem-node node-core">
                <div className="core-inner">
                  <span className="core-logo-glow"></span>
                  <span className="core-text">CORPORA</span>
                </div>
              </div>

              {/* Outer Nodes */}
              <div className="ecosystem-node node-outer students">
                <div className="node-icon-wrap">🎓</div>
                <span className="node-label">Students</span>
              </div>
              
              <div className="ecosystem-node node-outer institutions">
                <div className="node-icon-wrap">🏫</div>
                <span className="node-label">Institutions</span>
              </div>
              
              <div className="ecosystem-node node-outer programs">
                <div className="node-icon-wrap">📋</div>
                <span className="node-label">Programs</span>
              </div>
              
              <div className="ecosystem-node node-outer mentors">
                <div className="node-icon-wrap">👥</div>
                <span className="node-label">Mentors</span>
              </div>
              
              <div className="ecosystem-node node-outer employers">
                <div className="node-icon-wrap">💼</div>
                <span className="node-label">Employers</span>
              </div>
              
              <div className="ecosystem-node node-outer pathways">
                <div className="node-icon-wrap">🧭</div>
                <span className="node-label">Pathways</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS CORPORA? */}
      <section className="about-intro-section section-padding">
        <div className="glow-blob blob-about-intro"></div>
        <div className="container about-intro-container-full">
          <div className="about-intro-detailed-content">
            <span className="category-pill">OVERVIEW</span>
            <h2 className="section-title">What is CORPORA?</h2>
            
            <div className="about-intro-main-grid">
              <div className="about-intro-left-text">
                <p className="about-intro-lead">
                  CORPORA is a practical education, skill development, and career growth platform designed to help learners move beyond classroom learning. It connects education with real-world skills, guided exposure, employability development, and learn &amp; earn pathways.
                </p>
                <p className="about-intro-text">
                  The purpose of CORPORA is to make learning more practical, useful, and connected with real opportunities. Instead of focusing only on certificates, CORPORA focuses on practical understanding, workplace readiness, communication, confidence, and career pathways.
                </p>
              </div>
              
              <div className="about-intro-right-features">
                <h4 className="supports-title">Who CORPORA Supports:</h4>
                <ul className="supports-list">
                  <li>
                    <span className="supports-check">✓</span>
                    <div>
                      <strong>Students</strong>
                      <p>Who want clarity, skills, and confidence for their next professional steps.</p>
                    </div>
                  </li>
                  <li>
                    <span className="supports-check">✓</span>
                    <div>
                      <strong>Young Learners</strong>
                      <p>Looking for clear, practical career direction and skilling.</p>
                    </div>
                  </li>
                  <li>
                    <span className="supports-check">✓</span>
                    <div>
                      <strong>Institutions</strong>
                      <p>That want to strengthen employability benchmarks for their graduates.</p>
                    </div>
                  </li>
                  <li>
                    <span className="supports-check">✓</span>
                    <div>
                      <strong>Employers &amp; Partners</strong>
                      <p>Looking for future-ready, groomed, and capable talent.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-intro-sectors-banner">
              <p>
                <strong>Not Limited to One Sector:</strong> CORPORA works across multiple career areas such as retail, healthcare, pharma, office support, operations, hospitality, manufacturing, digital support, and service-sector opportunities.
              </p>
            </div>

            {/* 4 Detailed Highlight Cards */}
            <div className="about-intro-highlights-grid">
              <div className="highlight-card card-3d glass-card">
                <div className="highlight-icon">🛠️</div>
                <h3 className="highlight-title">Practical Learning</h3>
                <p className="highlight-text">
                  Learning that connects concepts with real tasks, skills, and workplace expectations.
                </p>
              </div>
              <div className="highlight-card card-3d glass-card">
                <div className="highlight-icon">🚀</div>
                <h3 className="highlight-title">Career Readiness</h3>
                <p className="highlight-text">
                  Guidance, confidence-building, interview preparation, and employability support for better career movement.
                </p>
              </div>
              <div className="highlight-card card-3d glass-card">
                <div className="highlight-icon">💰</div>
                <h3 className="highlight-title">Learn &amp; Earn Mindset</h3>
                <p className="highlight-text">
                  Helping learners build the confidence to move from learning to earning through structured pathways.
                </p>
              </div>
              <div className="highlight-card card-3d glass-card">
                <div className="highlight-icon">🌐</div>
                <h3 className="highlight-title">Multi-Sector Growth</h3>
                <p className="highlight-text">
                  Programs and exposure across different career domains, not limited to one industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CORPORA EXISTS */}
      <section className="why-exists-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">THE CHALLENGE</span>
            <h2 className="section-title">Why CORPORA Exists</h2>
            <p className="section-desc">Many students complete traditional graduation programs but face significant gaps in practical capability and workspace confidence.</p>
          </div>
          
          <div className="why-exists-grid">
            {whyExistsGaps.map((gap, idx) => (
              <div key={idx} className="card-3d gap-card glass-card">
                <span className="gap-card-icon">⚡</span>
                <h3 className="gap-card-title">{gap.title}</h3>
                <p className="gap-card-text">{gap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VISION & MISSION */}
      <section className="vision-mission-section section-padding">
        <div className="glow-blob blob-vision-mission"></div>
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-mission-card glass-card">
              <span className="card-icon-wrap">👁️</span>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To build a universal learning model where every student moves with earning confidence, career readiness, and the practical capability to succeed in any modern sector.
              </p>
            </div>
            
            <div className="vision-mission-card glass-card">
              <span className="card-icon-wrap">🎯</span>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To bridge the academic-industry gap by delivering work-integrated learning, career guidance, and multi-sector opportunity connections to youth and young learners.
              </p>
            </div>
          </div>

          <div className="mission-pillars-header text-center">
            <h3 className="pillars-section-title">Our Strategic Pillars</h3>
          </div>

          <div className="mission-pillars-grid">
            <div className="pillar-item glass-card">
              <h4>Practical Education</h4>
              <p>Focusing on execution and actual tools rather than memory benchmarks.</p>
            </div>
            <div className="pillar-item glass-card">
              <h4>Employability</h4>
              <p>Structuring training to address real needs from modern corporate employers.</p>
            </div>
            <div className="pillar-item glass-card">
              <h4>Confidence Building</h4>
              <p>Grooming candidates for presentation, mock interviews, and work communication.</p>
            </div>
            <div className="pillar-item glass-card">
              <h4>Guided Growth</h4>
              <p>Continuous mentoring, counselling, and orientation pathways.</p>
            </div>
            <div className="pillar-item glass-card">
              <h4>Multi-Sector Opportunities</h4>
              <p>Unlocking pathways across retail, operations, office support, and tech.</p>
            </div>
            <div className="pillar-item glass-card">
              <h4>Future-Ready Learners</h4>
              <p>Cultivating adaptability, workplace safety discipline, and growth ethics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE CORPORA PHILOSOPHY */}
      <section className="about-philosophy-section section-padding">
        <div className="container philosophy-container">
          <div className="about-philosophy-visual">
            <div className="philosophy-img-card card-3d">
              <img src={imgPharmaTraining} alt="Practical learning session" className="philosophy-img" />
              <div className="philosophy-img-overlay">
                <span>Guidance in Action</span>
              </div>
            </div>
          </div>
          <div className="about-philosophy-content">
            <span className="category-pill">THE PHILOSOPHY</span>
            <h2 className="section-title">The CORPORA Path to Real Education</h2>
            <p className="philosophy-lead">
              Our philosophy translates skilling into structured personal and professional advancement.
            </p>
            
            <div className="philosophy-steps-list">
              {philosophySteps.map((step, idx) => (
                <div key={idx} className="phil-step-item">
                  <span className="phil-bullet">&bull;</span>
                  <div className="phil-step-info">
                    <h4 className="phil-step-title">{step.title}</h4>
                    <p className="phil-step-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT MAKES CORPORA DIFFERENT */}
      <section className="different-section section-padding">
        <div className="glow-blob blob-diff"></div>
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">OUR EDGE</span>
            <h2 className="section-title">What Makes CORPORA Different</h2>
            <p className="section-desc">We deliver structured value designed for employability, not just certificate completion.</p>
          </div>
          
          <div className="different-grid">
            {differentiatorCards.map((diff, idx) => (
              <div key={idx} className="card-3d diff-card glass-card">
                <span className="diff-badge">✓</span>
                <h3 className="diff-title">{diff.title}</h3>
                <p className="diff-text">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO CORPORA SERVES */}
      <section className="serve-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">WHO WE SUPPORT</span>
            <h2 className="section-title">Who CORPORA Serves</h2>
            <p className="section-desc">We build bridges for students, young learners, universities, and corporate recruitment networks.</p>
          </div>
          
          <div className="serve-grid">
            {whoWeServe.map((serve, idx) => (
              <div key={idx} className="card-3d serve-card glass-card">
                <div className="serve-img-wrap">
                  <img src={serve.image} alt={serve.title} className="serve-img" />
                </div>
                <div className="serve-card-content">
                  <h3 className="serve-card-title">{serve.title}</h3>
                  <p className="serve-card-text">{serve.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PROGRAMS & CAREER AREAS */}
      <section className="programs-preview-section section-padding">
        <div className="glow-blob blob-programs"></div>
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">SPECIALIZATION</span>
            <h2 className="section-title">Programs &amp; Career Areas</h2>
            <p className="section-desc">Choose from high-growth programs designed to align with your personal objectives and sector growth.</p>
          </div>
          
          <div className="programs-grid">
            {programCategories.map((program, idx) => (
              <div key={idx} className="card-3d program-card glass-card">
                <div className="program-img-wrap">
                  <img src={program.image} alt={program.title} className="program-img" />
                </div>
                <div className="program-card-content">
                  <h3 className="program-card-title">{program.title}</h3>
                  <p className="program-card-desc">{program.description}</p>
                  <Link to="/programs" className="program-link">Explore Program &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LEARN & EARN APPROACH */}
      <section className="approach-flow-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">THE FLOW</span>
            <h2 className="section-title">Our Learn &amp; Earn Approach</h2>
            <p className="section-desc">Our model provides a logical pathway enabling youth to build earning orientation while upskilling.</p>
          </div>
          
          <div className="flow-timeline">
            <div className="flow-line"></div>
            <div className="flow-grid">
              {approachFlow.map((flow, idx) => (
                <div key={idx} className="flow-step-item">
                  <div className="flow-node-wrap">
                    <span className="flow-node"></span>
                  </div>
                  <span className="flow-num">{flow.step}</span>
                  <h3 className="flow-title">{flow.title}</h3>
                  <p className="flow-desc">{flow.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: TRUST & LEGACY */}
      <section className="trust-legacy-section section-padding">
        <div className="glow-blob blob-legacy"></div>
        <div className="container trust-legacy-grid">
          <div className="legacy-text-content">
            <span className="category-pill">TRUST &amp; VALUE</span>
            <h2 className="section-title">Academic Credibility &amp; Recruitment Legacy</h2>
            <p className="legacy-lead">
              CORPORA is built on a foundation of professional recruitment trust and analytical training structures.
            </p>
            <p className="legacy-body-text">
              We leverage the legacy of Bhakti Management Services Pvt. Ltd. (established in 1998), which has spent decades delivering trusted HR solutions, recruitment parameters, and placement consultation. 
            </p>
            <p className="legacy-body-text">
              Paired with Col. Dr. B. D. Gupta's academic foundation from IIT Kanpur, military discipline, and HR experience, we ensure that every student development program is structured around actual corporate trust.
            </p>
            
            <div className="legacy-points">
              <div className="legacy-point">
                <span className="point-icon">✓</span>
                <span>IIT Kanpur Alumnus Leadership</span>
              </div>
              <div className="legacy-point">
                <span className="point-icon">✓</span>
                <span>Bhakti Recruitment Legacy Since 1998</span>
              </div>
              <div className="legacy-point">
                <span className="point-icon">✓</span>
                <span>Defence Discipline &amp; Presentation Standards</span>
              </div>
            </div>
          </div>
          <div className="legacy-visual">
            <div className="legacy-founder-card glass-card">
              <img src={imgFounder} alt="Col. Dr. B. D. Gupta" className="legacy-founder-img" />
              <div className="legacy-founder-badge">
                <span className="founder-name">Col. Dr. B. D. Gupta</span>
                <span className="founder-role">Founder, CORPORA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="home-final-cta section-padding">
        <div className="container">
          <div className="home-final-cta-card">
            <h2 className="cta-headline">Build Real Skills. Grow with CORPORA.</h2>
            <p className="cta-subtext">
              Explore practical learning, career guidance, and growth pathways designed to help learners move forward with confidence.
            </p>
            <div className="cta-buttons">
              <Link to="/programs" className="btn-primary-glow">Explore Programs</Link>
              <Link to="/apply-now" className="btn-outline-white-glow">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
