// src/components/ButtonsSection.jsx
import React from 'react';

const ButtonsSection = () => (
  <div className='flex flex-wrap justify-center pt-4 mx-2'>
    {["Full Stack Developer", "Gen AI Developer", "Python Developer"].map((title, index) => (
      <div className='p-1' key={index}>
        <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
          <button className="flex gap-3 cursor-pointer text-white md:text-lg w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
            {title}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ButtonsSection;
