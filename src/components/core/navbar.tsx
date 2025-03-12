import { useState } from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black h-20 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <ul className="flex gap-4 text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
