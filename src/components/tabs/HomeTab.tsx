import { ImageWithFallback } from "../ImageFallBack/ImageWithFallback";
import { getIcon, IconName } from "../../utils/iconMap";
import homeData from "../../data/home.json";
import "../../styles/HomeTab.css";

export function HomeTab() {
  const SecondaryIcon = getIcon(homeData.buttons.secondary.icon as IconName);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Resume.pdf";
    link.download = "Arijit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="home-background"></div>
      <div className="home-grid">
        <div className="home-content-section">
          <div className="home-content">
            <div className="status-badge">
              <div className={`bg-${homeData.status.badgeColor}`}></div>
              <span>{homeData.status.indicator}</span>
            </div>

            <div className="hero-title-section">
              <h1 className="hero-title">
                {homeData.title.line1}
                <span className="hero-title-highlight">
                  {homeData.title.line2}
                </span>
              </h1>
            </div>
            <p className="hero-description">{homeData.description}</p>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <div className="hero-image-frame">
              <ImageWithFallback
                src={homeData.image.src}
                alt={homeData.image.alt}
              />
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <button className="secondary-button" onClick={handleDownloadResume}>
            <SecondaryIcon size={20} />
            {homeData.buttons.secondary.text}
          </button>
          <div className="social-links">
            {homeData.socialLinks.map((social, index) => {
              const SocialIcon = getIcon(social.icon as IconName);
              return (
                <a key={index} href={social.url} className="social-link">
                  <SocialIcon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
