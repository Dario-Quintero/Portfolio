import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/SpaceDogs1.png";
import img2 from "../../img/SpaceDogs2.png";
import img3 from "../../img/SpaceDogs3.png";
function SpaceDogs() {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  setTimeout(() => {
    setCurrentImage((currentImage + 1) % images.length);
  }, 6000);

  return (
    <div className="transition-transform duration-300 cursor-pointer bg-base-100 hover:scale-105">
      <h2 className="text-sm font-bold text-center sm:py-1 sm:text-2xl text-primary">
        Space-Dogs
      </h2>
      <div className="relative m-2  md:m-0 max-w-[525px] aspect-auto ">
        <div className="w-full h-full ">
          <span className="relative w-full h-full ">
            <span className="absolute bottom-0 w-full text-center bg-opacity-65 border-primary border-opacity-40 bg-base-100 ">
              Abril - Mayo 2024
            </span>
            <img
              src={images[currentImage]}
              alt="SpaceDogs"
              className="object-cover object-center w-full h-full "
            />
          </span>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-center px-5 py-2 text-center opacity-0 sm:justify-around border-primary bg-opacity-85 bg-base-100 text-default hover:opacity-100 focus:opacity-100"
          tabIndex="0"
        >
          <p className="hidden mt-2 text-xs sm:text-sm md:m-0 sm:block">
            Desarrollé una aplicación interactiva con temática espacial dirigida
            a los amantes de los perros, que permite obtener, guardar y
            visualizar información detallada sobre diferentes razas de perros..
          </p>
          <p className="hidden text-sm sm:block">
            Filtros, Formulario, Paginado, Manejo de datos con Redux, Base de
            datos SQL
          </p>

          <p className="text-xs sm:text-sm ">
            Elaborado con: React & Redux, CSS, JavaScript, PostgreSQL
          </p>
          <div className="flex justify-end w-full ">
            <Link
              to="https://github.com/Dario-Quintero/PI-Dogs"
              className="px-3 py-2 my-1 text-sm font-semibold text-center sm:text-md text-base-100 bg-primary hover:text-primary hover:bg-base-100"
            >
              Repositorio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceDogs;
