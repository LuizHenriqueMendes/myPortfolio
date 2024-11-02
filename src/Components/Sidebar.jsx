import React from 'react';
import { Link } from 'react-router-dom';
import logoBR from '../Images/logo-br.png';
import logoEUA from '../Images/logo-eua.png';
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
        <Link to="/" className="sidebar-link">{t('home')}</Link>
        <Link to="/about" className="sidebar-link">{t('about')}</Link>
        <Link to="/projects" className="sidebar-link">{t('projects')}</Link>
        <Link to="/skills" className="sidebar-link">{t('skills')}</Link>
        <Link to="/contact" className="sidebar-link">{t('contact')}</Link>
      </nav>
      <div className="language-toggle">
        <button className="btn-language" onClick={() => changeLanguage('pt')}><img className="logoBR" src={logoBR} alt="BR Flag"/></button>
        <button className="btn-language" onClick={() => changeLanguage('en')}><img className="logoEUA" src={logoEUA} alt="EUA Flag"/></button>
      </div>
    </div>
  );
}

export default Sidebar;