import { Home, User, Wrench, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { TabType } from '../App';
import '../styles/Header.css';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'about' as TabType, label: 'About', icon: User },
    { id: 'skills' as TabType, label: 'Skills', icon: Wrench },
    { id: 'projects' as TabType, label: 'Projects', icon: FolderOpen },
    { id: 'education' as TabType, label: 'Education', icon: GraduationCap },
    { id: 'contact' as TabType, label: 'Contact', icon: Mail },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-logo">
              <span className="brand-initials">MC</span>
            </div>
            <div className="brand-info">
              <div className="brand-title">CAD Designer</div>
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
  );
}

