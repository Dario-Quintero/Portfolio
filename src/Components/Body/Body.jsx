import React, { useState } from "react";
import Technologies from "../Technologies/Technologies";
import Contact from "../Contact/Contact";
import EGYM from "../EGYM/EGYM";
import SpaceDogs from "../SpaceDogs/SpaceDogs";
function Body() {
  return (
    <div className="flex flex-col items-center">
      <div className=" lg:w-[70%] md:mt-2 w-full">
        <div className="flex flex-col py-1 md:py-3 md:flex-row justify-evenly bg-opacity-20 bg-primary">
          <span className="flex items-center justify-center">
            <h2 className="w-full text-xl font-bold text-center md:text-4xl md:w-4/5 text-primary">
              FullStack Developer
            </h2>
          </span>
          <span className="w-full px-2 text-xs font-semibold tracking-wide md:text-sm lg:w-3/5">
            <p>
              Mi formación en{" "}
              <span className="px-1 font-semibold text-gray-800 bg-yellow-300">
                Henry
              </span>{" "}
              me ha equipado con sólidas habilidades técnicas y una mentalidad
              de crecimiento. Durante mi capacitación, he adquirido experiencia
              trabajando en equipo, analizando datos y adaptándome a las rápidas
              transformaciones del sector tecnológico.
            </p>
            <p>
              Estoy comprometido con el aprendizaje continuo y la búsqueda de
              oportunidades que me permitan aplicar mis conocimientos y
              contribuir al éxito de proyectos innovadores.
            </p>
            <Contact />
          </span>
        </div>
        <div className="w-full my-1 md:my-4 md:py-2 bg-opacity-20 bg-primary">
          <Technologies />
        </div>
        <div className="flex flex-col w-full my-1 md:py-2 md:mt-4 bg-opacity-20 bg-primary">
          <p className="w-32 pl-2 mt-1 text-2xl font-semibold bg-opacity-30 md:p-0 bg-accent text-primary">
            Proyectos
          </p>
          <div className="flex flex-col items-center justify-center gap-2 pt-4 pb-2">
            <EGYM />
            <SpaceDogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
