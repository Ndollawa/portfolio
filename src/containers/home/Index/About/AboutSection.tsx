import Image from "next/image";
import "./About.scss";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__heading">
        About <span>Me</span>
      </h2>
      <div className="container row">
        <div className="about__images center col-sm-12 col-md-6 p-2">
          <div className="container">
            <div className="about__image">
              {/* <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/> */}
              <Image
                src="/assets/images/images(23).jpeg"
                width={300}
                height={300}
                alt=""
              />
              <div className="about__image--caption">
                <div className="about__image--caption_shape-1"></div>

                <div className="about__image--caption_shape-2"></div>

                <div className="about__image--caption_shape-3"></div>

                <h3 className="about__image--title">
                  6<i>+</i>
                </h3>
                <p className="about__image--text m-1">Years Experience</p>
              </div>
              <div className="about__image--floated">Shhhhh</div>
            </div>
          </div>
        </div>
        <div className="about__content col-sm-12 col-md-6 px-2">
          {/* <h2 className='about__content--heading'></h2>
                          <h3 className='about__content--subheading'></h3> */}
          <p className="about__content--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            facere, vitae tempora amet dignissimos similiqu. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Reiciendis excepturi, sint
            soluta nam, culpa similique distinctio labore ad accusamus, ipsam
            maiores laudantium expedita eveniet quidem doloremque consequatur
            obcaecati quae fuga? Perspiciatis veritatis nobis, sequi non ipsum
            eius sint nesciunt, aperiam quibusdam atque et cupiditate
            exercitationem unde quas facilis eos optio?
          </p>
          <div className="about__content--author mb-3">
            <div className="about__content--author__image">
              {/* <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/> */}
              <img src="/assets/images/images(25).png" alt="" />
            </div>
            <div className="about__content--author__name">Ndubuisi Ollawa</div>
          </div>
          <a href="" className="btn cta">
            {" "}
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
