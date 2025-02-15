"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full  flex justify-center items-center lg:h-[400px] h-[300px] ">
      <Slider className="w-full" {...settings}>
        {/* <div className="w-full lg:h-[400px] h-[300px] flex items-center justify-center">
          <div
            className="mx-8 w-full bg-red-200 lg:px-20 px-5 flex flex-col justify-center items-start gap-10 bg-cover bg-center bg-no-repeat  overflow-hidden  rounded-lg h-full"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          >
            <h1 data-aos="zoom-in" data-aos-delay="50">
              Hello test Text
            </h1>
          </div>
        </div>
        <div className="w-full   lg:h-[400px] h-[300px] flex items-center justify-center">
          <div
            className="mx-8 lg:px-20 px-5 h-full flex flex-col justify-center items-start gap-10 bg-cover bg-center bg-no-repeat  overflow-hidden  rounded-lg "
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          >
            <h1 data-aos="zoom-in" data-aos-delay="50">
              Hello test Text
            </h1>
          </div>
        </div> */}
        <div className="w-full  h-[300px] lg:h-[400px]">
        <div
            className="mx-8 lg:px-20 px-5 h-full  flex flex-col justify-center items-center gap-10 bg-cover bg-center bg-no-repeat  overflow-hidden  rounded-lg "
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          >
            <h1 data-aos="zoom-in" data-aos-delay="50">
              Hello test Text
            </h1>
          </div>
        </div>
        <div className="w-full  h-[300px] lg:h-[400px]">
        <div
            className="mx-8 lg:px-20 px-5 h-full flex flex-col justify-center items-center gap-10 bg-cover bg-center bg-no-repeat  overflow-hidden  rounded-lg "
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          >
            <h1 data-aos="zoom-in" data-aos-delay="50">
              Hello test Text
            </h1>
          </div>
        </div>
        <div className="w-full  h-[300px] lg:h-[400px]">
        <div
            className="mx-8 lg:px-20 px-5 h-full flex flex-col justify-center items-center gap-10 bg-cover bg-center bg-no-repeat  overflow-hidden  rounded-lg "
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3661240/pexels-photo-3661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          >
            <h1 data-aos="zoom-in" data-aos-delay="50">
              Hello test Text
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero2;
