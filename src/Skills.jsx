import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <span className="level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;