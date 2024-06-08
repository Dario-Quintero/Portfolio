import DevTools1 from "./img/DevTools1.jpg";
import DevTools2 from "./img/DevTools2.jpg";
import DevTools3 from "./img/DevTools3.jpg";

import eGym1 from "./img/E-GYM1.jpg";
import eGym2 from "./img/E-GYM2.jpg";
import eGym3 from "./img/E-GYM3.jpg";
import eGym4 from "./img/E-GYM4.jpg";

import spaceDogs1 from "./img/SpaceDogs1.jpg";
import spaceDogs2 from "./img/SpaceDogs2.jpg";
import spaceDogs3 from "./img/SpaceDogs3.jpg";

const proyects = [
  {
    name: "DevTools",
    date: "Junio 2024",
    images: [DevTools1, DevTools2, DevTools3],
    description:
      "Herramientas para el desarrollador, webs para practicar y hacer deploys, cursos, documentacion, y mas. Todo en un solo lugar.",
    technologies: "JavaScript, React, Zustand, Tailwind",
    urls: { name: "Web", path: "https://dev-tools-sable.vercel.app/" },
  },
  {
    name: "E-GYM",
    date: "Mayo 2024",
    images: [eGym1, eGym2, eGym3, eGym4],
    description:
      "Este proyecto incluye inicio de sesión con Google Auth junto con autenticación y encriptado de contraseñas, Slides, Barra de búsqueda, Tienda de productos, Carrito, Compra con Mercado Pago, Filtrado de productos, Comentarios de productos. Panel de administrador con vistas de: Productos, Usuarios, Cupones, Ventas y Estadísticas.",
    technologies:
      "JavaScript, React, Tailwind, Google Auth, Cloudinary, JWT, Node.js, Express, MongoDB, Mongoose",
    urls: { name: "Web", path: "https://frontend-pf-three.vercel.app/" },
  },
  {
    name: "Space-Dogs",
    date: "Marzo 2024",
    images: [spaceDogs1, spaceDogs2, spaceDogs3],
    description:
      "Desarrollé una aplicación interactiva con temática espacial dirigida a los amantes de los perros, que permite obtener, guardar y visualizar información detallada sobre diferentes razas de perros. Filtros, Formulario, Paginado, Manejo de datos con Redux, Base de datos SQL",
    technologies:
      "JavaScript, CSS, React & Redux, Node.js, Express, PostgreSQL, Sequelize",
    urls: {
      name: "Repositorio",
      path: "https://github.com/Dario-Quintero/PI-Dogs",
    },
  },
];
export default proyects;
