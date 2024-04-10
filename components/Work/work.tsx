"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

/*--------------------
* Project Section
----------------------*/

function Project(props: {
  projectDetails: {
    images: string[];
    title: string;
    description: string;
    subDescription: string;
    details: {
      title: string;
      description: string;
    }[];
  };
  closePopup: () => void;
}) {
  return (
    <>
      <div className="px-modal mfp-hide">
        <div className="single-project-box">
          <div className="grid grid-cols-12 gx-3">
            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
              <div className="grid grid-cols-2 gap-2">
                {props.projectDetails.images.map((img, i) => {
                  return (
                    <div key={`image_${i}`} className="col-span-1">
                      <Image
                        className="border"
                        src="/img/project-1.jpg"
                        width={300}
                        height={300}
                        layout="responsive"
                        alt="Picture of project 1"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:pl-10 lg:pl-14">
              <h4 className="font-[600] text-[25px] text-black mb-4 pb-4 border-b">
                {props.projectDetails.title}
              </h4>
              <p className="mb-3">{props.projectDetails.description}</p>
              <p>{props.projectDetails.subDescription}</p>
              <ul className="m-0 p-0 pt-7 list-none">
                {props.projectDetails.details.map((detail, i) => {
                  return (
                    <li key={`detail_${i}`} className="flex py-2">
                      <span className="w-[100px] font-[600] text-black">
                        {detail.title}:
                      </span>
                      <span>{detail.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="px-close" onClick={props.closePopup}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Work Section
----------------------*/

export default function Work() {
  const [showModal, setShowModal] = useState(0);
  const closePopup = () => {
    setShowModal(0);
  };

  const projectDetails = [
    {
      title: "Owner of a Website Design Marketing Agency Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subDescription:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: [
        "img/project-1.jpg",
        "img/project-3.jpg",
        "img/project-4.jpg",
        "img/project-2.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "PHP, HTML, CSS, JS",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
    {
      title: "Website Design for Marketing Agency Startup 02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subDescription:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: [
        "img/project-1.jpg",
        "img/project-3.jpg",
        "img/project-4.jpg",
        "img/project-2.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "PHP, HTML, CSS, JS",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
  ];
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
          <div className="lightbox-gallery portfolio-box">
            `
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img src="img/project-1.jpg" title="" alt="" />
                  <Link href="#" className="gallery-link gallery-link-icon">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <div
                      className="px-btn px-btn-theme px_modal"
                      onClick={() => setShowModal(1)}
                    >
                      View Project{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal ? (
        <>
          <Project
            closePopup={closePopup}
            projectDetails={projectDetails[showModal - 1]}
          ></Project>
        </>
      ) : null}
    </>
  );
}
