import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export const Socials = () => {
  return (
    <div className="flex flex-col justify-center place-items-center gap-5 fixed xl:left-10 lg:left-5 md:left-3 bottom-10 left-10 z-10">
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a className="fa-xl" href="#">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};
