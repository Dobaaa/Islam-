import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-transpernt text-black p-4 me-3 ms-3 ps-8 pe-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={Logo} />
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[var(--main)]">
            Home
          </a>

          <a href="#" className="hover:text-[var(--main)]">
            About
          </a>
          <a href="#" className="hover:text-[var(--main)]">
            Contact
          </a>
          <div className="relative group">
            <button className="hover:text-[var(--main)]">
              Arabic <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-1 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                English
              </a>
            </div>
          </div>
        </div>

        {/* Links on the right */}
        <div className="hidden md:flex space-x-6 md:items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[var(--main)]"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-[var(--main)]"
          />
          <a href="#" className="text-[var(--main)] login-btn">
            Login
          </a>
        </div>

        {/* Menu toggle for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <div className="relative group">
            <button className="block px-4 py-2 hover:bg-gray-700">
              Services
            </button>
            <div className="bg-gray-800 text-white py-2 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Service 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Service 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Service 3
              </a>
            </div>
          </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Contact
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Login
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};
export default Nav;
