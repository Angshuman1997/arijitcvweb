import { getIcon, IconName } from "../../utils/iconMap";
import aboutData from "../../data/about.json";
import "../../styles/AboutTab.css";

export function AboutTab() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h2 className="about-title">{aboutData.title}</h2>
          <div className="about-main">
            <div className="about-description">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="competencies-card">
          <h3 className="competencies-title">
            {aboutData.coreCompetencies.title}
          </h3>
          <ul className="competencies-list">
            {aboutData.coreCompetencies.items.map((item, index) => (
              <li key={index} className="competency-item">
                <div className="competency-bullet"></div>
                <span className="competency-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="highlights-grid">
          {aboutData.highlights.map((item, index) => {
            const Icon = getIcon(item.icon as IconName);
            return (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  <Icon size={24} />
                </div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-description">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="extra-info">
          <div className="personal-info-section">
            <h3 className="personal-info-title">
              {aboutData.personalInformation.title}
            </h3>
            <ul className="personal-info-list">
              {aboutData.personalInformation.items.map((item, index) => (
                <li key={index} className="personal-info-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reference-section">
            <h3 className="reference-title">{aboutData.reference.title}</h3>
            <ul className="reference-list">
              {aboutData.reference.items.map((item, index) => (
                <li key={index} className="reference-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
