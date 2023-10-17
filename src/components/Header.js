import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Header = ({ DarkMode, setDarkMode }) => {
  return (
    <header
      className={`sticky top-0 ${
        DarkMode ? "bg-[rgb(35,35,35)] text-white" : " bg-white "
      } z-10 `}
    >
      <nav className=" h-20 flex justify-between px-[5vw] items-center">
        <div>
          <h1 className="font-bold text-4xl font-kaushan">Image Gallery</h1>
        </div>
        <div className="flex gap-4 text-3xl md:hidden">
          <AiOutlineSearch />
          <AiOutlineMenu />
        </div>
        <div className="md:block hidden cursor-pointer ">
          {DarkMode ? (
            <div onClick={() => setDarkMode(!DarkMode)}>
              {" "}
              <span className="font-semibold">Light Mode</span>{" "}
              <BsToggleOn className="text-3xl inline-block" />{" "}
            </div>
          ) : (
            <div onClick={() => setDarkMode(!DarkMode)}>
              {" "}
              <span className="font-semibold">Dark Mode</span>{" "}
              <BsToggleOff className="text-3xl inline-block" />{" "}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
