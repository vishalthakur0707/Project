import React from "react";
import "./About.css";
import Image from '../../assets/image.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about-title">
        About <span>me</span>
      </h2>
      <div className="about-container">
        <div className="about-left">
          <img src={Image} alt="Profile" className="about-img" />
        </div>
        <div className="about-right">
          <p className="about-desc">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
            <br />
            <br />
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          <div className="skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="bar html-css"></div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="bar react-js"></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="bar javascript"></div>
            </div>
            <div className="skill">
              <span>Next JS</span>
              <div className="bar next-js"></div>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <h3>8 months</h3>
              <p>Complete 8 months interenship</p>
            </div>
            <div>
              <h3>4+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>Make Project in web desning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
