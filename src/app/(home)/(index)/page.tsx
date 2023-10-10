"use client";

import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowUp,
  FaPaintBrush,
  FaUserCircle,
  FaComments,
} from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { SiAzuredevops } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowSize from "@/utils/hooks/useWindowSize";
import {
  IntroSection,
  AboutSection,
  ServicesSection,
  ProjectSection,
  LatestPostSection,
  ContactSection,
} from "@/containers/home/Index";

export default function Home() {
  useEffect(() => {
    async function animate() {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;
        // sr().reveal(refToComponent.current)
        ScrollReveal({
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal(".home__container--intro, .heading", {
          origin: "top",
        });
        ScrollReveal().reveal(
          ".home__container--image, .service__container,.project_container,.blog__container,.contact__container",
          { origin: "bottom" }
        );
        ScrollReveal().reveal(".home__container--intro h1, .about__image", {
          origin: "left",
        });
        ScrollReveal().reveal(".home__container--intro p, .about__content", {
          origin: "right",
        });
      }
    }

    animate();
  }, []);

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <LatestPostSection />
      <ContactSection />
    </>
  );
}
