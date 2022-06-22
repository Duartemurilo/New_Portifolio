import React from "react";

interface Props {
  text: string;
  icon: string;
  link?: string;
}

function CardSpecialization(props: Props): JSX.Element {
  return (
    <button className="CardSpecialization">
      <img src={props.icon} alt="icon" />
      <h2>{props.text}</h2>
    </button>
  );
}

export default CardSpecialization;
