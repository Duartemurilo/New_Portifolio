import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  name: string;
  src: string;
  repository: string;
  description: string;
  site: string;
  technologies: string[];
  index: number;
}

function Project(props: Props) {
  return (
    <div key={props.index} className="card-project">
      <div className="img-container">
        <a
          href={props.site}
          title="Ver aplicação"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={props.src}
            alt="Imagem do projeto"
            className="img-project"
          />
        </a>
      </div>
      <h2 className="title-project">{props.name}</h2>
      <p>{props.description}</p>
      <div className="technologies">
        {props.technologies.map((tech) => (
          <span className="span-technologies">{tech}</span>
        ))}
      </div>
      <div className="links-container">
        <a
          href={props.repository}
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href={props.site}
          title="Ver aplicação"
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
}

export default Project;
