import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../corpora-images/hero/insights-hero.png';
import './Insights.css';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const researchCategories = [
    'All',
    'Employability',
    'Skill Development',
    'Learn & Earn',
    'Career Pathways',
    'Student Guidance',
    'Institutional Development',
    'Industry & Workforce'
  ];

  const featuredResearch = [
    {
      title: 'Youth Employability & Skill Readiness',
      summary: 'A detailed research-style insight analyzing the shifting demands in entry-level hiring across multiple industrial and corporate sectors, highlighting the importance of practical confidence.',
      category: 'Employability',
      btnText: 'Read Insight',
      icon: '📄'
    },
    {
      title: 'The Education-to-Employment Gap',
      summary: 'A reference topic research detailing the mismatch between standard theoretical curricula and real-world workplace requirements in modern business environments.',
      category: 'Skill Development',
      btnText: 'View Resource',
      icon: '📊'
    },
    {
      title: 'Digital Learning & Student Engagement',
      summary: 'A case-study inspired resource examining how interactive digital formats, mixed-delivery models, and gamified skilling improve long-term learner retention and engagement.',
      category: 'Learn & Earn',
      btnText: 'Read Insight',
      icon: '💻'
    },
    {
      title: 'Future of Skill-Based Education',
      summary: 'An industry insight and forward-looking analysis of multi-sector skill integration, flexible learning models, and early industry exposure pathways for youth.',
      category: 'Career Pathways',
      btnText: 'View Resource',
      icon: '🎯'
    }
  ];

  const corporaArticles = [
    {
      title: 'Why Practical Learning Matters More Than Only Theory',
      desc: 'Modern workplaces prioritize what you can do over what you memorize. Discover why hands-on confidence is the key to sustainable employment and growth.',
      category: 'Skill Development',
      readTime: '4 min read',
      date: 'June 10, 2026'
    },
    {
      title: 'Learn & Earn: A Better Way to Build Career Confidence',
      desc: 'Combining core domain training with active workplace exposure allows students to build financial independence and practical skills simultaneously.',
      category: 'Learn & Earn',
      readTime: '6 min read',
      date: 'May 28, 2026'
    },
    {
      title: 'How Students Can Choose the Right Career Pathway',
      desc: 'Identifying the right direction based on educational background, domain interests, and industry demand is crucial for early career success and satisfaction.',
      category: 'Career Pathways',
      readTime: '5 min read',
      date: 'May 15, 2026'
    },
    {
      title: 'Why Skill Development Is Important After 10th and 12th',
      desc: 'Early skilling provides school graduates with immediate earning confidence, opening doors to advanced technical and service roles early in life.',
      category: 'Student Guidance',
      readTime: '5 min read',
      date: 'April 30, 2026'
    },
    {
      title: 'Career Options for BA, B.Com, BCA, B.Pharm and Diploma Students',
      desc: 'Discover how graduation profiles align with modern high-growth sectors like BFSI, Logistics, Digital Support, and Pharmaceutical Operations.',
      category: 'Career Pathways',
      readTime: '7 min read',
      date: 'April 18, 2026'
    },
    {
      title: 'How CORPORA Connects Education with Real Growth',
      desc: 'An overview of how CORPORA\'s multi-sector curriculum and placement-ready guidance help transition learners into sustainable career directions.',
      category: 'Institutional Development',
      readTime: '4 min read',
      date: 'March 22, 2026'
    }
  ];

  const downloadableResources = [
    {
      title: 'CORPORA Program Brochure',
      desc: 'A complete guide to our training categories, domain models, eligibility requirements, and student pathways.',
      fileSize: '2.4 MB PDF',
      icon: '📂'
    },
    {
      title: 'Career Pathway Guide',
      desc: 'A visual route map showing how academic qualifications match with various sectors and corporate training structures.',
      fileSize: '3.1 MB PDF',
      icon: '🧭'
    },
    {
      title: 'Learn & Earn Model Overview',
      desc: 'Detailed breakdown of the mixed skilling-and-stipend operational flow for vocational and technical programs.',
      fileSize: '1.8 MB PDF',
      icon: '💸'
    },
    {
      title: 'Student Readiness Checklist',
      desc: 'A self-assessment tool covering core soft skills, resume prep guidelines, and interview presentation targets.',
      fileSize: '950 KB PDF',
      icon: '✅'
    },
    {
      title: 'Institution Partnership Note',
      desc: 'Details on how degree colleges and technical institutes can integrate CORPORA frameworks into campus ecosystems.',
      fileSize: '1.5 MB PDF',
      icon: '🏢'
    }
  ];

  const filteredArticles = activeCategory === 'All'
    ? corporaArticles
    : corporaArticles.filter(art => art.category === activeCategory);

  return (
    <div className="insights-resources-page">
      {/* SECTION 1: HERO */}
      <section className="insights-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="insights-hero-overlay"></div>
        <div className="container insights-hero-container">
          <div className="insights-hero-left">
            <span className="section-label animate-pill">KNOWLEDGE HUB</span>
            <h1 className="insights-hero-title">Insights & Resources</h1>
            <p className="insights-hero-subtext">
              Explore practical articles, research-based insights, student guides, and career resources designed to help learners understand real education, skilling, and future-ready growth.
            </p>
            <div className="insights-hero-actions">
              <a href="#featured-research" className="btn-primary">Browse Research</a>
              <a href="#resources" className="btn-secondary">Download Resources</a>
            </div>
          </div>
          <div className="insights-hero-right-empty"></div>
        </div>
      </section>

      {/* SECTION 2: FEATURED RESEARCH & REPORTS */}
      <section id="featured-research" className="featured-research-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">SELECTED REPORTS</span>
            <h2 className="section-title">Featured Research & Reports</h2>
            <p className="section-desc">
              Explore research-style insights and industry topics covering skilling trends, employability analysis, and practical learning structures.
            </p>
          </div>

          <div className="featured-research-grid">
            {featuredResearch.map((report, idx) => (
              <div key={idx} className="research-doc-card card-3d glass-card">
                <div className="doc-card-accent"></div>
                <div className="doc-icon-box">{report.icon}</div>
                <span className="doc-category-badge">{report.category}</span>
                <h3 className="doc-title">{report.title}</h3>
                <p className="doc-summary">{report.summary}</p>
                <div className="doc-card-footer">
                  <button className="btn-insight-link">{report.btnText} ➔</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RESEARCH CATEGORIES (Filter Controls) */}
      <section className="categories-filter-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">TOPICS OF FOCUS</span>
            <h2 className="section-title">Explore by Domain</h2>
            <p className="section-desc">Filter CORPORA articles and skilling updates by matching subject area.</p>
          </div>
          <div className="filter-chips-container">
            {researchCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORPORA ARTICLES */}
      <section className="corpora-articles-section section-padding">
        <div className="container">
          <div className="articles-grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <article key={idx} className="article-card card-3d glass-card">
                  <div className="article-meta">
                    <span className="article-tag">{article.category}</span>
                    <span className="article-readtime">{article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-desc">{article.desc}</p>
                  <div className="article-footer">
                    <span className="article-date">{article.date}</span>
                    <button className="btn-article-more">Read Full Article</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-articles-state text-center">
                <p>No articles available under the selected topic yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: DOWNLOADABLE RESOURCES */}
      <section id="resources" className="downloadable-resources-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">RESOURCE CENTER</span>
            <h2 className="section-title">Downloadable Resources</h2>
            <p className="section-desc">
              Access key booklets, program briefs, and checklists directly in digital format.
            </p>
          </div>

          <div className="resources-list-container">
            {downloadableResources.map((res, idx) => (
              <div key={idx} className="resource-list-row card-3d glass-card">
                <div className="resource-info">
                  <span className="resource-icon">{res.icon}</span>
                  <div className="resource-text">
                    <h3>{res.title}</h3>
                    <p>{res.desc}</p>
                  </div>
                </div>
                <div className="resource-actions">
                  <span className="resource-size-tag">{res.fileSize}</span>
                  <div className="resource-buttons-group">
                    <button className="btn-resource-view">View Document</button>
                    <button className="btn-resource-download">Download PDF</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="insights-cta-section section-padding">
        <div className="container">
          <div className="insights-cta-banner">
            <h2>Want to Learn More About CORPORA?</h2>
            <p>Explore practical programs, career pathways, and resources designed for real learning and future-ready growth.</p>
            <div className="insights-cta-buttons">
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
              <Link to="/apply-now" className="btn-secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
