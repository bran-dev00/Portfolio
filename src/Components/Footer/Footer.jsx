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
      <footer className="bg-slate-900 p-8 my-8 flex justify-evenly h-60">
        <div>
          <h3 className="text-white font-bold">Brandon</h3>
        </div>

        <div>
          <h3 className="text-white font-bold">Explore</h3>
        </div>

        <div>
          <h3 className="text-white font-bold">Follow</h3>
        </div>

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

          <span className="text-sm "> Brandon &copy; 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
