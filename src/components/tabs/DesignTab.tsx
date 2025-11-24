import { ImageWithFallback } from "../ImageFallBack/ImageWithFallback";
import designsData from "../../data/designs.json";
import "../../styles/DesignTab.css";

export function DesignTab() {
  return (
    <div className="designs-container">
      <div className="designs-content">
        <div className="designs-header">
          <h2 className="designs-title">{designsData.title}</h2>
          <p className="designs-description">{designsData.description}</p>
        </div>

        <div className="designs-grid">
          {designsData.designs.map((design, index) => (
            <div key={index} className="design-card">
              <div className="design-image-wrapper">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="design-image"
                />
              </div>
              <div className="design-info">
                <h3 className="design-title">{design.title}</h3>
                <p className="design-description">{design.description}</p>
                <div className="design-pdf">
                  <a
                    className="pdf-link"
                    href={design.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
