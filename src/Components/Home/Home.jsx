import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-evenly items-between bg-white dark:bg-black">
      {/* <div className="flex flex-col"> */}
        <Navbar />
      <Body />
      {/* </div> */}
      
      <Footer />
    </div>
  );
}

export default Home;
