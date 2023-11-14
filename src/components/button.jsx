import React from 'react';


function Button(props){
    return(
        <>

<div className='p-1'>
    <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
        {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
        <button className="flex gap-3 cursor-pointer text-white text-sm md:text-lg w-max py-1 px-4 bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
            {props.title}
        </button>

    </div>
</div>
        </>
    );
}

export default Button;