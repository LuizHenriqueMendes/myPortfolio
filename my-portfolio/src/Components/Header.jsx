import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Luiz Henrique Mendes</h1>
      <nav className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
