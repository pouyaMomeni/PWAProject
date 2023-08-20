import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../assets/img/login/17245.jpg'
import img1 from '../assets/img/login/3890.jpg'
import img2 from '../assets/img/login/al.jpg'
import img3 from '../assets/img/login/hf.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';

export default function Myapp() {
  SwiperCore.use([Autoplay])
 
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-[80%] mySwiper h-[100%] text-center"
      >
        <SwiperSlide>
            <img src={img} className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide><img src={img3} className='w-full h-full' /></SwiperSlide>
      
      </Swiper>
    </>
  );
}