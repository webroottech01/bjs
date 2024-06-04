import React from "react";
import PropTypes from "prop-types";
import "./account-managment.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const AccountManagment = () => {
  const accountfaqs = [
    {
      faq_heading: "What are Account Management Services?",
      description:
        "As the name suggests, Account Management Services maintains your account. It tracks all current and future incoming/outgoing transactions. They perform bookkeeping and track the flow of goods through your firm.",
    },
    {
      faq_heading: "How Do Account Management Services Work?",
      description:
        "You can find quality account management services for really cheap prices. However, they would not have the experience, skills, and software solutions to match your expectations. That’s why you should consider quality services like BJS. We at BJS meet all your requirements and expectations while still being reasonably competitive in the price.",
    },
    {
      faq_heading: "Can I Customise My Account Management Service at BJS?",
      description:
        "Yes, ofcourse. We can fine-tune our services to meet your demands. Everything, including working hours, periodic reports, SOPs, integrations, and coordination, can be adapted to match your needs.",
    },
    {
      faq_heading: "Are Account Management Services Useful?",
      description:
        "Truth be told, if you are a tiny firm with about a dozen or so transactions monthly, you should handle these things better. However, once you achieve some scale, trusting expert account management services in the UK, such as BJS, is better. They help optimise procedures, resolve bottlenecks, save taxes, and reduce burdens.",
    },
  ];

  return (
    <>
      <div className="account-managment solutions-subpage">
        <Banner title={"Account Management"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img
                    src={process.env.PUBLIC_URL + "/images/accountmanage.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Your Account Management Solution</span>
                <h3 className="secheading">
                  Enhancing customer relationships through dedicated account
                  management.
                </h3>
                <p className="mb-0">
                  Effective account management nurtures strong client
                  relationships by overseeing accounts, addressing needs, and
                  ensuring satisfaction. This results in increased loyalty,
                  repeat business, and referrals. However, managing accounts can
                  be complex and time-consuming, requiring dedicated resources
                  and expertise.
                </p>
                <p className="mb-0 mt-4">
                  At Beyond Just Service, our account managers become your
                  account managers, designed to streamline your client
                  interactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Account Management Services
            </h2>
            <h3>
              You might think that account management is just keeping records
              and maintaining data of all transactions in an Excel sheet. Well,
              that worked a decade ago, but not today.
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
                  <h4>Customer-Centric Approach</h4>
                  <p>
                    Our services are focused on promptly and effectively
                    addressing customer needs, enhancing satisfaction and
                    loyalty. This ensures that every client feels valued and
                    heard, which in turn strengthens your business
                    relationships.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Specialist Expertise</h4>
                  <p>
                    Gain access to a team of experts who understand the
                    complexities of managing customer relationships. Our
                    specialists bring a wealth of knowledge and experience,
                    helping to navigate the nuances of account management with
                    precision and skill.
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
                  <h4>Scalability</h4>
                  <p>
                  Our solutions are scalable, allowing you to adjust the level of support to match your business growth and needs. Whether you're a small startup or a large enterprise, our services can be tailored to fit your unique requirements, ensuring seamless scalability.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Seamless Integration</h4>
                  <p>
                  Our customisable services are designed to enhance process efficiency, ensuring all client interactions are handled seamlessly. This integration helps to streamline operations and maintain consistency across all customer touchpoints.

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
                  <h4>Cost Efficiency</h4>
                  <p>
                  Reduce operational costs while maintaining high levels of customer satisfaction and retention. By outsourcing account management, you can save on the costs associated with hiring and training in-house staff, while still benefiting from professional expertise.
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
                  <h4>Brand Reputation Enhancement
</h4>
                  <p>
                  Exceptional customer service, prompt issue resolution, and fostering loyalty enhance your brand's reputation. A well-managed account service reflects positively on your business, encouraging customer advocacy and improving your market standing.

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
              Outsourced Account Management

            </h3>
            <p className="mb-0">
            Outsource to our professional team to focus on core business activities while we handle client interactions. This not only improves customer experience but also alleviates the burden of managing in-house support staff, allowing you to concentrate on what you do best.

            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Account Management Services
            </h2>
            <h3>Here are some benifits of BJS Account Management Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>24/7 Availability</h4>
                <p>
                Round-the-clock services ensure your needs are met any time, with skilled staff available across multiple shifts. This guarantees that your clients receive uninterrupted support, regardless of time zones or business hours.

                </p>
              </div>
              <div className="roundcard">
                <h4>Data Security
</h4>
                <p>
                We adhere to strict procedures to keep your data secure, sharing critical information only on a need-to-know basis. Our commitment to data security ensures that your sensitive information is protected at all times.

                </p>
              </div>
              <div className="roundcard">
                <h4>Expert Training
</h4>
                <p>
                Our in-house training academy ensures employees are meticulously trained to provide top-notch service tailored to your needs. This rigorous training program equips our staff with the skills necessary to deliver exceptional account management services.

                </p>
              </div>
              <div className="roundcard">
                <h4>Consultation and Support
</h4>
                <p>
                Specialist account managers are available to address concerns, providing expert advice and tailored solutions. Our consultative approach ensures that your specific business challenges are met with customised strategies and support.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some use Cases of Account Management Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Client Support
</h4>
                <p>
                Our managers excel in client support, handling inquiries, resolving issues, and providing seamless communication. This ensures that your clients always have a reliable point of contact for any of their needs.

                </p>
              </div>
              <div className="roundcard">
                <h4>Virtual Account Management</h4>
                <p>
                  
Manage appointments, schedule meetings, and coordinate events with our virtual services. This flexibility allows you to maintain efficient operations and client interactions without the need for physical presence.

                </p>
              </div>
              <div className="roundcard">
                <h4>Proactive Client Outreach
</h4>
                <p>
                Use our services for follow-ups, lead generation, and re-engaging clients to grow your business. Proactive outreach helps to keep your client base engaged and drives continuous business growth.
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
                <h4>24x7 Support</h4>
                <p>
                  Our support staff works 24x7 in multiple shifts to ensure
                  complete coverage and availability for your customers.
                </p>
              </div>
              <div className="roundcard">
                <h4>Native English Speakers</h4>
                <p>
                  Our staff is composed of native English speakers, mostly from
                  the UK, ensuring proper command and understanding of English.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                  All services are personalised, and we can implement custom
                  guidelines, scripts, caller tunes, and various other features
                  to adapt to your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Sales</h4>
                <p>
                  A proper knowledge base helps our staff have an in-depth
                  understanding of the topic. This is crucial for taking sales
                  calls and converting potential customers.
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

AccountManagment.propTypes = {};

AccountManagment.defaultProps = {};

export default AccountManagment; 
