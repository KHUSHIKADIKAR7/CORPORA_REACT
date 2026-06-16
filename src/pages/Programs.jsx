import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Hero Image
const imgHero = `${import.meta.env.BASE_URL}programs/program.hero.jpg.jpg`;

// Program Category Images
const imgMfg = `${import.meta.env.BASE_URL}programs/automobile-manufacturing.jpg.jpg`;
const imgPharma = `${import.meta.env.BASE_URL}programs/pharma-healthcare.jpg.jpg`;
const imgTech = `${import.meta.env.BASE_URL}programs/digital-data.jpg.jpg`;
const imgApparel = `${import.meta.env.BASE_URL}programs/textile-apparel.jpg.jpg`;
const imgHospitality = `${import.meta.env.BASE_URL}programs/hospitality-tourism.jpg.jpg`;
const imgLogistics = `${import.meta.env.BASE_URL}programs/logistics-supply-chain.jpg.jpg`;

import './Programs.css';

export default function Programs() {
  const whyDifferent = [
    {
      title: 'Practical Learning First',
      text: 'Our programs connect theoretical concepts directly with actual shopfloor, workspace, and process tool operations, replacing rote memory benchmarks.',
      icon: '🛠️'
    },
    {
      title: 'Guided Skill Development',
      text: 'Every student learns under the active guidance of domain mentors, ensuring that techniques are practiced correctly and safely.',
      icon: '🧭'
    },
    {
      title: 'Employability Ready',
      text: 'Curriculum designs are aligned directly with corporate expectations, documentation rules, and recruitment hiring standards.',
      icon: '💼'
    },
    {
      title: 'Multi-Sector Scope',
      text: 'Not limited to a single domain. Build portable and industry-relevant capabilities across retail, technical, logistics, pharma, and hospitality fields.',
      icon: '🌐'
    },
    {
      title: 'Learn & Earn Mindset',
      text: 'We cultivate commercial confidence early, showing candidates how structured skilling pathways unlock immediate financial independence.',
      icon: '💰'
    },
    {
      title: 'Confidence Building',
      text: 'We groom communication, resume styling, mock interviews, and work ethics alongside technical skills so graduates can present themselves with authority.',
      icon: '✨'
    }
  ];

  const programsData = [
    {
      id: 'mfg-production',
      title: 'Manufacturing & Production Programs',
      description: 'Comprehensive programs designed around assembly operations, die & tool manufacturing, production quality controls, paint technology, and industrial fitting setups.',
      image: imgMfg,
      programs: [
        {
          title: 'Automotive Manufacturing Technology',
          domain: 'Automotive & Engineering',
          description: 'Acquire deep operational understanding of vehicle assembly processes, chassis design, workshop instrumentation, and production safety.',
          pathways: 'Automotive Production Assistant, Assembly Line Trainee, Quality Inspector Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, BCA, and graduation seekers.'
        },
        {
          title: 'D.Voc – Automotive Manufacturing Technology',
          domain: 'Automotive & Engineering (Diploma)',
          description: 'A structured, diploma-linked pathway focusing on assembly operations, mechanical components, tool usage, and plant safety briefings.',
          pathways: 'Automotive Production Trainee, Workshop Support Assistant, Service Specialist.',
          learners: '10th, 12th, and Diploma level candidates.'
        },
        {
          title: 'D.Voc – Forging & Casting Manufacturing Technology',
          domain: 'Metallurgy & Metal Fabrication (Diploma)',
          description: 'Learn metal forging operations, sand casting preparation, foundry safety controls, temperature parameters, and structural metallurgy checks.',
          pathways: 'Forging Operator Assistant, Foundry Trainee, Furnace Support Assistant.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Forging & Casting Manufacturing Technology',
          domain: 'Metallurgy & Metal Fabrication',
          description: 'Covers industrial forging operations, foundry molding systems, furnaces, cooling controls, and safety protocols in metal works.',
          pathways: 'Forging Operator Trainee, Foundry Support Assistant, Metallurgy Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, and other graduates.'
        },
        {
          title: 'D.Voc – Industrial Tool Manufacturing',
          domain: 'Tooling, Molds & CNC (Diploma)',
          description: 'Diploma-level training in mold and die preparation, lathe operations, milling precision, tool room maintenance, and CNC inputs.',
          pathways: 'Tool Room Trainee, Die Making Assistant, CNC Operator Assistant.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Industrial Tool Manufacturing',
          domain: 'Tooling, Molds & CNC',
          description: 'Covers precision engineering of industrial molds and dies, lathe machines operations, tool calibration, and quality control tolerances.',
          pathways: 'Tool Room Assistant, Die Maker Trainee, CNC Operator Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'D.Voc – Plastics Manufacturing Technology',
          domain: 'Polymer & Mold Processing (Diploma)',
          description: 'Covers polymer chemistry basics, injection molding machines, blow molding setups, raw material handling, and plastics testing.',
          pathways: 'Molding Machine Assistant, Extrusion Assistant, Quality Control Trainee.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Plastics Manufacturing Technology',
          domain: 'Polymer & Mold Processing',
          description: 'Understand plastic processing workflows, extruder machinery setups, temperature regulations, polymer testing, and machinery safety.',
          pathways: 'Molding Operator Trainee, Plastics Quality Control Assistant, Production Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'D.Voc – Printing & Packaging Technology',
          domain: 'Printing & Packaging (Diploma)',
          description: 'Focuses on commercial printing systems, digital offset alignment, package design tolerances, ink parameters, and packaging safety.',
          pathways: 'Print Operator Assistant, Packaging Production Assistant, Press Quality Trainee.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Printing & Packaging Technology',
          domain: 'Printing & Packaging',
          description: 'Covers printing machinery setups, package design execution, offset printing prep, packaging materials, and printing safety standards.',
          pathways: 'Printing Press Assistant, Packaging Assistant, Press QC Specialist.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'D.Voc – Production Technology',
          domain: 'Industrial Production (Diploma)',
          description: 'Diploma program centered on mechanical operations, assembly line automation, metal tools safety, and production maintenance workflows.',
          pathways: 'Production Line Trainee, Assembly Assistant, Machine Operator Assistant.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Production Technology',
          domain: 'Industrial Production',
          description: 'Covers assembly lines management, manufacturing tool safety, mechanical operations, basic maintenance, and shop floor discipline.',
          pathways: 'Production Assistant, Machine Operator Trainee, Assembly Support Specialist.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'Flexi-MOU – Industrial Fitter',
          domain: 'Fitter & Assembly (Flexi-MOU)',
          description: 'Work-integrated fitter training including machinery alignment, thread cutting, precision fits, welding basics, and workshop maintenance.',
          pathways: 'Industrial Fitter Trainee, Assembly Support Assistant, Maintenance Fitter.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        }
      ]
    },
    {
      id: 'pharma-chemical',
      title: 'Pharma & Chemical Programs',
      description: 'Hands-on tracks designed around chemical formulations, drugs manufacturing standards, packaging controls, documentation, and safety protocols.',
      image: imgPharma,
      programs: [
        {
          title: 'Drugs Manufacturing Technology',
          domain: 'Pharmaceutical Operations',
          description: 'Learn raw chemical blending, packaging processes, good manufacturing practices (GMP), lab safety, and labeling protocols.',
          pathways: 'Pharma Production Assistant, Packaging Operator, QC Support staff.',
          learners: '12th, B.Pharm, Diploma, B.Com, BA, BCA, and graduates.'
        },
        {
          title: 'D.Voc – Drugs Manufacturing Technology',
          domain: 'Pharmaceutical Operations (Diploma)',
          description: 'Diploma track focusing on cleanroom hygiene rules, formulation packaging, labeling accuracy, and pharmaceutical logbooks.',
          pathways: 'Pharma Manufacturing Trainee, Packaging assistant, QC Trainee.',
          learners: '12th, B.Pharm, Diploma level candidates.'
        },
        {
          title: 'D.Voc – Pharmaceutical Manufacturing',
          domain: 'Pharmaceutical Processing (Diploma)',
          description: 'Provides in-depth diploma skilling in chemical mixing, tableting machinery operation, cleanliness standards, and batch recording.',
          pathways: 'Pharma Processing Assistant, QC Support, Documentation Assistant.',
          learners: '12th, B.Pharm, Diploma candidates.'
        },
        {
          title: 'Pharmaceutical Manufacturing',
          domain: 'Pharmaceutical Processing',
          description: 'Covers batch manufacturing parameters, tableting operations, liquid dosage packaging, cleanroom protocols, and chemical safety.',
          pathways: 'Pharma Manufacturing Technician, Documentation Assistant, QC Assistant.',
          learners: '12th, B.Pharm, Diploma, B.Com, BA, BCA, and graduates.'
        },
        {
          title: 'D.Voc – Paint & Chemical Manufacturing Technology',
          domain: 'Coatings & Paint Processing (Diploma)',
          description: 'Learn chemical mixing protocols, pigment formulations, raw materials testing, furnace safety, and paint manufacturing safety.',
          pathways: 'Chemical Production Assistant, Paint Lab Trainee, Storage Assistant.',
          learners: '12th, Diploma, B.Pharm, and graduates.'
        },
        {
          title: 'Paint & Chemical Manufacturing Technology',
          domain: 'Coatings & Paint Processing',
          description: 'Understand chemical processing basics, pigment mixing machines, coatings packaging, laboratory testing safety, and chemical logistics.',
          pathways: 'Chemical Mixing Trainee, Coatings Lab Assistant, Storage Trainee.',
          learners: '12th, B.Pharm, Diploma, B.Com, BA, and graduates.'
        }
      ]
    },
    {
      id: 'electrical-electronics',
      title: 'Electrical, Electronics & Technical Programs',
      description: 'Upskilling in electrical systems, electronics assembly, circuit test procedures, mechatronics integration, and cooling machinery.',
      image: imgTech,
      programs: [
        {
          title: 'D.Voc – Electrical Skills',
          domain: 'Electrical Systems (Diploma)',
          description: 'Diploma training in house wiring, switchboards installation, power tools safety, circuitry layout, and basic electrical repair.',
          pathways: 'Electrical Installer Assistant, Service Technician, Maintenance Trainee.',
          learners: '10th, 12th, and Diploma level candidates.'
        },
        {
          title: 'Electrical Skills',
          domain: 'Electrical Systems',
          description: 'Covers electrical circuits, home & industrial fittings, wire calculations, safety equipment, maintenance, and power line checks.',
          pathways: 'Maintenance Electrician Assistant, Wiring Installer, Tool Support Staff.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'D.Voc – Electronics Manufacturing Technology',
          domain: 'Electronics Assembly (Diploma)',
          description: 'Diploma pathway focusing on PCB component layout, precision soldering, diagnostics, quality testing, and cleanroom guidelines.',
          pathways: 'PCB Assembler Assistant, Electronics Test Trainee, QC Inspector.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Electronics Manufacturing Technology',
          domain: 'Electronics Assembly',
          description: 'Learn electronic circuit testing, component soldering, board assembly workflows, quality control, and electronic testing machinery.',
          pathways: 'Electronics Assembler Trainee, Test Bench Assistant, Board Inspector.',
          learners: '10th, 12th, Diploma, BCA, B.Com, and graduates.'
        },
        {
          title: 'Flexi-MOU – Industrial Electrician',
          domain: 'Electrical Operations (Flexi-MOU)',
          description: 'Work-integrated skilling in industrial electrical installations, motor controls, transformer maintenance, and plant safety.',
          pathways: 'Industrial Electrician Trainee, Machinery Maintenance Assistant, Plant Electrician.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'Mechatronics & Industrial Electronics',
          domain: 'Mechatronics & Automation',
          description: 'Integrates mechanical machinery with electronic controllers, sensors, diagnostic software, and automated production controls.',
          pathways: 'Mechatronics Systems Trainee, Automation Assistant, Technical Diagnostic staff.',
          learners: '12th, Diploma, BCA, B.Com, BA, and graduates.'
        },
        {
          title: 'D.Voc – Mechatronics & Industrial Electronics',
          domain: 'Mechatronics & Automation (Diploma)',
          description: 'Diploma training blending mechanical setups, microcontroller inputs, sensor alignments, and electrical-mechanical troubleshooting.',
          pathways: 'Mechatronics Support Assistant, Automation Trainee, System Diagnostic trainee.',
          learners: '12th, Diploma, and graduates.'
        },
        {
          title: 'D.Voc – Refrigeration & Air Conditioning Skills',
          domain: 'HVAC & Cooling Systems (Diploma)',
          description: 'Diploma track covering cooling cycles, condenser maintenance, refrigerant handling, wiring schematics, and HVAC troubleshooting.',
          pathways: 'HVAC Service Trainee, Cooling Systems Installer, Maintenance Assistant.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Refrigeration & Air Conditioning Skills',
          domain: 'HVAC & Cooling Systems',
          description: 'Covers compressor mechanics, cooling coil repairs, refrigerant cycles, air conditioner electrical layouts, and safety practices.',
          pathways: 'AC Repair Assistant, HVAC Maintenance Trainee, Cooling Service Associate.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        }
      ]
    },
    {
      id: 'apparel-textile',
      title: 'Apparel, Textile & Fabric Programs',
      description: 'Programs covering fabric processing, industrial garment production, pattern drafting, quality checkups, and tailoring boutique management.',
      image: imgApparel,
      programs: [
        {
          title: 'Apparel Manufacturing & Entrepreneurship',
          domain: 'Garment Production & Fashion',
          description: 'Learn stitching basics, pattern cutting, fabric costing, finishing standards, boutiques management, and fashion entrepreneurship.',
          pathways: 'Apparel Production Assistant, Boutique Executive, Small Clothing Business Owner.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'D.Voc – Textile & Fabric Manufacturing Technology',
          domain: 'Textile Manufacturing (Diploma)',
          description: 'Diploma track focusing on weaving machinery, fabric inspection, yarn parameters, dyeing controls, and textile safety.',
          pathways: 'Weaving Machine Assistant, Fabric QC Trainee, Production Support Staff.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Textile & Fabric Manufacturing Technology',
          domain: 'Textile Manufacturing',
          description: 'Understand textile plant operations, fabric grading, machine settings, loom troubleshooting, and material handling workflows.',
          pathways: 'Textile Production Associate, Fabric Quality Checker, Plant Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        }
      ]
    },
    {
      id: 'food-processing',
      title: 'Food Processing Programs',
      description: 'Training in food raw materials handling, preservation techniques, chemical safety hygiene, packaging lines, and inventory compliance.',
      image: imgMfg,
      programs: [
        {
          title: 'D.Voc – Food Processing Technology',
          domain: 'Food Tech & Production (Diploma)',
          description: 'Diploma training in packaging machinery operation, food preservation, chemical hygiene checks, labeling, and storage controls.',
          pathways: 'Food Production Assistant, Food Safety Trainee, Food Packaging Assistant.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Flexi-MOU – Food Processing Technology',
          domain: 'Food Tech & Production (Flexi-MOU)',
          description: 'Work-integrated learning focusing on industrial food production lines, quality assurance, labeling compliance, and temperature controls.',
          pathways: 'Food Tech Assistant, Food Quality Assurance Trainee, Plant Packaging Associate.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'Food Processing Technology',
          domain: 'Food Tech & Production',
          description: 'Covers raw materials selection, processing machinery, shelf-life preservation methods, food packaging setups, and safety controls.',
          pathways: 'Food Plant Operator, Packaging Support, Quality Inspector Assistant.',
          learners: '10th, 12th, Diploma, B.Com, BA, BCA, and graduates.'
        }
      ]
    },
    {
      id: 'hospitality-facility',
      title: 'Hospitality & Facility Management Programs',
      description: 'Customer coordination tracks mapping front desk, F&B services, event management, facilities cleaning, and service-sector ethics.',
      image: imgHospitality,
      programs: [
        {
          title: 'Hospitality & Tourism Management',
          domain: 'Hospitality & Guest Services',
          description: 'Learn communication, front desk basics, F&B operations, event coordination, customer relationship management, and hospitality behavior.',
          pathways: 'Hotel Guest Executive, Front Desk Associate, Event Management assistant.',
          learners: '10th, 12th, BA, B.Com, BCA, Diploma, and graduates.'
        },
        {
          title: 'D.Voc – Housekeeping Management',
          domain: 'Facility & Housekeeping (Diploma)',
          description: 'Diploma focus on cleaning chemicals safety, room servicing checklists, sanitization guidelines, and commercial housekeeping workflows.',
          pathways: 'Housekeeping Trainee, Facility Operations Assistant, Services Supervisor.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Housekeeping Management',
          domain: 'Facility & Housekeeping',
          description: 'Covers facility setup servicing, guest room maintenance, chemical safety, workplace sanitation, and hospitality coordination skills.',
          pathways: 'Facility Support Assistant, Room Services Executive, Team Supervisor Trainee.',
          learners: '10th, 12th, Diploma, BA, B.Com, and graduates.'
        },
        {
          title: 'Short Term – Housekeeping',
          domain: 'Facility & Housekeeping (Short-Term)',
          description: 'Quick upskilling program centered on cleaning standards, workspace grooming, guest hospitality ethics, and sanitization basics.',
          pathways: 'Housekeeping Assistant, Cleaning Service Staff, Facility Associate.',
          learners: '10th, 12th, BA, B.Com, BCA, and graduates.'
        }
      ]
    },
    {
      id: 'logistics-supply',
      title: 'Logistics & Supply Chain Programs',
      description: 'Upskilling in warehousing, stock systems, e-commerce dispatch processing, barcode systems, and delivery coordination.',
      image: imgLogistics,
      programs: [
        {
          title: 'D.Voc – Logistics & Supply Chain Management',
          domain: 'Logistics Operations (Diploma)',
          description: 'Diploma track focusing on inventory database management, warehouse operations, packaging standards, and dispatch routing.',
          pathways: 'Warehouse Assistant, Inventory Analyst Trainee, Dispatch Coordinator.',
          learners: '10th, 12th, and Diploma candidates.'
        },
        {
          title: 'Logistics & Supply Chain Management',
          domain: 'Logistics Operations',
          description: 'Covers e-commerce package sorting, dispatch processes, barcode scanners usage, inventory control database, and stock movement.',
          pathways: 'Warehouse Controller Assistant, Dispatch Executive, Logistics Associate.',
          learners: '10th, 12th, BA, B.Com, BCA, Diploma, and graduates.'
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const programCategories = [
    'All',
    'Manufacturing & Production',
    'Pharma & Chemical',
    'Electrical, Electronics & Technical',
    'Apparel, Textile & Fabric',
    'Food Processing',
    'Hospitality & Facility Management',
    'Logistics & Supply Chain'
  ];

  const allPrograms = programsData.reduce((acc, cat) => {
    const categoryPrograms = cat.programs.map(prog => ({
      ...prog,
      categoryName: cat.title.replace(' Programs', ''),
      categoryImage: cat.image
    }));
    return [...acc, ...categoryPrograms];
  }, []);

  const filteredPrograms = selectedCategory === 'All'
    ? allPrograms
    : allPrograms.filter(prog => prog.categoryName === selectedCategory);

  const learnerGroups = [
    {
      title: 'School Learners',
      subtitle: 'Build foundations early',
      items: ['10th Pass Students', '12th Pass Students'],
      description: 'Step into structured vocational courses and build an earning mindset immediately after school instead of getting stuck in standard theoretical streams.'
    },
    {
      title: 'Graduation Seekers',
      subtitle: 'Add capability to your degree',
      items: ['BA Students', 'B.Com Students', 'BCA Students', 'B.Pharm Students'],
      description: 'Complement your graduation background with real-world technical skills, communication confidence, and employer-aligned certifications.'
    },
    {
      title: 'Technical & Diploma Candidates',
      subtitle: 'Accelerate career entry',
      items: ['Diploma Holders', 'Other Graduation Courses'],
      description: 'Bridge the gap between conceptual technical diplomas and live industrial/corporate operations by practicing with real-world toolkits and documentation standards.'
    },
    {
      title: 'Career Seekers',
      subtitle: 'Identify growth pathways',
      items: ['Young Job Seekers', 'Growth Orientation Learners'],
      description: 'Find guided direction through personalized counselling, and transition systematically from classroom knowledge to active professional environments.'
    }
  ];

  const skillItems = [
    { name: 'Practical Domain Skills', desc: 'Working directly with actual software, machinery, and tools.', icon: '⚙️' },
    { name: 'Workplace Communication', desc: 'Client interaction, reporting, team alignment, and email writing.', icon: '🗣️' },
    { name: 'Workspace Readiness', desc: 'Understanding corporate ethics, schedules, and workplace etiquette.', icon: '🏢' },
    { name: 'Grooming & Confidence', desc: 'Mock interview preparation, body language, and professional presentation.', icon: '✨' },
    { name: 'Operational Discipline', desc: 'Punctuality, safety briefings, and standard operating procedures (SOPs).', icon: '   ' },
    { name: 'Safety Awareness', desc: 'Industrial hazard control, emergency protocols, and first aid basics.', icon: '⚠️' },
    { name: 'Teamwork & Synergy', desc: 'Collaborating across roles to execute multi-step projects successfully.', icon: '🤝' },
    { name: 'Customer Handling', desc: 'Service behavior, dispute resolution, and feedback management.', icon: '👥' },
    { name: 'Digital Tools Usage', desc: 'Data logging, basic applications, spreadsheets, and office tools.', icon: '💻' },
    { name: 'Process Understanding', desc: 'Flowchart tracking, chemical batch documentation, and assembly lines.', icon: '📋' },
    { name: 'Interview Preparedness', desc: 'Portfolio building, resume styling, and mock reviews.', icon: '🎯' }
  ];

  const supportSteps = [
    { title: 'Mentorship', desc: 'Direct access to experienced domain experts who guide your technical learning.', icon: '🧑‍🏫' },
    { title: 'Personalized Counselling', desc: 'Helping you choose the right sector based on interests and eligibility.', icon: '🗣️' },
    { title: 'Practical Workspace Sessions', desc: 'Interactive training scenarios simulating real-world working conditions.', icon: '🛠️' },
    { title: 'Skill Assessments', desc: 'Regular feedback parameters to benchmark your capability growth.', icon: '📊' },
    { title: 'Resume & Portfolio Styling', desc: 'Presenting your practical expertise and certifications clearly to employers.', icon: '💼' },
    { title: 'Mock Interviews', desc: 'Building comfort with panels, standard questions, and corporate grooming.', icon: '👥' },
    { title: 'Confidence Coaching', desc: 'Overcoming presentation hurdles and building client communication.', icon: '🌟' },
    { title: 'Placement Connections', desc: 'Direct pathway linkages to CORPORA recruitment partners.', icon: '🚀' }
  ];

  return (
    <div className="programs-page">
      {/* SECTION 1: PROGRAMS HERO (Modern Startup Visual Layout) */}
      <section className="programs-hero-section">
        <div className="hero-gradient-bg"></div>
        <div className="container programs-hero-container">
          <div className="programs-hero-left">
            <span className="category-pill animate-pill">PRACTICAL CAREER PROGRAMS</span>
            <h1 className="programs-hero-title">
              Explore Programs That Build Real Skills and Career Confidence
            </h1>
            <p className="programs-hero-subtitle">
              CORPORA offers practical, career-focused programs designed to help learners build skills, gain exposure, strengthen confidence, and move toward real opportunities across multiple sectors.
            </p>
            <div className="programs-hero-actions">
              <a href="#all-programs" className="btn-primary-glow">Explore All Programs</a>
              <Link to="/apply-now" className="btn-outline-white-glow">Apply Now</Link>
            </div>
          </div>

          <div className="programs-hero-right">
            <div className="programs-hero-visual">
              <div className="hero-geometric-shape"></div>
              <div className="hero-person-wrap">
                <img src={imgHero} alt="CORPORA Student Skilling" className="hero-person-img" />
              </div>
              
              {/* Floating elements / Mini cards */}
              <div className="floating-badge badge-skills card-3d">
                <span className="badge-icon">🛠️</span>
                <div className="badge-text">
                  <strong>Practical Skills</strong>
                  <span>Hands-on Focus</span>
                </div>
              </div>
              <div className="floating-badge badge-growth card-3d">
                <span className="badge-icon">📈</span>
                <div className="badge-text">
                  <strong>Career Growth</strong>
                  <span>Multi-Sector</span>
                </div>
              </div>
              <div className="floating-badge badge-cert card-3d">
                <span className="badge-icon">🎓</span>
                <div className="badge-text">
                  <strong>Confidence</strong>
                  <span>Work-Ready</span>
                </div>
              </div>
              <div className="floating-badge badge-opportunity card-3d">
                <span className="badge-icon">💼</span>
                <div className="badge-text">
                  <strong>Opportunities</strong>
                  <span>Learn &amp; Earn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT MAKES CORPORA PROGRAMS DIFFERENT */}
      <section className="different-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">OUR METHODOLOGY</span>
            <h2 className="section-title">What Makes CORPORA Programs Different?</h2>
            <p className="section-desc">
              We deliver career-ready, student-friendly vocational pathways that bridge academic degrees with live technical execution.
            </p>
          </div>
          
          <div className="different-grid">
            {whyDifferent.map((item, idx) => (
              <div key={idx} className="card-3d diff-card glass-card">
                <span className="diff-badge">{item.icon}</span>
                <h3 className="diff-title">{item.title}</h3>
                <p className="diff-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ALL PROGRAMS SHOWCASE */}
      <section className="programs-showcase" id="all-programs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">CURRICULUM</span>
            <h2>All Programs Showcase</h2>
            <p className="section-desc">Browse practical CORPORA programs across multiple career pathway categories.</p>
          </div>

          <div className="program-filter-row">
            <strong className="filter-label">FILTER BY SECTOR:</strong>
            <div className="jump-links">
              {programCategories.map((catName) => (
                <button
                  key={catName}
                  onClick={() => setSelectedCategory(catName)}
                  className={`jump-link-item ${selectedCategory === catName ? 'active-filter' : ''}`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>

          <div className="program-card-grid">
            {filteredPrograms.map((prog, pIdx) => (
              <div key={pIdx} className="program-card course-style-card">
                <div className="program-card-img-wrap">
                  <img src={prog.categoryImage} alt={prog.title} className="program-card-img" />
                </div>
                <div className="program-card-content">
                  <span className="prog-domain-pill">{prog.domain}</span>
                  <h4 className="prog-title">{prog.title}</h4>
                  <p className="prog-desc">{prog.description}</p>
                  
                  <div className="prog-card-details">
                    <div className="prog-detail-row">
                      <strong>Suitable for:</strong>
                      <span>{prog.learners}</span>
                    </div>
                    <div className="prog-detail-row">
                      <strong>Career Pathways:</strong>
                      <span>{prog.pathways}</span>
                    </div>
                  </div>

                  <div className="prog-card-footer">
                    <Link to="/apply-now" className="btn-primary-glow prog-apply-btn">Apply Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW PROGRAMS WORK */}
      <section className="work-flow-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">THE TIMELINE</span>
            <h2 className="section-title">How CORPORA Programs Work</h2>
            <p className="section-desc">
              Our structured educational framework takes you from baseline capability to employer integration in logical, confident stages.
            </p>
          </div>

          <div className="journey-timeline-3d">
            <div className="timeline-connector-line"></div>
            <div className="journey-steps-grid">
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">01</span>
                <h3 className="step-title">Discover Program</h3>
                <p className="step-text">Choose your career sector based on counselling parameters and educational interest.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">02</span>
                <h3 className="step-title">Enroll</h3>
                <p className="step-text">Formally enter your structured learn &amp; earn pathway with zero complexity.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">03</span>
                <h3 className="step-title">Learn Skills</h3>
                <p className="step-text">Build technical and domain knowledge under senior industry mentors.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">04</span>
                <h3 className="step-title">Practice</h3>
                <p className="step-text">Execute tasks, work with real toolkits, and document your learnings.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">05</span>
                <h3 className="step-title">Exposure</h3>
                <p className="step-text">Participate in industry exposure visits and understand shopfloor safety.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">06</span>
                <h3 className="step-title">Confidence</h3>
                <p className="step-text">Polish communication, groom presentation, and pass mock panel reviews.</p>
              </div>
              <div className="journey-step-card card-3d glass-card">
                <span className="step-number">07</span>
                <h3 className="step-title">Pathway</h3>
                <p className="step-text">Bridge directly into active apprenticeships, training opportunities, and placement channels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO CAN JOIN */}
      <section className="join-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">ELIGIBILITY</span>
            <h2 className="section-title">Who Can Join CORPORA?</h2>
            <p className="section-desc">
              We cater directly to students and young job seekers looking to bolster their educational credentials with practical capability.
            </p>
          </div>

          <div className="join-grid">
            {learnerGroups.map((group, idx) => (
              <div key={idx} className="card-3d join-card glass-card">
                <div className="join-card-header">
                  <h3 className="join-group-title">{group.title}</h3>
                  <span className="join-group-subtitle">{group.subtitle}</span>
                </div>
                <div className="join-pills-list">
                  {group.items.map((item, iIdx) => (
                    <span key={iIdx} className="join-pill">{item}</span>
                  ))}
                </div>
                <p className="join-card-text">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SKILLS YOU BUILD */}
      <section className="skills-build-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">CAPABILITIES</span>
            <h2 className="section-title">Skills You Build</h2>
            <p className="section-desc">
              Our programs prioritize hands-on practice, safety discipline, and presentation confidence, building portable professional assets.
            </p>
          </div>

          <div className="skills-grid-modern">
            {skillItems.map((item, idx) => (
              <div key={idx} className="card-3d skill-card glass-card">
                <div className="skill-card-top">
                  <span className="skill-icon-wrap">{item.icon}</span>
                  <h3 className="skill-title">{item.name}</h3>
                </div>
                <p className="skill-desc-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PROGRAM SUPPORT SYSTEM */}
      <section className="support-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="category-pill">SUPPORT NETWORKS</span>
            <h2 className="section-title">Program Support System</h2>
            <p className="section-desc">
              CORPORA provides extensive scaffolding, counselling parameters, and mock coaching to ensure every student transitions smoothly.
            </p>
          </div>

          <div className="support-grid">
            {supportSteps.map((step, idx) => (
              <div key={idx} className="card-3d support-card glass-card">
                <div className="support-icon-wrap">{step.icon}</div>
                <h3 className="support-title">{step.title}</h3>
                <p className="support-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA */}
      <section className="programs-cta-section section-padding">
        <div className="container">
          <div className="programs-cta-card">
            <h2 className="cta-headline">Start Your Career Growth Journey with CORPORA</h2>
            <p className="cta-subtext">
              Explore practical programs, build real skills, and take the next step toward confidence, employability, and opportunity.
            </p>
            <Link to="/apply-now" className="btn-primary-glow cta-btn">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
