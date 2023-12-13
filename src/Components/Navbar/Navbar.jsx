import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
export const Navbar = () => {
  return (
    <div>
      <nav className="text-white mx-10 p-5 text-2xl font-mono flex justify-evenly">
        <div>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a href="#"> &apos;Home&apos;</a>
            </li>
            <li>
              <a href="#">&apos;About&apos;</a>
            </li>

            <li>
              <a href="#">&apos;Projects&apos;</a>
            </li>
          </ul>
        </div>

        {/* <div className="bg-white rounded-sm text-slate-900 px-5 place-items-center">
          <h1>B.</h1>
        </div> */}

        <div className="flex justify-center place-items-center gap-5">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
};
