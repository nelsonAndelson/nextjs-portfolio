/*--------------------
* Skill Section
----------------------*/

import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPython,
  SiTailwindcss,
  SiOpenai,
  SiPrisma,
  SiPostgresql,
  SiLangchain
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Skill(props: {
  id: {
    main: string;
    icon: JSX.Element;
  };
  title: string;
}) {
  return (
    <>
      <div className="col-span-6 md:col-span-4 lg:col-span-4">
        <div className={`${props.id.main} feature-box-02 hover:scale-105 transition-transform duration-300`}>
          <div className="icon text-3xl mb-4">{props.id?.icon}</div>
          <h6 className="font-semibold text-gray-800 text-lg">{props.title}</h6>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {
  const skill_list = [
    // Frontend & Core
    { id: { main: "bg-1", icon: <FaReact /> }, title: "React" },
    { id: { main: "bg-2", icon: <SiNextdotjs /> }, title: "Next.js" },
    { id: { main: "bg-3", icon: <SiTypescript /> }, title: "TypeScript" },
    { id: { main: "bg-4", icon: <SiTailwindcss /> }, title: "Tailwind" },
    
    // Backend & Database
    { id: { main: "bg-5", icon: <SiPython /> }, title: "Python" },
    { id: { main: "bg-6", icon: <SiPrisma /> }, title: "Prisma" },
    { id: { main: "bg-3", icon: <SiPostgresql /> }, title: "PostgreSQL" },
    
    // AI & ML
    { id: { main: "bg-1", icon: <SiOpenai /> }, title: "OpenAI" },
    { id: { main: "bg-4", icon: <SiLangchain /> }, title: "LangChain" },
  ];

  return (
    <>
      <section
        data-scroll-data="2"
        id="skill"
        className="section experience-section py-24"
      >
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="lg:col-span-6 lg:pl-9">
              <div className="section-heading mb-12">
                <h3 className="m-0">
                  <span>Tech Stack</span>
                </h3>
                <p className="text-gray-600 mt-3">Tools and technologies I work with</p>
              </div>
              <div className="skill-box">
                <div className="grid gap-8 grid-cols-12">
                  {skill_list.map((val, i) => {
                    return <Skill key={i} {...val} />;
                  })}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
              <img
                className="mx-[auto]"
                src="img/nelson-again.png"
                title=""
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
