import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Sidebar.css';

function Sidebar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Luiz Henrique Mendes</h1>
      <nav className="sidebar-nav">
        <Link to="/">{t('home')}</Link>
        <Link to="/about">{t('about')}</Link>
        <Link to="/projects">{t('projects')}</Link>
        <Link to="/skills">{t('skills')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </nav>
      <div className="language-toggle">
        <button onClick={() => changeLanguage('pt')}>PT</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </div>
  );
}

export default Sidebar;