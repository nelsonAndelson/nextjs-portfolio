import {
  FaReact,
  FaRobot,
  FaPython,
  FaCogs,
  FaDatabase,
  FaSitemap,
} from "react-icons/fa";

/*--------------------
* Service Section
----------------------*/
function Service(props: {
  id: {
    main: string;
    icon: JSX.Element;
  };
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="lg:col-span-6">
        <div className={props.id.main + " feature-box-01"}>
          <div className="icon">{props.id.icon}</div>
          <div className="feature-content">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Service List Section
----------------------*/
export default function ServiceList() {
  const service_list = [
    {
      id: { main: "bg-1", icon: <FaReact /> },
      title: "Full-Stack Next.js Development",
      description:
        "Building modern web applications with Next.js, React, and TypeScript. Focused on creating responsive, server-rendered applications with clean APIs.",
    },
    {
      id: { main: "bg-2", icon: <FaRobot /> },
      title: "AI Integration & Development",
      description:
        "Exploring and implementing AI solutions using LangChain and Ollama. Currently learning to build practical AI applications that solve real business problems.",
    },
    {
      id: { main: "bg-3", icon: <FaPython /> },
      title: "Python Backend Development",
      description:
        "Developing Python backends and APIs while expanding my knowledge in microservices architecture and efficient data processing patterns.",
    },
    {
      id: { main: "bg-4", icon: <FaCogs /> },
      title: "AI-Powered Automation",
      description:
        "Learning to build AI agents and automation tools. Excited about combining traditional automation with modern LLM capabilities.",
    },
    {
      id: { main: "bg-5", icon: <FaDatabase /> },
      title: "Database Solutions",
      description:
        "Working with SQL and NoSQL databases, while exploring vector databases for AI applications. Focused on building efficient and scalable data solutions.",
    },
    {
      id: { main: "bg-6", icon: <FaSitemap /> },
      title: "Solution Architecture",
      description:
        "Designing full-stack applications with a growing focus on AI integration. Learning to balance functionality, scalability, and maintainability.",
    },
  ];
  return (
    <>
      <section
        data-scroll-data="1"
        id="services"
        className="section services-section bg-gray"
        style={{
          backgroundImage: "url(img/effect/bg-effect-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>My Services</span>
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center">
            {service_list.map((val, i) => {
              return (
                <Service
                  key={i}
                  id={val.id}
                  title={val.title}
                  description={val.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
