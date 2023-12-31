// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Card, Image, Text, Title, createStyles } from "@mantine/core";
import { Navigation } from "swiper";
import { brandsData, categories } from "@/data/data";
import Link from "next/link";

// custom style
const useStyles = createStyles((theme) => ({
  relative: {
    paddingLeft: "100px",
  },
  categoryText: {
    textDecoration: "none",
    color: "black",
  },
}));

const ProductCategories = () => {
  const { classes } = useStyles();
  //  responsive breakpoints for brand section in home page
  const breakpoints = {
    // when window width is >= 480px
    480: {
      width: 480,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 4,
    },
    // // when window width is >= 1024px
    // 1024: {
    //     width: 1024,
    //     slidesPerView: 3,
    // },
    // // when window width is >= 1184px
    // 1184: {
    //     width: 1184,
    //     slidesPerView: 4,
    // },
    // // when window width is >= 1440px
    // 1440: {
    //     width: 1440,
    //     slidesPerView: 5,
    // },
  };

  return (
    <>
      <Card mb={10} shadow="xl">
        <Title order={3} mb={15}>
          Categories
        </Title>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={breakpoints}
          className={` ${classes.relative}`}
        >
          {/* slides  */}
          {categories.map((category) => {
            if (category.category === "All") {
              return;
            }
            return (
              // <Link href="/">
              <SwiperSlide key={category.id}>
                <Link href={"/"} className={classes.categoryText}>
                  <Image
                    src={category.img}
                    alt={category.category}
                    maw={240}
                    mx="auto"
                    height={40}
                    width={40}
                  />
                  <Text>{category.category}</Text>
                </Link>
              </SwiperSlide>
              // {/* </Link> */ }
            );
          })}
        </Swiper>
      </Card>
    </>
  );
};

export default ProductCategories;
