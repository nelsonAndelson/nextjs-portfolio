import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface IProject {
  link: string;
  image: string | StaticImageData;
  tags: IconType[];
  heading: string;
  desc: string;
}

export interface IProjectDetails {
  title: string;
  description: string;
  subDescription: string;
  images: (string | StaticImageData)[];
  liveUrl: string;
  sourceCode?: string;
  details: {
    title: string;
    description: string;
  }[];
}
