import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillCard from '../Components/SkillCard';
import '../Styles/Skills.css';

function Skills() {
  const { t } = useTranslation();

  const skills = [
    { id: 1, title: t('skill1Title'), description: t('skill1') },
    { id: 2, title: t('skill2Title'), description: t('skill2') },
    { id: 3, title: t('skill3Title'), description: t('skill3') },
    { id: 4, title: t('skill4Title'), description: t('skill4') },
    { id: 5, title: t('skill5Title'), description: t('skill5') },
    { id: 6, title: t('skill6Title'), description: t('skill6') },
    { id: 7, title: t('skill7Title'), description: t('skill7') },
    { id: 8, title: t('skill8Title'), description: t('skill8') },
    { id: 9, title: t('skill9Title'), description: t('skill9') },
    { id: 10, title: t('skill10Title'), description: t('skill10') },
    { id: 11, title: t('skill11Title'), description: t('skill11') },
    { id: 12, title: t('skill12Title'), description: t('skill12') },
    { id: 13, title: t('skill13Title'),  },
    { id: 14, title: t('skill14Title'),  },
    { id: 15, title: t('skill15Title'),  },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">{t('skillsTitle')}</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} description={skill.description} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
