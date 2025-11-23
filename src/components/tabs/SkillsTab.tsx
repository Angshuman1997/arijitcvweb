import skillsData from '../../data/skills.json';
import '../../styles/SkillsTab.css';

export function SkillsTab() {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-header">
          <h2 className="skills-title">{skillsData.title}</h2>
          <p className="skills-description">
            {skillsData.description}
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className={`category-indicator ${category.color}`}></div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          {skillsData.additionalSkills.map((skill, index) => (
            <div key={index} className={`additional-skill ${skill.color} ${skill.borderColor}`}>
              <div className="skill-emoji">{skill.emoji}</div>
              <h4 className="skill-title">{skill.title}</h4>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

