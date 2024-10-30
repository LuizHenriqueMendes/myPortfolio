// Skills.js
import React from 'react';
import SkillCard from '../Components/SkillCard';
import '../Styles/Skills.css';

function Skills() {
  const skills = [
    { id: 1, title: "JavaScript", description: "Experiência com ES6+, React, Node.js" },
    { id: 2, title: "HTML & CSS", description: "Desenvolvimento web responsivo, CSS Flexbox e Grid" },
    { id: 3, title: "Python", description: "Análise de dados e desenvolvimento backend com Django" },
    { id: 4, title: "Git & GitHub", description: "Controle de versão e colaboração em projetos" },
    { id: 5, title: "SQL", description: "Consultas e manipulação de bancos de dados" },
    { id: 6, title: "React", description: "Desenvolvimento de interfaces dinâmicas e componentes" }
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
