import React from "react";
import Header from "../../Components/Header/Header";
import FileHeader from "../../Components/FIlesHeader/FileHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import { ContainerAboutPage } from "./style_about_page";
import { useContext } from "react";
import myContext from "../../context/AppContext";

function AboutPage() {
  const { activeSideBar } = useContext(myContext);
  return (
    <ContainerAboutPage>
      <Header />
      {!activeSideBar && <SideBar />}
      <section className="main-container">
        <FileHeader />
        <MenuMobile />
        <main className="main-wrapper about">
          <div className="about-container">
            <span className="span-tag html">{"<html>"}</span>
            <br />
            <span className="span-tag body">{"<body>"}</span>
            <br />
            <span className="span-tag content">{"<h1>"}</span>
            <h1 className="title-about">Olá,</h1>
            <span className="span-tag content">{"</h1>"}</span>
            <br />
            <span className="span-tag content">{"<p>"}</span>
            <p className="text-about">
              Meu nome é <span className="highlight"> Murilo Duarte</span>{" "}
              Prazer em te conhecer. Sou estudante de análise e desenvolvimento
              de sistemas na FIAP, mas minha jornada como desenvolvedor
              front-end começou a 1 ano atrás, desde então venho fazendo
              projetos pessoais e colaborando com alguns colegas para dar vida
              as
            </p>
            <p className="text-about">
              Gosto de melhorar a vida das pessoas, desenvolvendo aplicações que
              sejam
              <span className="highlight"> acessíveis e funcionais</span>.
            </p>
            <p className="text-about last">
              AS habilidades relevantes incluem:{" "}
              <span className="highlight">
                Html, CSS, JavaScript, React, Hooks, Typescript , Github, UX.
              </span>
            </p>
            <br />
            <span className="span-tag content">{"</p>"}</span>
            <br />
            <span className="span-tag body">{"</body>"}</span>
            <br />
            <span className="span-tag html">{"</html>"}</span>
          </div>
        </main>
      </section>
      <Footer />
    </ContainerAboutPage>
  );
}

export default AboutPage;
