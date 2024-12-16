import { IProject, IProjectDetails } from "../types/projectTypes";
import portfolioImg from "@/public/img/portfolio.png"
import portfolioImg2 from "@/public/img/portfolio2.png"
import trailBImg from "@/public/img/trailblazerly.png"
import trailBImg2 from "@/public/img/trailb.png"
import trailBImg3 from "@/public/img/trialb.png"
import blogImg from "@/public/img/blog-1.jpg"
import blogImg2 from "@/public/img/blog-2.jpg"
import blogImg3 from "@/public/img/blog-3.jpg"
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiOpenai,
  SiReact,
  SiLangchain,
  SiSupabase,
  SiSanity
} from "react-icons/si";

export const projectsList: IProject[] = [
  {
    link: "portfolio",
    image: portfolioImg,
    tags: [SiNextdotjs, SiTypescript, SiTailwindcss],
    heading: "Personal Portfolio",
    desc: "A modern portfolio website built with Next.js and TypeScript"
  },
  {
    link: "ell-curriculum-generator",
    image: trailBImg, 
    tags: [SiNextdotjs, SiOpenai, SiLangchain, SiReact, SiSupabase],
    heading: "AI Curriculum Generator",
    desc: "An AI tool that helps ELL teachers create curriculum and lesson plans using OpenAI, LangChain, and Supabase."
  },
  {
    link: "myblog",
    image: blogImg, 
    tags: [SiNextdotjs, SiTypescript, SiTailwindcss, SiSanity],
    heading: "My SanityCMS Blog",
    desc: "A modern, dynamic blog platform built with Next.js and SanityCMS, featuring responsive design, and seamless content delivery"
  },
];

export const projectDetails: Record<string, IProjectDetails> = {
  "portfolio": {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects and skills",
    subDescription: "Built with Next.js 14, TypeScript, and Tailwind CSS",
    images: [portfolioImg, portfolioImg2],
    liveUrl: "https://nelsonbaguma.vercel.app",
    sourceCode: "https://github.com/nelsonAndelson/nextjs-portfolio",
    details: [
      {
        title: "Key Features",
        description: "Modern and intuitive design, fully responsive layout, SEO optimization through Next.js, smooth animations with Framer Motion"
      },
      {
        title: "Technical Stack",
        description: "Next.js 14, TypeScript, Tailwind CSS, Framer Motion"
      },
      {
        title: "Learning Highlights",
        description: "Improved TypeScript skills through strict typing, mastered responsive design with Tailwind CSS, implemented SEO best practices with Next.js, learned animation implementation with Framer Motion"
      },
      {
        title: "Implementation Details",
        description: "Server-side rendering for better performance, component-based architecture, modular styling with Tailwind CSS, TypeScript for type safety"
      }
    ]
  },
  "ell-curriculum-generator": {
    title: "AI Curriculum Generator",
    description: "An AI-powered tool that helps ELL teachers create customized curriculum and lesson plans using advanced language models",
    subDescription: "Built with Next.js, TypeScript, and integrated with OpenAI's GPT-4 through LangChain",
    images: [trailBImg, trailBImg2, trailBImg3],
    liveUrl: "https://trailblazerly.vercel.app/",
    sourceCode: "https://github.com/nelsonAndelson/trailblazerly",
    details: [
      {
        title: "Key Features",
        description: "AI-powered curriculum generation, customizable lesson planning, real-time content generation, user authentication, responsive design, data persistence"
      },
      {
        title: "Technical Stack",
        description: "Next.js 14, TypeScript, OpenAI, LangChain, Supabase, Clerk, Framer Motion, React, Tailwind CSS"
      },
      {
        title: "Learning Highlights",
        description: "Mastered LangChain for AI integration, implemented authentication flows with Clerk, learned database management with Supabase, gained experience with AI prompt engineering, improved TypeScript skills with complex types"
      },
      {
        title: "Implementation Details",
        description: "Server-side AI processing with LangChain, secure user authentication through Clerk, real-time database operations with Supabase, optimized API routes in Next.js, responsive UI with Tailwind CSS, smooth animations using Framer Motion"
      }
    ]
  },
  "myblog": {
    title: "My SanityCMS Blog",
    description: "A modern, dynamic blog platform built with Next.js and SanityCMS, featuring responsive design, and seamless content delivery",
    subDescription: "Built with Next.js, TypeScript, and SanityCMS",
    images: [blogImg, blogImg2, blogImg3],
    liveUrl: "https://nelson-nextjs-ts-blog.vercel.app/",
    sourceCode: "https://github.com/nelsonAndelson/nelson-nextjs-ts-blog",
    details: [
      {
        title: "Features",
        description: "Dynamic content management, responsive design, SEO optimization, secure authentication, real-time updates"
      },
      {
        title: "Technical Stack",
        description: "Next.js, TypeScript, SanityCMS, Tailwind CSS, Framer Motion"
      },
      {
        title: "Learning Highlights",
        description: "Gained experience with SanityCMS for content management, improved TypeScript skills with strict typing, learned to implement SEO best practices with Next.js, gained experience with authentication and authorization"
      },
      {
        title: "Implementation Details",
        description: "Server-side rendering for better performance, component-based architecture, modular styling with Tailwind CSS, TypeScript for type safety"
      }
    ]
  }
}; 