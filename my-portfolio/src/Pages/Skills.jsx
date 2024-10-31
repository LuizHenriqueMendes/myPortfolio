// Skills.js
import React from 'react';
import SkillCard from '../Components/SkillCard';
import '../Styles/Skills.css';

function Skills() {
  const skills = [
    { id: 1, title: "JavaScript", description: "Experiência com React, Node.js e utilização em backend" },
    { id: 2, title: "HTML & CSS", description: "Desenvolvimento web responsivo." },
    { id: 3, title: "React", description: "Desenvolvimento de interfaces dinâmicas e componentes" },
    { id: 4, title: "Python", description: "Conhecimento básico de Python." },
    { id: 5, title: "Git & GitHub", description: "Controle de versão e colaboração em projetos" },
    { id: 6, title: "SQL", description: "Consultas e manipulação de bancos de dados" },
    { id: 7, title: "C#", description: "Desenvolvimento de jogos" },
    { id: 8, title: "R", description: "Manipulação de dados, treinamento e previsão de dados." },
    { id: 9, title: "C, C++", description: "Conhecimentos de programção em C e C++." },
    { id: 10, title: "Pacote Office", description: "Conhecimento em Excel, Word, PowerPoint." },
    { id: 11, title: "Redes", description: "Funcionameto de redes, servidores, rack's, switch etc." },
    { id: 12, title: "Manutenção", description: "Montagem, conserto e manutenção de Desktops e Notebooks" }
    
  ];
  

  return (
    <div className="skills-container">
      <h1 className="skills-title">Minhas Habilidades</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} description={skill.description} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
