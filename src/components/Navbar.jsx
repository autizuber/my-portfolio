import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants";
import { menu, close } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-20  py-2 bg-primary`}
    >
      <div className="flex items-center justify-between max-w-7xl m-auto">
        <Link
          to="/"
          className="flex gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="zlogo.svg" className="w-9 h-10" alt="" />
          <p className="font-medium text-lg">
            Zuber <span>| Auti</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white`}
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
