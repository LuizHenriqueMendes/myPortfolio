// Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Projects.css';

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="projects-container">
      <h1 className="projects-title">{t('projectsTitle')}</h1>

      <div className="project-item">
        <h2 className="project-name">{t('project1Title')}</h2>
        <p className="project-description">
        {t('project1')}
       </p>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/3cMylpkWKCc"
            title="Video do Projeto 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div className="project-item">
  <h2 className="project-name">{t('project2Title')}</h2>
  <p className="project-description">
  {t('project2')}
  </p>
  <div className="project-video">
    <iframe
      width="560"
      height="315"
      src="https://youtube.com/embed/bmW1rsmt2Nc" 
      title="Video do Projeto GalaxyShooter"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
    
<div className="project-item">
  <h2 className="project-name">{t('project3Title')}</h2>
  <p className="project-description">
  {t('project3')}
  </p>
  <div className="project-video">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5FP5NXKclHs"  
      title="Video do Projeto RunDuckRun"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

    </div>
  );
}

export default Projects;
