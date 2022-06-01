import netflix_image from "../images/NetfliCloneImage.jpeg";
import spotifyClone from "../images/spotify-ai-technology.jpeg";
import game_image from "../images/tileset.gif";
import nubank_image from "../images/NubankLogo.png";
import pomodoro_image from "../images/pomodoro.png";
import fintech_image from "../images/FIntech_image.png";

const projects = [
  {
    name: "Nubank Clone",
    description:
      "Essa landingpage foi um grande desafio de design, utilizei conhecimentos de UX para construir esse projeto.",
    src: nubank_image,
    repository: "https://github.com/Duartemurilo/nubank-landingpage-clone",
    site: "https://nubank-react-landing-page-md.surge.sh/",
    technologies: ["React", "Context ", "Hooks", "CSS3", "HTML5", "Materia-Ui"],
  },
  {
    name: "Netflix clone",
    description:
      "O Netflix clone foi um dos meus primeiros projetos, fiz ele com o objetivo de testar meus conhecimentos com APIS e estilização, é um site responsivo e com bastante detalhes.",
    src: netflix_image,
    repository: "https://github.com/Duartemurilo/NetflixClone",
    site: "https://clonenetflixmd.surge.sh/",
    technologies: ["React", "Context ", "Hooks", "CSS3", "HTML5", "Materia-Ui"],
  },
  {
    name: "Game ",
    description:
      "Esse game foi o meu mais recente projeto, como um apaixonado por jogos desde infância, resolvi criar o meu com uma proposta simples e divertida.",
    src: game_image,
    repository: "https://github.com/Duartemurilo/game-react",
    site: "https://game-react-md.surge.sh/",
    technologies: [
      "React",
      "Context",
      "Typescript ",
      "Hooks",
      "CSS3",
      "HTML5",
      "Materia-Ui",
    ],
  },
  {
    name: "Spotify Clone",
    description:
      "Como um amante da música e por ser fascinado pela facilidade e qualidade que o spotify nos disponibiliza, tive a ideia de fazer um clone do spotify usando a API disponibilizada pelo próprio spotify.",
    src: spotifyClone,
    repository: "https://github.com/Duartemurilo/Spotify-Clone-",
    site: "https://spotify-react-clone-md.surge.sh/",
    technologies: ["React", "Context", "Hooks", "CSS3", "HTML5", "API"],
  },
  {
    name: "Pomodoro",
    description:
      "A Técnica Pomodoro é um método de produtividade que me ajuda muito no processo de estudo, então resolvi criar o meu próprio timer, é um projeto simples, mas com algumas funcionalidades bem legais, aprendi muito fazendo esse projeto!",
    src: pomodoro_image,
    repository: "https://github.com/Duartemurilo/Pomodoro",
    site: "https://pomodoro-md.surge.sh/",
    technologies: [
      "React",
      "Context",
      "Typescript ",
      "Hooks",
      "CSS3",
      "HTML5",
      "Materia-Ui",
    ],
  },
  {
    name: "Fintech",
    description:
      "Versão ainda não finalizada do projeto de final do ano da FIAP.",
    src: fintech_image,
    repository: "https://github.com/Duartemurilo/fintech",
    site: "http://fintech-murilo-md.surge.sh/",
    technologies: ["React", "CSS3", "HTML5", "ES6", "react-chartjs-2"],
  },
];

export default projects;
