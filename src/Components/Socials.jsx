import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export const Socials = () => {
  return (
    <div className="flex flex-col justify-center place-items-center gap-5 absolute left-0 bottom-0 ">
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};
