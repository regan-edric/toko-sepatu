import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaInfoCircle,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testing from "../Image/kosong-1.jpg";
import Anjay from "../Image/hero.jpg";
import { Button, Card } from "flowbite-react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Home() {
  const detailBtn = useRef(null);
  const itemDetail = useRef(null);
  const closeModalBtn = useRef(null);
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const products = [
    {
      imgSrc: Testing,
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      disc_price: "Rp. 12.000.000,-",
      price: "Rp. 8.000.000,-",
    },
    {
      imgSrc: Anjay,
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      disc_price: "Rp. 12.000.000,-",
      price: "Rp. 8.000.000,-",
    },
    {
      imgSrc: Anjay,
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      disc_price: "Rp. 12.000.000,-",
      price: "Rp. 8.000.000,-",
    },
    {
      imgSrc: Anjay,
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      disc_price: "Rp. 12.000.000,-",
      price: "Rp. 8.000.000,-",
    },
    {
      imgSrc: Anjay,
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      disc_price: "Rp. 12.000.000,-",
      price: "Rp. 8.000.000,-",
    },
  ];

  const showModal = (product) => {
    setSelectedProductModal(product);
    if (itemDetail.current) {
      itemDetail.current.style.display = "flex";
    }
  };

  const closeModal = (e) => {
    if (itemDetail.current && closeModalBtn.current) {
      itemDetail.current.style.display = "none";
    }
  };

  useEffect(() => {
    const detailBtnElement = detailBtn.current;
    const closeModalBtnElement = closeModalBtn.current;

    if (detailBtnElement) {
      detailBtnElement.addEventListener("click", showModal);
    }

    if (closeModalBtnElement) {
      closeModalBtnElement.addEventListener("click", closeModal);
    }

    return () => {
      if (detailBtnElement) {
        detailBtnElement.removeEventListener("click", showModal);
      }
      if (closeModalBtnElement) {
        closeModalBtnElement.removeEventListener("click", closeModal);
      }
    };
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="px-8 container scroll-snap-y-mandatory overflow-y-auto">
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

        {/* Best Collection 1 */}
        <div className="container flex justify-between items-center px-12 py-4 mt-4 max-md:grid max-md:grid-cols-1 max-md:gap-4">
          <div className="tulisan-kiri">
            <h2 className="leading-tight text-4xl font-medium max-md:text-xl">
              Nike Air Max Full Creamy Black
            </h2>
            <p className="font-thin leading-snug mix-blend-difference py-4 pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              cupiditate pariatur iusto accusamus ea molestias!
            </p>
            <p className="font-extralight text-sm line-through leading-snug mix-blend-difference">
              Rp. 12.000.000,-
            </p>
            <p className=" font-light text-xl leading-snug mix-blend-difference">
              Rp. 8.000.000,-
            </p>
            <NavLink
              className="cta mt-4 inline-block py-4 px-10 text-putihtulisan bg-secondary rounded-lg hover:bg-white hover:text-primary"
              to="/menu"
            >
              Beli Sekarang!
            </NavLink>
          </div>
          <div className="gambar-kanan max-md:order-first">
            <img
              src={Testing}
              className="w-96 rounded-full"
              alt="ini testing"
            />
          </div>
        </div>

        {/* Best Collection 2 */}
        <div className="container gap-6 flex justify-between items-center px-12 py-6 mt-4 max-md:grid max-md:grid-cols-1 max-md:gap-4">
          <div className="gambar-kiri">
            <img
              src={Testing}
              className="w-96 rounded-full"
              alt="ini testing"
            />
          </div>
          <div className="tulisan-kanan sm:text-right">
            <h2 className="leading-tight text-4xl font-medium max-md:text-xl">
              Nike Air Max Full Creamy Black
            </h2>
            <p className="font-thin leading-snug mix-blend-difference py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              cupiditate pariatur iusto accusamus ea molestias!
            </p>
            <p className="font-extralight text-sm line-through leading-snug mix-blend-difference">
              Rp. 12.000.000,-
            </p>
            <p className=" font-light text-xl leading-snug mix-blend-difference">
              Rp. 8.000.000,-
            </p>
            <NavLink
              className="cta mt-4 inline-block py-4 px-10 text-putihtulisan bg-secondary rounded-lg hover:bg-white hover:text-primary"
              to="/menu"
            >
              Beli Sekarang!
            </NavLink>
          </div>
        </div>

        {/* Promo yang sedang berlaku */}
        <div className="promo container">
          <h3 className="text-3xl max-md:text-2xl font-semibold text-center p-8">
            Promo yang Berlaku
          </h3>
          <div className="container">
            <Slider {...settings}>
              {promoItems.map((promo, index) => (
                <div key={index} className="p-2">
                  <div className="group bg-secondary overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out transform hover:shadow-lg">
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

        <Glider
          className="glider-container"
          hasArrows
          slidesToShow={1.5}
          draggable
          hasDots
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: "auto",
              },
            },
          ]}
        >
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <Card
                key={index}
                className=" max-w-sm"
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
              >
                <NavLink to="/">
                  <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </NavLink>
                <div className="flex items-center max-md:text-sm">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                </div>
                <p className="line-throug max-md:text-xs text-primary text-sm">
                  {product.disc_price}
                </p>
                <p className="font-semibold max-md:text-sm text-primary text-xl">
                  {product.price}
                </p>
                <div className="flex items-center justify-end">
                  {/* <p className=" font-semibold text-sm text-gray-900 dark:text-white">
                    {product.price}
                  </p> */}
                  <NavLink
                    ref={detailBtn}
                    onClick={() => showModal(product)}
                    className="text-primary p-2 max-md:text-xl text-3xl hover:text-secondary"
                  >
                    <FaInfoCircle />
                  </NavLink>
                  <NavLink
                    href="#"
                    className="rounded-lg max-md:p-1 bg-primary p-2 text-center text-sm font-medium text-white hover:bg-secondary focus:outline-none"
                  >
                    Add to cart
                  </NavLink>
                </div>
              </Card>
            </div>
          ))}
        </Glider>

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

        <Glider
          className="glider-container"
          hasArrows
          slidesToShow={1.5}
          draggable
          hasDots
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: "auto",
              },
            },
          ]}
        >
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <Card
                key={index}
                className=" max-w-sm"
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
              >
                <NavLink href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </NavLink>
                <div className="flex items-center">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                </div>
                <p className="line-through text-primary text-sm">
                  {product.disc_price}
                </p>
                <p className="font-semibold text-primary text-xl">
                  {product.disc_price}
                </p>
                <div className="flex items-center justify-end">
                  {/* <p className=" font-semibold text-sm text-gray-900 dark:text-white">
                    {product.price}
                  </p> */}
                  <NavLink
                    onClick={() => showModal(product)}
                    ref={detailBtn}
                    className="text-primary p-2 text-3xl hover:text-secondary"
                  >
                    <FaInfoCircle />
                  </NavLink>
                  <NavLink
                    href="#"
                    className="rounded-lg bg-primary p-2 text-center text-sm font-medium text-white hover:bg-secondary focus:outline-none"
                  >
                    Add to cart
                  </NavLink>
                </div>
              </Card>
            </div>
          ))}
        </Glider>

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

        <Glider
          className="glider-container"
          hasArrows
          slidesToShow={1.5}
          draggable
          hasDots
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: "auto",
              },
            },
          ]}
        >
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <Card
                key={index}
                className=" max-w-sm"
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
              >
                <NavLink href="#">
                  <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </NavLink>
                <div className="flex items-center">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                </div>
                <p className="line-through text-primary text-sm">
                  {product.disc_price}
                </p>
                <p className="font-semibold text-primary text-xl">
                  {product.disc_price}
                </p>
                <div className="flex items-center justify-end">
                  {/* <p className=" font-semibold text-sm text-gray-900 dark:text-white">
                    {product.price}
                  </p> */}
                  <NavLink
                    ref={detailBtn}
                    onClick={() => showModal(product)}
                    className="text-primary p-2 text-3xl hover:text-secondary"
                  >
                    <FaInfoCircle />
                  </NavLink>
                  <NavLink
                    href="#"
                    className="rounded-lg bg-primary p-2 text-center text-sm font-medium text-white hover:bg-secondary focus:outline-none"
                  >
                    Add to cart
                  </NavLink>
                </div>
              </Card>
            </div>
          ))}
        </Glider>

        {/* Lowongan Pekerjaan */}
        <div className="relative">
          <div className="container p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Testing}
                  alt="birthday"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center p-4">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                    Ciptakan momen bahagia untuk si kecil
                  </h2>
                  <p className="text-gray-700 text-lg md:text-xl mb-4 md:mb-6">
                    Semua hal seru hanya ada di Dunia Anak McDonald's
                  </p>

                  <NavLink to="/about">
                    <Button className="bg-primary text-center mt-8 ">
                      Selengkapnya
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Detail Product */}
        <div
          className="modal hidden fixed z-full top-0 w-full h-full overflow-auto bg-secondary"
          id="item-detail"
          ref={itemDetail}
        >
          <div className="modal-container relative bg-putihtulisan text-black m-auto p-5 border-solid border-2 border-gray-400 w-5/6">
            <NavLink
              to="/"
              ref={closeModalBtn}
              className="close-icon absolute right-4 text-4xl hover:text-primary"
            >
              <IoMdClose />
            </NavLink>
            {selectedProductModal && (
              <div className="modal-content flex flex-nowrap max-md:flex-wrap">
                <img
                  className="h-80 mr-8 mb-8"
                  src={selectedProductModal.imgSrc}
                  alt="ini modal 1"
                />
                <div className="product-content">
                  <h3 className="text-4xl mb-5">
                    {selectedProductModal.title}
                  </h3>
                  <p className="text-xl leading-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga delectus omnis perferendis, recusandae ipsam ad
                    voluptatum facere quaerat velit sunt eos ut saepe, sed eum?
                  </p>
                  <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className=" text-black" />
                  </div>
                  <div className="product-price text-xl font-bold">
                    {selectedProductModal.price}{" "}
                    <span className=" line-through font-light text-base">
                      {selectedProductModal.disc_price}
                    </span>
                  </div>
                  <NavLink
                    to="/cart"
                    className="flex gap-4 w-48 bg-primary text-putihtulisan mt-4 py-4 px-7"
                  >
                    <FaShoppingCart /> <span>Add to Cart</span>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
