import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PinnedRepos from './components/PinnedRepos';
import ReadmeSection from './components/ReadmeSection';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // Simple console message without excessive styling
    console.log('👋 Welcome to Hassan\'s GitHub Portfolio');
  }, []);

  return (
    <div className="min-h-screen bg-github-bg text-github-text font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <PinnedRepos />
        <ReadmeSection />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;