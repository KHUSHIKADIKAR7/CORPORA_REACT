import React from 'react';
import { Link } from 'react-router-dom';
import FinalCta from '../components/FinalCta';

// Static Image Imports for Industry page
const imgHero = "/Other images/industry-production-team-01.jpg.jpg";
const imgBriefing = "/Other images/industry-worker-briefing-01.jpg.jpg";
const imgTechnical = "/Other images/industry-technical-skills-01.jpg.jpg";
const imgSafety = "/Other images/industry-worker-safety-01.jpg.jpg";
const imgTraining = "/Other images/industry-hands-on-training-01.jpg.jpg";

import './IndustryConnect.css';

const gainsList = [
  {
    num: '01',
    title: 'Better-Prepared Student Pipeline',
    desc: 'Access candidate pools that already understand corporate etiquette, communication standards, and team collaboration basics.'
  },
  {
    num: '02',
    title: 'Skill-Assessed Candidates',
    desc: 'Save screening hours using candidate data backed by practical assessments and diagnostic preparation.'
  },
  {
    num: '03',
    title: 'Reduced Early Training Gaps',
    desc: 'Minimize early onboarding and basic behavioral training overheads because students start with foundational readiness.'
  },
  {
    num: '04',
    title: 'Long-Term Institution Connection',
    desc: 'Build programmatic relationships with universities and campuses through structured employer engagement avenues.'
  }
];

const bentoItems = [
  {
    num: '01',
    title: 'Internship Opportunities',
    desc: 'Source assessed student cohorts for short-term and project-based internships, assessing actual capabilities in real-time workplace settings.',
    className: 'wide'
  },
  {
    num: '02',
    title: 'Apprenticeship Programs',
    desc: 'Engage with candidate groups looking for work-integrated learning paths and long-term onboarding routes.',
    className: 'narrow'
  },
  {
    num: '03',
    title: 'Recruitment Drives',
    desc: 'Coordinate campus hiring drives focused on pre-prepared students who possess evaluated workplace and communication skills.',
    className: 'narrow'
  },
  {
    num: '04',
    title: 'Industry Mentorship Sessions',
    desc: 'Send corporate representatives to guide orientation, review portfolios, share operational guidelines, and participate in mock assessment panels.',
    className: 'wide'
  },
  {
    num: '05',
    title: 'Workplace Exposure Visits',
    desc: 'Provide students with visual understanding by hosting structured visits, letting them see operational environments and speak with teams.',
    className: 'wide'
  },
  {
    num: '06',
    title: 'Role-based Skilling Alignment',
    desc: 'Advise on specific technical gaps and role behaviors to help align on-campus training closer to your workspace expectations.',
    className: 'narrow'
  }
];

const checklistItems = [
  { title: 'Communication', desc: 'Students practice active listening, business communication, and verbal articulation to share ideas clearly in team environments.' },
  { title: 'Workplace Behaviour', desc: 'Orientation sessions explain standard professional boundaries, workplace hierarchy, safety awareness, and work timelines.' },
  { title: 'Technical Awareness', desc: 'Practical skilling highlights basic technical applications, tools, and operations relevant to target sectors.' },
  { title: 'Problem Solving', desc: 'Case studies and practice exercises help students think analytically and troubleshoot challenges with practical approaches.' },
  { title: 'Interview Preparedness', desc: 'Equip students with structured resumes, performance confidence, body language checks, and response ease.' },
  { title: 'Professional Confidence', desc: 'One-on-one evaluations, feedback reviews, and mentorship lift student confidence before day one of their jobs.' }
];

export default function IndustryConnect() {
  return (
    <div className="industry-page">
      {/* 1. HERO */}
      <section className="ind-hero-section section-padding">
        <div className="container">
          <div className="ind-hero-grid">
            <div className="ind-hero-left">
              <span className="category-pill">For Industry Partners</span>
              <h1 className="ind-hero-title">
                Connect with students prepared for real workplace expectations.
              </h1>
              <p className="ind-hero-subtext">
                CORPORA helps industry partners engage with students who are trained, assessed, mentored, and better prepared for professional environments.
              </p>
              <div className="ind-hero-btn-group">
                <Link to="/contact" className="ind-btn btn-primary">Partner with CORPORA</Link>
                <a href="#engagement" className="ind-btn btn-secondary">Engagement Areas</a>
              </div>
            </div>
            
            <div className="ind-hero-right">
              <div className="ind-hero-image-wrapper">
                <img src={imgHero} alt="Production team discussion" className="ind-hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pipeline Challenge */}
      <section className="ind-challenge-section section-padding">
        <div className="container">
          <div className="ind-challenge-grid">
            <div className="ind-challenge-left">
              <span className="category-pill">Fresh Talent Pipeline</span>
            </div>
            <div className="ind-challenge-right">
              <h2 className="ind-challenge-title">Hiring fresh talent becomes easier when readiness starts earlier.</h2>
              <p className="ind-challenge-text">
                Many graduates need additional training on communication, workplace behavior, and professional standards after hiring. CORPORA reduces this early skilling gap by supporting students with skill assessment, practical exposure, and career mentorship before they enter the recruitment pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value for Employers */}
      <section className="ind-gains-section section-padding">
        <div className="container">
          <div className="ind-gains-grid">
            <div className="ind-gains-header">
              <span className="category-pill">Value for Employers</span>
              <h2 className="ind-gains-title">Reduce onboarding time and hire with confidence.</h2>
            </div>
            <div className="ind-gains-rows">
              {gainsList.map((gain, idx) => (
                <div key={idx} className="ind-gain-row">
                  <div className="ind-gain-num">{gain.num}</div>
                  <div className="ind-gain-divider"></div>
                  <div className="ind-gain-content">
                    <h3 className="ind-gain-row-title">{gain.title}</h3>
                    <p className="ind-gain-row-desc">{gain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engagement Avenues (Bento Grid) */}
      <section id="engagement" className="ind-opps-section section-padding">
        <div className="container">
          <div className="ind-opps-header">
            <span className="category-pill">Engagement Routes</span>
            <h2 className="ind-opps-title">Multiple avenues to connect with ready talent.</h2>
          </div>
          <div className="bento-wrapper">
            {bentoItems.map((item, idx) => (
              <div key={idx} className={`bento-card ${item.className}`}>
                <span className="bento-num">{item.num}</span>
                <h3 className="bento-card-title">{item.title}</h3>
                <p className="bento-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real-World Exposure Gallery */}
      <section className="ind-gallery-section section-padding">
        <div className="container">
          <div className="ind-gallery-header">
            <span className="category-pill">Visual Focus</span>
            <h2 className="ind-gallery-title">Building workplace awareness through real exposure.</h2>
          </div>
          
          <div className="ind-gallery-grid">
            {/* Left large card */}
            <div className="gallery-feature-card">
              <div className="gallery-zoom-box">
                <img src={imgBriefing} alt="Industry briefing session" className="gallery-img" />
                <div className="gallery-overlay"></div>
              </div>
              <p className="gallery-caption">01 / Team briefings and workplace guidelines</p>
            </div>

            {/* Right split grid */}
            <div className="gallery-supporting-col">
              <div className="gallery-split-row">
                <div className="gallery-supporting-card">
                  <div className="gallery-zoom-box">
                    <img src={imgTechnical} alt="Technical skill exposure" className="gallery-img" />
                    <div className="gallery-overlay"></div>
                  </div>
                  <p className="gallery-caption">02 / Technical skill exposure</p>
                </div>
                <div className="gallery-supporting-card">
                  <div className="gallery-zoom-box">
                    <img src={imgSafety} alt="Safety routines" className="gallery-img" />
                    <div className="gallery-overlay"></div>
                  </div>
                  <p className="gallery-caption">03 / Safety and operational routines</p>
                </div>
              </div>
              <div className="gallery-split-row">
                <div className="gallery-supporting-card">
                  <div className="gallery-zoom-box">
                    <img src={imgTraining} alt="Hands-on training" className="gallery-img" />
                    <div className="gallery-overlay"></div>
                  </div>
                  <p className="gallery-caption">04 / Hands-on training exposure</p>
                </div>
                <div className="gallery-supporting-card">
                  <div className="gallery-zoom-box">
                    <img src={imgHero} alt="Workflow observation" className="gallery-img" />
                    <div className="gallery-overlay"></div>
                  </div>
                  <p className="gallery-caption">05 / Team and workflow observation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Readiness Checklist */}
      <section className="ind-lens-section section-padding">
        <div className="container">
          <div className="ind-lens-header">
            <span className="category-pill">Readiness Checklist</span>
            <h2 className="ind-lens-title">How CORPORA prepares students for professional entry.</h2>
          </div>
          
          <div className="ind-lens-cards">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="lens-card">
                <span className="lens-card-bullet"></span>
                <h3 className="lens-card-title">{item.title}</h3>
                <p className="lens-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
