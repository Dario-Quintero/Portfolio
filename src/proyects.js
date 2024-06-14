import DevTools from "./img/DevTools.jpeg"
import eGym from "./img/E-GYM.jpeg";
import SpaceDogs from "./img/SpaceDogs.jpeg";

const proyects = [
  {
    name: "DevTools",
    date: "Junio 2024",
    media: DevTools,
    description:
      "Herramientas para el desarrollador, webs para practicar y hacer deploys, cursos, documentacion, y mas. Todo en un solo lugar.",
    technologies: "JavaScript, React, Zustand, Tailwind",
    urls: { name: "Deploy", path: "https://dev-tools-sable.vercel.app/" },
  },
  {
    name: "E-GYM",
    date: "Mayo 2024",
    media: eGym,
    description:
      "Este proyecto incluye inicio de sesión con Google Auth junto con autenticación y encriptado de contraseñas, Slides, Barra de búsqueda, Tienda de productos, Carrito, Compra con Mercado Pago, Filtrado de productos, Comentarios de productos. Panel de administrador con vistas de: Productos, Usuarios, Cupones, Ventas y Estadísticas.",
    technologies:
      "JavaScript, React, Tailwind, Google Auth, Cloudinary, JWT, Node.js, Express, MongoDB, Mongoose",
    urls: { name: "Deploy", path: "https://frontend-pf-three.vercel.app/" },
  },
  {
    name: "Space-Dogs",
    date: "Marzo 2024",
    media: SpaceDogs,
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
