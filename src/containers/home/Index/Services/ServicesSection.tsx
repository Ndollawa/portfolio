import React from "react";
import { FaLinkedinIn, FaPaintBrush } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { SiAzuredevops } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__heading">
        Our <span>Services</span>
      </h2>
      <div className="services__background"></div>
      <div className="container">
        <div className="services__container gutter-2 mx-auto row">
          <div className="xs:col-12 sm:col-6 md:col-4 lg:col-3 p-2">
            <div className="services__container--box">
              <BsCodeSlash />
              <h3 className="services__container--box_heading">
                Web Development
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias facere, vitae tempora amet dignissimos similiqu.
              </p>
              <a href="" className="btn cta">
                {" "}
                Read More
              </a>
            </div>
          </div>
          <div className="xs:col-12 sm:col-6 md:col-4 lg:col-3 p-2">
            <div className="services__container--box">
              <FaPaintBrush />
              <h3 className="services__container--box_heading">
                Graphics Design
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias facere, vitae tempora amet dignissimos similiqu.
              </p>
              <a href="" className="btn cta">
                {" "}
                Read More
              </a>
            </div>
          </div>
          <div className="xs:col-12 sm:col-6 md:col-4 lg:col-3 p-2">
            <div className="services__container--box">
              <SiAzuredevops />
              <h3 className="services__container--box_heading">Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias facere, vitae tempora amet dignissimos similiqu.
              </p>
              <a href="" className="btn cta">
                {" "}
                Read More
              </a>
            </div>
          </div>
          <div className="xs:col-12 sm:col-6 md:col-4 lg:col-3 p-2">
            <div className="services__container--box">
              <FaLinkedinIn />
              <h3 className="services__container--box_heading">Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias facere, vitae tempora amet dignissimos similiqu.
              </p>
              <a href="" className="btn cta">
                {" "}
                Read More
              </a>
            </div>
          </div>
          <div className="xs:col-12 sm:col-6 md:col-4 lg:col-3 p-2">
            <div className="services__container--box">
              <FaLinkedinIn />
              <h3 className="services__container--box_heading">Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias facere, vitae tempora amet dignissimos similiqu.
              </p>
              <a href="" className="btn cta">
                {" "}
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
