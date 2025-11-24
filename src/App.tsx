import { useState } from 'react';
import { Header } from './components/Header';
import { HomeTab } from './components/tabs/HomeTab';
import { AboutTab } from './components/tabs/AboutTab';
import { ExpertiseTab } from './components/tabs/ExpertiseTab';
import { DesignTab } from './components/tabs/DesignTab';

export type TabType = 'home' | 'about' | 'expertise' | 'designs';
export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'about':
        return <AboutTab />;
      case 'expertise':
        return <ExpertiseTab />;
      case 'designs':
        return <DesignTab />;
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

