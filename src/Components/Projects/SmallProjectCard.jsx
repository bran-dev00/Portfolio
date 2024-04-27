import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faJava,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

// {
//   /* <div className="bg-blue-500 rounded-md p-2 text-center text-white font-bold text-lg absolute right-[0px] top-[-40px] overflow-hidden"> */
// }
// {
//   /* <p>Under Construction</p> */
// }
// {
//   /* </div> */
// }

export const SmallProjectCard = ({
  cardImage,
  cardTitle,
  cardDescription,
  altDescription,
  finished,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="relative "
      >
        {!finished && (
          <div
            className={
              isVisible
                ? "bg-sky-600 rounded-t-md text-white font-bold p-2 absolute right-14 animate-showProjectTab"
                : "absolute right-10 top-10"
            }
          >
            <p>Under Construction</p>
          </div>
        )}

        <div className="flex flex-col relative hover:scale-95 transition-transform m-8 ">
          <a href="#" className="hover:scale-100">
            <img
              className=" w-fit h-fit rounded-tr-md rounded-tl-md"
              src={cardImage}
              alt={altDescription}
            />
          </a>

          <div className="bg-emerald-800 text-white p-5 rounded-br-md rounded-bl-md">
            <h1 className="text-white font-bold text-3xl py-2">
              {cardDescription}
            </h1>
            <ul className="flex gap-4 py-2 font-bold">
              Stack:
              <li>
                <FontAwesomeIcon icon={faJs} />
              </li>
              <li>
                <FontAwesomeIcon icon={faNode} />
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
