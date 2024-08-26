// src/components/SocialIcons.jsx
import React from 'react';
import Social_Instagram from '../assets/Social_Icons/instagram.png';
import Social_LinkedIn from '../assets/Social_Icons/linkedin.png';
import Social_Twitter from '../assets/Social_Icons/twitter.png';
import Social_Github from '../assets/Social_Icons/github.png';

const SocialIcons = () => (
  <div className='flex flex-wrap md:justify-end pt-10 pb-5 md:pr-20 justify-center'>
    <div className="p-1 hover:scale-105">
      <a href="http://www.instagram.com/hereissuraj" target='_blank' rel="noopener noreferrer">
        <img src={Social_Instagram} alt="Instagram logo" className="w-10 h-auto" />
      </a>
    </div>
    <div className="p-1 hover:scale-105">
      <a href="https://www.linkedin.com/in/surajintellact/" target="_blank" rel="noopener noreferrer">
        <img src={Social_LinkedIn} alt="LinkedIn logo" className="w-10 h-auto" />
      </a>
    </div>
    <div className="p-1 cursor-not-allowed hover:scale-105">
      <img src={Social_Twitter} alt="Twitter logo" className="w-10 h-auto" />
    </div>
    <div className="p-1 hover:scale-105">
      <a href="https://github.com/codewhyofficial" target="_blank" rel="noopener noreferrer">
        <img src={Social_Github} alt="Github logo" className="w-10 h-auto" />
      </a>
    </div>
  </div>
);

export default SocialIcons;
