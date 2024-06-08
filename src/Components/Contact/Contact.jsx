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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 49.4 512 399.42"
              className="w-4"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <path
                    fill="#4285f4"
                    d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                  />
                  <path
                    fill="#34a853"
                    d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                  />
                  <path
                    fill="#fbbc04"
                    d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                  />
                </g>
                <path
                  fill="#ea4335"
                  d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                />
                <path
                  fill="#c5221f"
                  fill-rule="nonzero"
                  d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                />
              </g>
            </svg>
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
          <IoIosPaper />
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
