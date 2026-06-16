import React from 'react';
import { Link } from 'react-router-dom';
import FinalCta from '../components/FinalCta';

// Static Image Imports for Institutions page
const imgCampus = "/Other images/institution-campus-01.jpg";
const imgClassroom = "/Other images/students-classroom-learning-01.jpg.jpg";
const imgPractical = "/Other images/about-practical-training-session.jpg.jpg";

import './Institutions.css';

const benefitsList = [
  {
    num: '01',
    title: 'Stronger Student Employability',
    desc: 'Equip students with the practical and communication skills required to excel in selection processes.'
  },
  {
    num: '02',
    title: 'Structured Career Readiness Support',
    desc: 'Integrate onboarding, diagnostic assessments, and workplace preparation directly on campus.'
  },
  {
    num: '03',
    title: 'Better Placement Preparation',
    desc: 'Ensure students perform confidently in mock sessions, technical evaluations, and actual interviews.'
  },
  {
    num: '04',
    title: 'Improved Industry Engagement',
    desc: 'Build institutional connections with employers seeking pre-assessed and pre-trained candidates.'
  }
];

const bentoItems = [
  {
    num: '01',
    title: 'Campus Awareness Sessions',
    desc: 'Seminars and masterclasses bringing corporate leaders directly onto campus, helping students recognize industrial realities early in their semesters.',
    className: 'wide'
  },
  {
    num: '02',
    title: 'Career Counselling',
    desc: 'Individual and group direction sessions resolving student confusion and mapping structured development routes.',
    className: 'narrow'
  },
  {
    num: '03',
    title: 'Skill Gap Assessment',
    desc: 'Diagnostic tests evaluating core skills, technical capabilities, and workplace awareness before placement drives begin.',
    className: 'narrow'
  },
  {
    num: '04',
    title: 'Training Workshops',
    desc: 'Immersive, expert-led training events on campus focused on problem-solving, real workplace practices, communication foundations, and collaboration.',
    className: 'wide'
  },
  {
    num: '05',
    title: 'Mock Interviews',
    desc: 'Live simulation panels mimicking modern corporate selection processes, evaluating resume structure, body language, speaking ease, and response content.',
    className: 'wide'
  },
  {
    num: '06',
    title: 'Placement Support',
    desc: 'Equip student cohorts with the professional readiness and tools to perform confidently in corporate recruitment processes.',
    className: 'narrow'
  }
];

const whyPartnerList = [
  { title: 'Student Outcomes First', desc: 'We measure success by student confidence, skilling gains, and placement readiness outcomes.' },
  { title: 'Enhanced Institution Reputation', desc: 'Stronger placement figures and better student feedback increase your institution\'s credibility and admissions demand.' },
  { title: 'Direct Industry Alignment', desc: 'Our programs are shaped by input from corporate mentors, keeping training aligned with current company expectations.' },
  { title: 'Scalable Integration Model', desc: 'Whether supporting one department or an entire campus, our readiness model adapts to your specific requirements.' }
];

export default function Institutions() {
  return (
    <div className="institutions-page">
      {/* 1. HERO */}
      <section className="inst-hero-section section-padding">
        <div className="container">
          <div className="inst-hero-grid">
            <div className="inst-hero-left">
              <span className="category-pill">For Institutions</span>
              <h1 className="inst-hero-title">
                Build stronger placement outcomes with career-ready students.
              </h1>
              <p className="inst-hero-subtext">
                CORPORA helps institutions integrate career readiness, practical training, counselling, skill assessment, and industry-aligned preparation alongside academic learning.
              </p>
              <div className="inst-hero-btn-group">
                <Link to="/contact" className="inst-btn btn-primary">Partner with CORPORA</Link>
                <a href="#roadmap" className="inst-btn btn-secondary">Explore Model</a>
              </div>
            </div>
            
            <div className="inst-hero-right">
              <div className="inst-hero-image-wrapper">
                <img src={imgCampus} alt="Campus view" className="inst-hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGE */}
      <section className="inst-problem-section section-padding">
        <div className="container">
          <div className="inst-problem-grid">
            <div className="inst-problem-left">
              <span className="category-pill">The Challenge</span>
            </div>
            <div className="inst-problem-right">
              <h2 className="inst-problem-title">Academic excellence needs career readiness support.</h2>
              <p className="inst-problem-text">
                Institutions produce graduates, but many students need practical exposure, career direction, workplace awareness, and interview confidence before placements. CORPORA acts as an integration partner, helping colleges bridge the readiness gap without restructuring core curriculums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE & BENEFITS */}
      <section className="inst-gains-section section-padding">
        <div className="container">
          <div className="inst-gains-grid">
            <div className="inst-gains-header">
              <span className="category-pill">Value &amp; Benefits</span>
              <h2 className="inst-gains-title">Strengthen student outcomes and college reputation.</h2>
            </div>
            <div className="inst-gains-rows">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="inst-gain-row">
                  <div className="inst-gain-num">{benefit.num}</div>
                  <div className="inst-gain-divider"></div>
                  <div className="inst-gain-content">
                    <h3 className="inst-gain-row-title">{benefit.title}</h3>
                    <p className="inst-gain-row-desc">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP ROADMAP */}
      <section id="roadmap" className="inst-model-section section-padding">
        <div className="container">
          <div className="inst-model-header">
            <span className="category-pill">Our Roadmap</span>
            <h2 className="inst-model-title">How we partner with institutions.</h2>
          </div>
          
          <div className="inst-timeline-wrapper">
            <div className="inst-timeline-line"></div>
            <div className="inst-timeline-steps">
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">01</span>
                <h3 className="inst-step-title">Connect</h3>
                <p className="inst-step-desc">Establish goals and align our career readiness framework with college timelines.</p>
              </div>
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">02</span>
                <h3 className="inst-step-title">Map Student Needs</h3>
                <p className="inst-step-desc">Identify academic streams, target placements, and student readiness levels.</p>
              </div>
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">03</span>
                <h3 className="inst-step-title">Counselling &amp; Orientation</h3>
                <p className="inst-step-desc">Introduce students to modern corporate requirements and orient them on career paths.</p>
              </div>
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">04</span>
                <h3 className="inst-step-title">Training &amp; Assessment</h3>
                <p className="inst-step-desc">Deliver interactive skilling modules and measure practical strengths and gaps.</p>
              </div>
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">05</span>
                <h3 className="inst-step-title">Placement Readiness</h3>
                <p className="inst-step-desc">Refine resumes, perform mock interviews, and build professional presentation skills.</p>
              </div>
              <div className="inst-timeline-item">
                <div className="inst-step-marker"></div>
                <span className="inst-step-num">06</span>
                <h3 className="inst-step-title">Ongoing Feedback</h3>
                <p className="inst-step-desc">Provide students and administration with outcomes reports to support placement drives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION AREAS (BENTO GRID) */}
      <section className="inst-bento-section section-padding">
        <div className="container">
          <div className="inst-bento-header">
            <span className="category-pill">Integration Areas</span>
            <h2 className="inst-bento-title">Practical skilling integrated into the academic lifecycle.</h2>
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

      {/* 6. STUDENT DEVELOPMENT EXPERIENCE */}
      <section className="inst-experience-section section-padding">
        <div className="container">
          <div className="inst-experience-grid">
            <div className="inst-collage-col">
              <div className="inst-collage-wrapper">
                <div className="collage-main-img-box">
                  <img src={imgClassroom} alt="Classroom environment" className="collage-img main-img" />
                </div>
                <div className="collage-sub-img-box">
                  <img src={imgPractical} alt="Practical workshop" className="collage-img sub-img" />
                </div>
              </div>
            </div>
            
            <div className="inst-text-col">
              <span className="category-pill">Student Development</span>
              <h2 className="inst-experience-title">Active preparation within the academic environment.</h2>
              <p className="inst-experience-desc">
                By working within college campuses, CORPORA creates an integrated system where students learn workplace expectations naturally. The approach ensures that placement readiness isn't an afterthought, but a core component of the academic experience.
              </p>
              <div className="inst-exp-rows">
                <div className="inst-exp-row">
                  <span className="inst-exp-bullet"></span>
                  <p className="inst-exp-text">Integrates directly with university calendars</p>
                </div>
                <div className="inst-exp-row">
                  <span className="inst-exp-bullet"></span>
                  <p className="inst-exp-text">Hands-on practice alongside academic learning</p>
                </div>
                <div className="inst-exp-row">
                  <span className="inst-exp-bullet"></span>
                  <p className="inst-exp-text">On-campus mock panels and assessments</p>
                </div>
                <div className="inst-exp-row">
                  <span className="inst-exp-bullet"></span>
                  <p className="inst-exp-text">Support designed around placement requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY PARTNER WITH CORPORA */}
      <section className="inst-why-section section-padding">
        <div className="container">
          <div className="inst-why-grid">
            <div className="inst-why-left">
              <span className="category-pill">Why Partner</span>
              <h2 className="inst-why-title">A scalable partner for student acceleration.</h2>
            </div>
            <div className="inst-why-right">
              {whyPartnerList.map((point, idx) => (
                <div key={idx} className="inst-why-point">
                  <h3 className="inst-why-point-title">{point.title}</h3>
                  <p className="inst-why-point-text">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
