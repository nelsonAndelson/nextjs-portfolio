"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const header_menus = [
    { id: 0, name: "Home", scroll_link: "#home" },
    { id: 1, name: "Services", scroll_link: "#services" },
    { id: 2, name: "Skills", scroll_link: "#skill" },
    { id: 3, name: "Portfolio", scroll_link: "#portfolio" },
    { id: 4, name: "Contact", scroll_link: "#contactus" },
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
            <Link href="#home">
              <img
                src="img/nelson-logo2.svg"
                title="Logo"
                alt="Logo"
                className="w-full h-[35px] cursor-pointer"
              />
            </Link>
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
                  />
                );
              })}
            </ul>
          </div>
          <div className="ms-auto hidden lg:flex">
            <Link
              className="px-btn px-btn-theme"
              data-scroll-nav="4"
              href="#contactus"
            >
              LET'S CONNECT! 😄
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
