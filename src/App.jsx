import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Portfoliyo from './Components/Portfoliyo/Portfoliyo';
import Contact from './Components/Contect me/Contact';
import ContectMe from './Components/Connect With Me/Connect With Me';

// Scroll handler component to scroll to section based on current path
const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname === '/' ? 'home' : pathname.slice(1); // remove leading '/'
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null; // no UI
};

const HomePage = () => (
  <>
    <Navbar />
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="portfolio"><Portfoliyo /></section>
    <section id="contact"><Contact /></section>
    <section id="ContectMe"><ContectMe /></section>

  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/connect" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
