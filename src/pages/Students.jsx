import React from 'react';
import { Link } from 'react-router-dom';
import FinalCta from '../components/FinalCta';

// Static Image Imports for Students page
const imgCounselling = "/Other images/student-career-counselling.jpg.jpg";
const imgPractical = "/Other images/about-practical-training-session.jpg.jpg";
const imgMentorship = "/Other images/student-mentorship-discussion-01.jpg.jpg";

// Program Image Imports
const imgApparel = "/programs/textile-apparel.jpg.jpg";
const imgAutoMfg = "/programs/automobile-manufacturing.jpg.jpg";
const imgPharma = "/programs/pharma-healthcare.jpg.jpg";
const imgHospitality = "/programs/hospitality-tourism.jpg.jpg";
const imgDigital = "/programs/digital-data.jpg.jpg";
const imgData = "/Other images/industry-technical-skills-01.jpg.jpg";
const imgMechatronics = "/Other images/industry-factory-machinery-01.jpg.jpg";
const imgHealthcare = "/Other images/practical-training-session.jpg";
const imgRetail = "/programs/retail-customer-service.jpg.jpg";
const imgLogistics = "/programs/logistics-supply-chain.jpg.jpg";
const imgBfsi = "/programs/bfsi-office-support.jpg.jpg";

import './Students.css';

const selfCheckItems = [
  'I am unsure which career path is right for me.',
  'I lack practical exposure beyond classroom learning.',
  'I feel nervous about interviews and communication.',
  'I do not know what companies expect from freshers.',
  'I want better resume and placement preparation.',
  'I need guidance before entering the professional world.'
];

const bentoItems = [
  {
    num: '01',
    title: 'Career Counselling',
    desc: 'Personalized guidance to help students understand their interests, strengths, and professional paths, removing confusion before beginning skilling.',
    className: 'wide'
  },
  {
    num: '02',
    title: 'Skill Assessment',
    desc: 'Identify current strengths, technical skill gaps, and professional readiness levels through diagnostic checks.',
    className: 'narrow'
  },
  {
    num: '03',
    title: 'Practical Training',
    desc: 'Hands-on learning designed around the core skills needed in modern work environments, bridging academia and work.',
    className: 'narrow'
  },
  {
    num: '04',
    title: 'Mentorship',
    desc: 'One-on-one and group preparation support led by experienced corporate professionals, sharing real-world insights, guidance, and evaluation feedback.',
    className: 'wide'
  },
  {
    num: '05',
    title: 'Interview Preparation',
    desc: 'Step-by-step training for resume building, professional communication, speech confidence, body language, and successful performance in mock employer interviews.',
    className: 'wide'
  },
  {
    num: '06',
    title: 'Placement Readiness',
    desc: 'Equip students to confidently navigate internship opportunities, recruitment drives, and corporate hiring processes.',
    className: 'narrow'
  }
];

const chipsList = [
  'BA', 'BBA', 'B.Com', 'BCA', 'B.Sc', 'MBA', 'Diploma Students',
  'Certificate Program Students', 'Professional Diploma Students',
  'Final-Year Students', 'Placement-Preparing Students', 'Students Unsure About Career Direction'
];

const programsList = [
  { title: 'Apparel Manufacturing & Entrepreneurship', image: imgApparel, desc: 'Garment production, stitching, finishing, costing, and small business basics.' },
  { title: 'Automotive Manufacturing Technology', image: imgAutoMfg, desc: 'Vehicle assembly, tools, production line discipline, and safety practices.' },
  { title: 'Drugs / Pharma Manufacturing Technology', image: imgPharma, desc: 'Pharma production, packaging, labeling, quality control support, and hygiene.' },
  { title: 'Hospitality & Tourism Management', image: imgHospitality, desc: 'Hotel operations, front office, guest relationships, food & beverage service, and event support.' },
  { title: 'Advanced Digital Marketing', image: imgDigital, desc: 'Social media growth, online advertising, SEO, content creation, and lead generation.' },
  { title: 'Data Science & Analytics', image: imgData, desc: 'Data reporting, Excel models, business insights, dashboards, and analytics basics.' },
  { title: 'Automotive Mechatronics', image: imgMechatronics, desc: 'Mechanical-electrical vehicle systems, diagnostics, sensors, and workshop tools.' },
  { title: 'Healthcare Assistantship', image: imgHealthcare, desc: 'Patient care support, clinic safety, hospital workflows, and billing assistance.' },
  { title: 'Retail & Customer Service', image: imgRetail, desc: 'Customer handling, billing systems, store displays, sales, and complaints.' },
  { title: 'Logistics, Warehouse & Supply Chain', image: imgLogistics, desc: 'Inventory tracking, sorting, packaging, barcodes, and dispatch workflows.' },
  { title: 'BFSI & Office Support', image: imgBfsi, desc: 'Banking/insurance support, administrative tasks, office suites, and coordination.' }
];

export default function Students() {
  return (
    <div className="students-page">
      {/* 1. HERO */}
      <section className="students-hero-section section-padding">
        <div className="container">
          <div className="students-hero-grid">
            <div className="students-hero-left">
              <span className="category-pill">For Students</span>
              <h1 className="students-hero-title">
                Not sure where your career is going? <br />
                Start with clarity.
              </h1>
              <p className="students-hero-subtext">
                CORPORA helps students understand their direction, build practical skills, prepare for interviews, and move toward career opportunities with confidence.
              </p>
              <div className="students-hero-btn-group">
                <Link to="/contact" className="students-btn btn-primary">Start Your Readiness Journey</Link>
                <a href="#readiness-map" className="students-btn btn-secondary">See How It Works</a>
              </div>
              <p className="students-hero-note">
                Built for students preparing for placements, internships, interviews, and real workplace expectations.
              </p>
            </div>
            
            <div className="students-hero-right">
              <div className="students-hero-image-wrapper">
                <img src={imgCounselling} alt="Student career counselling" className="students-hero-img" />
                <span className="hero-badge badge-top-left">Career Clarity</span>
                <span className="hero-badge badge-top-right">Interview Confidence</span>
                <span className="hero-badge badge-bottom-left">Practical Skills</span>
                <span className="hero-badge badge-bottom-right">Placement Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELF CHECK */}
      <section className="students-check-section section-padding">
        <div className="container">
          <div className="students-check-grid">
            <div className="students-check-header">
              <span className="category-pill">Quick Self-Check</span>
              <h2 className="students-check-title">If this feels familiar, CORPORA is built for you.</h2>
            </div>
            <div className="students-check-list">
              {selfCheckItems.map((item, idx) => (
                <div key={idx} className="check-item-card">
                  <span className="check-box-indicator"></span>
                  <p className="check-item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. READINESS MAP */}
      <section id="readiness-map" className="students-map-section section-padding">
        <div className="container">
          <div className="students-map-header">
            <span className="category-pill">Readiness Map</span>
            <h2 className="students-map-title">Your path from confusion to confidence.</h2>
          </div>
          
          <div className="readiness-map-pathway">
            <div className="map-dashed-route"></div>
            <div className="map-stages-grid">
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">01</span>
                <h3 className="map-node-title">Clarity</h3>
                <p className="map-node-desc">Understand your goals, interests, and career direction.</p>
              </div>
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">02</span>
                <h3 className="map-node-title">Assessment</h3>
                <p className="map-node-desc">Know your strengths, skill gaps, and readiness level.</p>
              </div>
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">03</span>
                <h3 className="map-node-title">Skill Building</h3>
                <p className="map-node-desc">Learn practical and workplace-focused skills.</p>
              </div>
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">04</span>
                <h3 className="map-node-title">Practice</h3>
                <p className="map-node-desc">Improve communication, resume, interviews, and presentation.</p>
              </div>
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">05</span>
                <h3 className="map-node-title">Exposure</h3>
                <p className="map-node-desc">Understand industry expectations and professional behaviour.</p>
              </div>
              <div className="map-stage-node">
                <div className="map-node-dot"></div>
                <span className="map-node-num">06</span>
                <h3 className="map-node-title">Opportunity</h3>
                <p className="map-node-desc">Prepare for internships, apprenticeships, placements, and career growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET (BENTO GRID) */}
      <section className="students-bento-section section-padding">
        <div className="container">
          <div className="students-bento-header">
            <span className="category-pill">What You Get</span>
            <h2 className="students-bento-title">Support that goes beyond classroom learning.</h2>
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

      {/* 5. REAL LEARNING EXPERIENCE */}
      <section className="students-experience-section section-padding">
        <div className="container">
          <div className="students-experience-grid">
            <div className="experience-collage-col">
              <div className="experience-collage-wrapper">
                <div className="collage-main-img-box">
                  <img src={imgPractical} alt="Practical session" className="collage-img main-img" />
                </div>
                <div className="collage-sub-img-box">
                  <img src={imgMentorship} alt="Mentorship session" className="collage-img sub-img" />
                </div>
              </div>
            </div>
            
            <div className="experience-text-col">
              <span className="category-pill">Learning Experience</span>
              <h2 className="experience-title">Learn through guidance, practice, and real preparation.</h2>
              <p className="experience-intro-text">
                Students learn through a mix of counselling, skill-building, practice sessions, feedback, and readiness support designed around real career expectations.
              </p>
              <div className="experience-rows">
                <div className="exp-row-item">
                  <span className="exp-bullet"></span>
                  <p className="exp-row-text">Practical skill-building sessions</p>
                </div>
                <div className="exp-row-item">
                  <span className="exp-bullet"></span>
                  <p className="exp-row-text">Mentor-led guidance</p>
                </div>
                <div className="exp-row-item">
                  <span className="exp-bullet"></span>
                  <p className="exp-row-text">Interview and communication practice</p>
                </div>
                <div className="exp-row-item">
                  <span className="exp-bullet"></span>
                  <p className="exp-row-text">Career readiness feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO CAN JOIN */}
      <section className="students-chips-section section-padding">
        <div className="container">
          <div className="students-chips-header">
            <span className="category-pill">Who Can Join</span>
            <h2 className="students-chips-title">Designed for students across multiple academic paths.</h2>
          </div>
          <div className="students-chips-wrapper">
            {chipsList.map((chip, idx) => (
              <span key={idx} className="students-chip">{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEFORE AND AFTER */}
      <section className="students-comparison-section section-padding">
        <div className="container">
          <div className="students-comparison-grid">
            <div className="students-comparison-header">
              <span className="category-pill">Student Transformation</span>
              <h2 className="students-comparison-title">From unsure to prepared.</h2>
            </div>
            <div className="comparison-split-wrapper">
              <div className="comparison-panel before">
                <h3 className="panel-column-title">Before CORPORA</h3>
                <ul className="panel-points-list">
                  <li><span className="point-bullet bullet-cross">&times;</span><p className="point-text">Unclear career direction</p></li>
                  <li><span className="point-bullet bullet-cross">&times;</span><p className="point-text">Low interview confidence</p></li>
                  <li><span className="point-bullet bullet-cross">&times;</span><p className="point-text">Limited practical exposure</p></li>
                  <li><span className="point-bullet bullet-cross">&times;</span><p className="point-text">Weak workplace awareness</p></li>
                  <li><span className="point-bullet bullet-cross">&times;</span><p className="point-text">Confusion about next steps</p></li>
                </ul>
              </div>
              <div className="comparison-panel after">
                <h3 className="panel-column-title">After CORPORA</h3>
                <ul className="panel-points-list">
                  <li><span className="point-bullet bullet-check">&checkmark;</span><p className="point-text">Clearer career direction</p></li>
                  <li><span className="point-bullet bullet-check">&checkmark;</span><p className="point-text">Better communication confidence</p></li>
                  <li><span className="point-bullet bullet-check">&checkmark;</span><p className="point-text">Practical skill awareness</p></li>
                  <li><span className="point-bullet bullet-check">&checkmark;</span><p className="point-text">Interview preparation</p></li>
                  <li><span className="point-bullet bullet-check">&checkmark;</span><p className="point-text">Placement-focused readiness</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 CORE PROGRAMS CATALOG */}
      <section className="students-programs-catalog section-padding">
        <div className="container">
          <div className="catalog-header">
            <span className="category-pill">Our Programs</span>
            <h2 className="catalog-title">Explore Skilling Pathways</h2>
            <p className="catalog-subtitle">We offer career skilling programs across multiple sectors to help build employability.</p>
          </div>
          <div className="catalog-grid">
            {programsList.map((p, idx) => (
              <div key={idx} className="catalog-card">
                <div className="catalog-media">
                  <img src={p.image} alt={p.title} className="catalog-img" />
                </div>
                <div className="catalog-body">
                  <h3 className="catalog-card-title">{p.title}</h3>
                  <p className="catalog-card-desc">{p.desc}</p>
                </div>
                <div className="catalog-footer">
                  <Link to="/contact" className="catalog-card-link">Enquire About Program &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
