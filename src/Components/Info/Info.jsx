import React from "react";
import Contact from "../Contact/Contact";
function Info() {
  return (
    <div className="flex flex-col py-1 md:py-3 md:flex-row justify-evenly bg-black/5 dark:bg-white/15 ">
      <span className="flex items-center justify-center">
        <h2 className="w-full text-xl font-bold text-center md:text-4xl md:w-4/5 text-black/80 dark:text-white">
          Full-Stack Developer
        </h2>
      </span>
      <span className="w-full px-2 text-xs font-semibold tracking-wide md:text-sm lg:w-3/5 text-black/60 dark:text-white/65">
        <p>
          Mi formación en{" "}
          <span className="px-[2px] font-semibold text-gray-800 bg-yellow-300">
            Henry
          </span>{" "}
          me ha equipado con sólidas habilidades técnicas y una mentalidad de
          crecimiento. Durante mi capacitación, he adquirido experiencia
          trabajando en equipo, analizando datos y adaptándome a las rápidas
          transformaciones del sector tecnológico.
        </p>
        <p>
          Estoy comprometido con el aprendizaje continuo y en la búsqueda de
          oportunidades que me permitan aplicar mis habilidades técnicas para
          contribuir al éxito de proyectos innovadores.
        </p>
        <Contact />
      </span>
    </div>
  );
}

export default Info;
