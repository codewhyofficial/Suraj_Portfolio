// src/components/TechSkillsSection.jsx
import React from "react";
import Button from "./button";

const TechSkillsSection = () => (
  <>
  <div className="my-20">
    <div className=" flex justify-center text-3xl text-white md:text-4xl pl-2 pt-10">
      <p>Tech Skills</p>
    </div>
    <br />
    <div className="flex md:flex-row flex-col md:mx-20 mx-4">
      <div className="flex-col basis-1/3">
        <div className="text-xl text-white pl-2 pt-5 mx-2">
          <p>Full Stack Development -</p>
        </div>
        <div className="flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Nodejs",
            "Express",
            "MongoDB",
            "MySQL",
            "jQuery",
            "Tailwind CSS",
            "Azure", 
            "AWS", 
            "Google Cloud",
            "Bootstrap",
            "Django",
            "PHP",
          ].map((title, index) => (
            <Button key={index} title={title} />
          ))}
        </div>
      </div>
      <div className="flex-col basis-1/3">
      <div className="text-xl text-white pl-2 pt-5 mx-2">
        <p>Generative AI-</p>
      </div>
      <div className="flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200">
        {["Deep Learning", "NLP", "Generative Models", "Transfer Learning", "TensorFlow", "PyTorch", "Hugging Face", "NumPy", "Pandas", "Matplotlib", "Sklearn", "Data Preprocessing", "Fine-Tuning", "Model Evaluation", "Cloud Platforms (AWS, GCP, Azure)", "Docker", "CI/CD"]
.map(
          (title, index) => (
            <Button key={index} title={title} />
          )
        )}
      </div>
      </div>
      <div className="flex-col basis-1/3">

      <div className="text-xl text-white pl-2 pt-5 mx-2">
        <p>Python</p>
      </div>
      <div className="flex flex-wrap pl-2 pt-2 hover:translate-x-1 duration-200">
        {[
          "CUSTOM SCRIPTS",
          "PYAUTOGUI",
          "SELENIUM",
          "MATPLOTLIB",
          "PANDAS",
          "TENSORFLOW",
          "DATA PROCESSING",
          "DJANGO",
          "Flask", 
          "Web Scraping"
        ].map((title, index) => (
          <Button key={index} title={title} />
        ))}
      </div>
      </div>
    </div>
    </div>
  </>
);

export default TechSkillsSection;
