import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiExplosiveMaterials } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <footer className="container px-4 bg-gray-800 text-gray-300">
        <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              Toko sepatu terpercaya di-Indonesia dengan harga termurah.
            </p>
            <p className="text-sm">Gratis ongkir ke seluruh Indonesia!</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <NavLink href="#">Home</NavLink>
              </li>
              <li>
                <NavLink href="#">About</NavLink>
              </li>
              <li>
                <NavLink href="#">Services</NavLink>
              </li>
              <li>
                <NavLink href="#">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <NavLink href="#">Home</NavLink>
              </li>
              <li>
                <NavLink href="#">About</NavLink>
              </li>
              <li>
                <NavLink href="#">Services</NavLink>
              </li>
              <li>
                <NavLink href="#">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Street Name, City Name</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">555-555-5555</p>
          </div>
        </div>
        <div className="bg-gray-900 py-4 text-center">
          <p className="text-sm">
            &copy; 2024 reganedric. All rights reserved.
          </p>
        </div>
      </footer> */}

      <footer className="px-32 pt-12 max-md:px-6 text-tulisanputih bg-secondary w-full h-96 max-md:h-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 border-solid border-b-2 border-t-0 border-x-0">
          <div className="kiri">
            <h3 className="text-2xl font-medium py-4">About Us</h3>
            <p className="font-thin">
              regan's sneakers adalah toko sepatu terbaik di Indonesia dengan
              harga termurah dan gratis ongkir ke seluruh Indonesia.
            </p>
            <div className="py-4">
              <h3 className="text-2xl font-medium">Social Media</h3>
              <div className="flex gap-4 text-lg py-2">
                <FaInstagram className="hover:text-primary" />
                <FaWhatsapp className="hover:text-primary" />
                <FaTiktok className="hover:text-primary" />
              </div>
            </div>
          </div>
          <div className="tengah-kiri md:ml-8 py-4">
            <h3 className="text-2xl font-medium">Bantuan</h3>
            <div className="grid gap-2 mt-2">
              <NavLink className="hover:text-primary">Home</NavLink>
              <NavLink className="hover:text-primary">About</NavLink>
              <NavLink className="hover:text-primary">Collection</NavLink>
              <NavLink className="hover:text-primary">Support</NavLink>
            </div>
          </div>
          <div className="tengah-kanan right-5persen">
            <h3 className="text-2xl font-medium py-4">Subsribe Kami</h3>
            <p className="font-extralight">
              Dapatkan berita dan promo terkini dari regan's sneakers!
            </p>
            <div className="flex items-center h-12 py-2 gap-2">
              <label className="text-xl" htmlFor="email-box">
                <MdEmail />
              </label>
              <input
                type="email"
                className="px-4 text-primary w-full h-full"
                id="email-box"
                placeholder="Your email..."
              />
            </div>
          </div>
        </div>
        <div className="copyright text-center p-4 mt-4">
          <p>
            Website ini dibuat oleh{" "}
            <span className="font-bold text-primary">reganedric</span> || &copy;
            2024
          </p>
        </div>
      </footer>
    </>
  );
}
