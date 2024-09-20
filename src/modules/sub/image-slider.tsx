import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HeartIcon } from "../../assets/HeartIcon";
import "./style.css";

const ImageSlider: React.FC = () => {
  return (
    <Flex w="calc(100vw - 32px)" height={"200px"} position={"relative"}>
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src="https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F122p.webp&w=1920&q=75"
            alt="Dan Abramov"
            borderRadius={"24px"}
            w={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F143p.webp&w=384&q=75"
            alt="Dan Abramov 2"
            borderRadius={"24px"}
            w={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F31p.webp&w=384&q=75"
            alt="Dan Abramov 3"
            borderRadius={"24px"}
            w={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F2p.webp&w=384&q=75"
            alt="Dan Abramov 4"
            borderRadius={"24px"}
            w={"100%"}
          />
        </SwiperSlide>
      </Swiper>

      <Flex
        position={"absolute"}
        right={2}
        top={2}
        bg={"#FFFFFF50"}
        p={2}
        borderRadius={"full"}
        zIndex={99}
        cursor={"pointer"}
        _hover={{ bg: "#FF506A20" }} // Thay đổi màu nền khi hover
        transition="background-color 0.3s ease" // Thêm transition cho màu nền
      >
        <HeartIcon
          fill={true ? "#FF506A" : "none"}
          style={{ transition: "fill 0.3s ease" }} // Thêm transition cho thuộc tính fill của HeartIcon
        />
      </Flex>
    </Flex>
  );
};

export default ImageSlider;
