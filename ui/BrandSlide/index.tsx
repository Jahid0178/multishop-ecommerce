import React from "react";
import { Image } from "@mantine/core"
import { SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';

const BrandSlid = () => {
    return (
        // <>
            <SwiperSlide>
                <Image
                    src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
                    alt="Sony brand logo"
                    maw={240}
                    mx="auto"
                    height={67.500}
                    width={120}
                />
            </SwiperSlide>
        // </>
    )
}

export default BrandSlid;