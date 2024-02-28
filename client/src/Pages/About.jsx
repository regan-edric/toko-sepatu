import { Carousel } from "flowbite-react";
import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}
