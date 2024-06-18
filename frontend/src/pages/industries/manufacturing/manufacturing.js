import React from "react";
import "./manufacturing.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Manufacturing = () => {
  const accountfaqs = [
    {
      faq_heading:
        "What services can be outsourced in the the Manufacturing Sector?",
      description:
        "The manufacturing sector faces numerous challenges, including maintaining efficiency and managing complex operations. You can streamline your work by outsourcing services such as HR management, financial planning, customer support, process consulting, and integrated sales to top organizations. One such company is BJS, renowned for its outsourced business services that support manufacturing businesses in optimizing their operations and achieving excellence.",
    },
  ];
  return (
    <>
      <div className="manufacturing industries-subpage">
        <Banner title="Manufacturing" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6 order-2 order-lg-1">
                <span className="">Streamlined Solutions</span>
                <h3 className="secheading">
                  Streamlining manufacturing processes to enhance productivity
                  and efficiency
                </h3>
                <p className="mb-0">
                  In the manufacturing sector, efficiency and precision are
                  crucial. Small errors can disrupt production, affecting supply
                  chains, customer satisfaction, and your bottom line. Ensuring
                  smooth operations is essential for maintaining a competitive
                  edge and delivering high-quality products.
                </p>
                <p className="mb-0 mt-4">
                  While your expertise is in manufacturing, critical functions
                  like financial management, supply chain logistics, customer
                  support, and sales also need attention. These areas are vital
                  for your overall success and sustainability.
                </p>
                <p className="mb-0 mt-4">
                  Partnering with professional outsourced service providers lets
                  you delegate these tasks to experts. This enables you to focus
                  on core competencies, improve efficiency, and ensure high
                  standards of quality across your business. Outsourcing saves
                  time and resources while helping you meet industry demands and
                  customer expectations more effectively.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/manufacturing.jpg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-strip">
          <div className="container-med">
            <h3 className="iconheading">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/successfulblk.png"}
              />
              Industry Leading Services
            </h3>
            <p className="mb-0">
              When it comes to outsourcing services for your business, BJS is
              the best brand in the UK, handling the various needs of
              manufacturing customers.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br /> Do Manufacturing Firms
              Benefit from Outsourcing
            </h3>
            <p>
              In an industry where customer experience is crucial, outsourcing
              enhances service quality without straining internal resources.
              Professional providers manage essential functions like financial
              planning, account management, customer support, and sales. This
              enables Manufacturing firms to focus on delivering exceptional
              guest experiences while improving efficiency, reducing costs, and
              maintaining a competitive edge.
            </p>
          </div>
        </div>
        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">How Can BJS Help You?</h2>
            <h3>Here are some key ways BJS serves your Industry</h3>
            <div className="triangle-cards">
              <div className="card">
                <div className="icon">
                  <img
                    alt=""
                    src={
                      process.env.PUBLIC_URL + "/images/customer-service.png"
                    }
                  />
                </div>
                <div className="card-cont">
                  <h4>Call Centre Services</h4>
                  <p>
                    Our call centre services ensure your customers can easily
                    reach you for orders, support, and inquiries. We provide
                    24x7 assistance, enhancing customer satisfaction and
                    operational efficiency.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insurance-agent.png"}
                    alt=""
                  />
                </div>
                <div className="card-cont">
                  <h4>Human Resources</h4>
                  <p>
                    We manage HR tasks to ensure regulatory compliance and
                    employee well-being. Our services include tracking work
                    hours, handling compensation, and providing benefits to
                    maintain high morale and productivity.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/customer-care.png"}
                    alt=""
                  />
                </div>
                <div className="card-cont">
                  <h4>Finance & E-Commerce Management</h4>
                  <p>
                    BJS offers financial planning and consultation to optimize
                    your resources and investment. We help you prepare for peak
                    seasons and advise on pricing strategies to maximize profits
                    and sales.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/mentoring.png"}
                    alt=""
                  />
                </div>
                <div className="card-cont">
                  <h4>Process Consulting</h4>
                  <p>
                    We analyze and improve your manufacturing processes to
                    increase efficiency and reduce costs. Our consulting
                    services help streamline operations and enhance overall
                    productivity.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/business.png"}
                    alt=""
                  />
                </div>
                <div className="card-cont">
                  <h4>Integrated Sales</h4>
                  <p>
                    Our integrated sales approach aligns marketing and sales
                    efforts to ensure seamless customer onboarding. We
                    facilitate smooth communication and care from lead
                    generation to final sales.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/personal-assist.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Field Agent Management</h4>
                  <p>
                    Our field agent management services optimize coordination
                    and efficiency among your employees. We help reduce cost
                    overruns and improve process effectiveness, boosting overall
                    productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS</h2>
            <h3>
              Here are some of the critical benefits of choosing BJS as your
              service provider
            </h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  We train our employees to be efficient and accurate in their
                  work. Everything they do for you will be driven by our
                  advanced training program, which will help them be of great
                  help to you.
                </p>
              </div>
              <div className="roundcard">
                <h4>Care</h4>
                <p>
                  At BJS, all customers, regardless of scale, are treated
                  equally. We put great attention to detail and care in all our
                  activities to ensure our customers remain satisfied.
                </p>
              </div>
              <div className="roundcard">
                <h4>Transparency</h4>
                <p>
                  With proper reports, data, and monitoring dashboards, complete
                  transparency is maintained about all the activities.
                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                  Your customer's personal data and information are quite
                  critical to you; we understand and realise that very well. All
                  your critical data is stored safely and kept with utmost
                  security, ensuring no unauthorised access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-sec">
          <h2 className="secheading">Ready to think beyond just service?</h2>
          <ContactTeam />
        </div>

        <div className="account-faqs">
          <h2 className="secheading">FAQs</h2>
          <FaqTabs faqs={accountfaqs}> </FaqTabs>
        </div>
      </div>
    </>
  );
};
export default Manufacturing;
