import { IProject, IProjectDetails } from "@/types/projectTypes";

export const projectDetails: IProjectDetails[] = [
  {
    title: "Owner of a Website Design Marketing Agency Startup",
    description:
      "Nelson Digital Technologies is a dynamic startup offering innovative web design, SEO, and digital marketing services. As founder and lead, I acquired clients, designed websites, and managed SEO and Facebook Ads campaigns. ",
    subDescription:
      "This experience demonstrates my self-driven approach, real-world skills in client acquisition, web design, SEO, and marketing.",
    images: [
      "/img/project-1.jpg",
      "/img/project-3.jpg",
      "/img/project-4.png",
      "/img/project-2.jpg",
    ],
    details: [
      {
        title: "Type",
        description: "Website",
      },
      {
        title: "Langages",
        description: "HTML, CSS, JS",
      },
      {
        title: "Platform",
        description: "Squarespace, FaceBook and Instagram Ads",
      },
    ],
  },
  {
    sourceCode: "https://github.com/nelsonAndelson/nelson-nextjs-ts-blog",
    title: "Personal Blog Website Built With Nextjs and Sanity CMS",
    description:
      "This project showcases my personal blog, developed using Next.js for efficient server-side rendering that boosts SEO and page speeds, paired with TypeScript for robust, maintainable code. I integrated Sanity CMS to manage dynamic content updates seamlessly. The blog features real-time post updates, customizable editing capabilities, and leverages Next.js's dynamic routing for serving articles. ",
    subDescription:
      "This project helped me deepen my understanding of modern web development frameworks and content management systems, enhancing my skills in developing scalable and responsive websites.",
    images: [
      "/img/blog-1.jpg",
      "/img/blog-2.jpg",
      "/img/blog-3.jpg",
      "/img/blog-4.jpg",
    ],
    details: [
      {
        title: "Type",
        description: "Blog",
      },
      {
        title: "Langages",
        description: "Reactjs, Nextjs, Sanity CMS, JS ES6+, Typescript",
      },
      {
        title: "Hosting",
        description: "Vercel",
      },
    ],
  },
];

export const projects: IProject[] = [
  {
    heading: "Owner of a Website Design Marketing Agency Startup",
    desc: "Nelson Digital Technologies is a dynamic startup offering innovative web design, SEO, and digital marketing services. As founder and lead, I acquired clients, designed websites, and managed SEO and Facebook Ads campaigns.",
    image: "img/project-1.jpg",
    link: "https://nelsondigitechnology.com",
    tags: ["Web Design", "Marketing", "SEO"],
  },
  {
    heading: "Personal Blog Website Built With Nextjs and Sanity CMS",
    desc: "This project showcases my personal blog, developed using Next.js for efficient server-side rendering that boosts SEO and page speeds, paired with TypeScript for robust, maintainable code. I integrated Sanity CMS to manage dynamic content updates seamlessly. The blog features real-time post updates, customizable editing capabilities, and leverages Next.js's dynamic routing for serving articles.",
    image: "img/blog-4.jpg",
    link: "https://nelson-nextjs-ts-blog.vercel.app/",
    tags: ["Reactjs", "Nextjs", "Sanity CMS", "JS ES6+", "Typescript"],
  },
];
