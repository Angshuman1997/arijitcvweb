import { ImageWithFallback } from '../ImageFallBack/ImageWithFallback';
import { getIcon } from '../../utils/iconMap';
import designsData from '../../data/designs.json';
import '../../styles/DesignTab.css';

export function DesignTab() {
  const CalendarIcon = getIcon('Calendar');
  const FileTextIcon = getIcon('FileText');
  const ExternalLinkIcon = getIcon('ExternalLink');

  return (
    <div className="designs-container">
      <div className="designs-content">
        <div className="designs-header">
          <h2 className="designs-title">{designsData.title}</h2>
          <p className="designs-description">
            {designsData.description}
          </p>
        </div>

        <div className="designs-grid">
          {designsData.designs.map((design, index) => (
            <div key={index} className="design-card">
              <div className="design-image">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="design-thumbnail"
                />
                <div className="design-category">
                  {design.category}
                </div>
                <div className="design-date">
                  <CalendarIcon size={12} />
                  {design.date}
                </div>
              </div>

              <div className="design-content">
                <h3 className="design-title">{design.title}</h3>
                
                <p className="design-description">{design.description}</p>

                <div className="design-deliverables">
                  <div className="deliverables-label">
                    <FileTextIcon size={12} />
                    Deliverables
                  </div>
                  <div className="deliverables-list">
                    {design.deliverables.map((item, itemIndex) => (
                      <span key={itemIndex} className="deliverable-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="designs-tools">
                  {design.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="design-details-btn">
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

