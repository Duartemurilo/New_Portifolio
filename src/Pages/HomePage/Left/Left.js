import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BtnLikedin } from "../styles";

function Left() {
  return (
    <>
      <p>
        <span className="span">{"<"}</span>Olá 👋 eu sou o
      </p>
      <h1>
        Murilo Duarte <span className="span">{"/"}</span>
        <span className="span" id="closetag">
          {" "}
          {">"}
        </span>
      </h1>
      <h3 className="line">Front-End Developer</h3>
      <BtnLikedin
        href="https://www.linkedin.com/in/duartemurilo/"
        target="_blank"
        rel="noreferrer"
      >
        Ver Linkedin
        <LinkedInIcon />
      </BtnLikedin>
    </>
  );
}

export default Left;
