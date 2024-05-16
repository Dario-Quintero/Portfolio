import ToggleTheme from "../ToggleTheme/ToggleTheme";
import img from "../../img/foto yo.jpeg";

function Navbar() {
  return (
    <div className="flex justify-center w-full h-full py-2 mt-1 overflow-hidden font-semibold max-h-14">
      <div className="flex justify-between items-center w-full mx-2 lg:mx-0 lg:w-[70%]">
        <div className="flex items-center gap-2">
          <div>
            <button
              onClick={() => document.getElementById("my_modal").showModal()}
            >
              <img
              src={img}
              alt="me"
              className="w-12 rounded-btn animate-pulse"
            />
            </button>
            <dialog
              id="my_modal"
              className="flex flex-col items-center justify-center p-4 modal modal-bottom sm:modal-middle "
            >
              <div className="!rounded-none !bg-base-100 modal-box flex flex-col items-center justify-center max-h-[380px] !max-w-[380px] ">
                <img
                  src={img}
                  alt="me"
                  className="h-[80%]"
                />
                <div className="flex justify-end w-full modal-action">
                  <form method="dialog ">
                    <button className="p-2 bg-primary bg-opacity-30 hover:bg-opacity-100 hover:text-base-100">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
            
          </div>
          <div className="relative">
            <div className="overflow-hidden h-2/4">
              <span className="absolute bottom-0 z-10 w-full overflow-hidden bg-opacity-40 h-2/4 bg-accent"></span>
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
