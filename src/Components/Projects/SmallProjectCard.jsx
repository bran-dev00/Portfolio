import { useState } from "react";
import { Modal } from "../Modals/Modal";
import ProjectDetails from "./ProjectDetails";
import { Stack } from "./Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

export const SmallProjectCard = ({
  image,
  title,
  altDescription,
  finished,
  stack,
  description,
}) => {
  // Under Construction Banner is
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-black/20 shadow-sm shadow-white font-bold transition-all ease-in-out  text-accent flex flex-col justify-center text-start relative rounded-md m-4 hover:scale-95 w-80 min-h-[350px] max-h-[350px]">
        {!finished && (
          <div
            className={
              "flex justify-center items-center rotate-90 bg-black rounded-t-md text-white border-accent/50 border-2 font-bold p-2 absolute right-[-57px] bottom-10 h-8 w-20 text-center"
            }
          >
            <FontAwesomeIcon className="text-white" icon={faKeyboard} />{" "}
          </div>
        )}

        <a href="#" className="overflow-hidden ">
          <img
            className=" object-cover w-full h-48 "
            src={image}
            alt={altDescription}
          />
        </a>

        <div className=" p-4 rounded-br-md rounded-bl-md">
          <h1 className=" text-lg lg:text-xl mb-2">{title}</h1>
          <div className="flex gap-4 font-bold items-center">
            <span className="text-white text-xl">Stack:</span>
            <Stack stack={stack} />
          </div>
        </div>

        <button
          onClick={toggleModal}
          className="bg-emerald-400 p-2 m-2 rounded-md text-black font-bold max-w-full max-h-fit"
        >
          More Details
        </button>
      </div>

      <Modal open={isModalOpen} onClose={toggleModal}>
        {/* Every Project has these same attributes, then have a custom children prop to fill in differences in layout and */}
        <ProjectDetails
          onClose={toggleModal}
          title={title}
          description={description}
          img={image}
          stack={stack}
        />
      </Modal>
    </>
  );
};
