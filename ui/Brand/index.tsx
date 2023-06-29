import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import { , Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Card, Container, Image } from "@mantine/core";
import { brandsData } from "@/data/data";

const Brand = () => {
  //  responsive breakpoints for brand section in home page
  const breakpoints = {
    // when window width is >= 480px
    480: {
      width: 480,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      width: 1024,
      slidesPerView: 3,
    },
    // when window width is >= 1184px
    1184: {
      width: 1184,
      slidesPerView: 4,
    },
    // when window width is >= 1440px
    1440: {
      width: 1440,
      slidesPerView: 5,
    },
  };

  return (
    <div>
      <Card py={70} my={20}>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={breakpoints}
        >
          {/* slides  */}
          {brandsData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.brandLogo}
                alt="Sony brand logo"
                maw={240}
                mx="auto"
                height={53}
                width={120}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </div>
  );
};

export default Brand;
