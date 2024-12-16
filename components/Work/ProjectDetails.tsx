"use client";

import { IProjectDetails } from "../../types/projectTypes";
import Image from "next/image";

interface ProjectDetailsProps {
  project: IProjectDetails;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="single-project-box">
      <button 
        onClick={onClose}
        className="px-close"
      >
        ×
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-xl mb-6">{project.description}</p>
          <p className="mb-8">{project.subDescription}</p>
          
          <div className="flex gap-4 mb-8">
            <a 
              href={project.liveUrl}
              className="px-btn px-btn-theme" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            {project.sourceCode && (
              <a 
                href={project.sourceCode}
                className="px-btn px-btn-dark" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            )}
          </div>
          
          {project.details.map((detail, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
        
        <div>
          {project.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              width={600}
              height={400}
              className="mb-4 rounded-lg border-2 border-slate-900"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 