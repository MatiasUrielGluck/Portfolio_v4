// TODO:
// 1- Hacer petición a https://matiasurielgluck-server.up.railway.app/api/projects y copiar el objeto data del json a la lista projectsList. [OK]
// 2- Una vez copiada la data, limpiarla:
//      a- Reiniciar los IDs desde 1. [OK]
//      b- Mi backend hace un JOIN entre las tablas projects y tags, trayendo toda la data de la tabla tags en una lista Tags.[OK]
//         La lista debe contener únicamente los IDs de los tags y el JOIN lo debo hacer utilizando un helper para evitar redundancias e inconsistencias.
//      c- Reemplazar imageURL por un import estático de las imágenes. Descargar las imágenes de Cloudinary y crear una carpeta en assets para la sección portfolio.[TODO:]
//      d- Eliminar el atributo position. La posición la voy a controlar desde este archivo estático, moviendo de lugar los objetos.[OK]
//
// Observación: el objetivo de este archivo es simular mi estructura actual en la base de datos.

import notFound404 from "../assets/portfolio/404.png";
import chatapp from "../assets/portfolio/chatapp.png";
import checkout from "../assets/portfolio/checkout.png";
import codenote from "../assets/portfolio/codenote.png";
import country from "../assets/portfolio/country.png";
import edie from "../assets/portfolio/edie.png";
import gifapp from "../assets/portfolio/gifapp.png";
import gluckpianos from "../assets/portfolio/gluckpianos.png";
import heroe from "../assets/portfolio/heroe.png";
import interior from "../assets/portfolio/interior.png";
import noteapp from "../assets/portfolio/noteapp.png";
import portfoliofullstack from "../assets/portfolio/portfoliofullstack.png";
import recipe from "../assets/portfolio/recipe.png";
import sudoku from "../assets/portfolio/sudoku.png";
import teamspage from "../assets/portfolio/teamspage.png";
import textilgluck from "../assets/portfolio/textilgluck.png";
import todovue from "../assets/portfolio/todovue.png";
import tourapp from "../assets/portfolio/tourapp.png";

export const projectsList = [
  {
    id: 0,
    name: "¡Encontrá tu Guía!",
    description:
      "Created using Vue 3, TypeScript, Pinia and Quasar for the frontend. The backend is built using Java Spring Boot and MySQL.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1677987349/portfolio/igffehvgaklyjctkzikc.png",
    image: tourapp,
    // demoLink: "https://mug-chatapp.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/be-tourapp",
    tags: [16, 20, 18, 19, 3, 4],
  },
  {
    id: 6,
    name: "Textil Gluck",
    description:
      "Landing page for a real business dedicated to the sale of textiles.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1675302249/portfolio/fb28gg50eejhdaqwawll.png",
    image: textilgluck,
    demoLink: "https://textilgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/textil-gluck",
    tags: [1, 9, 10, 11],
  },
  {
    id: 3,
    name: "Codenote",
    description:
      "Note app for programmers. Built using the MEVN Stack technologies.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625585/portfolio/oasrmdfw5rt9toiklity.png",
    image: codenote,
    // demoLink: "https://codenote-app.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/CodeNote",
    tags: [16, 2, 15, 14, 9, 10, 7, 4],
  },
  {
    id: 2,
    name: "Portfolio App",
    description:
      "The administrator can log in to manage the content of the portfolio easily, without touching code.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625903/portfolio/uqt3eyxcpw0uj8eqqlcz.png",
    image: portfoliofullstack,
    // demoLink: "https://matiasurielgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/portfolio_v3_frontend",
    tags: [1, 2, 3, 4, 5, 7, 8],
  },
  {
    id: 1,
    name: "Chat App",
    description:
      "Created using React, React Router, Redux and Axios for the frontend. The backend is built using Node.js, Express.js, Socket.io, MySQL and Sequelize.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1677987349/portfolio/igffehvgaklyjctkzikc.png",
    image: chatapp,
    // demoLink: "https://mug-chatapp.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/ChatApp",
    tags: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    name: "Notes App",
    description:
      "Fullstack note taking app with category filter, archived and unarchived features.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625639/portfolio/bwsst40aay15m0mej1ed.png",
    image: noteapp,
    // demoLink: "https://note-app-matiasurielgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/Notes-App-Vue",
    tags: [16, 2, 3, 4, 7, 9, 10, 11],
  },
  {
    id: 5,
    name: "Gluck Pianos",
    description:
      "E-commerce project, using both front-end and backend technologies.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625689/portfolio/tymmjicba32ledxs1hyq.png",
    image: gluckpianos,
    // demoLink: "https://gluck-pianos.herokuapp.com/",
    codeLink: "https://github.com/MatiasUrielGluck/Gluck-Pianos",
    tags: [9, 10, 11, 12, 13, 3, 4],
  },
  {
    id: 7,
    name: "Country Quiz",
    description: "Game about capitals and flags, using React",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1667925739/portfolio/vyjjhdoqhgczhzyijpta.png",
    image: country,
    demoLink: "https://countryquiz-matiasurielgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/Country-Quiz",
    tags: [1, 9, 10, 11, 17],
  },
  {
    id: 8,
    name: "Heroes",
    description: "React frontend app to explore Marvel heroes.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626041/portfolio/lycgc6kd2ssfifwkvlib.png",
    image: heroe,
    demoLink: "https://heroes-react-app-matiasurielgluck.netlify.app",
    codeLink: "https://github.com/MatiasUrielGluck/heroes-react",
    tags: [1, 9, 10, 11],
  },
  {
    id: 9,
    name: "Gif App",
    description: "First React application.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626123/portfolio/olvh6ecbdnlkrhaupgo0.png",
    image: gifapp,
    demoLink: "https://firstreactapp-matiasurielgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/GifAppReact",
    tags: [1, 9, 10, 11],
  },
  {
    id: 10,
    name: "To-do App",
    description: "Simple todo SPA using Vue.js.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626170/portfolio/u3g52fojg8smzw8vkw4l.png",
    image: todovue,
    demoLink: "https://todoapp-matiasurielgluck.netlify.app/",
    codeLink: "https://github.com/MatiasUrielGluck/todoapp",
    tags: [16, 9, 10, 11],
  },
  {
    id: 11,
    name: "Edie Homepage",
    description: "devChallenges.io project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626239/portfolio/qoiseodt3lxjywabk1yr.png",
    image: edie,
    demoLink: "https://ediehomepage-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/edie-homepage-master",

    tags: [9, 10, 11, 17],
  },
  {
    id: 12,
    name: "Recipe page",
    description: "devChallenges.io project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626316/portfolio/paeliutszudlsc49uuhk.png",
    image: recipe,
    demoLink: "https://recipepage-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/recipe-page-master",

    tags: [9, 10, 11, 17],
  },
  {
    id: 13,
    name: "Team page",
    description: "devChallenges.io project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626347/portfolio/az9flavmlh2yxihh5cey.png",
    image: teamspage,
    demoLink: "https://myteampage-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/my-team-page-master",

    tags: [9, 10, 11, 17],
  },
  {
    id: 14,
    name: "Sudoku",
    description: "Python sudoku for the terminal.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626384/portfolio/v6exrnxfpgmudnkk49h4.png",
    image: sudoku,
    // demoLink: "https://github.com/MatiasUrielGluck/Sudoku-Python",
    codeLink: "https://github.com/MatiasUrielGluck/Sudoku-Python",

    tags: [12],
  },
  {
    id: 15,
    name: "404 Not Found",
    description: "devChallenges.io first project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626412/portfolio/t8kzjwwvecwmoaipmgpv.png",
    image: notFound404,
    demoLink: "https://404-not-found-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/404-not-found-master",

    tags: [9, 10, 17],
  },
  {
    id: 16,
    name: "Interior Consultant",
    description: "devChallenges.io project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626553/portfolio/rua0reac3y3jx6ctclag.png",
    image: interior,
    demoLink: "https://interior-consultant-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/interior-consultant-master",

    tags: [9, 10, 11, 17],
  },
  {
    id: 17,
    name: "Checkout",
    description: "devChallenges.io project.",
    imageURL:
      "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626284/portfolio/ypzvztnelmrduebv854b.png",
    image: checkout,
    demoLink: "https://checkoutpage-matias-uriel-gluck.netlify.app/",
    codeLink:
      "https://github.com/MatiasUrielGluck/devChallenges/tree/main/checkout-page-master",

    tags: [9, 10, 11, 17],
  },
];
