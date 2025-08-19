import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <footer className="relative z-20 flex p-8 mt-8 bg-slate-900 justify-evenly h-60">
        <div>
          <h3 className="my-4 font-bold text-white">Brandon Chavez</h3>
          <p>My personal portfolio</p>
          <span className="py-8"> Brandon &copy; 2025</span>
        </div>

        <div>
          <h3 className="my-4 font-bold text-white">Explore</h3>
          <ul>
            <li>
              <a className="underline underline-offset-2" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-2"
                href="#project-section"
              >
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a className="underline underline-offset-2" href="#about-section">
                About Me
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-2"
                href="#contact-section"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="my-4 font-bold text-white">Follow</h3>

          <ul className="flex flex-col items-center gap-4">
            <li>
              <a
                className="p-4 cursor-pointer fa-xl"
                onClick={() => {
                  openInNewWindow(
                    "https://www.linkedin.com/in/brandon-chavez-933987230"
                  );
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="p-4 cursor-pointer fa-xl "
                onClick={() => {
                  openInNewWindow("https://github.com/bran-dev00");
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className="p-4 cursor-pointer fa-xl"
                onClick={() => {
                  openInNewWindow("https://codepen.io/M00se01");
                }}
              >
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
