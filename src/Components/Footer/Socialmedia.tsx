import React from "react";

interface Props {
  href: string;
  icon: any;
}

function Socialmedia(props: Props): JSX.Element {
  return (
    <a
      href={props.href}
      target="_blank"
      className="icon-container"
      rel="noreferrer"
    >
      {props.icon}
    </a>
  );
}

export default Socialmedia;
