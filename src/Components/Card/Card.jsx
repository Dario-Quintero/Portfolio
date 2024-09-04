import { useState } from "react";
import { Link } from "react-router-dom";

function Card({ proyect }) {
  return (
    <div className="relative cursor-pointer max-w-[320px] md:max-w-[450px] rounded-md overflow-hidden bg-black/15 dark:bg-white/25">
      <h2 className="absolute top-0 z-30 text-sm font-semibold text-center sm:text-xl text-white/85 dark:text-black/75 bg-black/75 dark:bg-white/85 w-full">
        {proyect?.name}
      </h2>
      <div className="relative md:m-0 aspect-auto">
        <div className="w-full h-full overflow-hidden">
          <span className="relative w-full h-full">
            <span className="absolute bottom-0 w-full text-center z-10 text-white/65 bg-black/35 dark:text-black/85 dark:bg-white/45">
              {proyect?.date}
            </span>
            <img
              src={proyect?.media}
              alt={proyect?.name}
              className="w-full scale-[1.15] "
            />
          </span>
        </div>
        <div className="absolute inset-0 z-20 flex flex-col pt-8 px-5 py-2 opacity-0 text-center justify-around text-transparent transition-opacity hover:opacity-100 focus:opacity-100 hover:bg-gray-900/80 focus:bg-gray-900/80 dark:focus:bg-gray-100/85 hover:text-white/75 dark:hover:bg-gray-100/85 dark:hover:text-black/85 ">
          <p className="hidden mt-2 text-xs sm:text-sm md:m-0 sm:block">
            {proyect?.description}
          </p>
          <p className="text-xs sm:text-sm">
            Creado con: {proyect?.technologies}
          </p>
          <div className="flex justify-end w-full">
            <Link
              target="_blank"
              to={proyect?.urls.path}
              className="rounded-lg flex gap-2 px-2 py-2 my-1 text-sm font-semibold text-center sm:text-md bg-white/35 hover:scale-105 dark:bg-black/35 dark:text-white/85"
            >
              <svg className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>

              {proyect?.urls.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
