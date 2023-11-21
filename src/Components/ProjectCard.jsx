import React from "react";

export const ProjectCard = () => {
  return (
    <div className="group relative w-80 h-60 m-5 p-5">
      <figure>
        <img
          className="w-full h-60 rounded-md"
          src="https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg"
          alt=""
        />
      </figure>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#141c3a] opacity-0 h-60 m-5 p-5 rounded-md group-hover:opacity-100 ease-linear transition-opacity">
        <button className="text-white bg-emerald-700 p-4 rounded-md">
          More Details
        </button>
      </div>
    </div>
  );
};
