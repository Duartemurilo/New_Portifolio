import React from "react";
import { CardSpecialization } from "../styles";

interface Props {
  text: string;
  icon: string;
  link?: string;
}

function SpecializationComponent(props: Props): JSX.Element {
  return (
    <CardSpecialization>
      <img src={props.icon} alt="icon" />
      <h2>{props.text}</h2>
    </CardSpecialization>
  );
}

export default SpecializationComponent;
