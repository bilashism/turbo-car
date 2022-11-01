import React from "react";

const CarouselItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="after:rounded-lg after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-r after:from-indigo-500 relative">
        <img src={image} className="rounded-lg w-full h-full object-cover " />
      </div>
      <div className="absolute flex flex-col max-w-lg gap-6 justify-end transform -translate-y-1/2 left-5 top-0 text-white h-full bottom-0">
        <h2 className="text-4xl">Lorem ipsum dolor sit amet.</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          dignissimos cupiditate perferendis eos deserunt minima? Quibusdam
          sequi numquam at dolorem, eum optio, quas voluptas adipisci tempora
          corrupti quidem aspernatur distinctio!
        </p>
        <div className="flex gap-6">
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
