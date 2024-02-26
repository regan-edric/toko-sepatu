import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Image/Logo/logo.png";

export default function Navbar() {
  const searchBtnRef = useRef(null);
  const searchFormRef = useRef(null);
  const searchBoxRef = useRef(null);
  const navbarNavRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [searchFormActive, setSearchFormActive] = useState(false);

  useEffect(() => {
    const handleSearch = (e) => {
      if (searchBtnRef.current && searchFormRef.current) {
        setSearchFormActive(!searchFormActive);
        if (!searchFormActive) {
          searchBoxRef.current.focus();
        }
        e.preventDefault();
      }
    };

    const closeBtn = (e) => {
      if (
        searchFormRef.current &&
        searchBtnRef.current &&
        !searchFormRef.current.contains(e.target) &&
        !searchBtnRef.current.contains(e.target)
      ) {
        setSearchFormActive(false);
      }
    };

    const toggleNav = (e) => {
      if (navbarNavRef.current && hamburgerRef.current) {
        navbarNavRef.current.classList.toggle("active");
      }
    };

    const searchBtnRefCurrent = searchBtnRef.current;
    const hamburgerBtnRefCurrent = hamburgerRef.current;

    if (searchBtnRefCurrent) {
      searchBtnRefCurrent.addEventListener("click", handleSearch);
    }
    if (hamburgerBtnRefCurrent) {
      hamburgerBtnRefCurrent.addEventListener("click", toggleNav);
    }
    document.addEventListener("click", closeBtn);

    return () => {
      if (searchBtnRefCurrent) {
        searchBtnRefCurrent.removeEventListener("click", handleSearch);
      }
      if (hamburgerBtnRefCurrent) {
        hamburgerBtnRefCurrent.removeEventListener("click", toggleNav);
      }
      document.removeEventListener("click", closeBtn);
    };
  }, [searchFormActive]);

  return (
    <nav className="navbar flex justify-between items-center py-2 px-4 fixed top-0 left-0 right-0 z-fullDepan bg-primary border-2 border-solid border-t-0 border-x-0">
      <div className="navbar-kiri flex justify-center items-center">
        <NavLink className="">
          <img src={Logo} alt="ini logo" />
        </NavLink>
      </div>
      <div
        ref={navbarNavRef}
        className="navbar-tengah flex gap-6 md:text-xl text-sm max-md:block after:block max-md:px-2"
      >
        <NavLink className="hover:text-blue-800 inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium">
          Home
        </NavLink>
        <NavLink className="hover:text-blue-800 inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium">
          About
        </NavLink>
        <NavLink className="hover:text-blue-800 inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium">
          Collection
        </NavLink>
        <NavLink className="hover:text-blue-800 inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium">
          Contact
        </NavLink>
      </div>
      <div className="navbar-kanan flex md:text-xl gap-4 p-4 items-center">
        <NavLink
          to="/"
          id="search-btn"
          ref={searchBtnRef}
          className="hover:text-black"
        >
          <FaSearch />
        </NavLink>
        <NavLink>
          <FaShoppingCart />
        </NavLink>
        <NavLink>
          <CgProfile />
        </NavLink>
        <NavLink ref={hamburgerRef} className="hidden max-md:block">
          <GiHamburgerMenu />
        </NavLink>
      </div>

      <div
        className={`search-form absolute flex top-full h-12 items-center right-5persen w-96 scale-y-0 origin-top duration-0.3s bg-white max-md:w-full max-md:right-0 ${
          searchFormActive ? "scale-y-100" : ""
        }`}
        ref={searchFormRef}
      >
        <input
          ref={searchBoxRef}
          type="search"
          id="search-box"
          className="h-full w-full p-4 text-primary"
          placeholder="Search..."
        />
        <label
          htmlFor="search-box"
          className="cursor-pointer mr-6 text-primary"
        >
          <FaSearch />
        </label>
      </div>
    </nav>
  );
}
