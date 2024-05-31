import Technologies from "../Technologies/Technologies";
import Info from "../Info/Info";
import Cards from "../Cards/Cards";

function Body() {
  return (
    <div className="flex flex-col items-center ">
      <div className=" md:mt-2 max-w-[1150px]">
        <Info />
        <Technologies />
        <Cards />
      </div>
    </div>
  );
}

export default Body;
