import eGym1 from "./img/E-GYM1.png";
import eGym2 from "./img/E-GYM2.png";
import eGym3 from "./img/E-GYM3.png";
import eGym4 from "./img/E-GYM4.png";

import spaceDogs1 from "./img/SpaceDogs1.png";
import spaceDogs2 from "./img/SpaceDogs2.png";
import spaceDogs3 from "./img/SpaceDogs3.png";

const proyects = [
  {
    name: "E-GYM",
    date: "Mayo 2024",
    images: [eGym1, eGym2, eGym3, eGym4],
    description:
      "Este proyecto incluye inicio de sesión Google Auth junto con autenticación y encriptado de contraseñas, Slides, Barra de búsqueda, Tienda de productos, Carrito, Compra con Mercado Pago, Filtrado de productos, Comentarios de productos. Panel de administrador con vistas de: Productos, Usuarios, Cupones, Ventas y Estadísticas.",
    technologies:
      "React, Tailwind, JavaScript, Google Auth, Cloudinary, JWT, Node.js, Express, MongoDB, Mongoose",
    urls: { name: "Web", path: "https://frontend-pf-three.vercel.app/" },
  },
  {
    name: "Space-Dogs",
    date: "Marzo 2024",
    images: [spaceDogs1, spaceDogs2, spaceDogs3],
    description:
      "Desarrollé una aplicación interactiva con temática espacial dirigida a los amantes de los perros, que permite obtener, guardar y visualizar información detallada sobre diferentes razas de perros. Filtros, Formulario, Paginado, Manejo de datos con Redux, Base de datos SQL",
    technologies:
      "React & Redux, CSS, JavaScript, Node.js, Express, PostgreSQL, Sequelize",
    urls: {
      name: "Repositorio",
      path: "https://github.com/Dario-Quintero/PI-Dogs",
    },
  },
];
export default proyects;
