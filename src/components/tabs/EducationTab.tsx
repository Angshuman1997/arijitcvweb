import { getIcon } from '../../utils/iconMap';
import educationData from '../../data/education.json';
import '../../styles/EducationTab.css';

export function EducationTab() {
  const GraduationCapIcon = getIcon('GraduationCap');
  const CalendarIcon = getIcon('Calendar');
  const AwardIcon = getIcon('Award');
  const BookOpenIcon = getIcon('BookOpen');

  return (
    <div className="education-container">
      <div className="education-content">
        <div className="education-header">
          <h2 className="education-title">{educationData.title}</h2>
          <p className="education-description">
            {educationData.description}
          </p>
        </div>

        <div className="education-main-grid">
          {/* Education */}
          <div className="education-card">
            <div className="education-header-info">
              <div className="education-info">
                <div className="education-icon">
                  <GraduationCapIcon size={28} />
                </div>
                <div className="education-meta">
                  <div className="education-type">Primary Education</div>
                  <div className="education-duration">{educationData.education.duration}</div>
                </div>
              </div>
              <div className="education-grade">
                <div className="grade-value">{educationData.education.grade}</div>
                <div className="grade-label">Academic Performance</div>
              </div>
            </div>

            <h3 className="degree-title">{educationData.education.degree}</h3>
            <p className="university-name">{educationData.education.university}</p>
            <p className="university-location">{educationData.education.location}</p>

            <div className="education-highlights">
              {educationData.education.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-bullet"></div>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div className="internship-card">
            <h4 className="internship-title">
              <CalendarIcon size={20} />
              Internship
            </h4>
            {educationData.internships.map((internship, index) => (
              <div key={index} className="internship-item">
                <div className="internship-info">
                  <div className="internship-role">{internship.role}</div>
                  <div className="internship-company">{internship.company}</div>
                  <div className="internship-duration">{internship.duration}</div>
                </div>
                <div className="internship-achievements">
                  {internship.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement-item">
                      <div className="achievement-bullet"></div>
                      <span className="achievement-text">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-secondary-grid">
          {/* Certifications */}
          <div className="certifications-card">
            <div className="certifications-header">
              <AwardIcon size={24} />
              <h3 className="certifications-title">Professional Certifications</h3>
            </div>
            
            <div className="certifications-list">
              {educationData.certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="certification-header">
                    <h4 className="certification-title">{cert.title}</h4>
                    <span className="certification-date">
                      {cert.date}
                    </span>
                  </div>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-credential">{cert.credential}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="coursework-card">
            <div className="coursework-header">
              <BookOpenIcon size={24} />
              <h3 className="coursework-title">Relevant Coursework</h3>
            </div>
            
            <div className="coursework-grid">
              {educationData.coursework.map((course, index) => (
                <div key={index} className="course-item">
                  <div className="course-bullet"></div>
                  <span className="course-name">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

