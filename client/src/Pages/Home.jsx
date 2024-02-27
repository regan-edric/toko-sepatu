import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testing from "../Image/kosong-1.jpg";

export default function Home() {
  const settings = {
    dots: true,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  const promoItems = [
    {
      id: 924,
      name: "Prosperity Burger X Hello Kitty",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/FLuvB8XISlsOsg7N1Gry.webp",
      description: "Nike Air Jordan 1 High",
      expirationDate: "11 February 2024",
    },
    {
      id: 926,
      name: "Black Cookies",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/December2023/FZcQET1thZMdr9nHbnNa.jpg",
      description: "Nike Air Jordan 1 Low",
      expirationDate: "29 February 2024",
    },
    {
      id: 933,
      name: "Super Deal DISKON 20%",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/dgXaSzJA7DC0t8f7q7ry.webp",
      description: "Adidas Samba",
      expirationDate: "22 January 2024",
    },
    {
      id: 933,
      name: "Super Deal DISKON 20%",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/dgXaSzJA7DC0t8f7q7ry.webp",
      description: "Adidas Samba",
      expirationDate: "22 January 2024",
    },
    {
      id: 933,
      name: "Super Deal DISKON 20%",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/dgXaSzJA7DC0t8f7q7ry.webp",
      description: "Adidas Samba",
      expirationDate: "22 January 2024",
    },
    {
      id: 933,
      name: "Super Deal DISKON 20%",
      imageUrl:
        "https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/dgXaSzJA7DC0t8f7q7ry.webp",
      description: "Adidas Samba",
      expirationDate: "22 January 2024",
    },
    // Add more promo items as needed
  ];
  return (
    <>
      {/* Hero */}
      <div className="px-8 container">
        <section
          id="home"
          className="hero min-h-screen flex items-center bg-no-repeat bg-cover bg-center relative after:block after:absolute after:w-full after:h-1/4 after:bottom-0"
        >
          <main className="content">
            <h1 className="text-putihtulisan leading-tight">
              Your Best Sneakers Store!
            </h1>
            <p className="text-2xl mt-4 leading-snug font-thin mix-blend-difference">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae, dolores?
            </p>
            <NavLink
              className="cta mt-4 inline-block py-4 px-10 text-putihtulisan bg-primary rounded-lg hover:bg-secondary"
              to="/menu"
            >
              Beli Sekarang!
            </NavLink>
          </main>
        </section>

        {/* <section>
          <div className="container grid grid-cols-2 items-center px-4 gap-4">
            <div className="tulisan-kiri">
              <h1 className="text-putihtulisan text-xl leading-tight">
                Your Best Sneakers Store!
              </h1>
              <p className="text-lg mt-4 leading-snug font-thin mix-blend-difference">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, dolores?
              </p>
            </div>
            <div className="foto-kanan mx-12">
              <img
                className="rounded-full w-1/2 object-cover"
                src={Testing}
                alt=""
              />
            </div>
          </div>
        </section> */}

        <div className="container flex justify-between items-center px-12 py-4 mt-4 max-md:grid max-md:grid-cols-1 max-md:gap-4">
          <div className="tulisan-kiri">
            <h2 className="leading-tight text-6xl font-medium max-md:text-xl">
              Nike Air Max Full Creamy Black
            </h2>
            <p className="font-thin leading-snug mix-blend-difference py-4">
              The best shoes is all you can get with this
            </p>
            <p className="font-extralight leading-snug mix-blend-difference py-4">
              Rp. 12.000.000,-
            </p>
            <NavLink
              className="cta mt-4 inline-block py-4 px-10 text-putihtulisan bg-secondary rounded-lg hover:bg-white hover:text-primary"
              to="/menu"
            >
              Beli Sekarang!
            </NavLink>
          </div>
          <div className="gambar-kanan">
            <img
              src={Testing}
              className="w-96 rounded-full"
              alt="ini testing"
            />
          </div>
        </div>

        <div className="container pt-20 md:pt-28">
          <div className="h-56 md:h-64 xl:h-96 p-2">
            <Carousel slide={false}>
              <img
                src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/FLuvB8XISlsOsg7N1Gry.webp"
                alt="..."
                className="w-full h-full object-cover"
              />
              <img
                src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/December2023/FZcQET1thZMdr9nHbnNa.jpg"
                alt="..."
                className="w-full h-full object-cover"
              />
              <img
                src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/January2024/dgXaSzJA7DC0t8f7q7ry.webp"
                alt="..."
                className="w-full h-full object-cover"
              />
            </Carousel>
          </div>
        </div>

        {/* Rekomendasi Sepatu */}
        <div className="container flex justify-between py-4 px-2 md:py-8 md:px-2 md:text-xl font-medium">
          <div className="bagian-kiri">
            <p className="">Koleksi Sepatu Terbaik</p>
          </div>
          <div className="bagian-kanan">
            <NavLink to="#" className="flex gap-2 items-center">
              <p className=" hover:border-solid hover:border-2 hover:border-white hover:border-x-0 hover:border-t-0">
                All Collection
              </p>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>

        {/* Rekomendasi Sepatu Cowok */}
        <div className="container flex justify-between py-4 px-2 md:py-8 md:px-2 md:text-xl font-medium">
          <div className="bagian-kiri">
            <p className="">Koleksi Sepatu Pria</p>
          </div>
          <div className="bagian-kanan">
            <NavLink to="#" className="flex gap-2 items-center">
              <p className=" hover:border-solid hover:border-2 hover:border-white hover:border-x-0 hover:border-t-0">
                All Collection
              </p>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>

        {/* Rekomendasi Sepatu Cewek */}
        <div className="container flex justify-between py-4 px-2 md:py-8 md:px-2 md:text-xl font-medium">
          <div className="bagian-kiri">
            <p className="">Koleksi Sepatu Wanita</p>
          </div>
          <div className="bagian-kanan">
            <NavLink to="#" className="flex gap-2 items-center">
              <p className=" hover:border-solid hover:border-2 hover:border-white hover:border-x-0 hover:border-t-0">
                All Collection
              </p>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <Slider {...settings}>
          {promoItems.map((promo, index) => (
            <div key={index} className="p-2">
              <div className="group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out transform hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-96 object-cover"
                    src={promo.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold">{promo.description}</h1>
                  <div className="pt-2">
                    <h3 className="text-sm">{promo.expirationDate}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
}
