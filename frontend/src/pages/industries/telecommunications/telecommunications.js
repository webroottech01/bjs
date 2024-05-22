import React from "react";
import "./telecommunications.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const TeleCommunications = () => {
  const accountfaqs = [
    {
      faq_heading: "What services can be outsourced in the Telecom sector?",
      description:
        "Top business service firms can handle all the non-essential tasks for the Telecom sector. Outsourcing services such as HR, Finance Management, e-commerce, call answering, and account management can be highly beneficial. Fortunately, BJS, a prominent company based in the UK, provides all of these services under the same roof.",
    },
    {
      faq_heading: "How can I get customised solutions for my needs?",
      description:
        "Certainly, reputable firms in the UK, such as BJS, have extensive expertise in the telecom industry. We use our experience, knowledge, and skills to serve your needs and top priorities better. We understand the importance of customisation in order to support the growth of your business effectively. Our team enters into thorough discussions with you to better understand your needs. This information is used to curate a tailored package that perfectly aligns with your requirements.",
    },
  ];
  return (
    <>
      <div className="telecommunications industries-subpage">
        <Banner title="Tele-communications" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Telecom Optimization</span>
                <h3 className="secheading">Robust Telecom Services</h3>
                <p className="mb-0">
                  The Telecom industry is known for its tough, unforgiving
                  nature and tight regulations. Human Resources, IT support,
                  data management, analytics, planning, and finance, many things
                  need to be nailed for the success and growth of your firm.
                </p>
                <p className="mb-0 mt-4">
                  One of the best service providers for the telecom industry is
                  BJS. It can massively simplify business operations, help
                  reduce taxes and unwanted expenses, and optimise business
                  processes to give you the best possible results.
                </p>
                <p className="mb-0 mt-4">
                  Outsourcing services ensure you can focus on your core telecom
                  service and that BJS handles the rest of the business needs.
                  Our work requires minimal oversight and operates seamlessly in
                  the background while delivering results.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/telecomm.jpg"}
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
              Trusted Service Provider
            </h3>
            <p className="mb-0">
              Thanks to years of experience, BJS is a trusted name for
              outsourcing services in many industries, including Telecom.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br /> How does the Telecom Sector
              benefit from Outsourcing
            </h3>
            <p>
              While the telecom sector in itself might be a master at
              communications, there are business aspects that are quite handled
              by the telecom sector. Taxation, financial planning, sales, and
              process management are some areas where Telecom services might
              need help.
            </p>
            <p>
              That’s where BJS comes into play. BJS has multiple valuable
              business services, including all the ones discussed above. This
              means you can delegate all these tasks to BJS and focus on your
              core business functions.
            </p>
            <p>
              As an industry expert, we are perfect for handling all your needs
              and most likely exceeding your expectations. Our experts can also
              provide you with guidance and advice to better adapt and grow your
              business through reforms in taxation, process planning, human
              resources, and more.
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
                  <h4>Human Resources</h4>
                  <p>
                  The tightly regulated Telecom industry requires highly skilled HR executives to handle all business requirements and demands properly. BJS, thankfully, provides Human Resource services that monitor and guarantee that every employee is presenting themselves in the best possible light. They also take care of the welfare of the entire workforce by implementing employee benefits, insurance, leaves, and pay designed to satisfy staff members without going over budget.

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
                  <h4>Process Consulting
</h4>
                  <p>
                  Years of real estate industry expertise help our industry professionals provide you with guidance and suggestions to improve processes. This can include building redundancy systems like backups, data security methodologies, and more for compliance. In addition, they can redesign and reconfigure various processes to extract more performance or save costs for your firm. Previously unreleased performance potential can be easily extracted to gain you a competitive edge.

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
                  Our innovative integrated sales teams are dedicated to maintaining a strong connection with customers throughout the entire sales process, from the initial interaction to the final sale. Ensuring that the customer always has a dedicated point of contact and receives consistent care is paramount. The model yields improved performance and overall customer satisfaction with a streamlined and straightforward approach. Our model combined marketing and sales departments into a unified Integrated Sales setup.


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
                  <h4>Account Management Services</h4>
                  <p>
                  As a Telecom service, you probably have many clients with different plans, pricing structures, and contract periods. In addition, you would be collaborating with various businesses and 3rd-party services that get payments from you. Properly managing these accounts payable and accounts receivable isn’t easy. That’s why our Account Management Services are ideal for you. We perform proper bookkeeping and keep track of all incoming and outgoing payments to ensure no defaults/delays occur.


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
                  <h4>Virtual PA
</h4>
                  <p>
                  Our virtual PA helps ease your workload by taking over various responsibilities such as day planning, calendar management, and coordinating meetings. They make travel arrangements, reservations, and various other tasks on your behalf to save you the time and the hassle of doing these things on your own.
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
                  <h4>Pending</h4>
                  <p>
                    A Virtual Private Assistant is specifically responsible for
                    assisting you in day-to-day tasks and ensuring they handle
                    anything unimportant, freeing up time for you. Scheduling
                    customer meetings, taking appointments, coordinating
                    business meetings, and more help save time. Your assistant
                    maintains a proper calendar with all the events planned.
                    This ensures you are always aware of upcoming activities.
                    Our agents proactively make hotel reservations, travel
                    arrangements, and other things.
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
                Our industry experts train our staff in our robust in-house training facilities. Our training ensures the workforce is ready to handle all your needs.

                </p>
              </div>
              <div className="roundcard">
                <h4>Consultation</h4>
                <p>
                Have a question in mind? Our consultants can help you with various topics, including taxation, costing, financial planning, etc.
                </p>
              </div>
              <div className="roundcard">
                <h4>Technology</h4>
                <p>
                We quickly adapt to the latest state-of-the-art technologies and infrastructure to provide your firm with the tools and solutions you might need.

                </p>
              </div>
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                We hire some of the highest-paid, most skilled, and most experienced staff. The quality workforce is an important factor that contributed to our incredible success.

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
export default TeleCommunications;
