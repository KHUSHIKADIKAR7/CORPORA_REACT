import React from 'react';
import { Link } from 'react-router-dom';
const heroBg = `${import.meta.env.BASE_URL}hero/career-pathways-hero.jpg`;
import './CareerPathways.css';

export default function CareerPathways() {

  const programCategories = [
    {
      title: 'Manufacturing & Production Programs',
      desc: 'Programs focused on modern industrial production, quality control, assembly operations, and machine operations foundations.',
      suits: 'Suits: 10th, 12th, ITI, Diploma, and Graduates seeking production pathways.',
      icon: '🏭'
    },
    {
      title: 'Pharma & Chemical Programs',
      desc: 'Programs focused on chemical processing, cleanroom operations, pharmaceutical safety, and packaging standards.',
      suits: 'Suits: B.Pharm, BSc, Diploma, and Graduates aiming for pharmaceutical operations.',
      icon: '🧪'
    },
    {
      title: 'Electrical, Electronics & Technical Programs',
      desc: 'Programs covering wiring standards, panel assembly, technical servicing, and household appliance systems.',
      suits: 'Suits: ITI, Diploma, and technical domain learners.',
      icon: '⚡'
    },
    {
      title: 'Apparel, Textile & Fabric Programs',
      desc: 'Programs teaching fabric inspection, sewing machine operations, tailoring skills, and textile quality.',
      suits: 'Suits: 10th, 12th, and learners looking for apparel sector pathways.',
      icon: '👕'
    },
    {
      title: 'Food Processing Programs',
      desc: 'Programs covering food packaging, hygiene regulations, storage standards, and bakery/processing line operations.',
      suits: 'Suits: 10th, 12th, and graduates interested in food processing sectors.',
      icon: '🌾'
    },
    {
      title: 'Hospitality & Facility Management Programs',
      desc: 'Programs focused on customer hospitality, housekeeping standards, laundry management, and office facility support.',
      suits: 'Suits: 10th, 12th, BA, and graduates seeking service-oriented pathways.',
      icon: '🏨'
    },
    {
      title: 'Logistics & Supply Chain Programs',
      desc: 'Programs teaching inventory management, warehouse safety, supply chain documentation, and dispatch tracking.',
      suits: 'Suits: 10th, 12th, B.Com, and graduates interested in logistics pathways.',
      icon: '📦'
    }
  ];

  const careerLadderSteps = [
    {
      num: '1',
      title: 'Start Learning',
      desc: 'Build core foundations and understand basic standards.'
    },
    {
      num: '2',
      title: 'Build Skills',
      desc: 'Practice hands-on operations and master key tools.'
    },
    {
      num: '3',
      title: 'Gain Confidence',
      desc: 'Apply knowledge in simulated work environments.'
    },
    {
      num: '4',
      title: 'Become Career Ready',
      desc: 'Develop workplace behaviour, discipline, and interview readiness.'
    },
    {
      num: '5',
      title: 'Move Toward Opportunities',
      desc: 'Step into internships, industry placements, and pathways.'
    }
  ];

  const sectorCards = [
    {
      title: 'Retail & Customer Service',
      desc: 'Mapped to customer-facing, retail operations, and communication pathways.',
      icon: '🛒'
    },
    {
      title: 'Pharma & Healthcare',
      desc: 'Mapped to lab awareness, drug production support, and medical operations.',
      icon: '🧪'
    },
    {
      title: 'Operations & Supply Chain',
      desc: 'Mapped to warehouse coordination, inventory tracking, and dispatch lines.',
      icon: '📦'
    },
    {
      title: 'Hospitality & Tourism',
      desc: 'Mapped to front office, facility housekeeping, and client service roles.',
      icon: '🏨'
    },
    {
      title: 'BFSI & Office Support',
      desc: 'Mapped to financial document processing, back-office data, and client coordination.',
      icon: '💼'
    },
    {
      title: 'Automotive & Manufacturing',
      desc: 'Mapped to automotive assembly, production line operations, and technical assembly.',
      icon: '🚗'
    },
    {
      title: 'Electrical & Technical Skills',
      desc: 'Mapped to electrical panel wiring, home appliance diagnostics, and repair services.',
      icon: '⚡'
    },
    {
      title: 'Digital & Data Support',
      desc: 'Mapped to computer data operations, IT assistance, and administrative software support.',
      icon: '💻'
    }
  ];

  const supportCards = [
    {
      title: 'Program Guidance',
      desc: 'Helping you choose the right sector match based on academic background and future goals.',
      icon: '🧭'
    },
    {
      title: 'Skill Readiness',
      desc: 'Building hands-on confidence to match current industry standards.',
      icon: '🛠️'
    },
    {
      title: 'Interview Preparation',
      desc: 'Mock interviews, resume formatting, and self-presentation practice.',
      icon: '💼'
    },
    {
      title: 'Career Counselling',
      desc: 'Individual guidance on growth prospects and advancement in chosen domains.',
      icon: '💬'
    },
    {
      title: 'Opportunity Direction',
      desc: 'Mapping skills to suitable pathways and connecting learners to prospects.',
      icon: '🚀'
    }
  ];

  return (
    <div className="career-pathways-page">
      {/* SECTION 1: HERO */}
      <section className="pathways-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="pathways-hero-overlay"></div>
        <div className="container pathways-hero-container">
          <div className="pathways-hero-left">
            <span className="section-label animate-pill">YOUR FUTURE</span>
            <h1 className="pathways-hero-title">Career Pathways for Every Learner</h1>
            <p className="pathways-hero-subtext">
              CORPORA helps learners explore practical career directions based on their education background, program interest, and future goals.
            </p>
            <div className="pathways-hero-actions">
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
            </div>
          </div>
          <div className="pathways-hero-right-empty"></div>
        </div>
      </section>

      {/* SECTION 3: PROGRAM-TO-CAREER DIRECTION */}
      <section className="program-career-map section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">PROGRAM CONNECTIONS</span>
            <h2 className="section-title">Program-to-Career Direction</h2>
            <p className="section-desc">
              Browse our training domains to see how they match with specific learner education profiles and future career directions.
            </p>
          </div>

          <div className="program-categories-list">
            {programCategories.map((cat, idx) => (
              <div key={idx} className="program-cat-row card-3d glass-card">
                <div className="cat-row-left">
                  <span className="cat-icon-badge">{cat.icon}</span>
                  <div className="cat-text-block">
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                  </div>
                </div>
                <div className="cat-row-right">
                  <span className="cat-suits-tag">{cat.suits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CAREER LADDER / GROWTH DIRECTION */}
      <section className="growth-ladder-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">GROWTH PROCESS</span>
            <h2 className="section-title">Your Career Growth Ladder</h2>
            <p className="section-desc">
              CORPORA structures development step by step, allowing learners to ascend from foundation training to career-ready opportunities.
            </p>
          </div>

          <div className="ladder-visual-container">
            <div className="staircase-3d">
              {careerLadderSteps.map((step, idx) => (
                <div key={idx} className="staircase-step" style={{ '--step-idx': idx }}>
                  <div className="step-number">{step.num}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  <div className="step-shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECTOR DIRECTION CARDS */}
      <section className="sectors-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">SECTOR DOMAINS</span>
            <h2 className="section-title">Industry Sector Directions</h2>
            <p className="section-desc">
              Explore the main multi-sector segments where CORPORA curriculum models are actively aligned and deployed.
            </p>
          </div>

          <div className="sectors-grid">
            {sectorCards.map((sector, idx) => (
              <div key={idx} className="sector-illustrated-card card-3d glass-card">
                <div className="sector-card-glow"></div>
                <div className="sector-icon-box">{sector.icon}</div>
                <h3>{sector.title}</h3>
                <p>{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LEARN & EARN + ENTREPRENEURSHIP PATHWAY */}
      <section className="pathways-dual section-padding">
        <div className="container dual-grid">
          <div className="pathway-wide-card card-3d learn-earn-path">
            <div className="pathway-bg-mesh"></div>
            <div className="pathway-card-content">
              <span className="pathway-badge-label">POPULAR PATH</span>
              <h2>Learn & Earn Pathway</h2>
              <p>For learners who want to build practical skills while moving toward earning confidence, workplace exposure, and real-world readiness.</p>
              <Link to="/apply-now" className="btn-secondary">Get Guidance</Link>
            </div>
          </div>

          <div className="pathway-wide-card card-3d entrepreneur-path">
            <div className="pathway-bg-mesh"></div>
            <div className="pathway-card-content">
              <span className="pathway-badge-label">SELF RELIANCE</span>
              <h2>Entrepreneurship Pathway</h2>
              <p>For learners who want confidence to start small work, service support, self-employment, or business-related growth in selected domains.</p>
              <Link to="/apply-now" className="btn-secondary">Get Guidance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PLACEMENT / CAREER SUPPORT */}
      <section className="placement-support-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">OPPORTUNITIES</span>
            <h2 className="section-title">Placement Support & Opportunity Guidance</h2>
            <p className="section-desc">
              We provide individual guidance and structural support to help prepare you for career entry and sustainable career progression.
            </p>
          </div>

          <div className="support-cards-grid">
            {supportCards.map((card, idx) => (
              <div key={idx} className="support-info-card card-3d glass-card">
                <span className="support-icon">{card.icon}</span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="pathways-cta section-padding">
        <div className="container">
          <div className="pathways-cta-banner">
            <h2>Explore the Right Program for Your Career Pathway</h2>
            <p>Choose a practical program and move toward clearer career direction with CORPORA.</p>
            <Link to="/programs" className="btn-primary">Explore Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
