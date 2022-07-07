import React from "react";
import FileHeader from "../../Components/FIlesHeader";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { Container, Section, Main } from "./styles";
import js_icon from "../../images/js_icon.svg";
import css_icon from "../../images/css_icon.svg";
import react_icon from "../../images/react_icon.svg";
import html_icon from "../../images/html_icon.svg";

import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import Footer from "../../Components/Footer";
import SpecializationComponent from "./SpecializationComponent";
import Left from "./Left/Left";

function HomePage() {
  const { activeSideBar } = useContext(myContext);

  return (
    <Container>
      {!activeSideBar && <SideBar />}

      <Header />
      <FileHeader />
      <MenuMobile />
      <Main>
        <Section>
          <Left />
        </Section>

        <Section>
          <p id="specialization">ESPECIALIZAÇÕES</p>
          <SpecializationComponent
            text="javaScript"
            icon={js_icon}
            link={
              "https://www.linkedin.com/skill-assessments/JavaScript/report/"
            }
          />
          <SpecializationComponent
            text="React"
            icon={react_icon}
            link={
              "https://www.linkedin.com/skill-assessments/%20REACT.JS/report/"
            }
          />
          <SpecializationComponent
            text="CSS"
            icon={css_icon}
            link={"https://www.linkedin.com/skill-assessments/CSS/report/"}
          />
          <SpecializationComponent
            text="HTML"
            icon={html_icon}
            link={"https://www.linkedin.com/skill-assessments/HTML/report/"}
          />
        </Section>
      </Main>

      <Footer />
    </Container>
  );
}

export default HomePage;
