import Link from "next/link";

function Menu(props: any) {
  const { isActive, setIsActive } = props;
  return (
    <li>
      <Link data-scroll-nav={props.id} href={props.link} className="active">
        <span>{props.name}</span>
      </Link>
    </li>
  );
}

export default Menu;
