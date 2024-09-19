import { Flex } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";

const ImageSlider: React.FC = () => {
  return (
    <Flex w="200px" position={"relative"}>
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/400" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/400" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/400" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/400" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default ImageSlider;
