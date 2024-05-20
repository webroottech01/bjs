import React from 'react';
import './e-commerce.scss';
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs"; 

const ECommerce = () => {
  const accountfaqs = [
    {
      faq_heading: "Is it safe to outsource services?",
      description:
        "Without a doubt. For services like customer support, account management, and other services, some of the most successful business service outsourcing companies, such as BJS in the United Kingdom, operate under stringent restrictions and contracts and are held to a quality level that is far higher than that of the majority of in-house setups.",
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
      <div className="e-commerce page">
        <Banner title="E-commerce" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Operational Excellence</span>
                <h3 className="secheading">
                Managing Logistics, Finance, and Sales
                </h3>
                <p className="mb-0">
                E-Commerce is an industry of tight margins. Every dime is precious, and every minute is make or break. Businesses need to have their systems in perfect condition to be able to grow and succeed in such a tight market. That’s where BJS comes into play.
                </p>
                <p className="mb-0 mt-4">
                Our service infrastructure ensures that critical business components like e-commerce support, logistics, bookkeeping, sales, and business processes run as smoothly as possible with minimum hiccups.
                </p>
                <p className="mb-0 mt-4">
                Keeping customers satisfied and maintaining consistency in all these activities is a herculean task that can only be achieved by industry experts like BJS.

                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/ecommerce.jpg"}
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
            Our team offers services and solutions to help you at every step of your business. We make sure your business runs as smoothly as possible.

            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
            What are Outsourced Services?  <br /> Do E-Commerce Companies Benefit from Outsourcing 

            </h3>
            <p>
            Has it ever happened that your delivery agent left your facility to perform a delivery and took unreasonably long? Did you ever wish you had a way of knowing the progress of the field agent? Another question: how many times have issues in one process caused a ripple effect on your workflow?
            </p>
            <p>
            We know what you might have answered. No need to feel bad. Most businesses struggle with these issues. That’s why we at BJS offer robust services that help better manage all your pain points and ensure smooth operations, growth, and business success.
            </p>
            <p>
            Among all the outsourcing firms, BJS is the best-outsourced business services firm in the UK for all your needs and requirements, thanks to our focus on quality results for each of our customers.
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
                  <h4>Field Agent Management
</h4>
                  <p>
                  BJS offers robust tracking tools, software solutions, management tools, and performance metrics for all your field agents. It lets you easily track and monitor all delivery agents and personnel outside your office. In addition, our service tracks the performance of every employee and makes sure unexpected issues are minimised.
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
                  <h4>E-Commerce Support
</h4>
                  <p>
                  Our support agents work 24/7 to ensure customers can get support and assistance as and when they need it. We design and support rubrics with proper procedures, steps, and guides to ensure your customers are guided in the way you like. We implement custom call-answering messages, caller tunes, greetings, and more at your discretion to create a truly unique experience for your clients. Your customers can’t distinguish between our outsourced services and in-house setups.
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
                  <h4>Virtual PA</h4>
                  <p>
                  Our personal assistants handle all your calls, communications, and client relations. Going to a business meeting? Our PA will automatically handle travel, reservations, and scheduling. Perhaps a client wants to meet you? We’ll book a table at the restaurant. You can have your PA perform tasks like sending greetings, thank you notes, and birthday wishes on your behalf. This frees up your time and lets you focus on more important things.

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
                  <h4>Finance & E-Commerce Management
</h4>
                  <p>
                  Our services ensure that your e-commerce systems are properly maintained, which includes collecting data, doing maintenance, and conducting analysis. Furthermore, applying appropriate tactics and considering supply and demand are necessary to keep your firm running smoothly. To maximise profitability and scalability, prices and offers are modified depending on the trends observed in the market. While we concentrate on our management obligations, you can freely focus on your e-commerce product development.
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
                  <h4>Customer Support
</h4>
                  <p>
                  The importance of E-Commerce customer support cannot be underestimated. Issues like damaged goods, issues with warranty, and setup difficulties can be handled very easily with responsive support. It ensures that despite issues, the actual customer experience is still reasonable. We at BJS are proud of our quick support of all communication requests instantly, ensuring customer satisfaction.
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
                  E-commerce businesses need highly optimised processes to ensure that the raw material procurement, manufacturing, packaging, delivery, costing, taxation, and various other processes are working properly. Our Process Optimisation experts have decades of experience in fixing bottlenecks, finding performance gains, and implementing reliability improvements in the E-Commerce industry.
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
                <h4>One Stop Solution</h4>
                <p>
                We offer multiple services under the same roof. No need to hire a different firm for every service. We have got you all covered.

                </p>
              </div>
              <div className="roundcard">
                <h4>24x7</h4>
                <p>
                We have our staff working 24x7 to ensure your work never suffers, and we are always there to cater to your needs.

                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                As your company is one of a kind, the services you provide and the requirements you have are likewise one of a kind. We tailor our services to meet your specific needs in the most effective manner. 

                </p>
              </div>
              <div className="roundcard">
                <h4>Workforce</h4>
                <p>
                We hire well-vetted, thoroughly verified staff that is capable of handling all your needs properly.
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

export default ECommerce;
