import React from "react";
import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";
import bannerImg5 from "../../../assets/images/banner/5.jpg";
import bannerImg6 from "../../../assets/images/banner/6.jpg";
import CarouselItem from "./CarouselItem";

const carouselData = [
  {
    image: bannerImg1,
    prev: 6,
    id: 1,
    next: 2
  },
  {
    image: bannerImg2,
    prev: 1,
    id: 2,
    next: 3
  },
  {
    image: bannerImg3,
    prev: 2,
    id: 3,
    next: 4
  },
  {
    image: bannerImg4,
    prev: 3,
    id: 4,
    next: 5
  },
  {
    image: bannerImg5,
    prev: 4,
    id: 5,
    next: 6
  },
  {
    image: bannerImg6,
    prev: 5,
    id: 6,
    next: 1
  }
];
const Carousel = () => {
  return (
    <div className="carousel w-full">
      {carouselData.map(slide => (
        <CarouselItem key={slide.id} slide={slide} />
      ))}
      {/* <CarouselItem image={bannerImg1} />
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImg2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImg3} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerImg4} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={bannerImg5} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={bannerImg6} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
