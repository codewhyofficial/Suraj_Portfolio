// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
            #{tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
