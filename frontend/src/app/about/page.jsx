import React from 'react';
import HeroSection from '../components/about/HeroSection';
import StatusNumbers from '../components/about/StatusNumbers';
import CompanyOwners from '../components/about/CompanyOwners';
import Benefits from '../components/common/Benefits';

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <StatusNumbers />
      <CompanyOwners />
      <Benefits />
    </div>
  );
};

export default About;
