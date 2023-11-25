import React from "react";

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading text-white">
        Contact <span>Me!</span>
      </h2>
      <div className="contact__container container">
        <div className="row gutter-5">
          <div className="md:col-4 sm:col-12">
            <div className="contact__content">
              <p className="contact__content--text text-white">
                There are many variations of passages of lorem ipsum available
                the majority have alteration in some form by injected humour.
              </p>
              <div className="contact__content--social">
                {/* {twitterHandle && <a href={twitterHandle}><i className="fab fa-twitter"></i></a>}
                            {facebookHandle && <a href={facebookHandle}><i className="fab fa-facebook"></i></a>}
                            {whatsapp && <a href={whatsapp}><i className="fab fa-whatsapp"></i></a>} 
                            {instagram && <a href={instagram}><i className="fab fa-instagram"></i></a>}  */}
              </div>
            </div>
          </div>
          <div className="md:col-8 sm:col-12 xs:col-12">
            <form className=" contact__form">
              <div className="contact__form--box row gutter-2">
                <div className="md:col-6 sm:col-12 xs:col-12 p-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="md:col-6 sm:col-12 xs:col-12 p-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
                <div className="md:col-6 sm:col-12 xs:col-12 p-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone number"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="md:col-6 sm:col-12 xs:col-12 p-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="md:col-12 xs:col-12 p-2">
                  <div className="form-group">
                    <textarea placeholder="Message" name="message"></textarea>
                  </div>
                </div>
                <div className="md:col-12 d-grid">
                  <button type="submit" className="btn cta place-self-end">
                    Send a Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
