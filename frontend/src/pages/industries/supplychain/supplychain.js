import React from "react";
import "./supplychain.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Supplychain = () => {
  const accountfaqs = [
    {
      faq_heading: "Is it safe to outsource services?",
      description:
        "Yes, modern outsourcing services are a great alternative to old-fashioned in-house setups. These firms are bound by strict laws and have proper policies implemented to make sure your needs are met. Cheaper/newer services might still be unreliable, but proven market players like BJS are more than safe for all your business needs.",
    },
    {
      faq_heading: "Can I get customised services to match my business needs?",
      description:
        "Yes, every supply chain has its own unique requirements and priorities. We understand that very well. Our staff will customise all the services to make sure that they are optimised to meet all your requirements and priorities. We strive to deliver an ideal experience for you throughout the year.",
    },
  ];
  return (
    <>
      <div className="supplychain industries-subpage">
        <Banner title="Supply Chain" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Supply Chain Mastery</span>
                <h3 className="secheading">
                  Solutions To Manage And Optimise Supply Chain
                </h3>
                <p className="mb-0">
                  It’s not easy to manage supply chains. Keeping all the supply
                  chains running reliably and delivering the desirable results
                  is a tall order. It gets even more challenging when there is
                  the added burden of customer support, human resources, account
                  management, and more.
                </p>
                <p className="mb-0 mt-4">
                  It’s in your best interest to delegate non-core business tasks
                  to an outsourced service provider like BJS, which has years of
                  experience providing quality tools and solutions to various
                  Supply Chain businesses.
                </p>
                <p className="mb-0 mt-4">
                  Our excellent services can reduce your burden, improve
                  services, and maximise business performance.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/supplychain.jpg"}
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
              End-to-End Solutions
            </h3>
            <p className="mb-0">
              We provide many services and solutions to support you throughout
              your business journey. We ensure optimal operational efficiency
              for your business.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br />
              Do Supply Chain Firms Benefit from Outsourcing
            </h3>
            <p>
              Yes! Supply chain businesses can enjoy substantial performance
              gains by outsourcing certain aspects of the companies to industry
              experts like BJS.
            </p>
            <p>
              You know how it goes: one snag in one aspect of the business
              causes a ripple effect, bringing down your entire firm. Hiring
              outsourced services can bring significant improvements to your
              business.
            </p>
            <p>
              For example, our process consulting can help build redundancies in
              every business process to ensure any snag doesn’t impact the rest
              of the business and can be isolated. Further optimisations and
              SOPs can also be built so that there is a plan of action to deal
              with every situation.
            </p>
            <p>
              There are many more ways in which top service outsourcing
              companies in the UK, like BJS, can help you level up your
              business. We handle all your needs and requirements driven by our
              focus on providing quality results for each customer.
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
                  <h4>Customer Support</h4>
                  <p>
                    Our call centres are suitable for offering robust customer
                    support to all your customers, ensuring all their queries
                    and issues can be resolved with minimum possible delays. Our
                    omnichannel support ensures your customers can connect via
                    their preferred medium and get consistent, reliable, and
                    helpful support every single time.
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
                    The significance of Human Resources in the realm of Supply
                    Chain cannot be understated. With lots of employees working
                    around the clock, any employee issue can result in a
                    complete standstill for the entire chain. It is important to
                    ensure all your employees are satisfied. In addition, proper
                    legal and regulatory compliance needs to be maintained as
                    well. All of that gets handled with perfection by our
                    skilled workforce at BJS.
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
                    Efficient processes are crucial for supply chain businesses
                    to ensure smooth operations across raw material procurement,
                    manufacturing, packaging, delivery, costing, taxation, and
                    other essential areas. Our team of experts has extensive
                    experience in identifying and resolving bottlenecks,
                    enhancing performance, and implementing reliability
                    improvements in the E-Commerce industry.
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
              <div className="card">
                <div className="icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/business.png"}
                    alt=""
                  />
                </div>
                <div className="card-cont">
                  <h4>Field Agent Management</h4>
                  <p>
                    We provide a comprehensive range of tracking tools, software
                    solutions, management tools, and performance metrics to
                    support your field agents. With this tool, you can
                    effortlessly keep tabs on and oversee all delivery agents
                    and personnel who are not in the office. Our service
                    diligently monitors the performance of each employee,
                    ensuring that any unforeseen issues are kept to a minimum.
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
                  <h4>Finance & E-Commerce Management</h4>
                  <p>
                    We have skilled e-commerce experts who ensure all your
                    financial systems, payment gateways, products, and platforms
                    are in ideal condition. This ensures that all customers can
                    actually access and purchase your services with minimum
                    hassle. Apart from maintenance, top finance services can
                    also implement surge pricing and customised packages and run
                    data-driven analyses to provide you with insights into room
                    for improvement. They help maximise profitability and
                    scalability. Prices and offers are modified depending on the
                    trends observed in the market.
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
                <h4>Experience</h4>
                <p>
                  Our entire workforce is highly experienced and skilled to
                  handle your business needs. There are no chances of “rookie
                  mistakes”.
                </p>
              </div>
              <div className="roundcard">
                <h4>UK-based</h4>
                <p>
                  Our completely UK-based workforce of native English speakers
                  is suitable for communication with the majority of people in
                  the world, considering English is the most widely spoken
                  language.
                </p>
              </div>
              <div className="roundcard">
                <h4>24x7</h4>
                <p>
                  Our offices operate 24x7 to ensure that any emergency or
                  sudden need in your supply chain can be immediately noticed
                  and addressed, minimising losses and maximising reliability.
                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                  Your supply chain logistics are secretive and confidential. We
                  understand that your critical business data is stored safely
                  with us and is never shared with your competitors or any
                  unauthorised person.
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
export default Supplychain;
