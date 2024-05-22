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
    faq_heading : 'What are Account Management Services?',
    description : 'As the name suggests, Account Management Services maintains your account. It tracks all current and future incoming/outgoing transactions. They perform bookkeeping and track the flow of goods through your firm.'
  },
  {
    faq_heading : 'How Do Account Management Services Work?',
    description : 'You can find quality account management services for really cheap prices. However, they would not have the experience, skills, and software solutions to match your expectations. That’s why you should consider quality services like BJS. We at BJS meet all your requirements and expectations while still being reasonably competitive in the price.'
  },
  {
    faq_heading : 'Can I Customise My Account Management Service at BJS?',
    description : 'Yes, ofcourse. We can fine-tune our services to meet your demands. Everything, including working hours, periodic reports, SOPs, integrations, and coordination, can be adapted to match your needs.'
  },
  {
    faq_heading : 'Are Account Management Services Useful?',
    description : 'Truth be told, if you are a tiny firm with about a dozen or so transactions monthly, you should handle these things better. However, once you achieve some scale, trusting expert account management services in the UK, such as BJS, is better. They help optimise procedures, resolve bottlenecks, save taxes, and reduce burdens.'
  }
]

  return (
    <>
      <div className="account-managment solutions-subpage">
        <Banner title={"Account Managment"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img src={process.env.PUBLIC_URL + "/images/accounting.jpg"} />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Account Oversight</span>
                <h3 className="secheading">
                  Manage your Payable / Receivable Accounts
                </h3>
                <p className="mb-0">
                  We have all been there when, in a hurry, we forget to do some
                  critical tasks. On a personal level, such issues might not be
                  consequential. However, in business, critical tasks like
                  bookkeeping and managing accounts payable and receivable are
                  extremely important.
                </p>
                <p className="mb-0 mt-4">
                  Improper account management not only makes logistics and
                  planning difficult but also exposes you to various legal and
                  regulatory compliance issues as well. But, lucky for you, BJS
                  offers robust account management services to maintain, update,
                  tally, and cross-verify your records.
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
                  <h4>Errors</h4>
                  <p>
                    You never have to worry about adding/removing a zero from
                    the numbers, not considering certain transactions, etc. The
                    account Manager handles everything without errors.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Optimisation</h4>
                  <p>
                    With proper bookkeeping, you get the precise, latest data
                    about your firm’s performance. This is critical for
                    decision-making and optimising business operations.
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
                  <h4>Disputes</h4>
                  <p>
                    Proper time-stamped data of what goes in and out
                    (physically, financially, and digitally) can be critical in
                    case any disputes arise between you and your clients. It
                    helps you be legally protected.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Tax Benefits</h4>
                  <p>
                    Knowing your sales, expenditures, costs, and other details
                    can be critical when filing tax returns to avail tax
                    benefits and gain financial advantages.
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
                  <h4>Payments</h4>
                  <p>
                    These services make sure all the expenses, including
                    affiliate payments, vendor dues, and salaries, are paid on
                    time, ensuring no late fees and happy partners.
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
                  <h4>Risk Mitigation</h4>
                  <p>
                    Professional account management services help mitigate
                    financial risks by implementing robust internal controls,
                    compliance measures, and fraud detection mechanisms.
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
              Account Management Services
            </h3>
            <p className="mb-0">
              Instead of hiring, training, and managing accountants and
              bookkeepers, let us do the job for you. BJS will ensure you enjoy
              all the advantages of Account Management Services at minimum
              costs.
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
                <h4>Experience</h4>
                <p>
                  The work of account management requires a skilled and
                  experienced professional to be able to manage, compile, and
                  maintain data properly. We provide professional account
                  managers with proven track records for your firm.
                </p>
              </div>
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  We take the training and learning of our account managers very
                  seriously. With proper knowledge and training, they quickly
                  understand and align with your business needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Technology</h4>
                <p>
                  Ever since our establishment, we have used cutting-edge
                  technologies to optimise workflow. Even here, we use the
                  latest software stacks and integrations to ensure precise
                  working.
                </p>
              </div>
              <div className="roundcard">
                <h4>Costs</h4>
                <p>
                  Experienced accountants can use every clause in the tax code
                  to help optimise tax returns and save you a lot of money in
                  the long run.
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
                <h4>Accounts Payable</h4>
                <p>
                  Always remain cognizant of the upcoming payments, including
                  salaries, debts, rents, input expenses, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>Taxes, Fees, and Charges</h4>
                <p>
                  Proper tracking of all the transactions and financial
                  activities helps you find unexpected gains in saving taxes and
                  minimising fees/charges for you.
                </p>
              </div>
              <div className="roundcard">
                <h4>Accounts Receivable</h4>
                <p>
                  Our services keep a close eye on expected payments. Deferred
                  payments from clients, vendor fees, retailer payments, and
                  more are all tracked. If defaulted actions are taken, you will
                  be notified.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS Contact Centre Services</h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>24x7 Support</h4>
                <p>
                Our support staff works 24x7 in multiple shifts to ensure complete coverage and availability for your customers.

                </p>
              </div>
              <div className="roundcard">
                <h4>Native English Speakers</h4>
                <p>
                Our staff is composed of native English speakers, mostly from the UK, ensuring proper command and understanding of English.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalised</h4>
                <p>
                All services are personalised, and we can implement custom guidelines, scripts, caller tunes, and various other features to adapt to your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Sales</h4>
                <p>
                A proper knowledge base helps our staff have an in-depth understanding of the topic. This is crucial for taking sales calls and converting potential customers.

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
