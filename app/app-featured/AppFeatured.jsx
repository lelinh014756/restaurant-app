import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import isEmptyArray from "../../utils/tools/isEmptyArray";
import IconSpoonRow from "../../public/icons/svg/IconSpoonRow";
import ControlButton from "../app-controls/app-control-button/ControlButton";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/sliderImage/sliderImage1.png",
  "/images/sliderImage/sliderImage2.png",
  "/images/fakeImagesFood/barbecue-g0ce6d58cb_1920.jpg",
  "/images/fakeImagesFood/cake-g1682b16b3_1920.jpg",
  "/images/fakeImagesFood/charcuterie-g79ffdac8f_1920.jpg",
  "/images/fakeImagesFood/hamburger-gdc65e2202_1920.jpg",
];
const AppFeatured = () => {
  const [count, setCount] = useState(0);
  // Handle change slider
  useEffect(() => {
    const timeOutSlider = setTimeout(() => {
      if (count === images.length - 1) {
        return setCount(0);
      }
      setCount(count + 1);
    }, 4000);
    return () => {
      clearTimeout(timeOutSlider);
    };
  }, [count]);
  return (
    <div className="app-featured">
      {images.length !== 0
        ? images.map((image, index) => (
            <div
              key={index}
              className={"app-slider" + (count === index ? " active" : "")}
            >
              <div className="app-slider-content">
                <h5>Chase the new Flavour</h5>
                <IconSpoonRow />
                <h1>The Key To Fine Dining</h1>
                <p>
                  Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                  volutpat morbi facilisis quam scelerisque sapien. Et,
                  penatibus aliquam amet tellus
                </p>
                <ControlButton className={"btn-primary"}>
                  Explore Menu
                </ControlButton>
              </div>
              <div className="app-slider-image">
                <div className="app-slider-image-wrapper">
                  <Image src={image} layout="fill" objectFit="cover" alt="" />
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default AppFeatured;

{
  /* <Swiper
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
      </Swiper> */
}
