import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const openInNewWindow = (url) => {
  window.open(url, "_blank", "noreferrer");
};

export const Socials = () => {
  return (
    <div className="fixed z-10 flex-col justify-center hidden gap-5 md:flex place-items-center xl:left-10 lg:left-5 md:left-3 bottom-10 left-10">
      <button
        className="fa-xl"
        onClick={() => {
          openInNewWindow(
            "https://www.linkedin.com/in/brandon-chavez-933987230"
          );
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
      <button
        className="fa-xl"
        onClick={() => {
          openInNewWindow("https://github.com/m00se01");
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button
        className="fa-xl"
        onClick={() => {
          openInNewWindow("https://codepen.io/");
        }}
      >
        <FontAwesomeIcon icon={faCodepen} />
      </button>
    </div>
  );
};
