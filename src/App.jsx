// src/App.js
import React, { useState, useEffect } from 'react';
import backgroundImage from './assets/bg_dark.jpg'; 
import SocialIcons from './components/SocialIcons';
import Header from './components/Header';
import ButtonsSection from './components/ButtonsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import TechSkillsSection from './components/TechSkillsSection';
import Footer from './components/Footer';
import LoadingScreen from './LoadingScreen';
import { BackgroundGradient } from './components/backGroundGradient';
import { BackgroundGradientDemo } from './components/demo';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loaded ? (
        <div className='w-full bg-left-top bg-local p-0 bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <SocialIcons />
          <div className="h-[90vh] flex flex-col justify-center items-center pb-20">
          <Header />
          <ButtonsSection />

          </div>


          
          <ProjectsSection />
          <ResumeSection />
          <TechSkillsSection />
          <Footer />
          {/* <BackgroundGradientDemo/> */}
          
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default App;
