import React from "react";
import "./pricing.scss";
import Banner from "../../components/banner/banner";
import Pcakages from "../../components/pcakages/pcakages";
import TestimonialSlider from "../../components/testimonial-slider/testimonial-slider";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Banner title="Our pricing" innerpage />
      <div className="container-med">
        <div className="pricing-splitsec">
          <div className="row align-items-center ">
            <div className="col-md-12 col-lg-6">
              <span className="">Building Consultancy</span>
              <h3 className="secheading">
                Make classic businesses effective and profitable
              </h3>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi.
              </p>
              <p className="mb-0 mt-4">
                Dest laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </div>

            <div className="col-md-12 col-lg-6 order-lg-1">
              <div className="splitimg-part">
                <img src={process.env.PUBLIC_URL + "/images/about-img.webp"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tribackground">
        <h2>Answering Packages</h2>

        <div className="packages-pricing">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint.
          </p>
          <Pcakages />
        </div>
      </div>
      <div className="container-med">
        <div className="pricing-splitsec leftimgtype">
          <div className="row">
            <div className="col-lg-6">
              <div className="splitimg-part">
                <img src={process.env.PUBLIC_URL + "/images/about-img2.webp"} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-desc w-100">
                <span className="d-block text-color1 text-uppercase">
                  Get Your Team
                </span>
                <h2 className="secheading">How We Work?</h2>
                <p>
                  BJS has decades of experience in serving clients across
                  various industries. Our all-round solutions have been
                  instrumental for clients across all sectors and scales. We
                  deliver unmatched quality thanks to our large investments in
                  cutting-edge technology.
                </p>
                <p>
                  Our training centres create highly skilled professionals that
                  are capable of handling all your business needs and exceeding
                  all expectations. Industry experts and experienced
                  professionals create a curriculum to train and prepare our
                  workforce to serve you in the best way possible.
                </p>
                <Link className="thm-btn" to={"/contact-us"}>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-sec">
        <h2 className="secheading">Hear from our clients</h2>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Pricing;
