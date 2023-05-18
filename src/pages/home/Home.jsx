import React from "react";
import Slider from "../slider/Slider";

import Gallery from "../gallery/Gallery";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <div>
      <Slider />
      <Gallery />
    <Categories/>
      
    </div>
  );
};

export default Home;
