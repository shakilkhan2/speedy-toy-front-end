import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer  h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/611jCG8/boytoy.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>

      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/XxS0KYs/kid3.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>
      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/hZGP7ww/front-view-kid-playing-with-ecological-toys.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>
      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/KVwF0Kp/kid-playing-home.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>
      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/mT36xyw/young-boy-playing-indoors-with-eco-toys.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>
      <div className="h-96 w-96 rounded-lg relative cursor-pointer overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
        <img
          data-aos="zoom-in"
          className="object-cover cursor-pointer h-full w-full rounded-lg border-dashed border-4  border-indigo-600"
          src="https://i.ibb.co/611jCG8/boytoy.jpg"
          alt=""
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 opacity-40"></div>
      </div>
    </div>
  );
};

export default Gallery;
