// src/components/Header.jsx
import React from 'react';
import LetterTypingEffect from './words_typing';

const Header = () => (
  <>
  <div className="flex flex-col justify-center items-center">
    <div className="text-3xl md:text-5xl duration-200 text-center pt-8">
      <span className="bg-clip-text text-transparent bg-white capitalize">
        Hi, This is me
      </span>
    </div>
    <div className="text-5xl md:text-8xl duration-200 text-center pt-5">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 tracking-wide uppercase">
        Suraj Kumar
      </span>
    </div>
    <div className="text-base md:text-3xl duration-200 text-center pt-2">
      <p className='text-white tracking-wide'>Crafting <LetterTypingEffect word="Seamleass Experiences" /> with</p>
    </div>
    <div className="text-base md:text-3xl duration-200 text-center pt-2">
      <p className='text-white'><LetterTypingEffect word="Code" /> & <LetterTypingEffect word="Design" /></p>
    </div>

    </div>
  </>
);

export default Header;
