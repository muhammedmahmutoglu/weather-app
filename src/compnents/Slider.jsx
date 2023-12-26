import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import rain from "/assets/icons/rain.png";
// import rainSun from "../dist/icons/rain-sun.png";
// import segmentedCloud from "../dist/icons/segmented-cloud.png";
// import sun from "../dist/icons/sun.png";
// import lightning from "../dist/icons/lightning.png";

import "swiper/css";
import "./slider.css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function Slider({ props, data}) {
  const ref = useRef();
  // let data = status;


  const changeSlide = (element) => {
    ref.current.swiper.slideTo(element.currentTarget.swiperSlideIndex);
  };

  const activeIndex = () => {
    const activeValue = ref.current.swiper.activeIndex;
    setSliderValue(activeValue);
  };

  const [sliderValue, setSliderValue] = useState();

  const sendValueToParent = () => {
    props(sliderValue);
  };

  console.log(data,"status");

  return (
    <>
      <Swiper
        slidesPerView={5}
        slidesPerGroup={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        cssMode={false}
        modules={[Navigation]}
        navigation={true}
        centeredSlides={true}
        initialSlide={2}
        className="mySwiper"
        ref={ref}
        onSlideChange={activeIndex}
      >
        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data && data.list[5].weather[0].main}</h5>
          <img src={`/assets/img/${data && data.list[5].weather[0].main}.png`} alt="sun" />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data && data.list[17].weather[0].main}</h5>
          <img src={`/assets/img/${data && data.list[17].weather[0].main}.png`} alt="sun" />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data && data.list[20].weather[0].main}</h5>
          <img src={`/assets/img/${data && data.list[20].weather[0].main}.png`} alt="sun" />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data && data.list[30].weather[0].main}</h5>
          <img src={`/assets/img/${data && data.list[30].weather[0].main}.png`} alt="sun" />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data && data.list[35].weather[0].main}</h5>
          <img src={`/assets/img/${data && data.list[35].weather[0].main}.png`} alt="sun" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}