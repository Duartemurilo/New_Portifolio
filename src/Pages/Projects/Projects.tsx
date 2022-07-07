import React from "react";
import projects from "../../data/projects";

import Header from "../../Components/Header";
import FileHeader from "../../Components/FIlesHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import { ContainerProjects, ListProject, Main } from "./styles";
import Project from "../../Components/Project";

function Projects() {
  const { activeSideBar } = useContext(myContext);

  return (
    <ContainerProjects>
      <Header />
      {!activeSideBar && <SideBar />}

      <FileHeader />
      <MenuMobile />
      <Main>
        <h1>Meus projetos</h1>
        <ListProject>
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
        </ListProject>
      </Main>

      <Footer />
    </ContainerProjects>
  );
}

export default Projects;
