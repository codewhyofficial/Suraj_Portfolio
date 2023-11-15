import React, { useState, useEffect } from 'react';
import backgroundImage from './assets/bg_dark.jpg'; // Adjust the path as necessary
import Social_Instagram from './assets/Social_Icons/instagram.png';
import Social_LinkedIn from './assets/Social_Icons/linkedin.png';
import Social_Twitter from './assets/Social_Icons/twitter.png';
import Social_Github from './assets/Social_Icons/github.png';
import Button from './components/button';
import Cards from './components/cards';
// import TypingEffect from './components/words_typing';
import LetterTypingEffect from './components/words_typing';
import LoadingScreen from './LoadingScreen';



// start 

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data or any asynchronous operations
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set loaded to true after data is fetched
      setLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loaded ? (
        /* Render your site content here */
        <div className='w-full bg-left-top bg-local p-3'
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        {/* Your content goes here */}


        {/* social icons start */}
        <div className='flex flex-wrap md:justify-end pt-10 pb-5 md:pr-20 justify-center'>
          <div className="p-1 hover:scale-105">
            <a href="http://www.instagram.com/codewhyofficial" target='_blank' rel = "noopener"><img
            src={Social_Instagram}
            alt="Instagram logo"
            className="w-10 h-auto"
          /></a>
          
          </div>
          <div className="p-1 hover:scale-105">
            <a href="https://www.linkedin.com/in/code-why-388190258/" target="_blank" rel="noopener noreferrer"><img
            src={Social_LinkedIn}
            alt="Instagram logo"
            className="w-10 h-auto"
          /></a>
          
          </div>
          <div className="p-1 cursor-not-allowed hover:scale-105">
          <img
            src={Social_Twitter}
            alt="Instagram logo"
            className="w-10 h-auto"
          />
          </div>
          <div className="p-1 hover:scale-105">
            <a href="https://github.com/codewhyofficial" target="_blank" rel="noopener noreferrer"><img
            src={Social_Github}
            alt="Instagram logo"
            className="w-10 h-auto"
          /></a>
          
          </div>
          

        </div>
        {/* social icons end  */}

        <div class="text-3xl md:text-5xl duration-200 text-center pt-8">
          <span class="bg-clip-text text-transparent bg-white Capitalize">
            Hi, This is me
          </span>
        </div>
        {/* <br /> */}
        <div class="text-5xl md:text-8xl duration-200 text-center pt-5 ">

          {/* <br /> */}
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 tracking-wide uppercase">
            Suraj Kumar
          </span>
        </div>
        
        {/* <br /> */}

        {/* the theme line is here */}
        <div class="text-base md:text-3xl duration-200 text-center pt-2">
          {/* <LetterTypingEffect word= "Crafting Seamless Experience with Code & Design"/> */}
          <p className='text-white tracking-wide'>Crafting <LetterTypingEffect word = "Seamleass Experiences"/> with</p>
        </div>
        <div class="text-base md:text-3xl duration-200 text-center pt-2">
          <p className='text-white'><LetterTypingEffect word = "Code"/> & <LetterTypingEffect word = "Design"/></p>
        </div> 
        {/* <div class="text-base md:text-3xl duration-200 text-center   pt-2">
          <p className='text-white'><LetterTypingEffect word = "Suno ye ache se kaam kr rha hai"/></p>
        </div> */}
        {/* in between them  */}
        {/* Now this is the button and section that are designed.... */}
        {/* <div className='flex bg-gray-500 rounded-full p-1'> */}
        {/* <div className='basis-1/4'> */}
        <div className='flex flex-wrap justify-center pt-4'>

          <div className='p-1'>
            <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
              {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
              <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
                Web Developer
              </button>

            </div>
          </div>

          <div className='p-1'>
            <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
              {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
              <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
                UI/UX Designer
              </button>

            </div>
          </div>

          <div className='p-1'>
            <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
              {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
              <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
                Python Developer
              </button>

            </div>
          </div>
        </div>

        {/* Projects Section here */}

        <div className=' flex justify-center text-3xl md:text-4xl text-white pl-2 pt-10 pb-5'>
          <p>Projects</p>
        </div>
        <div className='text-sm md:text-xl text-green-500 text-center pt-1'>
          <p>Fine-tuning project details for an enhanced experience. In the meantime, catch me on various social platforms for a sneak peek into what's brewing!</p>
        </div>



        {/* Projects section ends here  */}

        {/* Resume Download Section Starts  */}

        <div className=' flex justify-center text-3xl text-white md:text-4xl pt-10'>
          <p>Resume</p>
        </div>
        <div className='text-sm tracking-widest text-green-500 text-center pt-2'>
          <p>Click Here</p>
        </div>

        {/* Resume Download Section Ends */}


        {/* Tech Stack section  */}
        <div className=' flex justify-center text-3xl text-white md:text-4xl pl-2 pt-10'>
          <p>Tech Skills</p>
        </div>
        <div className='text-xl   text-white pl-2 pt-5'>
          <p>Web Development -</p>

        </div>
        <div className='flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200'>
          <Button title="HTML" />
          <Button title="CSS" />
          <Button title="JavaScript" />
          <Button title="React" />
          <Button title="jQuery" />
          <Button title="Bootstrap" />
          <Button title="Tailwind CSS" />
          <Button title="Bootstrap" />
          <Button title="Django" />
          <Button title="PHP" />

        </div>


        <div className='text-xl   text-white pl-2 pt-5'>
          <p>UI/UX -</p>

        </div>
        <div className='flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200'>
          <Button title="ADOBE ILLUSTRATOR" />
          <Button title="FIGMA" />
          <Button title="CANVA" />
          <Button title="VARIOUS A.I TOOLS" />
        </div>


        <div className='text-xl text-white pl-2 pt-5'>
          <p>Python -</p>

        </div>
        <div className='flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200'>
          <Button title="CUSTOM SCRIPTS" />
          <Button title="PYAUTOGUI" />
          <Button title="SELENIUM" />
          <Button title="MATPLOTLIB" />
          <Button title="PANDAS" />
          <Button title="TENSORFLOW" />
          <Button title="DATA PROCESSING " />
          <Button title="DJANGO" />

        </div>
        
        {/* tech stack section ends here */}

        <br />
        <br />

        <div className='flex justify-center items-center text-white text-sm md:text-lg w-full h-12 bg-white-500 rounded tracking-wide'>
          <p>Infused with creative passion by<a href="http://codewhyofficial.blogspot.com" target="_blank" rel="noopener noreferrer"> <LetterTypingEffect word="@Codewhyofficial"/></a></p>
        </div>
        {/* <br /><br /> */}

        {/* Trial Section Here  */}
        {/* <div className="flex flex-wrap justify-around">

        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div> */}
        {/* <div className='flex flex-wrap'> */}

        {/* </div> */}
        {/* <div className='bg-[#ffffff] w-16 h-16 opacity-50 z-100'>
          <p className='text-white'>Helopacity</p>
        </div> */}

        {/* Trial section ends here  */}

        {/* <img src="assets/Social_Icons/instagram.png" alt="this is the image of instagram logo" w-10 h-10/> */}
      {/* <TypingEffect/> */}
      {/* <div className="text-white">
      <LetterTypingEffect/>
      </div> */}
      </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default App;




// End 


// export default function App() {
//   return (
//     <>
//       <div className='w-full bg-left-top bg-fixed p-3'
//         style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
//         {/* Your content goes here */}
//         {/* social icons start */}
//         <div className='flex flex-wrap md:justify-end pt-10 pb-5 md:pr-20 justify-center'>
//           <div className="p-1">
//           <img
//             src={Social_Instagram}
//             alt="Instagram logo"
//             className="w-10 h-auto"
//           />
//           </div>
//           <div className="p-1">
//           <img
//             src={Social_LinkedIn}
//             alt="Instagram logo"
//             className="w-10 h-auto"
//           />
//           </div>
//           <div className="p-1">
//           <img
//             src={Social_Twitter}
//             alt="Instagram logo"
//             className="w-10 h-auto"
//           />
//           </div>
//           <div className="p-1">
//           <img
//             src={Social_Github}
//             alt="Instagram logo"
//             className="w-10 h-auto"
//           />
//           </div>
          

//         </div>
//         {/* social icons end  */}

//         <div class="font-bold text-3xl md:text-5xl duration-200 text-center pt-8">
//           <span class="bg-clip-text text-transparent bg-white Capitalize  ">
//             Hi, This is me
//           </span>
//         </div>
//         {/* <br /> */}
//         <div class="text-5xl md:text-8xl duration-200 font-bold text-center pt-5 ">

//           {/* <br /> */}
//           <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 tracking-wide uppercase  ">
//             Suraj Kumar
//           </span>
//         </div>
        
//         {/* <br /> */}

//         {/* the theme line is here */}
//         <div class="text-base md:text-3xl duration-200 text-center   pt-2">
//           <p className='text-white'>Crafting <LetterTypingEffect word = "Seamleass Experiences"/> with</p>
//         </div>
//         <div class="text-base md:text-3xl duration-200 text-center   pt-2">
//           <p className='text-white'><LetterTypingEffect word = "Code"/> & <LetterTypingEffect word = "Design"/></p>
//         </div>
//         {/* <div class="text-base md:text-3xl duration-200 text-center   pt-2">
//           <p className='text-white'><LetterTypingEffect word = "Suno ye ache se kaam kr rha hai"/></p>
//         </div> */}
//         {/* in between them  */}
//         {/* Now this is the button and section that are designed.... */}
//         {/* <div className='flex bg-gray-500 rounded-full p-1'> */}
//         {/* <div className='basis-1/4'> */}
//         <div className='flex flex-wrap justify-center pt-4'>

//           <div className='p-1'>
//             <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
//               {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
//               <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
//                 Web Developer
//               </button>

//             </div>
//           </div>

//           <div className='p-1'>
//             <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
//               {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
//               <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
//                 UI/UX Designer
//               </button>

//             </div>
//           </div>

//           <div className='p-1'>
//             <div className='bg-black w-min rounded-full pb-[0.5px] pt-[2px] pl-[0.5px] pr-[1.5px] bg-[#05FF00] bg-gradient-to-r from-[#34913F] via-[#1CD11D] to-[#05FE00] hover:scale-105 duration-200'>
//               {/* <div class="bg-white border border-gray-500 rounded-full h-32"></div> */}
//               <button className="flex gap-3 cursor-pointer text-white text-xl w-max py-2 px-4 font-semibold bg-[#2C394B] rounded-full duration-200 hover:text-white-400">
//                 Python Developer
//               </button>

//             </div>
//           </div>
//         </div>



//         {/* Tech Stack section  */}
//         <div className='text-3xl   text-white pl-2 pt-10'>
//           <p>Tech Stack: </p>
//         </div>
//         <div className='text-xl   text-white pl-2 pt-5'>
//           <p>Web Development: </p>

//         </div>
//         <div className='flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200'>
//           <Button title="HTML" />
//           <Button title="CSS" />
//           <Button title="JavaScript" />
//           <Button title="React" />
//           <Button title="jQuery" />
//           <Button title="Bootstrap" />
//           <Button title="Tailwind CSS" />
//           <Button title="Bootstrap" />
//           <Button title="Django" />
//           <Button title="PHP" />

//         </div>
//         {/* tech stack section ends here */}

//         <br />
//         <br />
//         <br /><br />

//         {/* <img src="assets/Social_Icons/instagram.png" alt="this is the image of instagram logo" w-10 h-10/> */}
//       {/* <TypingEffect/> */}
//       {/* <div className="text-white">
//       <LetterTypingEffect/>
//       </div> */}
//       </div>
//       {/* <div class="bg-red-500 border border-red-500 rounded-md w-64 h-32"></div> */}

//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }
