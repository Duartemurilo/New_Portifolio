import React from "react";
import Header from "../../Components/Header";
import FileHeader from "../../Components/FIlesHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import { ContainerAboutPage } from "./style_about_page";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import ContentAbout from "./ContentAbout";

function AboutPage() {
  const { activeSideBar } = useContext(myContext);
  return (
    <ContainerAboutPage>
      <Header />
      {!activeSideBar && <SideBar />}
      <section className="main-container">
        <FileHeader />
        <MenuMobile />
        <ContentAbout />
      </section>
      <Footer />
    </ContainerAboutPage>
  );
}

export default AboutPage;
