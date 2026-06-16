import React from 'react';
import { Link } from 'react-router-dom';

// Final Hero Image
const imgHero = `${import.meta.env.BASE_URL}hero/Home_hero.jpg`;

// Section 2 Ecosystem Image
const imgEcosystem = `${import.meta.env.BASE_URL}Other images/corpora-ecosystem-overview.png.png`;

// Section 4 Serve Images
const imgStudentSuccess = `${import.meta.env.BASE_URL}Other images/hero-student-success.jpg.png`;
const imgInfrastructure = `${import.meta.env.BASE_URL}Other images/industry-infrastructure-work-01.jpg`;
const imgPlantOverview = `${import.meta.env.BASE_URL}Other images/industry-plant-overview-01.jpg`;
const imgEmployers = `${import.meta.env.BASE_URL}Other images/home-employers.jpg`;

// Program Images
const imgRetail = `${import.meta.env.BASE_URL}programs/retail-customer-service.jpg.jpg`;
const imgPharma = `${import.meta.env.BASE_URL}programs/pharma-healthcare.jpg.jpg`;
const imgLogistics = `${import.meta.env.BASE_URL}programs/logistics-supply-chain.jpg.jpg`;
const imgAutomotive = `${import.meta.env.BASE_URL}programs/automobile-manufacturing.jpg.jpg`;
const imgBfsi = `${import.meta.env.BASE_URL}programs/bfsi-office-support.jpg.jpg`;
const imgHospitality = `${import.meta.env.BASE_URL}programs/hospitality-tourism.jpg.jpg`;

// Founder Image
const imgFounder = `${import.meta.env.BASE_URL}founder/founder.jpg.jpg`;

import './Home.css';

export default function Home() {
  const philosophyItems = [
    {
      num: '01',
      title: 'Learn with Purpose',
      text: 'Align your skilling path directly with personal interests, domain growth, and career objectives.'
    },
    {
      num: '02',
      title: 'Build Practical Skills',
      text: 'Engage with hands-on assignments and actual tools rather than relying on theory alone.'
    },
    {
      num: '03',
      title: 'Gain Exposure',
      text: 'Understand operational standards, safety discipline, and professional workflows.'
    },
    {
      num: '04',
      title: 'Grow with Confidence',
      text: 'Develop workplace presentation, grooming, and effective communication skills.'
    },
    {
      num: '05',
      title: 'Move Toward Career Readiness',
      text: 'Prepare to enter active environments equipped with the capability to contribute immediately.'
    }
  ];

  const whoWeServe = [
    {
      image: imgStudentSuccess,
      title: 'Students & Young Learners',
      text: 'Complement academic graduation with practical employability skills and confidence.'
    },
    {
      image: imgInfrastructure,
      title: 'Colleges & Institutions / Training Infrastructure',
      text: 'Elevate campus placement readiness and offer career-centric training tracks.'
    },
    {
      image: imgPlantOverview,
      title: 'Operations / Workplace Exposure',
      text: 'Access specialized training, upskilling modules, and direct learn & earn pathways.'
    },
    {
      image: imgEmployers,
      title: 'Employers & Partners',
      text: 'Connect with a reliable pipeline of groomed, qualified, and workplace-ready talent.'
    }
  ];

  const whatWeDo = [
    {
      icon: '🎯',
      title: 'Skill Development',
      text: 'Multi-sector training modules built around operational demands.'
    },
    {
      icon: '🗣️',
      title: 'Career Counselling',
      text: 'Guiding candidates to identify growth pathways and set clear objectives.'
    },
    {
      icon: '⚙️',
      title: 'Practical Training',
      text: 'Experiential learning setups focusing on actual domain tools.'
    },
    {
      icon: '💸',
      title: 'Learn & Earn Pathways',
      text: 'Enabling trainees to build earning capacity during their learning journey.'
    },
    {
      icon: '👔',
      title: 'Interview & Workplace Readiness',
      text: 'Polishing professional presentation, grooming, and mock interviews.'
    },
    {
      icon: '📈',
      title: 'Placement & Opportunity Support',
      text: 'Opening doors through corporate partner connections.'
    }
  ];

  const programCategories = [
    {
      title: 'Retail & Customer Service',
      description: 'Customer coordination, billing setups, retail operations, and retail counter management.',
      image: imgRetail
    },
    {
      title: 'Pharma & Healthcare',
      description: 'Medicine production basics, safety guidelines, documentation, and medical admin support.',
      image: imgPharma
    },
    {
      title: 'Operations & Supply Chain',
      description: 'Warehouse workflows, inventory tracking, dispatch, packaging, and stock movement.',
      image: imgLogistics
    },
    {
      title: 'Automotive & Manufacturing',
      description: 'Vehicle assembly technology, quality assurance checks, and workshop tool awareness.',
      image: imgAutomotive
    },
    {
      title: 'BFSI & Office Support',
      description: 'Office documentation basics, computer applications, banking, and administration coordination.',
      image: imgBfsi
    },
    {
      title: 'Hospitality & Tourism',
      description: 'Front office management, hotel operations, guest handling, and customer relations.',
      image: imgHospitality
    }
  ];

  const modelSteps = [
    { step: '01', title: 'Learn', text: 'Understand core domain concepts and operational guidelines.' },
    { step: '02', title: 'Practice', text: 'Engage with practical training modules and domain tools.' },
    { step: '03', title: 'Get Exposure', text: 'Study active workspace operations and safety standards.' },
    { step: '04', title: 'Build Confidence', text: 'Polish mock interviews, communication, and professional presentation.' },
    { step: '05', title: 'Earn / Grow', text: 'Secure employment pathways and move toward personal advancement.' }
  ];

  const whyCorpora = [
    {
      title: 'Practical, Career-Focused Learning',
      text: 'Curriculum structured directly around execution, domain tools, and operational skills.'
    },
    {
      title: 'Multi-Sector Program Options',
      text: 'Choose from a broad range of service, office, digital, and technical programs.'
    },
    {
      title: 'Industry and Workplace Exposure',
      text: 'Gain live exposure to actual workplaces, operational settings, and safety standards.'
    },
    {
      title: 'Guidance, Mentorship, and Confidence Building',
      text: 'Continuous mentoring, interview prep, grooming, and resume styling support.'
    },
    {
      title: 'Backed by Bhakti Management Experience',
      text: 'Utilizing decades of corporate recruitment trust to align training with employer expectations.'
    },
    {
      title: 'Designed for Real Employability',
      text: 'Focusing on capabilities that help students contribute from day one on the job.'
    }
  ];

  const ecosystemNodes = [
    { icon: '👥', name: 'Students', desc: 'Seeking Practical Skills' },
    { icon: '🏫', name: 'Institutions', desc: 'Offering Degrees' },
    { icon: '⚡', name: 'Training', desc: 'Domain Skilling' },
    { icon: '💼', name: 'Employers', desc: 'Providing Pathways' },
    { icon: '🧭', name: 'Mentors', desc: 'Guiding Growth' },
    { icon: '🚀', name: 'Career Pathways', desc: 'Earning & Progress' }
  ];

  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero-section" style={{ '--hero-bg-img': `url(${imgHero})` }}>
        <div className="glow-blob blob-hero-1"></div>
        <div className="glow-blob blob-hero-2"></div>
        <div className="container hero-container">
          <div className="hero-left">
            <span className="category-pill animate-pill">WORK-INTEGRATED EDUCATION</span>
            <h1 className="hero-title">
              Real Learning.<br />
              Real Skills.<br />
              Real <span className="text-highlight">Career Growth.</span>
            </h1>
            <p className="hero-subtitle">
              CORPORA helps students and young learners move beyond classroom learning through practical skilling, career guidance, work exposure, and learn &amp; earn pathways.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn-primary-glow">Explore Programs</Link>
              <Link to="/apply-now" className="btn-outline-glow">Apply Now</Link>
            </div>
          </div>
          
          <div className="hero-right-empty"></div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS CORPORA */}
      <section className="about-section section-padding">
        <div className="glow-blob blob-about"></div>
        <div className="container about-container">
          <div className="about-text-content">
            <span className="category-pill">WHO WE ARE</span>
            <h2 className="section-title">What is CORPORA?</h2>
            <p className="about-lead">
              CORPORA is a practical education and career development platform that connects learning with real-world skills, earning confidence, and career pathways.
            </p>
            <p className="about-body-text">
              We complement traditional academic graduation by delivering domain-focused skills and professional presentation guidance. We help students and youth transition from theoretical understanding to career-ready execution.
            </p>
          </div>
          <div className="about-visual">
            <div className="ecosystem-img-card card-3d">
              <img src={imgEcosystem} alt="CORPORA Ecosystem Overview" className="ecosystem-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">OUR FOUNDATION</span>
            <h2 className="section-title">The CORPORA Path to Real Education</h2>
            <p className="section-desc">We believe learning is complete only when it connects directly with purpose, execution, and confidence.</p>
          </div>
          <div className="philosophy-grid">
            {philosophyItems.map((item, idx) => (
              <div key={idx} className="philosophy-card glass-card">
                <span className="philosophy-num">{item.num}</span>
                <div className="philosophy-card-content">
                  <h3 className="philosophy-card-title">{item.title}</h3>
                  <p className="philosophy-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE SERVE */}
      <section className="serve-section section-padding">
        <div className="glow-blob blob-serve"></div>
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">PARTNERS IN GROWTH</span>
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-desc">We coordinate learning models for multiple key segments of the career readiness ecosystem.</p>
          </div>
          <div className="serve-grid">
            {whoWeServe.map((segment, idx) => (
              <div key={idx} className="card-3d serve-card glass-card">
                <div className="serve-img-wrap">
                  <img src={segment.image} alt={segment.title} className="serve-img" />
                </div>
                <div className="serve-card-content">
                  <h3 className="serve-card-title">{segment.title}</h3>
                  <p className="serve-card-text">{segment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE DO */}
      <section className="do-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">OUR CAPABILITIES</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-desc">We deliver structured career readiness initiatives tailored to candidates and institutions.</p>
          </div>
          <div className="do-grid">
            {whatWeDo.map((action, idx) => (
              <div key={idx} className="card-3d do-card glass-card">
                <span className="do-badge-icon">{action.icon}</span>
                <h3 className="do-card-title">{action.title}</h3>
                <p className="do-card-text">{action.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPLORE PROGRAMS */}
      <section className="programs-preview-section section-padding">
        <div className="glow-blob blob-programs"></div>
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="category-pill">SPECIALIZED PROGRAMS</span>
              <h2 className="section-title">Explore Our Skilling Programs</h2>
            </div>
            <Link to="/programs" className="btn-outline-glow">View All Programs</Link>
          </div>
          <p className="section-desc">Focusing on high-growth pathways across multiple sectors to build practical employability skills.</p>
          
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

      {/* SECTION 7: LEARN & EARN MODEL */}
      <section className="model-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">LEARN &amp; EARN</span>
            <h2 className="section-title">The Learn &amp; Earn Model</h2>
            <p className="section-desc">A step-by-step pathway helping students learn practical skills while building earning confidence and career direction.</p>
          </div>
          <div className="model-grid">
            {modelSteps.map((step, idx) => (
              <div key={idx} className="model-card glass-card">
                <span className="model-num">{step.step}</span>
                <h3 className="model-title">{step.title}</h3>
                <p className="model-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CORPORA */}
      <section className="why-section section-padding">
        <div className="glow-blob blob-why"></div>
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">CHOOSE CORPORA</span>
            <h2 className="section-title">Why CORPORA</h2>
            <p className="section-desc">We emphasize results and capabilities that support professional growth.</p>
          </div>
          <div className="why-grid">
            {whyCorpora.map((item, idx) => (
              <div key={idx} className="card-3d why-card glass-card">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CORPORA ECOSYSTEM */}
      <section className="ecosystem-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">THE SYSTEM</span>
            <h2 className="section-title">The CORPORA Ecosystem</h2>
            <p className="section-desc">Connecting critical stakeholder tracks to unlock professional growth pathways.</p>
          </div>
          <div className="ecosystem-grid">
            {ecosystemNodes.map((node, idx) => (
              <div key={idx} className="ecosystem-card glass-card">
                <span className="eco-icon">{node.icon}</span>
                <h3 className="eco-title">{node.name}</h3>
                <p className="eco-desc">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TRUST & LEGACY */}
      <section className="founder-section section-padding">
        <div className="glow-blob blob-founder"></div>
        <div className="container founder-grid">
          <div className="founder-visual">
            <div className="founder-img-card glass-card">
              <img src={imgFounder} alt="Col. Dr. B. D. Gupta" className="founder-img" />
              <div className="founder-badge">
                <span className="founder-name">Col. Dr. B. D. Gupta</span>
                <span className="founder-role">Founder, CORPORA</span>
              </div>
            </div>
          </div>
          <div className="founder-text-content">
            <span className="category-pill">TRUST &amp; LEGACY</span>
            <h2 className="section-title">Academic Credibility &amp; Recruitment Trust</h2>
            <p className="founder-lead">
              CORPORA is built on academic credibility, veteran leadership, and corporate recruitment trust.
            </p>
            <p className="founder-body-text">
              Our vision is guided by Col. Dr. B. D. Gupta. Dr. Gupta holds an academic background from IIT Kanpur, pairing military-grade discipline with decades of corporate HR experience.
            </p>
            <p className="founder-body-text">
              We leverage the legacy of Bhakti Management Services, which has provided trusted recruitment, HR planning, and career guidance since 1998, ensuring our training matches employer trust.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: CTA BOX */}
      <section className="home-final-cta section-padding">
        <div className="container">
          <div className="home-final-cta-card">
            <h2 className="cta-headline">Start Your Real Learning Journey with CORPORA</h2>
            <p className="cta-subtext">
              Explore practical programs, build career confidence, and move toward better opportunities with guided support.
            </p>
            <div className="cta-buttons">
              <Link to="/apply-now" className="btn-primary-glow">Apply Now</Link>
              <Link to="/contact" className="btn-outline-white-glow">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
