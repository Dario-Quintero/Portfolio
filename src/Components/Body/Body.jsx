import React from "react";
import Technologies from "../Technologies/Technologies";
import EGYM from "../EGYM/EGYM";
import SpaceDogs from "../SpaceDogs/SpaceDogs";
import Info from "../Info/Info";

function Body() {
  return (
    <div className="flex flex-col items-center ">
      <div className=" md:mt-2 max-w-[1150px]">
        <Info />
        <div className="w-full my-1 md:my-4 md:py-2 bg-opacity-20 bg-primary">
          <Technologies />
        </div>
        <div className="flex flex-col w-full my-1 md:py-2 md:mt-4 bg-opacity-20 bg-primary">
          <p className="w-24 pl-1 mt-1 font-semibold sm:w-32 text-md sm:text-2xl bg-opacity-30 bg-accent text-primary">
            Proyectos
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-5 pt-4 pb-2 md:flex-row md:flex-wrap">
            <EGYM />
            <SpaceDogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
