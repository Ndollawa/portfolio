"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("nav .nav__menu li a");

    const handleSectionScroll = () => {
      const top = window.scrollY;

      sections?.forEach((sect) => {
        const offset = sect?.offsetTop - 150;
        const sectHeight = sect?.offsetHeight;
        const id = sect?.getAttribute("id");

        if (top >= offset && top < offset + sectHeight) {
          menuLinks?.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector("header .nav__menu li a[href*=" + id + "]")
              ?.classList.add("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);
  return (
    <header className={`app__header ${isSticky ? "sticky" : null} `}>
      <nav className="nav container">
        <div className="nav__logo">
          Portfolio <strong>.</strong>
        </div>
        <div className="nav__mobile">
          <GiHamburgerMenu
            size={"2rem"}
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>
        <div className={`nav__menu ${toggleMenu ? "show" : null}`}>
          <ul className="nav__menu--items">
            {["home", "about", "services", "project", "contact", "blog"].map(
              (link, i) => (
                <li key={link} onClick={() => setToggleMenu(false)}>
                  <a
                    href={`#${link}`}
                    className={`${i == 0 ? "active" : null}`}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="nav__social--icons">
            <a href="#!">
              <FaGithub />
            </a>
            <a href="#!">
              <FaLinkedinIn />
            </a>
            <a href="#!">
              <FaTwitter />
            </a>
            <a href="#!">
              <FaFacebook className="" />{" "}
            </a>
            <a href="#!">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
