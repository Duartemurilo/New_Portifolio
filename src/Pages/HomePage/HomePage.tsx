import React from "react";
import FileHeader from "../../Components/FIlesHeader";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { ContainerHomePage } from "./style_home";
import CardSpecialization from "./CardSpecialization";
import js_icon from "../../images/js_icon.svg";
import css_icon from "../../images/css_icon.svg";
import react_icon from "../../images/react_icon.svg";
import html_icon from "../../images/html_icon.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import Footer from "../../Components/Footer";

function HomePage() {
  const { activeSideBar } = useContext(myContext);

  return (
    <ContainerHomePage>
      {!activeSideBar && <SideBar />}

      <section className="main-container">
        <Header />
        <FileHeader />
        <MenuMobile />
        <main className="wrapper">
          <div className="home">
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
            <a
              href="https://www.linkedin.com/in/duartemurilo/"
              target="_blank"
              className="btn-likedin"
              rel="noreferrer"
            >
              Ver Linkedin
              <LinkedInIcon />
            </a>
          </div>
          <div className="home">
            <p id="specialization">ESPECIALIZAÇÕES</p>
            <CardSpecialization
              text="javaScript"
              icon={js_icon}
              link={
                "https://www.linkedin.com/skill-assessments/JavaScript/report/"
              }
            />
            <CardSpecialization
              text="React"
              icon={react_icon}
              link={
                "https://www.linkedin.com/skill-assessments/%20REACT.JS/report/"
              }
            />
            <CardSpecialization
              text="CSS"
              icon={css_icon}
              link={"https://www.linkedin.com/skill-assessments/CSS/report/"}
            />
            <CardSpecialization
              text="HTML"
              icon={html_icon}
              link={"https://www.linkedin.com/skill-assessments/HTML/report/"}
            />
          </div>
        </main>
      </section>
      <Footer />
    </ContainerHomePage>
  );
}

export default HomePage;
