import React from "react";

export const ProjectCard = ({ description, img }) => {
  return (
    <div className="group relative w-80 h-60 m-5 p-5">
      <img className="w-full h-60 rounded-md" src={img} alt="" />

      {/* Overlay */}
      <div className=" flex flex-col items-center justify-center absolute inset-0 bg-[#141c3a] opacity-0 h-60 m-5 p-5 rounded-md group-hover:opacity-100 ease-linear transition-opacity">
        <p className="text-white inline-block">{description}</p>

        <button className="bg-emerald-500 rounded-md p-3 my-3 text-sm text-white ">
          More Details
        </button>
      </div>
    </div>
  );
};
