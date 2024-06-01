import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ImageCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    if (currentIndex + 1 > items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative px-8">
      {/* Content */}
      <div className="flex flex-col items-center justify-center p-8 mx-2 rounded-md ">
        <img
          className="w-[600px] h-[400px]"
          src={items[currentIndex]}
          alt="Screenshot"
        />

        <button
          className="absolute left-1 bottom-[40%] rounded-md p-4 bg-accent text-black"
          onClick={handlePreviousImage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="absolute right-1 bottom-[40%] rounded-md p-4 bg-accent text-black"
          onClick={handleNextImage}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {/* Item Indicator */}
        <span className="text-center font-bold font-mono absolute bottom-0   left-[45%]">{`${
          currentIndex + 1
        } / ${items.length}`}</span>
      </div>
    </div>
  );
};
