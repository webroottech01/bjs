import React from "react";
import "./finance.scss"; 
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Finance = () => {
  const accountfaqs = [
    {
      faq_heading: "Is it safe to outsource services?",
      description:
        "Ofcourse. Some of the best business service outsourcing brands, like BJS in the UK, work under tight regulations and contracts and at a quality standard far exceeding most in-house setups for services like customer support, account management, and more.",
    },
    {
      faq_heading:
        "Can I get customised services to match my business needs?",
      description:
        "Ofcourse, BJS is the best outsourced business services provider in the UK and is known for its personalisation and customisation capabilities. We will optimise the services to match your unique use case and business requirements. Our customer success agents will actively engage and adjust to ensure our workflow aligns with your service.",
    },
  ];
  return (
    <>
      <div className="finance">
        <Banner title="Finance" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Financial Efficiency</span>
                <h3 className="secheading">
                  Maintain Compliance And Maximise Growth
                </h3>
                <p className="mb-0">
                  The finance industry is a fast-moving sector. Every minute
                  wasted is money lost. Focusing on less-important tasks like
                  customer support, account management, or HR is the time you
                  could have invested into growing your business.
                </p>
                <p className="mb-0 mt-4">
                  At the same time, the Finance industry requires precision and
                  control at every level to ensure proper legal and regulatory
                  compliance. In addition, you are always looking for minimising
                  overhead costs, taxes, and losses…
                </p>
                <p className="mb-0 mt-4">
                  Handling all this yourself is a bad idea. Instead, you should
                  look into outsourced service providers to effectively handle
                  your business needs.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/finance.jpg"}
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
              Complete Solution
            </h3>
            <p className="mb-0">
              We have every arrow in our quiver to meet your needs and execute
              all tasks to perfection. Connect with us today.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br /> Do Financial Institutions
              Benefit from Outsourcing
            </h3>
            <p>
              A few years ago, managing everything in-house was considered a
              reasonable strategy. But today, as a business owner in the Finance
              industry, spending your precious time on non-critical tasks like
              meetings, human resource management, tax filings, and field agent
              tracking is not a wise choice.
            </p>
            <p>
              In other words, your focus should be 100% on the financial matters
              at hand since that is your core business. Everything else can be
              delegated to save time and ensure better quality for you.
              Outsourcing services help focus on important things, and the rest
              of the things get handled seamlessly in the backend with little to
              no involvement needed from your side.
            </p>
            <p>
              Among all the outsourcing firms, BJS is the best-outsourced
              business services firm in the UK for all your needs and
              requirements.
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
                  <h4>E-Commerce Support</h4>
                  <p>
                    As a business in the finance industry, you must serve your
                    customers quickly and with proper satisfaction. Our 24/7
                    UK-based customer service with native English speakers and
                    years of experience is ideal for handling all your
                    e-commerce needs. You can configure custom caller tunes,
                    call answering scripts, and more.
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
                    We know the pain that finance firms go through in handling
                    their diverse workforce of various on-role, off-role,
                    contractual, and freelance employees. Properly tracking
                    leaves, work hours, performance, compliance, employee
                    benefits, and more is challenging. That’s why you should
                    consider outsourced services instead. Our outsourced
                    services can autonomously handle all your HR requirements.
                    We ensure that proper legal compliance is maintained and
                    employee welfare is taken care of using employee benefits,
                    engagement drivers, and more.
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
                    Your E-Commerce and financial systems require proper
                    maintenance of the platform, data collection, maintenance,
                    and analysis. In addition, proper strategies must be
                    implemented, taking into account supply/demand and
                    maintaining your business. Prices and offers are adapted
                    based on market trends to maximise profits and scalability.
                    We ensure that you can focus on growth while we focus on
                    management responsibilities.
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
                  <h4>Call Centres</h4>
                  <p>
                    Finding new customers and generating leads requires a lot of
                    effort and patience. The easiest way to implement this is
                    via our robust call centres. They convert your leads or
                    generate new business leads through cold calls. The
                    interactive, engaging, and cheerful personnel are ideal for
                    winning your potential clients and growing your business.
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
                  <h4>Virtual PA</h4>
                  <p>
                    Our virtual PA eases your workload by handling coordination,
                    designing, scheduling, and more for you. It’s not possible
                    for you to always take calls from business partners and
                    potential clients. In addition, scheduling meetings, making
                    reservations, coordinating schedules, and more can be
                    time-consuming. Our virtual PA is available at every step,
                    ensuring all these things get handled on the back end
                    without you exerting any effort.
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
                  <h4>Process Consulting</h4>
                  <p>
                    Financial services and products need to follow proper
                    processes and regulations to maintain legal compliance. This
                    can include data collection, handling, safety, privacy, and
                    more rules. Our process consulting services help optimise
                    the processes to ensure all your needs are adequately met
                    and cared for. In addition, they help optimise systems and
                    redesign processes to extract unrealised gains that help in
                    business growth.
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
                  One of the significant concerns in outsourcing is uncertainty
                  about staff training and qualifications. Lucky for you, we
                  thoroughly background check our workforce, hire quality staff,
                  and provide extensive training to make them ready for you.
                </p>
              </div>
              <div className="roundcard">
                <h4>Consultation</h4>
                <p>
                  We realise that sometimes you need advice in certain
                  situations. Our experts can help you quickly navigate the tax,
                  compliance, legal, management, and logistics corners.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                  Just like your unique business, your services and needs are
                  also exceptional. We personalise services to best adapt to
                  your requirements.
                </p>
              </div>
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                  Across all the services offered, we deploy thoroughly trained
                  and experienced staff that can quickly understand and handle
                  your needs.
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
export default Finance;
