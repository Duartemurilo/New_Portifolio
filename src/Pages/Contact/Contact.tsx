import React from "react";
import Header from "../../Components/Header";
import FileHeader from "../../Components/FIlesHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import contacts from "../../data/contacts";
import Footer from "../../Components/Footer";
import { ContainerContact, LeftSide, ListContact, Main } from "./styles";

function Contact() {
  const { activeSideBar } = useContext(myContext);
  return (
    <ContainerContact>
      <Header />
      {!activeSideBar && <SideBar />}

      <FileHeader />
      <MenuMobile />
      <Main>
        <LeftSide>
          <h1>Vamos conversar? 🤙</h1>
          <h2>vamos trabalhar juntos?</h2>
        </LeftSide>

        <ListContact>
          <p className="class-name line">
            .contatos<span className="element">{" {"}</span>
          </p>
          {contacts.map(({ social, href, text }) => (
            <p className="key-name line" key={social}>
              {social}:
              <a href={href} target="_blank" rel="noreferrer">
                {text}
              </a>
              ;
            </p>
          ))}
          <p className="element line">{"}"}</p>
        </ListContact>
      </Main>

      <Footer />
    </ContainerContact>
  );
}

export default Contact;
