import React from "react";
import react_icon from "../../images/react_icon.svg";
import js_icon from "../../images/js_icon.svg";
import html_icon from "../../images/html_icon.svg";
import css_icon from "../../images/css_icon.svg";
import Menu from "./Menu/Menu";
import { ContainerfileHeader } from "./style_file_header";

function FileHeader() {
  return (
    <ContainerfileHeader>
      <nav className="nav-container">
        <Menu icon={react_icon} name="home.jsx" path="/" />
        <Menu icon={html_icon} name="sobre.html" path="/about" />
        <Menu icon={js_icon} name="projetos.js" path="/projects" />
        <Menu icon={css_icon} name="contato.css" path="/contact" />
      </nav>
    </ContainerfileHeader>
  );
}

export default FileHeader;
