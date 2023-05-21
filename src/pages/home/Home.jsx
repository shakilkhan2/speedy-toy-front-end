import React from "react";
import Slider from "../slider/Slider";

import Gallery from "../gallery/Gallery";
import Categories from "../categories/Categories";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <h1
        data-aos="flip-right"
        className="text-center text-4xl font-bold text-sky-600 mt-8 mb-4 "
      >
        We are happy to bring Smile..
      </h1>

      <Gallery />
      <h1
        data-aos="flip-left"
        className="text-center text-4xl font-bold text-sky-600 mt-8 mb-4 "
      >
        Shop by Categories
      </h1>
      <Categories />
      <div className="mt-12 cursor-pointer">
        <img
          data-aos="zoom-in"
          className="w-[99%] mx-auto"
          src="https://cdn.shopify.com/s/files/1/2598/1878/files/GameSubBox_BannerSkinny_ec8fb89f-afee-45ce-b26d-56f4f0512ac6_1200x.png?v=1669947770"
          alt=""
        />
      </div>
      <div>
        <form className="bg-sky-500 rounded-lg w-[70%] mx-auto py-12 mt-12 mb-20">
          <div className="mb-8">
            <h1 className=" text-3xl md:text-4xl font-bold text-center text-white pb-8">
              Subscribe To Get Information <br /> & Discount
            </h1>
            <div className="text-center">
              <input
                className="mr-4 rounded-lg pl-2 py-2 sm: mb-3 md:py-3 md:px-32"
                type="text"
                placeholder="Email address"
                required
              />
              <button className="hover:bg-sky-600 border rounded-lg border-white text-white md:text-lg py-2 px-2  md:px-8">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
