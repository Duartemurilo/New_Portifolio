import React from "react";
import projects from "../../data/projects";

import Header from "../../Components/Header/Header";
import FileHeader from "../../Components/FIlesHeader/FileHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import { ContainerProjects } from "./style_projects";
import Project from "../../Components/Project/Project";

function Projects() {
  const { activeSideBar } = useContext(myContext);

  return (
    <ContainerProjects>
      <Header />
      {!activeSideBar && <SideBar />}
      <section className="flex-container">
        <section className="main-container">
          <FileHeader />
          <MenuMobile />
          <main className="containerProjects">
            <h1 className="title-projects">Meus projetos</h1>
            <div className="projects-container">
              {projects?.map(
                (
                  { name, src, repository, description, site, technologies },
                  index
                ) => (
                  <Project
                    name={name}
                    src={src}
                    repository={repository}
                    description={description}
                    site={site}
                    technologies={technologies}
                    index={index}
                  />
                )
              )}
            </div>
          </main>
        </section>
      </section>
      <Footer />
    </ContainerProjects>
  );
}

export default Projects;
