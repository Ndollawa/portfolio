import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaComments,
} from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section className="project" id="project">
      <h2 className="project__heading">
        Latest <span>Project</span>
      </h2>

      <div className="project__container container gutter-2 row">
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:col-12 sm:col-2 md:col-6 lg:col-4 p-2">
          <div className="project__container--box">
            <img src="assets/images/blog-1-1.png" alt="" />
            <div className="project__container--box_layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                neque exercitationem nostrum at iste eum perspiciatis nam nemo,
                error fugit!
              </p>
              <a href="#!" className="btn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
