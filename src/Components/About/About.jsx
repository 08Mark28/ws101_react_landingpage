import React from 'react';
import './About.css';
import aboutImage from './assets/WebPic2.jpg';
const About = () => {
  return (
    <section id="about">
      <div className="text-content">
        <h2 className='about-title'>About Web Development</h2>
        <p className='about-description'>
          Web development covers all processes for designing, developing, and maintaining a website. 
          Web development is the process of developing all aspects from web design to content creation, 
          client and server-side programming, and security. This area is fast-moving, and contribution 
          alone keeps one on the pinnacle of technological advancement.
        </p>
      </div>
      <div className="image-content">
        <img src={aboutImage} alt="Web Development Illustration" />
      </div>
    </section>
  );
};

export default About;
