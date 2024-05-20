import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/E-GYM1.png";
import img2 from "../../img/E-GYM2.png";
import img3 from "../../img/E-GYM3.png";
import img4 from "../../img/E-GYM4.png";

function EGYM() {
  const images = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);

  setTimeout(() => {
    setCurrentImage((currentImage + 1) % images.length);
  }, 6000);

  return (
    <div className="transition-transform duration-300 cursor-pointer bg-base-100 hover:scale-105">
      <h2 className="text-sm font-bold text-center sm:py-1 sm:text-2xl text-primary">
        E-GYM
      </h2>
      <div className="relative m-2  md:m-0 max-w-[525px] aspect-auto ">
        <div className="w-full h-full ">
          <span className="relative w-full h-full ">
            <span className="absolute bottom-0 w-full text-center bg-opacity-65 border-primary border-opacity-40 bg-base-100 ">
              Abril - Mayo 2024
            </span>
            <img
              src={images[currentImage]}
              alt="EGYM"
              className="object-cover object-center w-full h-full "
            />
          </span>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-center px-5 py-2 text-center opacity-0 sm:justify-around border-primary bg-opacity-85 bg-base-100 text-default hover:opacity-100 focus:opacity-100"
          tabIndex="0"
        >
          <p className="hidden mt-2 text-xs sm:text-sm md:m-0 sm:block">
            Este proyecto incluye inicio de sesión Google junto con
            autenticación y encriptado de contraseñas, Slides, Barra de
            búsqueda, Tienda de productos, Carrito, Compra con Mercado Pago,
            Filtrado de productos, Comentarios de productos.
          </p>
          <p className="hidden text-sm sm:block">
            Panel de administrador con vistas de: Productos, Usuarios, Cupones,
            Ventas y Estadísticas.
          </p>

          <p className="text-xs sm:text-sm ">
            Elaborado con: React, Tailwind, JavaScript, Google Auth, Cloudinary,
            JWT, MongoDB
          </p>
          <div className="flex justify-end w-full ">
            <Link
              to="https://frontend-pf-three.vercel.app/"
              className="px-3 py-2 my-1 text-sm font-semibold text-center sm:text-md text-base-100 bg-primary hover:text-primary hover:bg-base-100"
            >
              Web
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EGYM;
