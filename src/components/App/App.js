import { useState } from 'react';
import SkillCard from '../SkillCards/SkillCard';
import SkillForm from '../SkillForm/SkillForm';
import { skillsArray } from '../../utils/constants';

function App() {
  const [skills, setSkills] = useState(skillsArray);
  const [showSkill, setShowSkill] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const filteredSkills = skills.filter((skill) => {
    if (filterValue === 'moreThan50') {
      return skill.level > 50;
    } else if (filterValue === 'lessThan50') {
      return skill.level < 50;
    }
    return true;
  });

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleAddSkill = (skill) => {
    setSkills([...skills, skill]);
  };
  const handleDeleteSkill = (id) => {
    const filteredSkills = skills.filter((skill) => skill.id !== id);
    setSkills(filteredSkills);
  };

  return (
    <div className='App'>
      <div className={`controlls ${showSkill ? 'controlls_type_top' : ''}`}>
        <button
          type='button'
          className='controlls__btn'
          onClick={() => setShowSkill(!showSkill)}
        >
          {showSkill ? 'Скрыть навыки' : 'Показать навыки'}
        </button>
      </div>
      {showSkill && (
        <div>
          <div className='skills-filter'>
            <label htmlFor='skill-filter'>Фильтр навыков:</label>
            <select
              id='skill-filter'
              value={filterValue}
              onChange={handleFilterChange}
            >
              <option value=''>Все</option>
              <option value='moreThan50'>Изучено более 50%</option>
              <option value='lessThan50'>Изучено менее 50%</option>
            </select>
          </div>
          <div className='skills-container'>
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                deleteSkill={handleDeleteSkill}
              />
            ))}
          </div>
          <div className='form-container'>
            <SkillForm addSkill={handleAddSkill} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
