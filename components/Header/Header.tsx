"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Menu from "./Menu";

/*--------------------
* Header Menu
----------------------*/

/*--------------------
* Header
----------------------*/
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 200);
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const header_menus = [
    { id: 0, name: "Home", scroll_link: "home" },
    { id: 1, name: "Services", scroll_link: "services" },
    { id: 2, name: "Skills", scroll_link: "skill" },
    { id: 3, name: "Projects", scroll_link: "projects" },
    { id: 4, name: "Contact", scroll_link: "contactus" },
  ];
  return (
    <>
      <header
        className={`main-header fixed left-0 right-0 z-[111] ${
          isScrolled ? "bg-white shadow-lg" : ""
        }`}
      >
        <div className="container flex items-center justify-between one-page-nav relative py-5 lg:py-3">
          <div className="logo">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
              <img
                src="img/nelson-logo2.svg"
                title="Logo"
                alt="Logo"
                className="w-full h-[35px] cursor-pointer"
              />
            </ScrollLink>
          </div>
          <button
            className="lg:hidden mobile_toggle w-[40px] flex flex-col"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block my-[5px]"></span>
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
          </button>
          <div
            className={`navbar-collapse flex ${isOpenMenu ? "menu-open" : ""}`}
          >
            <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
              {header_menus.map((val, i) => {
                return (
                  <Menu
                    key={i}
                    id={val.id}
                    name={val.name}
                    link={val.scroll_link}
                    isActive={activeSection === val.scroll_link.replace('#', '')}
                  />
                );
              })}
            </ul>
          </div>
          <div className="ms-auto hidden lg:flex">
            <ScrollLink
              to="contactus"
              smooth={true}
              duration={500}
              className="px-btn px-btn-theme cursor-pointer"
            >
              LET'S CONNECT! 😄
            </ScrollLink>
          </div>
        </div>
      </header>
    </>
  );
}
