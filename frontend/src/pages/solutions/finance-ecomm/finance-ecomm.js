import React from "react";
import "./finance-ecomm.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const FinanceEcomm = () => {
  const accountfaqs = [
    {
      faq_heading: "What are Finance & E-Commerce services??",
      description:
        "Finance & E-Commerce services help optimise all your financial activities, reducing losses, minimising taxes, maximising sales, and improving efficiency to maximise your earnings in the long term.",
    },
    {
      faq_heading: "How do Finance and E-Commerce services work?",
      description:
        "Outsourced Finance/E-Commerce services begin by collecting data for your entire business operations. They understand your key concerns, problems, and priorities. The data collected is used to perform analysis and implement changes to help grow your business and resolve any issues that you might be facing.",
    },
    {
      faq_heading: "Who should hire Finance & E-Commerce Services?  ",
      description:
        "Everyone from minor to large-scale enterprises can benefit from our services. At BJS, we provide scalable customisable solutions perfect for all your needs. We can save time and help you grow significantly faster.",
    },
  ];

  return (
    <>
      <div className="finance-ecomm solutions-subpage">
        <Banner title={"Finance & E-Commerce"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img
                    src={process.env.PUBLIC_URL + "/images/finandecom.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Financial Growth</span>
                <h3 className="secheading">Maintain finance and grow sales</h3>
                <p className="mb-0">
                  Proper cash flow, tax preparations, and financial planning can
                  go a long way in helping a company grow. Modern cut-throat
                  competition necessitates optimised finance and e-commerce that
                  puts your firm in a position for the best growth prospects.
                </p>
                <p className="mb-0 mt-4">
                  We have all been in a situation where we kept a vendor waiting
                  because our own payments were stuck. Or, a massive expansion
                  plan comes to a halt due to improper cash flow management. Not
                  to mention, random glitches in e-commerce management result in
                  losses. Your business can largely benefit from Finance &
                  E-Commerce services offered by BJS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Finance & E-Commerce Services
            </h2>
            <h3>
              Before discussing why we are the best, let's spread some light on
              why you need to purchase Finance & E-Commerce Services:
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
                  <h4>Platform Management</h4>
                  <p>
                    E-commerce platforms like WooCommerce, Shopify, and more are
                    straightforward to configure yet complicated to manage and
                    optimise for growth. Industry experts optimise the prices to
                    balance supply and demand and constantly run analyses to
                    maximise sales and profit per sale.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Experience</h4>
                  <p>
                    Our team is trained to ensure a consistent, reliable, and
                    delightful experience for all your customers. We optimise
                    systems and procedures to ensure that all our financial and
                    e-commerce services are perfectly aligned with your values
                    and best interests.
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
                  <h4>Analytics </h4>
                  <p>
                    Our Finance and E-Commerce teams carefully analyse data,
                    find insights, and make data-driven suggestions and
                    recommendations for your needs. This helps you better
                    understand and improve your business.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Optimisation</h4>
                  <p>
                    Optimising the UI can include simple things like creating a
                    FOMO message, improving loading times in e-commerce, etc.,
                    and more complicated stuff like implementing product
                    recommendations and retargeting ads.
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
                  <h4>Taxation</h4>
                  <p>
                    Your products are the most critical part of your business.
                    Optimising taxation through Finance & E-Commerce services
                    can help you avail maximum input credit, pay minimum upfront
                    taxes, and reduce costs overall.
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
                  <h4>Planning</h4>
                  <p>
                    You need proper financial planning if you plan on buying a
                    new office, changing locations, restructuring teams, adding
                    new products, or any other significant change. Finance &
                    E-commerce professionals can make proper plans to ensure you
                    have the financial resources to execute the plans properly.
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
              Finance & E-Commerce Services
            </h3>
            <p className="mb-0">
              It is in your best interests to look for finance and e-commerce
              services that can catalyse your business growth.
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS Financial Services</h2>
            <h3>Here are some benifits of BJS Financial Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                  Our trained staff has gone through extensive background checks
                  and has years of experience in handling your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                  All customer data, financial statements, and other details are
                  privileged and stored securely with no chance of leaks. Only
                  employees directly involved with your firm will be given
                  access on a need-to-know basis.
                </p>
              </div>
              <div className="roundcard">
                <h4>Scalability</h4>
                <p>
                  Our services are highly scalable. We can accommodate rapid
                  growth in your business by instantly dedicating more of your
                  workforce to you.
                </p>
              </div>
              <div className="roundcard">
                <h4>Track Record</h4>
                <p>
                  As you can see in our testimonials, our glorious track record
                  speaks for itself. We have served happy clients in many
                  industries and regions with unique requirements achieving
                  great success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some use Cases of Financial Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Platform Management</h4>
                <p>
                  Platform management ensures that all your products look good
                  on the e-commerce platforms. Pricings are adjusted for maximum
                  growth with techniques like surge pricing, supply/demand
                  analysis, etc.
                </p>
              </div>
              <div className="roundcard">
                <h4>Data</h4>
                <p>
                  They gather data and perform analysis to find areas for
                  improvement. Our services also help in maintaining compliance
                  with GDPR and other laws through proper data protection.
                </p>
              </div>
              <div className="roundcard">
                <h4>Finance</h4>
                <p>
                  Proper financial planning, payment processing, accounting,
                  bookkeeping, and various other tasks are executed with
                  perfection by our experienced staff.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Finance & E-Commerce Services
            </h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Industries</h4>
                <p>
                  We have worked in almost all sectors achieving impressive
                  results with minimum effort. Our team has experience in
                  e-commerce, manufacturing, logistics, supply chains, etc.
                </p>
              </div>
              <div className="roundcard">
                <h4>Localisation</h4>
                <p>
                  BJS localises the pricing in the regional currencies and
                  supports fast and efficient payment processing, creating an
                  ideal experience. This reduces customer drop-off, maximises
                  revenue, and aids business growth.
                </p>
              </div>
              <div className="roundcard">
                <h4>Flexibility</h4>
                <p>
                  Our services are very flexible and designed to be adaptable to
                  your needs. Our finance executive will align the schedule and
                  timings to match your business requirements. Any specific
                  needs, small or large, will be taken care of.
                </p>
              </div>
              <div className="roundcard">
                <h4>Integration</h4>
                <p>
                  One of the difficult parts of finance & e-commerce management
                  is coordination between different departments. Coordinating
                  logistics, process management, delivery, sales, customer
                  support, and more. We handle them all.
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

export default FinanceEcomm;
