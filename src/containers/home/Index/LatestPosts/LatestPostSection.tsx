import React from "react";
import { FaUserCircle, FaComments } from "react-icons/fa";
import "./LatestPost.scss";

const LatestPostSection = () => {
  return (
    <section className="blog" id="blog">
      <h2 className="blog__heading">
        My <span>Blog</span>
      </h2>
      <div className="blog__container container">
        <div className="blog__container--box row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="blog__card">
              <div className="blog__card--image">
                <div className="blog__card--date">
                  <span>23</span>Aug
                </div>
                <img
                  decoding="async"
                  src="/assets/images/blog-1-1.png"
                  className="img-fluid"
                  alt=""
                />
                <a href="which-growth-strategies-you-should-adopt/index.html"></a>
              </div>
              <div className="blog__card--content">
                <div className="blog__card--meta">
                  <span className="meta__list byline_author">
                    <FaUserCircle />
                    <a className="url fn n" href="author/admin/index.html">
                      admin
                    </a>
                  </span>
                  <span className="meta__list blog__comment">
                    <FaComments />
                    <a href="which-growth-strategies-you-should-adopt/index.html#respond">
                      0 Comments
                    </a>
                  </span>
                </div>
                <h3 className="blog__card--title">
                  <a href="which-growth-strategies-you-should-adopt/index.html">
                    Which loan credit strategies you adopt
                  </a>
                </h3>
                <p className="blog__card--text">
                  Duis aute irure dolor lipsum simply free text the local
                  markets.
                </p>
                <a
                  href="which-growth-strategies-you-should-adopt/index.html"
                  className="blog__card--link"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPostSection;
