import React from "react";
import Header from "../../Components/Header";
import FileHeader from "../../Components/FIlesHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import { Container } from "./style";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import ContentAbout from "./ContentAbout";

function AboutPage() {
  const { activeSideBar } = useContext(myContext);
  return (
    <Container>
      <Header />
      {!activeSideBar && <SideBar />}

      <FileHeader />
      <MenuMobile />
      <ContentAbout />

      <Footer />
    </Container>
  );
}

export default AboutPage;
