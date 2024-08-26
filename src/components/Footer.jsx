// src/components/Footer.jsx
import React from 'react';
import LetterTypingEffect from './words_typing';

const Footer = () => (
  <div className='flex justify-center items-center text-white text-sm md:text-lg w-full h-12 bg-white-500 rounded tracking-wide'>
    <p>Infused with creative passion by <a href="http://codewhyofficial.blogspot.com" target="_blank" rel="noopener noreferrer"> <LetterTypingEffect word="@Codewhyofficial" /></a></p>
  </div>
);

export default Footer;