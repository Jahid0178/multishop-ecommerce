// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { brandsData } from "@/data/data";
import { Card, Image } from "@mantine/core";

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
          modules={[Autoplay, Pagination, ]}
          className="mySwiper"
          breakpoints={breakpoints}
          loop={true}
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
