import React from 'react';
import Timeline from '../Components/Timeline';
import '../Styles/About.css'

function About() {
  return (

    <div>
        <div className="about-content">
          <h1 className="about-title">Sobre Mim</h1>
          <div className="about-text">
          
          <Timeline />
          </div>
        </div>
    </div>
    
  );
}

export default About;
