import React from "react";
import "./hospitality.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Hospitality = () => {
  const accountfaqs = [
    {
      faq_heading: "What services can be outsourced in the hospitality sector?",
      description:
        "The hospitality sector is already a very tough sector to crack for businesses due to its competitive nature and very tough-to-please target audience. You can help manage the work by outsourcing services like HR management, financial planning, customer support, marketing & sales to top organisations. One such company is BJS, which is best known for its outsourced business services that help businesses across various industries, including hospitality.",
    },
    {
      faq_heading: "How can I get customised solutions for my needs?",
      description:
        "Cheaper services might need to be able to handle your unique needs. However, top outsourced company providers like BJS can actually offer highly customised plans that best suit your needs. We at BJS can modify and adjust anything and everything to better adapt to your use case requirements.",
    },
  ];
  return (
    <>
      <div className="hospitality industries-subpage">
        <Banner title="Hospitality" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Streamlined Solutions</span>
                <h3 className="secheading">
                  Punctual and Effective Services For Your Business Needs
                </h3>
                <p className="mb-0">
                  In the hospitality sector, customer experience is everything.
                  The tiniest slip-up can have significant consequences in terms
                  of legalities, reputations, public perception, and brand
                  image.
                </p>
                <p className="mb-0 mt-4">
                  While you might be a pro in your core business proposition,
                  there are aspects of business like financial planning, account
                  management, customer support, and sales that might not get the
                  attention they deserve.
                </p>
                <p className="mb-0 mt-4">
                  Handling all these things is critical, yet it is not feasible
                  for you to be handling everything. Instead, professional
                  outsourced service providers can handle these for you, saving
                  time and resources while delivering industry-leading quality.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/hospitality.jpg"}
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
              hospitality customers.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
            What are Outsourced Services? <br /> Do Hospitality Firms Benefit from Outsourcing
            </h3>
            <p>
            Outsourced services handle aspects of your business that are critical yet not the core proposition for your business. For a restaurant, its food will be the core proposition, but human resource management, despite being critical, will not be the most important thing on its list.
            </p>
            <p>
            We at BJS take up all these tasks to ease your workload and let you focus on your core work. Our intelligent, well-trained staff takes responsibility for all these tasks and executes them to perfection. 
            </p>
            <p>
            BJS has decades of experience in serving the hospitality sector. All our workforce are given proper training to ensure that they are able to match the needs and expectations of hospitality businesses.
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
                  Call Centre Services are especially critical for tourism, food, and leisure-based businesses. Customers should be able to easily reach you and make reservations, book tickets, or get answers to their queries. Based on your requirements, our staff can handle all incoming calls 24x7 to give your customers an ideal experience.
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
                  Human Resources (HR) involves ensuring proper regulatory compliance and well being of all your employees. This includes tracking work hours, compensation for overtime, provisions for paid leaves, etc. Managing Human Resources is time-consuming, yet even the smallest mistakes in HR management can snowball into large legal battles. We at BJS ensure your employees give their maximum performance while still being mentally stable, healthy, and overall satisfied. Proper employee benefits, insurance, bonuses, and more are designed to keep morale high.

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
                  Let’s say there’s a major festival coming up. You would want to invest in additional resources, workforce, and decorations to attract and serve customers properly. To be able to execute it, you would need a lot of savings and planning. Most people are not very good at it. Fortunately, BJS offers financial consultation to help you effectively plan, save, and optimise your business for all upcoming financial activities. Our consultants also advise you on suitable price hikes to appropriately leverage the festival rush, balancing profits and sales.

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
                  <h4>Process Consulting
</h4>
                  <p>
                  Hospitality is largely a process-driven industry. There are certain processes in the life cycle of each customer that must operate with perfection for an ideal consumer experience. We help identify areas for improvement, improve efficiencies to save money, and redesign procedures to ensure your costs are minimal. 
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
                  <h4>Integrated Sales
</h4>
                  <p>
                  Our revolutionary sales procedures combine the marketing and sales departments to ensure that the customer is never left high and dry anywhere between lead generation and onboarding. For example, as a tourist agency, your marketing team might have generated leads from prospective customers. But, our slow sales team wasn’t properly made aware of the special needs and concerns of clients, resulting in offers getting rejected. Instead, our unified team understands the customer, curates plans, and ensures proper communication and care until the sale is complete.

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
                  <h4>Experience Enhancement</h4>
                  <p>
                  In the hospitality industry, customer experience reigns supreme. Every interaction, from the moment a guest considers your services to the time they check out, shapes their perception of your brand. At BJS, we specialize in enhancing customer experiences to foster loyalty and drive positive word-of-mouth. 
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
                We train our employees to be efficient and accurate in their work. Everything they do for you will be driven by our advanced training program, which will help them be of great help to you.

                </p>
              </div>
              <div className="roundcard">
                <h4>Care</h4>
                <p>
                At BJS, all customers, regardless of scale, are treated equally. We put great attention to detail and care in all our activities to ensure our customers remain satisfied.

                </p>
              </div>
              <div className="roundcard">
                <h4>Transparency</h4>
                <p>
                With proper reports, data, and monitoring dashboards, complete transparency is maintained about all the activities.

                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                Your customer's personal data and information are quite critical to you; we understand and realise that very well. All your critical data is stored safely and kept with utmost security, ensuring no unauthorised access.

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
export default Hospitality;
