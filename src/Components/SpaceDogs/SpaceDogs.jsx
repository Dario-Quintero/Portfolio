import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/SpaceDogs1.png";
import img2 from "../../img/SpaceDogs2.png";
import img3 from "../../img/SpaceDogs3.png";
function SpaceDogs() {
  const [img, setImg] = useState(img1);
  const images = [img1, img2, img3];
  const handleClickRight = () => {
    const currentIndex = images.indexOf(img);
    const nextIndex = (currentIndex + 1) % images.length;
    setImg(images[nextIndex]);
  };
  const handleClickLeft = () => {
    const currentIndex = images.indexOf(img);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setImg(images[prevIndex]);
  };
  return (
    <div className="flex items-center md:max-w-[90%] w-[96%] bg-base-100 p-2">
      <span className="relative h-full max-w-[415px] hidden md:flex">
        <span className="absolute flex items-center justify-between w-full h-full p-2 font-bold text-secondary">
          <button
            className="w-10 h-10 p-2 text-center rounded-full bg-opacity-45 bg-base-100"
            onClick={handleClickLeft}
          >
            ❮
          </button>
          <button
            className="w-10 h-10 p-2 text-center rounded-full bg-opacity-45 bg-base-100"
            onClick={handleClickRight}
          >
            ❯
          </button>
        </span>
        <span className="absolute bottom-0 w-full text-center bg-opacity-65 bg-base-100">
          Marzo - Abril 2024
        </span>
        <img className="h-full" src={img} alt="Space Dogs" />
      </span>
      <div className="flex flex-col justify-between  px-4 min-w-[50%] w-full md:max-w-[60%]">
        <h2 className="text-2xl font-bold text-center text-primary md:text-start">
          Space Dogs
        </h2>
        <span className="relative h-full md:hidden">
          <span className="absolute flex items-center justify-between w-full h-full p-2 font-bold text-secondary">
            <button
              className="w-8 h-8 p-2 text-sm rounded-full center bg-opacity-45 bg-base-100"
              onClick={handleClickLeft}
            >
              ❮
            </button>
            <button
              className="w-8 h-8 p-2 text-sm rounded-full center bg-opacity-45 bg-base-100"
              onClick={handleClickRight}
            >
              ❯
            </button>
          </span>
          <span className="absolute bottom-0 w-full text-xs text-center md:text-md bg-base-100 bg-opacity-65">
            Marzo - Abril 2024
          </span>
          <img className="h-full " src={img} alt="E-GYM" />
        </span>
        <p className="mt-2 text-xs md:text-sm md:m-0">
          Desarrollé una aplicación interactiva con temática espacial dirigida a
          los amantes de los perros, que permite obtener, guardar y visualizar
          información detallada sobre diferentes razas de perros..
        </p>
        <p className="text-xs md:text-sm">
          Filtros, Formulario, Paginado, Manejo de datos con Redux, SQL
        </p>
        <p className="px-2 py-1 my-1 text-xs bg-primary text-base-100 md:text-sm">
          React & Redux, CSS, JavaScript, PostgreSQL
        </p>
        <div className="flex justify-end w-full gap-2 ">
          <Link
            to="https://github.com/Dario-Quintero/PI-Dogs"
            className="p-2 px-4 text-sm font-semibold text-primary bg-base-100 hover:bg-primary hover:text-base-100"
          >
            Repositorio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpaceDogs;
