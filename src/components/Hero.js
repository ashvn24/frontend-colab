import React from "react";

import Image from "../assets/img/hero-img.png";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => { 
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="flex-1">
          <div
            className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-between text-sm lg:text-base">
              <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                75%
              </div>
              <div>for black friday weekend</div>
            </div>
          </div>
          <h1
            className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Fastest and secure platform to collab
          </h1>
          <p
            className=" max-w-[440px] leading-relaxed mb-8 "
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sequi magnam molestias recusandae aut perspiciatis beatae numquam
            temporibus odio sit corrupti atque ad earum velit veniam id ipsa,
            quidem ex.
          </p>
          <button
            className="btn gap-x-2 pl-6 text-sm lg:h-16 lg:text-base"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Signup for free{" "}
            <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
          </button>
        </div>

        <div className="flex-1" data-aos='fade-up' data-aos-delay='600'>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
