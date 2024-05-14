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
      <div className="bg-black/20 border border-accent/20 max-w-[60%] md:border-none md:max-w-[70%] md:max-h-[75%] sm:w-[350px] sm:text-xl font-mono font-bold transition-all ease-in-out text-accent flex flex-col justify-center text-start relative rounded-md m-4 hover:scale-95 w-80 lg:min-h-[350px] lg:max-h-[350px]">
        {/* Finshed Icon */}
        {!finished && (
          <div
            className={
              "flex justify-center items-center rotate-90 bg-black/20 rounded-t-md text-white border-accent/50 border-2 font-bold p-2 absolute right-[-57px] bottom-10 h-8 w-20 text-center"
            }
          >
            <FontAwesomeIcon className="text-white " icon={faKeyboard} />{" "}
          </div>
        )}

        <a href="#" className="overflow-hidden ">
          <img
            className="hidden object-cover w-full h-48 rounded-t-md md:block "
            src={image}
            alt={altDescription}
          />
        </a>

        <div className="p-4 rounded-br-md rounded-bl-md">
          {/* Title */}
          <h1 className="mb-2 lg:text-xl">{title}</h1>
          <div className="flex items-center gap-4 font-bold">
            <span className="text-xl text-white">Stack:</span>
            <Stack stack={stack} />
          </div>
        </div>

        <button
          onClick={toggleModal}
          className="max-w-full p-2 m-2 font-bold text-black rounded-md bg-emerald-400 max-h-fit"
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
