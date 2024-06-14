import ToggleTheme from "../ToggleTheme/ToggleTheme";
function Navbar() {
  return (
    <div className="flex justify-center w-full h-full py-1 pt-2 max-h-14">
      <div className="flex items-center justify-between w-full mx-2 mt-1 lg:mx-0 max-w-[1150px]">
        <h1 className="text-md md:text-2xl text-black/65 bg-black/20 dark:text-white/85 dark:bg-white/35 font-semibold px-1">
          Dario Quintero
        </h1>

        <ToggleTheme />
      </div>
    </div>
  );
}

export default Navbar;
