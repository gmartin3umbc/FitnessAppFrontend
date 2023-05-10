import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex w-full h-24 bg-gradient-to-t from-gray-800 via-gray-900 to-black">
      <div className="flex w-full justify-start items-center">
        <Link to="/">
          <img className="flex w-16 h-16 ml-9" src={Logo} />
        </Link>
      </div>

      <div className="flex w-full justify-end items-center mr-9">
        <ul className="list-none space-x-10 sm:flex hidden justify-end items-center flex-1">
          <li className={"font-normal text-base cursor-pointer text-white"}>
            <Link to="/"> Home </Link>
          </li>
          <li className={"font-normal text-base cursor-pointer  text-white"}>
            <a href={"#exercises"}> Exercises </a>{" "}
          </li>
          <li className={"font-normal text-base cursor-pointer  text-white"}>
            <Link to="/sheets"> Sheets </Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gradient-to-t from-gray-800 via-gray-900 to-black
          absolute top-20 z-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li className="font-normal cursor-pointer text-[16px] text-white">
                <Link to="/"> Home </Link>{" "}
              </li>
              <li className="font-normal cursor-pointer text-[16px] text-white">
                <a href={"#exercises"}> Exercises </a>{" "}
              </li>
              <li className="font-normal cursor-pointer text-[16px] text-white">
                <Link to="/sheets"> Sheets </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div
        className="flex bg-green-500 w-full "
        id={openLinks ? "open" : "close"}
      >
        <Link to="/">
          <img className="flex w-24 h-24 ml-3" src={Logo} />
        </Link>
        <div className="flex bg-fuchsia-500 w-full justify-end mr-8">
          <Link to="/"> Home </Link>
          <a href={"#exercises"}> Exercises </a>{" "}
          <Link to="/sheets"> Sheets </Link>
        </div>
      </div> */}
      {/* <div className="flex bg-fuchsia-500 w-full justify-end mr-8">
        <Link to="/"> Home </Link>
        <a href={"#exercises"}> Exercises </a>
        <Link to="/sheets"> Sheets </Link>
        <button onClick={toggleNavbar}>
          {toggleNavbar === false ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div> */}
    </div>
  );
}

export default Navbar;
