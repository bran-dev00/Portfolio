import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="text-white text-center border-t-2 border-dashed">
        <div>
          <ul>
            <li className="my-3">
              <a href="#" className="underline text-[20px] py-5">
                Contact Me
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="underline text-[20px] py-5">
                About
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="underline text-[20px] py-5">
                Projects
              </a>
            </li>
          </ul>

          <ul className="flex justify-center gap-4">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>

          <span className="text-sm "> Brandon &copy; 2023</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
