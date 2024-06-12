import ToggleTheme from "../ToggleTheme/ToggleTheme";
import img from "../../img/foto yo.jpeg";

function Navbar() {
  return (
    <div className="flex justify-center w-full h-full py-2 mt-1 overflow-hidden font-semibold max-h-14">
      <div className="flex items-center justify-between w-full mx-2 lg:mx-0 max-w-[1150px]">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="overflow-hidden h-2/4">
              <span className="absolute bottom-0 z-10 w-full overflow-hidden bg-opacity-40 h-2/4 bg-secondary"></span>
            </div>
            <p className="relative z-20 text-md md:text-2xl">Dario Quintero</p>
          </div>
        </div>

        <span className="w-[110px]">
          <ToggleTheme />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
