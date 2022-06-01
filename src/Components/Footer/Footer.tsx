import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { ContainerFooter } from "./style_footer";
import Socialmedia from "./Socialmedia";

function Footer() {
  return (
    <ContainerFooter>
      <div className="links-footer">
        <p>Encontre-me em:</p>
        <Socialmedia
          href={"https://www.linkedin.com/in/duartemurilo/"}
          icon={<BsLinkedin className="icon-footer" />}
        />
        <Socialmedia
          href={"https://github.com/Duartemurilo"}
          icon={<BsGithub className="icon-footer" />}
        />
        <Socialmedia
          href={"https://www.instagram.com/muriloduarte700/"}
          icon={<BsInstagram className="icon-footer" />}
        />
      </div>

      <p className="text-footer">Feito Pelo brabo do Murilo ❤</p>
    </ContainerFooter>
  );
}

export default Footer;
