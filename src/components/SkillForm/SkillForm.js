import { useState } from 'react';

function SkillForm({ addSkill }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState(0);

  const submitSkill = (e) => {
    e.preventDefault();

    const newSkill = {
      title,
      description,
      level: parseInt(level),
    };

    addSkill(newSkill);

    setTitle('');
    setDescription('');
    setLevel(0);
  };

  return (
    <form onSubmit={submitSkill}>
      <div className='form-group'>
        <label htmlFor='title'>Название навыка:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='description'>Описание навыка:</label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className='form-group'>
        <label htmlFor='level'>Уровень владения (0-100):</label>
        <input
          type='number'
          id='level'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>

      <button type='submit'>Создать навык</button>
    </form>
  );
}

export default SkillForm;
