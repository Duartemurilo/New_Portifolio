import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  name: string;
  icon: string;
  path: string;
}

function Menu(props: Props): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Link
      type="button"
      to={props.path}
      className={`nav-bar ${pathname === props.path && "active"}`}
    >
      <img src={props.icon} alt="icon" className="icon-nav" />
      <p>{props.name}</p>
    </Link>
  );
}

export default Menu;
