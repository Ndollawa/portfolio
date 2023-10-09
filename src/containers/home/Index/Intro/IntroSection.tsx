"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "./Intro.scss";

const IntroSection = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container row">
        <div className="home__container--background"></div>
        <div className="col-sm-12 col-md-6">
          <div className="home__container--intro">
            <span className="home__container--intro__topline">Hello</span>
            <h1 className="mb-2">
              I&lsquo;m a{" "}
              <span className="home__container--intro__multi-text">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    "DevOps Engineer",
                    "Technical Writer",
                    "Graphics Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1.4rem", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="home__container--intro__bio">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              recusandae ullam doloremque voluptates fugit culpa facilis maxime
              omnis, dolores fugiat magnam expedita sed, qui saepe excepturi
              dolor error quos voluptatem voluptatum. Minima rerum error
              quibusdam? Qui omnis possimus sequi quod.
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
        <div className="col-sm-12 col-md-6">
          <div className="home__container--image">
            <Image
              src="/assets/images/images(20).png"
              width={1200}
              height={1200}
              alt=""
              id="splash"
            />
            <Image
              src="/assets/images/ei_1686252170869-removebg.png"
              width={1200}
              height={1200}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
