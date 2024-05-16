import { useState } from "react";
import img1 from "../../img/E-GYM1.png";
import img2 from "../../img/E-GYM2.png";
import img3 from "../../img/E-GYM3.png";
import img4 from "../../img/E-GYM4.png";
import { Link } from "react-router-dom";

function EGYM() {
  const [img, setImg] = useState(img1);
  const images = [img1, img2, img3, img4];
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
    <div className="flex items-center flex-col md:flex-row w-[96%] md:max-w-[90%] bg-base-100 p-2">
      <span className="relative h-full max-w-[415px] hidden md:block">
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
        <span className="absolute bottom-0 w-full text-center bg-base-100 bg-opacity-65">
          Abril - Mayo 2024
        </span>
        <img className="h-full " src={img} alt="E-GYM" />
      </span>
      <div className="flex flex-col justify-between px-4 w-full min-w-[50%] md:max-w-[60%]">
        <h2 className="text-2xl font-bold text-center text-primary md:text-start">
          E-GYM
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
            Abril - Mayo 2024
          </span>
          <img className="h-full " src={img} alt="E-GYM" />
        </span>
        <p className="mt-2 text-xs md:text-sm md:m-0">
          Este proyecto incluye inicio de sesión Google junto con autenticación
          y encriptado de contraseñas, Slides, Barra de búsqueda, Tienda de
          productos, Carrito, Compra con Mercado Pago, Filtrado de productos,
          Comentarios de productos.
        </p>
        <p className="text-xs md:text-sm">
          Panel de administrador con vistas de: Productos, Usuarios, Cupones,
          Ventas y Estadísticas.
        </p>

        <p className="px-2 py-1 my-1 text-xs md:text-md bg-primary text-base-100 md:text-sm">React, Tailwind, JavaScript, Google Auth, Cloudinary, JWT, MongoDB
        </p>
        <div className="flex justify-end w-full gap-2 ">
          <Link
            to="https://frontend-pf-three.vercel.app/"
            className="p-2 px-4 text-sm font-semibold md:text-md text-primary bg-base-100 hover:bg-primary hover:text-base-100"
          >
            Ir
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EGYM;
