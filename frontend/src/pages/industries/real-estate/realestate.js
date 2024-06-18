import React from "react";
import "./realestate.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const RealEstate = () => {
  const accountfaqs = [
    {
      faq_heading: "What services can be outsourced in the real estate sector?",
      description:
        "The Real Estate sector can outsource all their non-essential tasks to top firms. HR, Finance Management, e-commerce, call answering, and account management are some of the services that can be outsourced. Lucky for you, BJS, a UK-based juggernaut, offers all these services under a single roof.",
    },
    {
      faq_heading: "How can I get customised solutions for my needs?",
      description:
        "Yes, of course, top firms like BJS are well-experienced in real estate and know that customisation is critical to adapting and helping your business grow meaningfully. That’s why our team actively discusses and tries to understand all your needs and curate a package that is best suited for all your unique needs and requirements.",
    },
  ];
  return (
    <>
      <div className="real-estate industries-subpage">
        <Banner title="Real Estate" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6 order-2 order-lg-1">
                <span className="">Operational Excellence</span>
                <h3 className="secheading">
                  Maintain Compliance And Maximise Growth
                </h3>
                <p className="mb-0">
                  Real estate customers often require multiple rounds of
                  location tours, negotiations, and discussions before sealing
                  the deal. During the process, any hiccup can turn them away
                  from your firm.
                </p>
                <p className="mb-0 mt-4">
                  To ensure smooth operations and a tight-knit experience for
                  your present or potential customers, you must outsource
                  certain tasks like Field Agent Management, Financial Planning
                  and more to industry experts.
                </p>
                <p className="mb-0 mt-4">
                  Industry leaders like BJS can massively simplify your business
                  operations while improving the results for you and your
                  customers. Let’s discuss how.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/realestate.jpg"}
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
              Best in the Business
            </h3>
            <p className="mb-0">
              BJS is ideal for handling customer queries, scheduling
              on-site/off-site meetings, planning projects, controlling field
              agents and more.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br /> How does the Real Estate
              Sector benefit from Outsourcing
            </h3>
            <p>
              Outsourced services can be ideal for real estate builders as well
              as agents in improving their workflow and retaining customers.
              It's not uncommon for Real Estate professionals to have plenty of
              unanswered calls and missed schedules.
            </p>
            <p>
              We at BJS offer virtual personal assistants to handle your
              schedules, coordination, and calendar management. In addition, our
              process consultation services help optimise your firm for the best
              possible efficiency and redundancy.
            </p>
            <p>
              Overall, BJS offers lucrative tools, services, and overall
              solutions to help your business grow and flourish. Let’s see how
              our key services align with the needs of the real estate sector.
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
                  <h4>Field Agent Management</h4>
                  <p>
                    The Real Estate sector requires a lot of movement of people
                    and goods. Sales agents, truck drivers, and more. It is hard
                    to keep track of everyone. Our field agent management
                    services deploy advanced software solutions and proper
                    supervision by our experts to avoid any unnecessary delays
                    in any process.
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
                    Real Estate is a hugely labour-intensive sector. Due to the
                    overwhelming number of people involved in real estate
                    projects, it is quite hard to track and look after the
                    workforce accurately. Fortunately, BJS offers human resource
                    services that track and ensure all employees are putting
                    their best foot forward. While doing so, they also make sure
                    the well-being of all employees is accounted for. Proper
                    employee benefits, insurance, leaves, and compensations are
                    formulated to keep employees happy without breaking the
                    bank.
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
                    Unlike conventional sales teams, our modern combined
                    marketing and sales teams, collectively known as integrated
                    sales teams, stay connected with customers right from 1st
                    interaction until sale completion. This ensures the customer
                    always has a single point of contact and that it is always
                    taken care of. The lean and simple model results in better
                    performance and customer satisfaction overall.
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
                  <h4>Contact Centre Services</h4>
                  <p>
                    Our Contact Centre Services ensure that common customer
                    queries, concerns, and issues are properly addressed.
                    Working 24x7 we ensure that proper resolutions and answers
                    are provided to your customers ensuring high customer
                    satisfaction.
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
                  <h4>Process Consulting</h4>
                  <p>
                    Our expert process consultants have years of experience in
                    the real estate sector. All your processing issues, choke
                    points, vulnerabilities, and optimisation opportunities are
                    carefully analysed to formulate the best possible processes.
                    These processes are designed to maximise profitability,
                    minimise delays, and create redundant, stable systems with
                    maximum reliability.
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
                  <h4>Virtual PA</h4>
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
                <h4>Consistency</h4>
                <p>
                  With proper training, evaluations, and past experience, we
                  ensure that all our agents are equally capable of serving you
                  and managing all your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Consultation</h4>
                <p>
                  Have a question in mind? Our consultants can help you with a
                  wide range of topics, including taxation, logistics, financial
                  planning, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>24x7</h4>
                <p>
                  Our staff is available 24x7, ensuring all your needs can be
                  met as and when you want us. After all, what good is a service
                  if it isn’t available when you need it? We are always
                  available to support you and serve your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                  As the best firm in the UK, we have a lot of experience
                  handling high-profile real estate clients, making us an ideal
                  choice for you as well. We use this experience to help you
                  with decision-making, optimisation, and overall business
                  improvements.
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
export default RealEstate;
