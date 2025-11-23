import { Home, User, Wrench, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { TabType } from '../App';

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
    <header className="border-b border-[var(--color-border)] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center">
              <span className="text-white font-mono">MC</span>
            </div>
            <div>
              <div className="font-mono text-[var(--color-dark)]">CAD Designer</div>
              <div className="text-xs text-[var(--color-gray)]">Mechanical Engineer</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/30'
                      : 'text-[var(--color-gray)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-dark)]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

