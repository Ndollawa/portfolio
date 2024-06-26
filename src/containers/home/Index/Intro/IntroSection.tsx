"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { myPic, image } from "@/utils/images";
import { poppins } from "@/utils/fonts";

const IntroSection = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container row">
        <div className="home__container--background"></div>
        <div className="sm:col-12 md:col-6 md:pr-5 sm:px-0">
          <div className="home__container--intro">
            <span className="home__container--intro__topline">Hello</span>
            <h1 className={`${poppins.className} mb-2`}>
              I&lsquo;m a{" "}<br/>
              <TypeAnimation
                className="home__container--intro__multi-text"
                sequence={[
                  "Software Engineer",
                  "DevOps Engineer",
                  "Technical Writer",
                  "Graphics Designer",
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={0}
                style={{ fontSize: "inherit", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="home__container--intro__bio">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              recusandae ullam doloremque voluptates fugit culpa facilis maxime
              omnis, dolores fugiat magnam expedita sed, qui saepe excepturi
              dolor error quos voluptatem voluptatum.
            </p>
            <div className="home__container--intro__btn">
              <button type="button" className="btn r-8 px-10 ">
                My Resume
              </button>
              <button type="button" className="btn r-8 px-10">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-12 md:col-6 center">
          <div className="home__container--image sm:col-12 md:col-8">
            <Image src={image} width={400} height={400} alt="" id="splash" />
            <Image src={myPic} width={400} height={400} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
