import React from "react";
import Slider from "../slider/Slider";

import Gallery from "../gallery/Gallery";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <Gallery />
      <h1 className="text-center text-4xl font-bold text-sky-600 mt-8 mb-4 ">
        Shop by Categories
      </h1>
      <Categories />
    </div>
  );
};

export default Home;
