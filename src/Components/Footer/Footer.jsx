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
      <footer className="bg-slate-900 p-8 mt-8 flex justify-evenly h-60 relative">
        <div>
          <h3 className="text-white font-bold my-4">Brandon Chavez</h3>
          <p>My personal portfolio</p>
          <span className="py-8"> Brandon &copy; 2024</span>
        </div>

        <div>
          <h3 className="text-white font-bold my-4">Explore</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#"> Projects</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold my-4">Follow</h3>

          <ul className="flex flex-col items-center gap-4">
            <li>
              <a className="fa-xl p-4" href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a className="fa-xl p-4" href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a className="fa-xl p-4" href="#">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
