import React from "react";
import Header from "../../Components/Header";
import FileHeader from "../../Components/FIlesHeader";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import SideBar from "../../Components/SideBar";
import { useContext } from "react";
import myContext from "../../context/AppContext";
import contacts from "../../data/contacts";
import Footer from "../../Components/Footer";
import { ContainerContact } from "./style_contact";

function Contact() {
  const { activeSideBar } = useContext(myContext);
  return (
    <ContainerContact>
      <Header />
      {!activeSideBar && <SideBar />}
      <section className="flex-container">
        <section className="main-container">
          <FileHeader />
          <MenuMobile />
          <main className="containerContact">
            <div className="containerTitle">
              <h1 className="title">Vamos conversar? 🤙</h1>
              <h2 className="message">vamos trabalhar juntos?</h2>
            </div>
            <div className="list-contact">
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
            </div>
          </main>
        </section>
      </section>
      <Footer />
    </ContainerContact>
  );
}

export default Contact;
