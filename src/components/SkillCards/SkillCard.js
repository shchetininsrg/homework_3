import { useState } from 'react';

function SkillCard({ skill, deleteSkill }) {
  const [studied, setStudied] = useState(false);

  const markStudied = () => {
    setStudied(true);
  };

  return (
    <div className='skill-card'>
      <div className='skill-card__header'>
        <h3>{skill.title}</h3>
        <button onClick={() => deleteSkill(skill.id)}>Удалить</button>
      </div>
      <div className='skill-card__body'>
        <p>{skill.description}</p>
        <div className='skill-card__level'>
          <span>{skill.level}%</span>
        </div>
        <button onClick={markStudied} disabled={studied}>
          {studied ? 'Изучено' : 'Отметить изученным'}
        </button>
      </div>
    </div>
  );
}

export default SkillCard;
