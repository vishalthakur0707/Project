import React from "react";
import './Connect With Me.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ConnectWithMe() {
  return (
    <section className="connect-section" id="connect">
      <div className="connect-card">
        <h2>Connect With Me</h2>
        <p className="connect-lead">
          I’m always open to networking, collaborations, and exciting opportunities.
          Let’s connect on these platforms:
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vishal-thakur-5a069434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
            <FaTwitter /> <span>Twitter</span>
          </a>
          <a href="https://www.instagram.com/vishal_rajpu___?igsh=MThrZGx4anJxanZxNA==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}