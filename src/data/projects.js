// TODO:
// 1- Hacer petición a https://matiasurielgluck-server.up.railway.app/api/projects y copiar el objeto data del json a la lista projectsList. [OK]
// 2- Una vez copiada la data, limpiarla:
//      a- Reiniciar los IDs desde 1. [TODO:]
//      b- Mi backend hace un JOIN entre las tablas projects y tags, trayendo toda la data de la tabla tags en una lista Tags.[TODO:]
//         La lista debe contener únicamente los IDs de los tags y el JOIN lo debo hacer utilizando un helper para evitar redundancias e inconsistencias.
//      c- Reemplazar imageURL por un import estático de las imágenes. Descargar las imágenes de Cloudinary y crear una carpeta en assets para la sección portfolio.[TODO:]
//      d- Eliminar el atributo position. La posición la voy a controlar desde este archivo estático, moviendo de lugar los objetos.[TODO:]
//
// Observación: el objetivo de este archivo es simular mi estructura actual en la base de datos.

export const projectsList = [
  {
    projects: [
      {
        id: 146,
        name: "Chat App",
        description:
          "Created using React, React Router, Redux and Axios for the frontend. The backend is built using Node.js, Express.js, Socket.io, MySQL and Sequelize.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1677987349/portfolio/igffehvgaklyjctkzikc.png",
        demoLink: "https://mug-chatapp.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/ChatApp",
        position: 1,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 146 } },
          { id: 14, name: "Node", Project_Tag: { TagId: 14, ProjectId: 146 } },
          { id: 24, name: "MySQL", Project_Tag: { TagId: 24, ProjectId: 146 } },
          {
            id: 34,
            name: "Fullstack",
            Project_Tag: { TagId: 34, ProjectId: 146 },
          },
          {
            id: 134,
            name: "Redux",
            Project_Tag: { TagId: 134, ProjectId: 146 },
          },
          {
            id: 135,
            name: "Socket.io",
            Project_Tag: { TagId: 135, ProjectId: 146 },
          },
          {
            id: 136,
            name: "Express",
            Project_Tag: { TagId: 136, ProjectId: 146 },
          },
          { id: 137, name: "JWT", Project_Tag: { TagId: 137, ProjectId: 146 } },
        ],
      },
      {
        id: 34,
        name: "Portfolio App",
        description:
          "The administrator can log in to manage the content of the portfolio easily, without touching code.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625903/portfolio/uqt3eyxcpw0uj8eqqlcz.png",
        demoLink: "https://matiasurielgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/portfolio_v3_frontend",
        position: 1,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 34 } },
          { id: 14, name: "Node", Project_Tag: { TagId: 14, ProjectId: 34 } },
          { id: 24, name: "MySQL", Project_Tag: { TagId: 24, ProjectId: 34 } },
          {
            id: 34,
            name: "Fullstack",
            Project_Tag: { TagId: 34, ProjectId: 34 },
          },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 34 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 34 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 34 },
          },
          { id: 137, name: "JWT", Project_Tag: { TagId: 137, ProjectId: 34 } },
        ],
      },
      {
        id: 4,
        name: "Codenote",
        description:
          "Note app for programmers. Built using the MEVN Stack technologies.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625585/portfolio/oasrmdfw5rt9toiklity.png",
        demoLink: "https://codenote-app.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/CodeNote",
        position: 2,
        Tags: [
          { id: 14, name: "Node", Project_Tag: { TagId: 14, ProjectId: 4 } },
          {
            id: 34,
            name: "Fullstack",
            Project_Tag: { TagId: 34, ProjectId: 4 },
          },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 4 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 4 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 4 },
          },
          { id: 74, name: "Vue", Project_Tag: { TagId: 74, ProjectId: 4 } },
          { id: 84, name: "Mongo", Project_Tag: { TagId: 84, ProjectId: 4 } },
          { id: 94, name: "MEVN", Project_Tag: { TagId: 94, ProjectId: 4 } },
        ],
      },
      {
        id: 14,
        name: "Notes App",
        description:
          "Fullstack note taking app with category filter, archived and unarchived features.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625639/portfolio/bwsst40aay15m0mej1ed.png",
        demoLink: "https://note-app-matiasurielgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/Notes-App-Vue",
        position: 3,
        Tags: [
          { id: 14, name: "Node", Project_Tag: { TagId: 14, ProjectId: 14 } },
          { id: 24, name: "MySQL", Project_Tag: { TagId: 24, ProjectId: 14 } },
          {
            id: 34,
            name: "Fullstack",
            Project_Tag: { TagId: 34, ProjectId: 14 },
          },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 14 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 14 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 14 },
          },
          { id: 74, name: "Vue", Project_Tag: { TagId: 74, ProjectId: 14 } },
        ],
      },
      {
        id: 24,
        name: "Gluck Pianos",
        description:
          "E-commerce project, using both front-end and backend technologies.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666625689/portfolio/tymmjicba32ledxs1hyq.png",
        demoLink: "https://gluck-pianos.herokuapp.com/",
        codeLink: "https://github.com/MatiasUrielGluck/Gluck-Pianos",
        position: 4,
        Tags: [
          { id: 24, name: "MySQL", Project_Tag: { TagId: 24, ProjectId: 24 } },
          {
            id: 34,
            name: "Fullstack",
            Project_Tag: { TagId: 34, ProjectId: 24 },
          },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 24 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 24 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 24 },
          },
          {
            id: 104,
            name: "Flask",
            Project_Tag: { TagId: 104, ProjectId: 24 },
          },
          {
            id: 114,
            name: "Python",
            Project_Tag: { TagId: 114, ProjectId: 24 },
          },
        ],
      },
      {
        id: 145,
        name: "Textil Gluck",
        description:
          "Landing page for a real business dedicated to the sale of textiles.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1675302249/portfolio/fb28gg50eejhdaqwawll.png",
        demoLink: "https://textilgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/textil-gluck",
        position: 5,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 145 } },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 145 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 145 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 145 },
          },
        ],
      },
      {
        id: 144,
        name: "Country Quiz",
        description: "Game about capitals and flags, using React",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1667925739/portfolio/vyjjhdoqhgczhzyijpta.png",
        demoLink: "https://countryquiz-matiasurielgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/Country-Quiz",
        position: 6,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 144 } },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 144 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 144 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 144 },
          },
          {
            id: 134,
            name: "Redux",
            Project_Tag: { TagId: 134, ProjectId: 144 },
          },
        ],
      },
      {
        id: 44,
        name: "Heroes",
        description: "React frontend app to explore Marvel heroes.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626041/portfolio/lycgc6kd2ssfifwkvlib.png",
        demoLink: "https://heroes-react-app-matiasurielgluck.netlify.app",
        codeLink: "https://github.com/MatiasUrielGluck/heroes-react",
        position: 7,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 44 } },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 44 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 44 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 44 },
          },
        ],
      },
      {
        id: 54,
        name: "Gif App",
        description: "First React application.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626123/portfolio/olvh6ecbdnlkrhaupgo0.png",
        demoLink: "https://firstreactapp-matiasurielgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/GifAppReact",
        position: 8,
        Tags: [
          { id: 4, name: "React", Project_Tag: { TagId: 4, ProjectId: 54 } },
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 54 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 54 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 54 },
          },
        ],
      },
      {
        id: 64,
        name: "To-do App",
        description: "Simple todo SPA using Vue.js.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626170/portfolio/u3g52fojg8smzw8vkw4l.png",
        demoLink: "https://todoapp-matiasurielgluck.netlify.app/",
        codeLink: "https://github.com/MatiasUrielGluck/todoapp",
        position: 9,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 64 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 64 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 64 },
          },
          { id: 74, name: "Vue", Project_Tag: { TagId: 74, ProjectId: 64 } },
        ],
      },
      {
        id: 74,
        name: "Edie Homepage",
        description: "devChallenges.io project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626239/portfolio/qoiseodt3lxjywabk1yr.png",
        demoLink: "https://ediehomepage-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/edie-homepage-master",
        position: 10,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 74 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 74 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 74 },
          },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 74 },
          },
        ],
      },
      {
        id: 94,
        name: "Recipe page",
        description: "devChallenges.io project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626316/portfolio/paeliutszudlsc49uuhk.png",
        demoLink: "https://recipepage-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/recipe-page-master",
        position: 11,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 94 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 94 } },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 94 },
          },
        ],
      },
      {
        id: 104,
        name: "Team page",
        description: "devChallenges.io project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626347/portfolio/az9flavmlh2yxihh5cey.png",
        demoLink: "https://myteampage-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/my-team-page-master",
        position: 12,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 104 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 104 } },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 104 },
          },
        ],
      },
      {
        id: 114,
        name: "Sudoku",
        description: "Python sudoku for the terminal.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626384/portfolio/v6exrnxfpgmudnkk49h4.png",
        demoLink: "https://github.com/MatiasUrielGluck/Sudoku-Python",
        codeLink: "https://github.com/MatiasUrielGluck/Sudoku-Python",
        position: 13,
        Tags: [
          {
            id: 114,
            name: "Python",
            Project_Tag: { TagId: 114, ProjectId: 114 },
          },
        ],
      },
      {
        id: 124,
        name: "404 Not Found",
        description: "devChallenges.io first project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626412/portfolio/t8kzjwwvecwmoaipmgpv.png",
        demoLink: "https://404-not-found-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/404-not-found-master",
        position: 14,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 124 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 124 } },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 124 },
          },
        ],
      },
      {
        id: 134,
        name: "Interior Consultant",
        description: "devChallenges.io project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626553/portfolio/rua0reac3y3jx6ctclag.png",
        demoLink: "https://interior-consultant-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/interior-consultant-master",
        position: 15,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 134 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 134 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 134 },
          },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 134 },
          },
        ],
      },
      {
        id: 84,
        name: "Checkout",
        description: "devChallenges.io project.",
        imageURL:
          "https://res.cloudinary.com/dkiml5h06/image/upload/v1666626284/portfolio/ypzvztnelmrduebv854b.png",
        demoLink: "https://checkoutpage-matias-uriel-gluck.netlify.app/",
        codeLink:
          "https://github.com/MatiasUrielGluck/devChallenges/tree/main/checkout-page-master",
        position: 16,
        Tags: [
          { id: 44, name: "HTML", Project_Tag: { TagId: 44, ProjectId: 84 } },
          { id: 54, name: "CSS", Project_Tag: { TagId: 54, ProjectId: 84 } },
          {
            id: 64,
            name: "JavaScript",
            Project_Tag: { TagId: 64, ProjectId: 84 },
          },
          {
            id: 124,
            name: "Challenge",
            Project_Tag: { TagId: 124, ProjectId: 84 },
          },
        ],
      },
    ],
  },
];
