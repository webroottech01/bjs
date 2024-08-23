import React from "react";
import "./e-commerce.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";
import { Helmet } from "react-helmet";

const Ecommerce = () => {
  const accountfaqs = [
    {
      faq_heading: "What are E-Commerce Support Services?",
      description:
        "E-Commerce Support services handle all your customer needs and ensure they remain satisfied. They use mediums like calls, email, tickets, and live chat to efficiently communicate with the customers.",
    },
    {
      faq_heading: "How Much Do E-Commerce Support Services in the UK Cost?",
      description:
        "Some services can be really cheap but would lack 24/7 operations, multi-platform support, transparent performance reports, and more. Instead, you should look into ideal services like BJS that handle your customer support and offer industry leading services.",
    },
    {
      faq_heading:
        "What Customisation Options Do I Get With E-Commerce Support Services?",
      description:
        "Plenty of options and facilities are available. We at BJS adapt to your working hours, customer base, special requirements, specific procedures, scripts, and any styling that you might like. We ensure that your requirements and specific preferences are dealt with utmost care.",
    },
    {
      faq_heading: "Are these services really working 24/7?",
      description:
        "Yes, the services that BJS provides are available around the clock, seven days a week, and 365 days a year. For the purpose of ensuring that your customers have a dependable and consistent experience with you, we are available around the clock. While it is true that we work shifts for workers in order to ensure their health and safety, the fact that you work numerous shifts together means that you are covered for the whole day.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
        BJS is the Best eCommerce Support services provider in UK
        </title>
        <meta
          name="description"
          content="Discover BJS Beyond's e-commerce solutions designed to boost online sales, enhance user experience, and streamline digital operations."
        />
      </Helmet>
      <div className="e-commerce solutions-subpage">
        <Banner title={"E-commerce Support "} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ecommsupport.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Customer Experience</span>
                <h3 className="secheading">
                  For the ideal experience that your customers deserve
                </h3>
                <p className="mb-0">
                  Delays in issue resolution in pre-sales and after-sales
                  services can be a major pain point for businesses.
                  Unprofessional support can make you lose existing customers,
                  create a bad reputation, and turn away new potential
                  customers.
                </p>
                <p className="mb-0 mt-4">
                  Naturally, you would want to have the best possible support
                  experience. However, hiring dedicated staff to manage support
                  issues 24x7 might be expensive and ineffective for your
                  business scale. Instead, you need to deploy outsourced
                  customer support solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">Advantages of E-commerce Support</h2>
            <h3>
              Having old-fashioned email support with answers taking 2 business
              days will not cut it in the modern business landscape. That’s why
              you need advanced E-commerce services.
            </h3>
            <div className="triangle-cards">
              <div className="card">
                <div className="icon">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/customer-service.png"
                    }
                  />
                </div>
                <div className="card-cont">
                  <h4>Multi-Platform</h4>
                  <p>
                    The best-outsourced support services work on multiple
                    platforms, including email, phone, live chat, support
                    tickets, and more, to ensure your customers have an ideal
                    experience.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Instant Response</h4>
                  <p>
                    Your customers don’t like to wait. A waiting period of more
                    than 2 minutes is unacceptable in most chat and call-based
                    support systems. Best E-commerce services ensure
                    near-instant response
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/customer-care.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Technology</h4>
                  <p>
                    Proper usage of technology ensures that robust chatbots can
                    answer most of the customer queries and issues without ever
                    needing to connect to an actual human representative.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>SOPs</h4>
                  <p>
                    While multiple personnel may be involved in serving your
                    customers, the experience and overall support quality remain
                    unchanged. We built proper standard operating procedures by
                    taking input from you. All our agents strictly adhere to
                    these requirements, ensuring a consistent and reliable
                    experience.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/personal-assist.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Integration</h4>
                  <p>
                    E-commerce support should automatically integrate with your
                    database to instantly retrieve critical information about
                    the client. This information is critical to understanding
                    and resolving customer issues instantly.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insurance-agent.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Toll-Free</h4>
                  <p>
                    To make your customers more comfortable, set up toll-free
                    calling support for your e-commerce platforms, making them
                    more comfortable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="small-strip">
          <div className="container-med">
            <h3 className="iconheading">
              <img src={process.env.PUBLIC_URL + "/images/successfulblk.png"} />
              Outsourced E-Commerce Support
            </h3>
            <p className="mb-0">
              Hiring, training, and managing support staff is a tall order for
              most businesses. Instead, it is best for you to outsource all your
              support needs to support centres like BJS. Our helpful support
              staff will ensure ideal experience and quick resolution for your
              customers.
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS E-Commerce Support</h2>
            <h3>Here are some benifits of BJS E-Commerce Support</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>24x7 Calling Support</h4>
                <p>
                  Our e-commerce support operates 24x7 across multiple shifts to
                  ensure your customers are able to reach us at any time of the
                  day.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                  Services are personalised to your convenience. You can setup
                  custom greetings, call scripts, a
                </p>
              </div>
              <div className="roundcard">
                <h4>Instant Response</h4>
                <p>
                  Staff is trained to pick the call in almost no time and greet
                  customers in a positive welcoming tone.
                </p>
              </div>
              <div className="roundcard">
                <h4>Understanding</h4>
                <p>
                  Proper knowledge base and documentation help our e-commerce
                  support rep have a proper understanding of the topic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some Use Cases of E-commerce Support</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Pre-Sales Support</h4>
                <p>
                  Answer customer queries about various presale concerns like
                  delivery times, customisation options, refund policies,
                  discounts, and warranty.
                </p>
              </div>
              <div className="roundcard">
                <h4>Feedback</h4>
                <p>
                  Collect feedback a few days after all purchases to gather
                  valuable data and understand product-market fit, and key
                  concerns of customers.
                </p>
              </div>
              <div className="roundcard">
                <h4>After Sales Support</h4>
                <p>
                  Take after sale concerns of customers like setup issues,
                  damage complaints, unmet expectations, quality concerns, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Why Choose BJS?</h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Industries</h4>
                <p>
                  BJS is a well-recognised brand serving a wide array of clients
                  with diverse requirements. We have clients from the UK and
                  worldwide in industries like automobile, finance, real estate,
                  logistics, supply chains, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  Our staff is provided with training via our in-house training
                  school, which is governed by our stringent criteria and is
                  supervised by us. Our personnel will be equally trained,
                  skilled, and proficient in meeting your requirements as a
                  result of this procedure. There is no other service that can
                  match the competitive advantage that we have thanks to our
                  in-house training facilities.
                </p>
              </div>
              <div className="roundcard">
                <h4>Transparency</h4>
                <p>
                  In line with your preferences, we offer comprehensive reports,
                  data analyses, and detailed insights into usage, ensuring you
                  maintain an overarching perspective on all activities. Our
                  commitment to absolute transparency in our operations
                  guarantees that you are always well-informed, allowing you to
                  adjust strategies as necessary to enhance cost efficiency and
                  conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-sec">
          <h2 className="secheading">Ready to think beyond just service?</h2>
          <ContactTeam />
        </div>

        <div className="testimonial-sec">
          <h2 className="secheading">What our partners say about us</h2>
          <TestimonialSlider />
        </div>

        <div className="account-faqs">
          <h2 className="secheading">FAQs</h2>
          <FaqTabs faqs={accountfaqs} />
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
