import { ImageWithFallback } from '../ImageFallBack/ImageWithFallback';
import { getIcon, IconName } from '../../utils/iconMap';
import homeData from '../../data/home.json';
import '../../styles/HomeTab.css';

export function HomeTab() {
  const PrimaryIcon = getIcon(homeData.buttons.primary.icon as IconName);
  const SecondaryIcon = getIcon(homeData.buttons.secondary.icon as IconName);
  const ChevronRightIcon = getIcon('ChevronRight');

  return (
    <div className="home-container">
      {/* Background Pattern */}
      <div className="home-background"></div>

      <div className="home-grid">
        <div className="home-content">
          <div className="status-badge">
            <div className={`bg-${homeData.status.badgeColor}`}></div>
            <span>{homeData.status.indicator}</span>
          </div>
          
          <div className="hero-title-section">
            <h1 className="hero-title">
              {homeData.title.line1}
              <span className="hero-title-highlight">{homeData.title.line2}</span>
            </h1>
            <div className="hero-subtitle">{homeData.title.subtitle}</div>
          </div>
          
          <p className="hero-description">
            {homeData.description}
          </p>

          <div className="action-buttons">
            <button className="primary-button">
              <PrimaryIcon size={20} />
              {homeData.buttons.primary.text}
              <ChevronRightIcon size={16} />
            </button>
            <button className="secondary-button">
              <SecondaryIcon size={20} />
              {homeData.buttons.secondary.text}
            </button>
          </div>

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

          <div className="stats-grid">
            {homeData.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
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
    </div>
  );
}

