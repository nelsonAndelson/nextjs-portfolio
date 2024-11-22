import Link from "next/link";
import { MenuProps } from "@/types/headerTypes";

function Menu({ id, name, link, isActive }: MenuProps) {


  return (
    <li>
      <Link href={link} className={`nav-link px-3 py-2 ${isActive ? 'active' : ''}`}>
        {name}
      </Link>
    </li>
  );
}
export default Menu;

