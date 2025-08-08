import React from 'react';
import './Portfoliyo.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa';

export default function Portfoliyo() {
  const projects = [
    { id: 1, title: 'Responsive Tour Website', desc: 'Built with React, CSS Grid & Flexbox. Includes booking UI and animations.', tech: ['React', 'CSS'] },
    { id: 2, title: 'To‑Do App (MERN)', desc: 'React frontend + Node/Express API + MongoDB. Authentication and CRUD.', tech: ['React', 'MongoDB'] },
    { id: 3, title: 'Landing Page — Agency', desc: 'Pixel-perfect landing page with responsive design and contact integration.', tech: ['HTML', 'CSS', 'JS'] },
  ];

  return (
    <main className="portfolio-root">
      <header className="portfolio-hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Hi, I’m Vishal — Frontend Developer</h1>
            <p className="subtitle">I build responsive, accessible, and fast user interfaces with React.js.</p>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary">See my work</a>
              <a href="#contact" className="btn-secondary">Contact me</a>
            </div>

            <ul className="skill-list" aria-label="Core skills">
              <li><FaReact /> React</li>
              <li><FaJsSquare /> JavaScript</li>
              <li><FaHtml5 /> HTML</li>
              <li><FaCss3Alt /> CSS</li>
              <li><FaGithub /> Git</li>
            </ul>
          </div>

          <div className="hero-card" aria-hidden>
            <div className="avatar">VT</div>
            <div className="hero-stats">
              <div><strong>3+</strong><span>Projects</span></div>
              <div><strong>2+</strong><span>Clients</span></div>
            </div>
          </div>
        </div>
      </header>

      <section id="projects" className="projects-section">
        <h2>Selected Projects</h2>
        <p className="muted">A few projects showcasing my frontend work — focus on UI, responsiveness, and performance.</p>

        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <div className="project-thumb" role="img" aria-label={`${p.title} screenshot`}></div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-meta">
                  <div className="tech">{p.tech.join(' • ')}</div>
                  <a className="view" href="#" aria-label={`View ${p.title}`}><FaGithub /> Repo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-cta">
        <h2>Want to build something together?</h2>
        <p className="muted">I’m available for freelance work and collaboration. Let’s chat.</p>
        <a href="#connect" className="btn-primary">Connect with me</a>
      </section>

      <footer className="portfolio-footer">© {new Date().getFullYear()} Vishal Thakur — Built with React</footer>
    </main>
  );
}