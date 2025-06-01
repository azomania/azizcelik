import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TargetAudienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;