import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export const Socials = () => {
  return (
    <div className="fixed z-10 flex-col justify-center hidden gap-5 md:flex place-items-center xl:left-10 lg:left-5 md:left-3 bottom-10 left-10">
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
    </div>
  );
};
