import React, { useState } from "react";
import react_icon from "../../images/react_icon.svg";
import js_icon from "../../images/js_icon.svg";
import html_icon from "../../images/html_icon.svg";
import css_icon from "../../images/css_icon.svg";

import { Link } from "react-router-dom";
import { ContainerSideBar } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaFolderOpen } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <ContainerSideBar className="side-bar">
      <aside>
        <div className="titlesideBar">
          <p>EXPLORER</p>
        </div>
        <button
          type="button"
          className="portifolio"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          {open ? (
            <FaFolderOpen color="#EBCB8B" />
          ) : (
            <FaFolder color="#EBCB8B" />
          )}
          <p>Portfolio</p>
        </button>
        {open && (
          <>
            <Link to="/" className="file">
              <img src={react_icon} alt="icon" className="icon-side-bar" />
              <p>home.jsx</p>
            </Link>
            <Link to="/about" className="file">
              <img src={html_icon} alt="icon" className="icon-side-bar" />
              <p>sobre.html</p>
            </Link>
            <Link to="/projects" className="file">
              <img src={js_icon} alt="icon" className="icon-side-bar" />
              <p>projetos.js</p>
            </Link>

            <Link to="/contact" className="file">
              <img src={css_icon} alt="icon" className="icon-side-bar" />
              <p>contato.css</p>
            </Link>
          </>
        )}
      </aside>
    </ContainerSideBar>
  );
}

export default SideBar;
