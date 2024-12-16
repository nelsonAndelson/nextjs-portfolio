"use client";

import { useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import ProjectDetails from "@/components/Work/ProjectDetails";
import { projectsList, projectDetails } from "@/data/projects";
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectLink: string) => {
    setSelectedProject(projectLink);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Element name="projects">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h3>
              <span>Projects</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
              <div 
                key={index} 
                className="portfolio-box"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="portfolio-img relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="gallery-link-icon">
                    <FaArrowRight />
                  </div>
                </div>
                
                <div className="portfolio-text">
                    {project.tags.map((Icon, idx) => (
                      <span 
                        key={idx} 
                        className="mr-1 inline-flex items-center justify-center hover:text-[#347286] transition-colors bg-gray-200 rounded-full px-2 py-1 mt-2"
                      >
                        <Icon className="text-2xl"/>
                      </span>
                    ))}
                  <h4>{project.heading}</h4>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="px-modal">
          <ProjectDetails 
            project={projectDetails[selectedProject]} 
            onClose={handleCloseModal}
          />
        </div>
      )}
    </Element>
  );
} 