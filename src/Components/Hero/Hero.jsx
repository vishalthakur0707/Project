import React from 'react';
import './Hero.css';
import Image from '../../assets/image.jpg';

const Hero = () => {
  const downloadResume = () => {
    // The path to your PDF in the public folder
    const link = document.createElement('a');
    link.href = '/Vishal%202.pdf';
    link.download = 'Vishal 2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='hero'>
      <img src={Image} alt="" />
      <h1>I'm <span>Vishal</span>, Frontend developer based in Himachal Pradesh.</h1>
      <p>22-year-old React.js Developer passionate about building responsive, user-friendly web applications</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>

        {/* Resume button as div with click handler */}
        <div 
          className="hero-resume"
          onClick={downloadResume}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') downloadResume(); }}
        >
          My resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
