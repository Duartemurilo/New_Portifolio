import React from "react";
import { Main, AboutContainer } from "./style";

const ContentAbout = () => (
  <Main>
    <AboutContainer>
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
        Meu nome é <span className="highlight"> Murilo Duarte</span> Prazer em
        te conhecer. Sou estudante de análise e desenvolvimento de sistemas na
        FIAP, mas minha jornada como desenvolvedor front-end começou a 1 ano
        atrás, desde então venho fazendo projetos pessoais e colaborando com
        alguns colegas para dar vida as minhas ideias
      </p>
      <p className="text-about">
        Gosto de melhorar a vida das pessoas, desenvolvendo aplicações que sejam
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
    </AboutContainer>
  </Main>
);

export default ContentAbout;
