"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projectDetails } from "./projects";
import ProjectDetails from "./Project";
import { projects } from "./projects";

/*--------------------
* Work Section
----------------------*/

export default function Work() {
  const [showModal, setShowModal] = useState(0);
  const closePopup = () => {
    setShowModal(0);
  };

  return (
    <>
      <section
        data-scroll-data="3"
        id="portfolio"
        className="section bg-orange-50"
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Latest Projects</span>
              </h3>
            </div>
          </div>
          {projects.map((project, index) => (
            <section className="lightbox-gallery portfolio-box" key={index}>
              <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                  <div className="portfolio-img">
                    <img src={project.image} title="" alt="" />
                    <Link
                      href={project.link}
                      className="gallery-link gallery-link-icon"
                      target="blank"
                    >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                  <div className="portfolio-text">
                    <h6>
                      {project.tags.map((tag) => (
                        <span key={tag} className="mr-2">
                          {tag}
                        </span>
                      ))}
                    </h6>
                    <h4>{project.heading}</h4>
                    <p>{project.desc}</p>
                    <div className="btn-bar">
                      <button
                        className="px-btn px-btn-theme px_modal"
                        onClick={() => setShowModal(2)}
                      >
                        View Project{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {showModal ? (
        <>
          <ProjectDetails
            closePopup={closePopup}
            projectDetails={projectDetails[showModal - 1]}
          ></ProjectDetails>
        </>
      ) : null}
    </>
  );
}
