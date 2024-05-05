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
    <div>
      {/* Content */}
      <div className=" rounded-md p-4">
        <img
          className="w-[400px] h-[300px]"
          src={items[currentIndex]}
          alt="Screenshot"
        />
      </div>

      <div className="flex gap-4">
        <button
          className="rounded-md p-4 bg-accent text-black"
          onClick={handlePreviousImage}
        >
          Left
        </button>
        <button
          className="rounded-md p-4 bg-accent text-black"
          onClick={handleNextImage}
        >
          Right
        </button>
      </div>
    </div>
  );
};
