import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import isEmptyArray from "../../utils/tools/isEmptyArray";
import "swiper/css";
import "swiper/css/navigation";

const AppFeatured = () => {
  const images = [
    "/images/fakeImagesFeuted/calum-lewis-rPkgYDh2bmo-unsplash.jpg",
    "/images/fakeImagesFeuted/gaby-yerden-aNkBoOxO9gI-unsplash.jpg",
    "/images/fakeImagesFeuted/katrine-lucas-jcJAlUd9-9c-unsplash.jpg",
    "/images/fakeImagesFeuted/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg",
    "/images/fakeImagesFeuted/shourav-sheikh-xLfqx4Psf94-unsplash.jpg",
  ];
  return (
    <div className="app-featured">
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {isEmptyArray(images) &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="app-featured-image">
                <Image key={index} src={image}  alt="" layout="fill" priority objectFit="cover" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default AppFeatured;
