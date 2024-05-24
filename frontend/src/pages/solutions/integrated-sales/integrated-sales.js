import React from "react";
import PropTypes from "prop-types";
import "./integrated-sales.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";

const IntegratedSales = () => {
  const accountfaqs = [
    {
      faq_heading: "What exactly is Integrated Sales Service?",
      description:
        "Integrated Sales Service combines the job of marketing and sales into a single department. This ensures streamlined workflow, better user experience, and growth. Best Integrated Sales services in the UK like BJS offer precisely that to grow your sales and simultaneously reduce your workload.",
    },
    {
      faq_heading:
        "How does Integrated Sales Services compare to standard marketing services?",
      description:
        "Integrated Sales Services are significantly better for modern businesses. They reduce the costs of hiring staff for 2 separate departments. In addition, better coordination reduces turnaround times for customers, and they are able to ensure a much better experience for them. They improve conversion rates and reduce costs, thus helping to increase your revenue and profits.",
    },
    {
      faq_heading: "What are the costs of Integrated Sales Services?",
      description:
        "Generally, in a short time, it can be a bit expensive since Integrated Sales professionals are generally more expensive. But, with some reasonable time passage, these services become a lot more financially viable after they bring in results. So, in short, they might cost more than conventional marketing initially, but the results are generally enough to justify their costs.",
    },
    {
      faq_heading: "Who should hire Integrated Sales Services?",
      description:
        "Integrated Sales Services are suitable for SMEs with limited human resource utilisation potential and who are looking to optimise conversions. The overall optimised workflow, better coordination, and reduced human resource requirement result in improved finances for everyone in the long term.",
    },
  ];

  return (
    <>
      <div className="integrated-sales solutions-subpage">
        <Banner title={"Integrated Sales"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img
                    src={process.env.PUBLIC_URL + "/images/callinggrp.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Communication stability</span>
                <h3 className="secheading">
                  Market & Sell Your Products/Services
                </h3>
                <p className="mb-0">
                  One of the biggest challenges for the success of any business
                  is client acquisition. It's not easy to gain the audience's
                  attention and then convert it. Most marketing Pros are really
                  great at attracting an audience, but that audience rarely
                  converts.
                </p>
                <p className="mb-0 mt-4">
                  Similarly, most sales professionals are really good at
                  converting a lead into a sale, but they rarely get leads. We
                  guess you might also struggle with this issue. That’s where
                  our Integrated Sales come into play.
                </p>
                <p className="mb-0 mt-4">
                  We have created a new breed of experts, called “Integrated
                  sales professionals,” who handle marketing as well as sales.
                  This ensures that the entire workflow, from the first
                  interaction to onboarding, is handled by the same people,
                  giving optimised results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Integrated Sales Services
            </h2>
            <h3>
              At first look, it might be hard to realise what benefits
              Integrated Sales Services might offer. But let’s take a hard look
              into Integrated Sales to help you understand their significance.
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
                  <h4>User Experience</h4>
                  <p>
                    Imagine being made bold promises about a product and then
                    realising that none of the promises are fulfilled at the
                    time of purchase. Due to the nature of Integrated Sales,
                    only what is achievable gets promised, creating a much
                    better user experience.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Streamlined Processing</h4>
                  <p>
                    Sometimes the user is convinced of the sale, but the sales
                    team takes too long to provide the details, price quote, or
                    answers to queries, resulting in customer drop-off.
                    Streamlined Integrated Sales ensure that the user remains
                    well-treated.
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
                  <h4>Costs</h4>
                  <p>
                    Rather than having dedicated marketing and sales personnel,
                    you can have one larger team handling both, saving
                    significant costs. This is especially beneficial for small
                    and medium-scale businesses that cannot properly utilise
                    dedicated marketing and sales teams.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Conversions</h4>
                  <p>
                    The optimisation and efficiency of integrated sales ensure
                    that a given marketing budget will likely get more audience
                    engagement and a higher conversion rate due to a better
                    understanding of customer needs.
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
                  <h4>Analytics</h4>
                  <p>
                    The horizontal integration of the marketing and sales
                    departments ensures that the data is gathered, shared, and
                    interpreted quickly. It reduces the time taken to understand
                    the data and implement changes, thus improving efficiency
                    and mitigating bottlenecks.
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
                  <h4>Pending</h4>
                  <p>
                    A well-managed contact center can contribute to building a
                    positive brand reputation by delivering exceptional customer
                    service, resolving issues promptly which can lead to
                    increased customer loyalty and advocacy.
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
              Integrated Sales Services
            </h3>
            <p className="mb-0">
              Why have separate sales and marketing departments when you can
              have outsourced integrated sales services that integrate both
              marketing and sales and outperform conventional methods?
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Contact Centre Services
            </h2>
            <h3>Here are some benifits of BJS Contact Centre Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                  Our well-vetted staff has plenty of skill and experience to
                  effortlessly handle all your marketing and sales needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Knowledge</h4>
                <p>
                  Our in-house training setup ensures that they have complete
                  knowledge and understanding of critical business concepts that
                  have to be applied to your business
                </p>
              </div>
              <div className="roundcard">
                <h4>Data</h4>
                <p>
                  We teach our integrated sales specialists to efficiently
                  collect, compile, and interpret the data, understand user
                  behaviour, and optimise for the best results.
                </p>
              </div>
              <div className="roundcard">
                <h4>Revenue</h4>
                <p>
                  The streamlined systems and optimised marketing methodologies
                  reduce costs, boost sales, and help significantly boost the
                  revenue for your firm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Responsibilities</h2>
            <h3>Here are some key Responsibilities to fulfill</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Marketing</h4>
                <p>
                  Your integrated sales teams create advertisements run
                  campaigns, promotions, and more to attract an audience.
                </p>
              </div>
              <div className="roundcard">
                <h4>Sales Support</h4>
                <p>
                  The audience doesn’t have to wait to get their queries
                  answered. The sales staff has the proper knowledge and can
                  easily answer all sales queries reducing wait time.
                </p>
              </div>
              <div className="roundcard">
                <h4>Sales</h4>
                <p>
                  Any audience that reaches your service gets optimally handled
                  by the sales team to ensure the highest chance of a sale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Why Choose BJS?</h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Services</h4>
                <p>
                  BJS offers robust integrated sales services. Our service
                  offers support for marketing, sales, presales support,
                  telesales support, and a lot more.
                </p>
              </div>
              <div className="roundcard">
                <h4>Workflow</h4>
                <p>
                  At BJS, the entire workflow, from the first interaction to the
                  onboarding, is handled by the same representatives. This
                  ensures complete mitigation of cross-department coordination
                  issues. Customers are served better, and minimum issues arise
                  overall.
                </p>
              </div>
              <div className="roundcard">
                <h4>24x7</h4>
                <p>
                  Our services operate around the clock with equally talented
                  employees taking shift after shift. This ensures we are
                  available and ready to handle them as and when they engage
                  with you via website, app, phone number, email, or any other
                  method.
                </p>
              </div>
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  Years of training from industry leaders, specialists, and
                  real-world experience ensures that our staff is always very
                  sharp and capable of ensuring maximum conversions for your
                  business.
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

IntegratedSales.propTypes = {};

IntegratedSales.defaultProps = {};

export default IntegratedSales;
