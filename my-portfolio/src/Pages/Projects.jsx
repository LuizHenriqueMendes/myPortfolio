// Projects.js
import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Meus Projetos</h1>
      
      <div className="project-item">
        <h2 className="project-name">Scoutball</h2>
        <p className="project-description">
          Este projeto foi criado para a matéria de Programação de Software para Web, eu e os componentes do grupo 
          utilizamos React e Javascript. Além disso integramos uma API que informava diversas informações sobre jogadores
          de diversos campeonatos diferentes, tanto do Brasil quanto de outros países. 
        </p>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video do Projeto 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="project-item">
        <h2 className="project-name">Wow!</h2>
        <p className="project-description">
          Projeto desenvolvido para
        </p>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video do Projeto 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Adicione mais projetos conforme necessário */}
    </div>
  );
}

export default Projects;
