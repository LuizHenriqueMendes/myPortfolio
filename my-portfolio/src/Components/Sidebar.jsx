import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Luiz Henrique Mendes</h1>
      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Mim</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/skills">Habilidades</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </div>
  );
}

export default Sidebar;