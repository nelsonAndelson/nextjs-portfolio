import Image from "next/image";
import { FaTimes, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IProjectDetails } from "@/types/projectTypes";

export default function ProjectDetails(props: {
  projectDetails: IProjectDetails;
  closePopup: () => void;
}) {
  console.log(props.projectDetails);

  return (
    <>
      <div className="px-modal mfp-hide">
        <div className="single-project-box">
          <div className="grid grid-cols-12 gx-3">
            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
              <div className="grid grid-cols-2 gap-2 ">
                {props.projectDetails.images.map((img, i) => {
                  return (
                    <div key={`image_${i}`} className="col-span-1 ">
                      <Image
                        className="border"
                        src={img}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        width={500}
                        height={300}
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

              <section>
                <Link
                  href={`${props.projectDetails.sourceCode}`}
                  target="blank"
                  className="px-btn px-btn-theme mr-4"
                >
                  Source Code
                </Link>
                <button className="px-btn px-btn-theme">Live URL</button>
              </section>
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
