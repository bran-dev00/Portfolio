import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faJava,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import {
  faArrowCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const SmallProjectCard = ({
  cardImage,
  cardTitle,
  altDescription,
  finished,
  stack,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(stack);

  // Using Devicon's CDN
  const iconMap = {
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    reactjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    cplusplus:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  };

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
                ? "bg-red-600 rounded-t-md text-white font-bold p-2 absolute right-14 animate-showProjectTab"
                : "absolute right-10 top-10"
            }
          >
            <p>Under Construction</p>
          </div>
        )}

        <div className=" border  flex flex-col relative hover:scale-95 transition-transform m-8 ">
          <a href="#" className="hover:scale-100">
            <img
              className="min-h-[200px] w-fit h-fit rounded-tr-md rounded-tl-md"
              src={cardImage}
              alt={altDescription}
            />
          </a>

          <div className="bg-slate-800 text-white p-5 rounded-br-md rounded-bl-md">
            <h1 className="text-white font-bold text-3xl py-2">{cardTitle}</h1>
            <div className="flex gap-4 py-2 font-bold">
              <span className="text-white text-2xl">Stack:</span>

              <ul className="flex gap-4 justify-center items-center fa-2xl text-accent">
                {stack.map((item, index) => (
                  <li className="flex flex-col" key={index}>
                    <img
                      className="w-[24px] h-[24px]  rounded-md"
                      src={iconMap[item.toLowerCase()]}
                      alt={item.toLowerCase()}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="flex gap-4">
              <span>More Details </span>
              <FontAwesomeIcon className="fa-xl" icon={faArrowCircleRight} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
