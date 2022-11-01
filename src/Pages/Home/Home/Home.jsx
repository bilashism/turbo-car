import React from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
    </div>
  );
};

export default Home;
