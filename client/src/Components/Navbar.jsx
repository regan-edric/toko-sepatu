import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaRegistered, FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Image/Logo/logo.png";

export default function Navbar() {
  const searchBtnRef = useRef(null);
  const searchFormRef = useRef(null);
  const searchBoxRef = useRef(null);
  const navbarNavRef = useRef(null);
  const hamburgerRef = useRef(null);
  const profileBtnRef = useRef(null);
  const profileDetailRef = useRef(null);
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  useEffect(() => {
    // Toggle Search
    const handleSearch = (e) => {
      if (searchBtnRef.current && searchFormRef.current) {
        setSearchFormActive(!searchFormActive);
        if (!searchFormActive) {
          searchBoxRef.current.focus();
          e.preventDefault();
        }
      }
    };

    // Toggle Navbar ketika responsive
    const toggleNav = (e) => {
      if (navbarNavRef.current && hamburgerRef.current) {
        navbarNavRef.current.classList.toggle("active");
      }
    };

    const toggleProfile = (e) => {
      if (profileDetailRef.current && profileBtnRef.current) {
        setProfileActive(!profileActive);
        e.preventDefault();
      }
    };

    // Tombol untuk close semua button dan diluar
    const closeBtn = (e) => {
      if (
        searchFormRef.current &&
        searchBtnRef.current &&
        !searchFormRef.current.contains(e.target) &&
        !searchBtnRef.current.contains(e.target)
      ) {
        setSearchFormActive(false);
      }
      if (
        profileBtnRef.current &&
        profileDetailRef.current &&
        !profileBtnRef.current.contains(e.target) &&
        !profileDetailRef.current.contains(e.target)
      ) {
        setProfileActive(false);
      }
    };

    // Penggabungan semua metode
    const searchBtnRefCurrent = searchBtnRef.current;
    const hamburgerBtnRefCurrent = hamburgerRef.current;
    const profileBtnRefCurrent = profileBtnRef.current;

    if (searchBtnRefCurrent) {
      searchBtnRefCurrent.addEventListener("click", handleSearch);
    }
    if (hamburgerBtnRefCurrent) {
      hamburgerBtnRefCurrent.addEventListener("click", toggleNav);
    }
    if (profileBtnRefCurrent) {
      profileBtnRefCurrent.addEventListener("click", toggleProfile);
    }
    document.addEventListener("click", closeBtn);

    return () => {
      if (searchBtnRefCurrent) {
        searchBtnRefCurrent.removeEventListener("click", handleSearch);
      }
      if (hamburgerBtnRefCurrent) {
        hamburgerBtnRefCurrent.removeEventListener("click", toggleNav);
      }
      if (profileBtnRefCurrent) {
        profileBtnRefCurrent.removeEventListener("click", toggleProfile);
      }
      document.removeEventListener("click", closeBtn);
    };
  }, [searchFormActive, profileActive]);

  return (
    <nav className="navbar container rounded-b-lg flex justify-between items-center py-2 px-6 fixed top-0 left-0 right-0 z-fullDepan border-2 border-solid border-t-0 border-x-0">
      <div className="navbar-kiri flex justify-center items-center">
        <NavLink to="/">
          <img src={Logo} alt="ini logo" />
        </NavLink>
      </div>
      <div
        ref={navbarNavRef}
        className="navbar-tengah flex gap-6 md:text-xl text-sm max-md:block after:block max-md:absolute max-md:px-2 max-md:top-full max-md:-right-full max-md:bg-white max-md:text-primary max-md:w-40 max-md:h-screen max-md:transition max-md:duration-300"
      >
        <NavLink
          to="/"
          className="hover:text-secondary inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium "
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-secondary inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium "
        >
          About
        </NavLink>
        <NavLink
          to="/collection"
          className="hover:text-secondary inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium"
        >
          Collection
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-secondary inline-block max-md:block max-md:p-4 max-md:text-lg max-md:font-medium "
        >
          Contact
        </NavLink>
      </div>
      <div className="navbar-kanan flex md:text-xl gap-4 p-4 items-center">
        <NavLink to="/" ref={searchBtnRef} className="hover:text-secondary">
          <FaSearch />
        </NavLink>
        <NavLink>
          <FaShoppingCart />
        </NavLink>
        <NavLink ref={profileBtnRef} className="hover:text-secondary">
          <CgProfile />
        </NavLink>
        <NavLink ref={hamburgerRef} className="hidden max-md:block">
          <GiHamburgerMenu />
        </NavLink>
      </div>

      {/* Search Form */}
      <div
        className={`search-form absolute flex top-full te h-12 items-center right-5persen w-96 scale-y-0 origin-top duration-0.3s bg-white max-md:w-full max-md:right-0 ${
          searchFormActive ? "scale-y-100" : ""
        }`}
        ref={searchFormRef}
      >
        <input
          ref={searchBoxRef}
          type="search"
          id="search-box"
          className="h-full w-full p-4 text-primary focus:decoration-0"
          placeholder="Search..."
        />
        <label
          htmlFor="search-box"
          className="cursor-pointer mr-6 text-primary"
        >
          <FaSearch />
        </label>
      </div>

      {/* Login Register Form Dropdown */}
      <div
        ref={profileDetailRef}
        className={`absolute top-full items-center py-2 px-4 rounded-b-md right-2persen bg-white text-primary origin-top duration-300 max-md:block max-md:right-10persen scale-y-0 ${
          profileActive ? "scale-y-100" : ""
        }`}
      >
        <NavLink
          to="/register"
          className="block p-1 max-md:block border-2 border-solid border-x-0 border-t-0 hover:text-secondary"
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className="block p-1 max-md:block hover:text-secondary"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
