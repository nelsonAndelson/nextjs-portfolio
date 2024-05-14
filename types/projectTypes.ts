export interface IProject {
  link: string;
  image: string;
  tags: string[];
  heading: string;
  desc: string;
}

export interface IProjectDetails {
  sourceCode?: string;
  title: string;
  description: string;
  subDescription: string;
  images: string[];
  details: {
    title: string;
    description: string;
  }[];
}
