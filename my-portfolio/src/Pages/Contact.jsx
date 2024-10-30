// Contact.js
import React from 'react';
import logoEMAIL from '../Images/logo-mail.png';
import logoPHONE from '../Images/logo-phone.png';
import logoLINK from '../Images/logo-linkedin.png';
import logoGIT from '../Images/logo-github.png';

import '../Styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Entre em Contato Comigo</h1>
      
      <a href="mailto:luiz.mendescastro@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
        <div className="contact-icon">
          <img src={logoEMAIL} alt="Email" />
        </div>
        <div className="contact-info">
          <p>Email: luiz.mendescastro@gmail.com</p>
        </div>
      </a>

      <a href="tel:+5521999553329" className="contact-item">
        <div className="contact-icon">
          <img src={logoPHONE} alt="Telefone" />
        </div>
        <div className="contact-info">
          <p>Telefone: (21) 99955-3329</p>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/luiz-mendes-161724214" className="contact-item" target="_blank" rel="noopener noreferrer">
        <div className="contact-icon">
          <img src={logoLINK} alt="LinkedIn" />
        </div>
        <div className="contact-info">
          <p>LinkedIn: www.linkedin.com/in/luiz-mendes-161724214</p>
        </div>
      </a>

      <a href="https://github.com/LuizHenriqueMendes" className="contact-item" target="_blank" rel="noopener noreferrer">
        <div className="contact-icon">
          <img src={logoGIT} alt="GitHub" />
        </div>
        <div className="contact-info">
          <p>GitHub: https://github.com/LuizHenriqueMendes</p>
        </div>
      </a>
    </div>
  );
}

export default Contact;
