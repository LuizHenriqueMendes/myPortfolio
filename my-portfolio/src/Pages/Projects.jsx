// Projects.js
import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Meus Projetos</h1>

      <div className="project-item">
        <h2 className="project-name">Wow!</h2>
        <p className="project-description">
        Projeto desenvolvido para a disciplina Arquitetura e Padrões de Software, aonde foi criada uma rede social,
        na qual o usuário pode postar, curtir, comentar e ver postagens de outros usuários.
        </p>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3cMylpkWKCc"
            title="Video do Projeto 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div className="project-item">
  <h2 className="project-name">GalaxyShooter</h2>
  <p className="project-description">
    Jogo desenvolvido em um curso da Udemy, utilizando Unity e C#.
  </p>
  <div className="project-video">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bmW1rsmt2Nc"  // Link corrigido
      title="Video do Projeto GalaxyShooter"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
    
<div className="project-item">
  <h2 className="project-name">RunDuckRun</h2>
  <p className="project-description">
    Jogo de plataforma que desenvolvi adaptando os conhecimentos adquiridos sobre programação
    de jogos e na faculdade.
  </p>
  <div className="project-video">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/JUmYUTVwp9g"  // Link corrigido
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
