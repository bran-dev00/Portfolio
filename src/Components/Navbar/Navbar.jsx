import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="text-white bg-slate-700 p-5">
        <ul className="flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
