import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./slider.css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function Slider({ props, data }) {
  const ref = useRef();

  const changeSlide = (element) => {
    ref.current.swiper.slideTo(element.currentTarget.swiperSlideIndex);
  };


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
      >
        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data.list[5].weather[0].main}</h5>
          <img
            src={`/assets/img/${data.list[5].weather[0].main}.png`}
            alt="sun"
          />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data.list[17].weather[0].main}</h5>
          <img
            src={`/assets/img/${data.list[17].weather[0].main}.png`}
            alt="sun"
          />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data.list[20].weather[0].main}</h5>
          <img
            src={`/assets/img/${data.list[20].weather[0].main}.png`}
            alt="sun"
          />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data.list[30].weather[0].main}</h5>
          <img
            src={`/assets/img/${data.list[30].weather[0].main}.png`}
            alt="sun"
          />
        </SwiperSlide>

        <SwiperSlide
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          <h5>{data.list[35].weather[0].main}</h5>
          <img
            src={`/assets/img/${data.list[35].weather[0].main}.png`}
            alt="sun"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
