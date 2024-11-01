import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../Components/Timeline';
import '../Styles/About.css'

function About() {
  const { t } = useTranslation();
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
