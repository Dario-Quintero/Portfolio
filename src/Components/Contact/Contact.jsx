import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosPaper } from "react-icons/io";

function Contact() {
  const handleEmail = () => {
    navigator.clipboard.writeText("darioquintero73@hotmail.com");
  };
  return (
    <div className="flex flex-wrap-reverse items-center justify-between w-full mt-1">
      <div className="flex gap-2 justify-evenly">
        <button onClick={handleEmail} className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="flex gap-2 items-center justify-center p-1 bg-base-100 text-primary hover:bg-primary hover:text-base-100 max-w-[100px] px-2 "
          >
            <MdOutlineEmail />
            Email
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] mt-1 menu p-0 md:p-2 bg-base-100 w-20 md:w-44 "
          >
            <li>
              <p className="text-[10px] sm:text-md hover:bg-transparent no-animation">
                Email copiado!
              </p>
            </li>
          </ul>
        </button>
        <Link
          to="https://github.com/Dario-Quintero"
          className="flex gap-2 items-center justify-center p-1 bg-base-100 text-primary hover:bg-primary hover:text-base-100 max-w-[100px] px-2 "
        >
          <FaGithub />
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/dario-quintero-9a7618239/"
          className="flex gap-2 items-center justify-center p-1 bg-base-100 text-primary hover:bg-primary hover:text-base-100 max-w-[100px] px-2 "
        >
          <FaLinkedin />
          LinkedIn
        </Link>
        <Link
          to="https://docs.google.com/document/d/1vyrbNbG30hrAhuTJ5l3CEo3UQdoZbif0B4RS5mvNr9s/edit?usp=sharing"
          className="flex gap-2 items-center justify-center p-1 bg-base-100 text-primary hover:bg-primary hover:text-base-100 max-w-[100px] px-2 "
        >
          <IoIosPaper  />
          CV
        </Link>
      </div>
      <p className="right-0 w-full pr-2 m-1 mt-0 font-bold md:w-auto md:m-0 text-end text-primary">
        Córdoba, Argentina
      </p>
    </div>
  );
}

export default Contact;
