import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiExpress, SiPostgresql, SiMongodb, SiJsonwebtokens  } from "react-icons/si";


function Technologies() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-0 text-xs font-semibold md:text-sm md:gap-2 ">
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><FaHtml5 className="text-[#E34F26] mx-1"/> HTML</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><FaCss3 className="text-[#1572B6] mx-1" /> CSS</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><RiTailwindCssFill className="text-[#06B6D4] mx-1" /> Tailwind</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><IoLogoJavascript className="text-[#F7DF1E] mx-1" /> JavaScript</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><FaReact  className="text-[#61DAFB] mx-1"/> React</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><SiRedux className="text-[#764ABC] mx-1"/> Redux</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><SiExpress  className="text-[#000000] mx-1"/> Express</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><FaNodeJs className="text-[#5FA04E] mx-1"/> NodeJS</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><SiPostgresql  className="mx-1 text-primary"/> PostgreSQL</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><SiMongodb  className="text-[#47A248] mx-1"/> MongoDB</p>
      <p className="flex items-center p-2 max-w-32 justify-evenly rounded-btn hover:bg-base-100 hover:text-primary"><SiJsonwebtokens  className="text-[#000000] mx-1"/> JWT</p>
    </div>
  );
}

export default Technologies;
