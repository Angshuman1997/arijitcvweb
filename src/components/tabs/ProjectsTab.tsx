import { ImageWithFallback } from '../ImageFallBack/ImageWithFallback';
import { getIcon } from '../../utils/iconMap';
import projectsData from '../../data/projects.json';
import '../../styles/ProjectsTab.css';

export function ProjectsTab() {
  const CalendarIcon = getIcon('Calendar');
  const FileTextIcon = getIcon('FileText');
  const ExternalLinkIcon = getIcon('ExternalLink');

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h2 className="projects-title">{projectsData.title}</h2>
          <p className="projects-description">
            {projectsData.description}
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div className="project-category">
                  {project.category}
                </div>
                <div className="project-date">
                  <CalendarIcon size={12} />
                  {project.date}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>

                <div className="project-deliverables">
                  <div className="deliverables-label">
                    <FileTextIcon size={12} />
                    Deliverables
                  </div>
                  <div className="deliverables-list">
                    {project.deliverables.map((item, itemIndex) => (
                      <span key={itemIndex} className="deliverable-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-tools">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="project-details-btn">
                  <span>View Details</span>
                  <ExternalLinkIcon size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

