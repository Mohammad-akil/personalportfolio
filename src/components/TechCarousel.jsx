import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { techList } from "../constants/TechList";

const TechCarousel = () => {
  const items1 = techList
    .slice(0, techList.length / 2)
    .map((items, i) => (
      <img
        key={i}
        className="cursor-pointer mx-auto w-24 md:w-28 m-1"
        src={items}
        alt={items}
      />
    ));
  const items2 = techList
    .slice(techList.length / 2, techList.length)
    .map((items, i) => (
      <img
        key={i}
        className="cursor-pointer mx-auto  m-1 "
        src={items}
        alt={items}
      />
    ));
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1440: {
      items: 7,
    },
  };

  return (
    <div className="my-10">
      <div className="mt-10">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={1000}
          responsive={responsive}
          items={items1}
        />
      </div>
      <div className="mt-10">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayDirection="rtl"
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={1000}
          responsive={responsive}
          items={items2}
        />
      </div>
    </div>
  );
};

export default TechCarousel;
