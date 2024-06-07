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
              Services and facilities that you avail from BJS would be at par or better than the ones offered by dedicated services. Our services are designed to give your customers an ideal experience and no chance of complaints.
              </p>
              <p className="mb-0 mt-4">
              We prioritize quality and efficiency, ensuring your business runs smoothly and your customers are always satisfied. Our tailored solutions are crafted to meet your specific needs, setting you apart from the competition
              </p>
            </div>

            <div className="col-md-12 col-lg-6 order-lg-1">
              <div className="splitimg-part">
                <img src={process.env.PUBLIC_URL + "/images/pricingmain.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tribackground">
        <h2>Answering Packages</h2>

        <div className="packages-pricing">
          <p>
          Experience the benefits of our innovative approaches and dedicated support, all aimed at enhancing your business performance and customer satisfaction.
          </p>
          <Pcakages />
        </div>
      </div>
      <div className="container-med">
        <div className="pricing-splitsec leftimgtype">
          <div className="row">
            <div className="col-lg-6">
              <div className="splitimg-part">
                <img src={process.env.PUBLIC_URL + "/images/getteam.jpg"} />
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
                <Link className="btn btnyellow" to={"/contact-us"}>
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
