import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import LearningModel from './pages/LearningModel';
import CareerPathways from './pages/CareerPathways';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';
import Insights from './pages/Insights';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/learning-model" element={<LearningModel />} />
        <Route path="/career-pathways" element={<CareerPathways />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply-now" element={<ApplyNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}
