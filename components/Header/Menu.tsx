"use client";
import { Link } from "react-scroll";

interface MenuProps {
  id: number;
  name: string;
  link: string;
  isActive: boolean;
}

export default function Menu({ name, link, isActive }: MenuProps) {
  return (
    <li>
      <Link
        to={link}
        smooth={true}
        duration={500}
        offset={-100}
        spy={true}
        activeClass="active"
        className={`cursor-pointer ${isActive ? 'active' : ''}`}
      >
        {name}
      </Link>
    </li>
  );
}

