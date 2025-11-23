import { useState } from 'react';
import { Header } from './components/Header';
import { HomeTab } from './components/tabs/HomeTab';
import { AboutTab } from './components/tabs/AboutTab';
import { SkillsTab } from './components/tabs/SkillsTab';
import { ProjectsTab } from './components/tabs/ProjectsTab';
import { EducationTab } from './components/tabs/EducationTab';
import { ContactTab } from './components/tabs/ContactTab';

export type TabType = 'home' | 'about' | 'skills' | 'projects' | 'education' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'about':
        return <AboutTab />;
      case 'skills':
        return <SkillsTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'education':
        return <EducationTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderTabContent()}
      </main>
    </div>
  );
}

