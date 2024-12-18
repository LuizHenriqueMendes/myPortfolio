import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Home.css';

function Home() {
  
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="welcome-text">{t('welcome')}</h1>
      <div className="home-content">
        <div className="home-about">
          <p>{t('description1')}</p>
          <p>{t('description2')}</p>
          <p>{t('description3')}</p>
        </div>
        <div className="home-curriculo">
          <a href="/LuizHenriqueMendes_CV.pdf" download>{t('curriculum')}</a>
          <a href="/LuizHenriqueMendes_ENG_CV.pdf" download>{t('curriculum2')}</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
