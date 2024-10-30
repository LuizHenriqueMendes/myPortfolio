// SkillCard.js
import React from 'react';
import '../Styles/SkillCard.css';

function SkillCard({ title, description }) {
  return (
    <div className="skill-card">
      <h2 className="skill-title">{title}</h2>
      <p className="skill-description">{description}</p>
    </div>
  );
}

export default SkillCard;
