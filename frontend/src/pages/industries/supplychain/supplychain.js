import React from "react";
import "./supplychain.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Supplychain = () => {
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
      <div className="supplychain">
        <Banner title="Supply Chain" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Financial Efficiency</span>
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
        <div className="bgpeach small-strip">
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
                  <h4>Virtual PA</h4>
                  <p>
                  Supply Chain businesses are largely driven by strong and robust relationships between businesses. To foster such relationships, constant meetings, visits, and office tours are arranged. Our PA service ensures that all your needs are met. The PA would maintain your calendar, schedule your day(s) ahead, book tickets and hotel reservations, plan itineraries, and more for visits with clients. The virtual PA ensures you can focus on your business negotiations and dealings, while the rest of the activities, like planning, scheduling, coordinating, and documenting, are handled by them.
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
                  We provide a comprehensive range of tracking tools, software solutions, management tools, and performance metrics to support your field agents. With this tool, you can effortlessly keep tabs on and oversee all delivery agents and personnel who are not in the office. Our service diligently monitors the performance of each employee, ensuring that any unforeseen issues are kept to a minimum.

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
export default Supplychain;
