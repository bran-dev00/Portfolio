import { useState } from "react";
import { Modal } from "../Modals/Modal";
import ProjectDetails from "./ProjectDetails";
import { Stack } from "./Stack";

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
      <div
        onMouseEnter={() => setIsBannerVisible(true)}
        onMouseLeave={() => setIsBannerVisible(false)}
        className="relative "
      >
        {!finished && (
          <div
            className={
              isBannerVisible
                ? "bg-red-600 rounded-t-md text-white font-bold p-2 absolute right-14 animate-showProjectTab"
                : "absolute right-10 top-10"
            }
          >
            <p>Under Construction</p>
          </div>
        )}

        <div className=" flex flex-col relative hover:scale-95 transition-transform m-8 ">
          <a href="#" className="hover:scale-100">
            <img
              className="min-h-[200px] w-fit h-fit rounded-tr-md rounded-tl-md"
              src={image}
              alt={altDescription}
            />
          </a>

          <div className="bg-secondary/50 text-white p-5 rounded-br-md rounded-bl-md">
            <h1 className="text-white font-bold text-3xl py-2">{title}</h1>
            <div className="flex gap-4 py-2 font-bold">
              <span className="text-white text-2xl">Stack:</span>

              <Stack stack={stack} />
            </div>
            <button
              onClick={toggleModal}
              className="bg-emerald-400 p-2 m-2 rounded-md"
            >
              More Details
            </button>
          </div>
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
      </div>
    </>
  );
};
