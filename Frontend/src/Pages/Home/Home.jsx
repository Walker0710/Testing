import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProfInfo from '../../components/ProgInfo/ProfInfo';
import OngoingResearch from '../../components/OngoingResearch/OngoingResearch';
import ResearchIntrest from '../../components/ResearchInterest/ResearchInterest';
import './Home.css'

const Home = () => {
  return (
    <div className='all-home'>
      <HeroSection/>
      <div className='middle-home'>
      <ProfInfo/>
      <ResearchIntrest/>
      <OngoingResearch/>
      </div>
    </div>
  );
}

export default Home;