import React from "react";
import proyects from "../../proyects.js";
import Card from "../Card/Card.jsx";

function Cards() {
  return (
    <div className="flex flex-col w-full my-1 md:py-2 md:mt-4 bg-black/5 text-black/60 dark:bg-white/15">
      <p className="w-24 pl-1 mt-1 font-semibold sm:w-32 text-md sm:text-2xl text-black/65 bg-black/20 dark:text-white/85 dark:bg-white/35">
        Proyectos
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-5 pt-4 pb-2 md:flex-row md:flex-wrap">
        {proyects.map((p) => (
          <Card proyect={p} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
