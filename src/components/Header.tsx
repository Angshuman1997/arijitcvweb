import { Home, User, Wrench, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { useState } from 'react';
import { TabType } from '../App';
import { ImageWithFallback } from './ImageFallBack/ImageWithFallback';
import '../styles/Header.css';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'about' as TabType, label: 'About', icon: User },
    // { id: 'skills' as TabType, label: 'Skills', icon: Wrench },
    // { id: 'projects' as TabType, label: 'Projects', icon: FolderOpen },
    // { id: 'education' as TabType, label: 'Education', icon: GraduationCap },
    // { id: 'contact' as TabType, label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {isEnlarged && <div className="backdrop" onClick={() => setIsEnlarged(false)}></div>}
      <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-logo">
              <ImageWithFallback
                src="/images/arijit_profile_image.png"
                alt="Arijit Kumar Bardhan"
                className={`brand-profile-image ${isEnlarged ? 'enlarged' : ''}`}
                onClick={() => setIsEnlarged(!isEnlarged)}
              />
            </div>
            <div className="brand-info">
              <div className="brand-title">ARIJIT KUMAR BARDHAN</div>
              <div className="brand-subtitle">Mechanical Engineer</div>
            </div>
          </div>

          <nav className="nav-menu">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-button ${
                    isActive ? 'nav-button-active' : 'nav-button-inactive'
                  }`}
                >
                  <Icon size={18} />
                  <span className="nav-label">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}

