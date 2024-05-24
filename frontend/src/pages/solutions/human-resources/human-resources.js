import React from "react";
import PropTypes from "prop-types";
import "./human-resources.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";

const HumanResources = () => {
  const accountfaqs = [
    {
      faq_heading: "What are Human Resource Services?",
      description:
        "If it wasn’t obvious from the name, Human Resource (HR) services involve collecting, managing, and interpreting data for all your on-role and off-role workforce. HR Pros use the data to take proper actions, calculate wages, file taxes, and maintain compliance.",
    },
    {
      faq_heading:
        "How Much Do Human Resource Services Work?",
      description:
        "HR costs can largely vary based on your business needs. However, they follow economies of scale. The larger the workforce, the lesser the cost-per-head. However, at BJS, we can cater plans even for SMEs to cost-effectively cater to their HR needs.",
    },
    {
      faq_heading: "Do HR Services work 24/7?",
      description:
        "Usually no. Most HRs would be available for a few hours a day only. But, we at BJS, offer 24/7 HR services that handle your needs and provide support throughout the day ensuring all your requirements are timely met. This is particularly ideal for offices with multiple shifts or larger businesses working in multiple time zones.",
    },
    {
      faq_heading: "Is it safe to outsource HR services?",
      description:
        "Yes, an outsourced HR will likely be able to cater to all your needs and much more. With experience from multiple clients, they are more than capable of ensuring proper HR compliance. In fact, we at BJS have highly skilled and trained HRs who are likely to be far more capable than most in-house HRs. Our strict policies and procedures ensure complete data safety as well.", 
    },
  ];

  return (
    <>
      <div className="human-resources solutions-subpage">
        <Banner title={"Human Resources"} innerpage />
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
                  Outsource Your Human Resource Management
                </h3>
                <p className="mb-0">
                  It’s no secret that human resource management, documentation,
                  and various tasks associated with it are quite time-consuming
                  yet necessary. Doing them yourself is not a wise use of your
                  time.
                </p>
                <p className="mb-0 mt-4">
                  At the same time, recruiting staff might be a financially
                  difficult task. It's in your best interest to delegate these
                  responsibilities to one of the best HR outsourcing services,
                  BJS. Our decades-long experience in this domain is suitable
                  for handling all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Human Resource Services
            </h2>
            <h3>
              Compared to dedicated in-house HR, Outsourced HR has certain major
              advantages. Let’s discuss:
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
                  <h4>Recruitment</h4>
                  <p>
                    You don’t have to worry about recruiting HR, training them,
                    providing employee benefits, and then redoing the whole
                    process when they decide to leave after a while.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Resources</h4>
                  <p>
                    If you are working in a physical office, the additional
                    space and resources consumed by the HR might not be the best
                    use of your land. Delegating these tasks helps free up the
                    space for you.
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
                  <h4>Management</h4>
                  <p>
                    The professionally trained and skilled outsourced HRs can
                    optimise management, ensuring on-time paperwork, proper
                    management, accelerated new recruitments, and overall time
                    savings on every front.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Bookkeeping</h4>
                  <p>
                    Outsourced HR keeps track of various employee activities,
                    including leaves, employee benefits, performance, etc. This
                    data is used to calculate salaries and promotions across the
                    firm accurately.
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
                  <h4>Accounts Payable</h4>
                  <p>
                  With our proper tracking and management tools, you can always be up-to-date with your accounts payable data. This ensures there are no unexpected surprises relating to employee salaries and benefits.
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
                  <h4>Employee Benefits</h4>
                  <p>
                  A proper dedicated Human Resource department can help implement monetary and non-monetary employee benefits. These help boost morale, ensure proper legal compliance, and overall improve the well-being of the employees.
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
              Human Resource Services
            </h3>
            <p className="mb-0">
              Why hire an HR to manage your workforce when you can just
              outsource the HR services to firms like BJS and remain worry-free?
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Human Resource Services
            </h2>
            <h3>Here are some benifits of BJS Human Resource Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Quality</h4>
                <p>
                  With robust SOPs, guidelines, quick reference books, digital
                  tech stacks, and integrations, our staff is fully equipped to
                  handle your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Response Times</h4>
                <p>
                  Our staff works 24x7x365. We can work on your preferred
                  working hours or provide 24-hour service as per your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Compliance Management</h4>
                <p>
                  With proper experience, knowledge, skills, and training, our
                  HR professionals ensure much better legal compliance.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                  It's no surprise that our services are completely customised
                  to your needs. We adapt to your working hours, working days,
                  employee needs, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some Use-cases of Human Resource Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Save Time</h4>
                <p>
                  It reduces your workload of constantly tracking work hours,
                  leaves, performance, in/out times, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>Compliance Management</h4>
                <p>
                  Dedicated HR professionals have in-depth knowledge of the law
                  and ensure proper compliance is maintained in the offices.
                </p>
              </div>
              <div className="roundcard">
                <h4>Data</h4>
                <p>
                  Proper data collection performed by our HR executive ensures
                  we can provide data-driven insights and explore opportunities
                  to better optimise the workforce.
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
                <h4>Standardised</h4>
                <p>
                While the services are adapted to your needs, the training process is highly standardised to ensure all our staff are equally skilled and capable of handling even the most. 
                </p>
              </div>
              <div className="roundcard">
                <h4>Scalability</h4>
                <p>
                Our HR services are designed to be highly scalable. We can easily adapt to the constantly changing size of your workforce, ensuring optimal services are made available to you every time.
                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                The Human Resource data can include critical employee bio-data, personal information, family history, medical information, finance & tax info, and more. This data needs to be protected. We ensure this privileged information is stored safely and accessed only by authorised personnel, thus minimising exposure.

                </p>
              </div>
              <div className="roundcard">
                <h4>Communication</h4>
                <p>
                Our HR specialists are available throughout the day to answer your queries and provide quick answers to all your concerns. We can provide data-driven advice and consultation to aid your decision-making in HR-related matters.
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

export default HumanResources;
