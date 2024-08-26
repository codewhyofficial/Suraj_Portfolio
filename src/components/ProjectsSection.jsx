// src/components/ProjectsSection.jsx
import React from "react";
import { BackgroundGradient } from "./backGroundGradient";
import ProjectCard from "./ProjectCard";
import draftaiExp from "../assets/draftai_exp.jpeg";
import aichatnegotiator from "../assets/aichatnegotiator.jpeg";
import its from "../assets/its.jpeg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive 3D Shopping Platform",
      description:
        "A futuristic shopping platform with AI-driven 3D models that interact with users to enhance their online shopping experience.",
      technologies: ["React", "Three.js", "Node.js"],
      link: "https://example.com/project-1",
    },
    {
      title: "AI-Powered Blog Website",
      description:
        "A blog platform focused on AI, ML, and Data Science, offering user-friendly navigation and rich content management features.",
      technologies: ["MERN Stack", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com/project-2",
    },
    {
      title: "AI-Powered Blog Website",
      description:
        "A blog platform focused on AI, ML, and Data Science, offering user-friendly navigation and rich content management features.",
      technologies: ["MERN Stack", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com/project-2",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div>
        <div className=" flex justify-center text-3xl md:text-5xl text-white pl-2 pt-10 pb-10 md:my-10">
          <p>Projects</p>
        </div>
        {/* <div className="text-sm md:text-xl text-green-500 text-center pt-1">
          <p>
            Fine-tuning project details for an enhanced experience. In the
            meantime, catch me on various social platforms for a sneak peek into
            what's brewing!
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row text-white mx-4 md:mx-20 ">
          <div className="basis-1/3 mx-2">
            <div className="h-full w-full my-2 md:mx-2 p-2 rounded-lg">
              <div className="">
                <img className="" src={draftaiExp} alt="" srcset="" />
              </div>
              <div>
                <div className="flex flex-row">
                  <div className="basis-8/12">
                    <p className="my-2 font-bold text-xl md:text-2xl">
                      DraftAi - Complete Website Development
                    </p>
                  </div>
                  <div className="basis-4/12 text-green-600 font-bold rounded-lg ml-2 my-4 md:px-4 hover:bg-green-400 hover:text-black hover:scale-90 cursor-pointer duration-300 flex justify-center items-center hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.7)] nowrap">
                    <a href="http://www.draftai.in" target="_blank" rel="noopener noreferrer">Visit here</a>
                    <span className="ml-2">&rarr;</span>
                  </div>
                </div>
                <div>
                  <p className="my-2 md:text-xl">
                    Designed and developed the DraftAi website, delivering a
                    secure and scalable platform within a month. Built 15+ REST
                    APIs to boost AI performance by 30% and data efficiency by
                    45%. Deployed the project on Azure, reducing deployment time
                    by 20% and enhancing data retrieval speed by 50% with
                    role-based authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 mx-2">
            <div className="h-full w-full my-2 md:mx-2 p-2 rounded-lg">
              <div className="">
                <img className="" src={aichatnegotiator} alt="" srcset="" />
              </div>
              <div>
                <div className="flex flex-row">
                  <div className="basis-8/12">
                    <p className="my-2 font-bold text-xl md:text-2xl">
                    AI Chat Negotiator - Dynamic Pricing
                    </p>
                  </div>
                  <div className="basis-4/12 text-green-600 font-bold rounded-lg ml-2 my-4 md:px-4 hover:bg-green-400 hover:text-black hover:scale-90 cursor-pointer duration-300 flex justify-center items-center hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.7)] nowrap ">
                  <a href="https://github.com/codewhyofficial/DTU_Vihaan" target="_blank" rel="noopener noreferrer">Visit here</a>
                    <span className="ml-2">&rarr;</span>
                  </div>
                </div>
                <div>
                  <p className="my-2 md:text-xl">
                    Built a full-stack website featuring an AI-driven chat
                    negotiator that seamlessly interacts with users to negotiate
                    product prices, boosting user engagement by 70%. Integrated
                    Firebase for secure authentication and utilized TensorFlow,
                    LangChain, and GenAI for prompt-driven, context-aware
                    responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 mx-2">
            <div className="h-full w-full my-2 md:mx-2 p-2 rounded-lg">
              <div className="">
                <img className="" src={its} alt="" srcset="" />
              </div>
              <div>
                <div className="flex flex-row">
                  <div className="basis-8/12">
                    <p className="my-2 font-bold text-xl md:text-2xl">
                      Inspector Tracking System for NIC
                    </p>
                  </div>
                  <div className="basis-4/12 text-green-600 font-bold rounded-lg ml-2 my-4 md:px-4 hover:bg-green-400 hover:text-black hover:scale-90 cursor-pointer duration-300 flex justify-center items-center hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.7)] nowrap ">
                  <a href="https://github.com/codewhyofficial/nic_inspector_tracking_system-" target="_blank" rel="noopener noreferrer">Visit here</a>
                    <span className="ml-2">&rarr;</span>
                  </div>
                </div>
                <div>
                  <p className="my-2 md:text-xl">
                    Developed a full-stack Inspector Tracking System for NIC
                    using Laravel. Implemented JWT-based authentication,
                    password recovery via email, and advanced security measures,
                    ensuring a secure and efficient application for real-time
                    inspector management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-green-600 mx-8 md:mx-20 text-center justify-center my-4 md:my-8">Project Codes are available in Github along with other interesting projects too.</div>
    </>
  );
};
export default ProjectsSection;
