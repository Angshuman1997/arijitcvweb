import expertiseData from '../../data/expertise.json';
import '../../styles/ExpertiseTab.css';

export function ExpertiseTab() {
  return (
    <div className="expertise-container">
      <div className="expertise-content">
        <div className="expertise-header">
          <h2 className="expertise-title">{expertiseData.title}</h2>
          <p className="expertise-description">{expertiseData.description}</p>
        </div>

        {/* Professional Experience Section */}
        <div className="experience-section">
          <h3 className="section-title">Professional Experience</h3>
          <div className="experience-timeline">
            {expertiseData.professionalExperience.map((exp, index) => (
              <div key={index} className={`experience-item ${exp.type}`}>
                <div className="experience-header">
                  <div className="company-info">
                    <h4 className="company-name">{exp.company}</h4>
                    <p className="company-location">{exp.location}</p>
                  </div>
                  <div className="position-info">
                    <p className="position-title">{exp.position}</p>
                    <p className="period">{exp.period}</p>
                  </div>
                </div>
                <p className="company-description">{exp.description}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="section-title">Skills</h3>
          {expertiseData.skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">              
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

        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="section-title">Certifications</h3>
          <div className="certifications-grid">
            {expertiseData.certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">🏆</div>
                <p className="cert-text">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div className="internships-section">
          <h3 className="section-title">Internships & Projects</h3>
          <div className="internships-grid">
            {expertiseData.internships.map((internship, index) => (
              <div key={index} className="internship-item">
                <div className="internship-header">
                  <h4 className="internship-company">{internship.company}</h4>
                  {internship.location && <p className="internship-location">{internship.location}</p>}
                </div>
                <p className="internship-project">{internship.project}</p>
                {internship.duration && <p className="internship-duration">Duration: {internship.duration}</p>}
                {internship.achievement && <p className="internship-achievement">🎖️ {internship.achievement}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

