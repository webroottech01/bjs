import React from "react";
import "./contact-center.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";
import { Helmet } from "react-helmet"; 

const ContactCenter = () => {
  const accountfaqs = [
    {
      faq_heading: "What are Contact Centre Services?",
      description:
        "Contact Centre services are dedicated centres that manage your communication. They have trained professionals who are involved in communicating with current/potential customers or making calls to generate leads per your needs.",
    },
    {
      faq_heading: "How Much Do Call center solutions in the UK Cost?",
      description:
        "Contact Centres largely work on the concept of economies of scale. The more communication there is, the lesser the cost per communication. Another factor is the services that you choose. The costs can vary based on whether you are looking to handle inbound communication, outbound communications, or both. However, for all use cases, BJS is one of the best choices, with special low-cost options curated to start as packages for upscale firms.",
    },
    {
      faq_heading:
        "What Customisation Options Do I Get With Contact Centre Services?",
      description:
        "Many customisation opportunities are available with top contact centre services like BJS. At BJS, you can set custom scripts for inbound/outbound communications. You may also implement a hybrid model where we handle only a portion of your communications. Custom caller tunes, toll-free numbers, custom holding tone, and more, you name it, and we will get it done.",
    },
    {
      faq_heading: "Are these services really working 24/7?",
      description:
        "Yes, services offered by BJS run 24 hours, 7 days a week, 365 days a year. We work 24 hours a day to ensure your clients get a consistent and reliable experience for you. Ofcourse, we work shifts for employees to take care of their well-being, but the multiple shifts together cover the entire day for you.",
    },
    {
      faq_heading: "Do you provide Call center solutions for small businesses?",
      description:
        "Yes, we provide contact centre services to Small businesses as well as to big enterprises.",
    },
  ];

  return (
    <>
    <Helmet>
        <title>
        BJS is the Best Call Center Solution Provider in UK
        </title>
        <meta
          name="description"
          content="Handling communications across multiple platforms can be an additional task for most businesses. Hire BJS that offers call center solutions for omni-growth."
        />
      </Helmet>
      <div className="contact-center solutions-subpage">
        <Banner title={"Contact Centre Services"} innerpage /> 
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img alt=""
                    src={process.env.PUBLIC_URL + "/images/contactcenter.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Scalable Communication Solutions</span>
                <h3 className="secheading">
                  Providing a seamless contact centre solution for your
                  business.
                </h3>
                <p className="mb-0">
                  Managing communications across multiple platforms can be a big
                  task for most businesses. From fielding calls and responding
                  to live chats to managing emails and making cold calls,
                  staying on top of it all can be a challenge.
                </p>
                <p className="mb-0 mt-4">
                  At Beyond Just Service, we provide a 24x7 contact centre
                  services designed to streamline your communications and give
                  you the room to grow. Our agents integrate seamlessly with
                  your team, delivering a consistent brand experience that
                  reflects your company's values and standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Contact Centre Services
            </h2>
            <h3>
              Most of us consider managing communication to be a fairly simple
              and manageable task. But we beg to differ. Here are five
              advantages of using a dedicated contact centre service over using
              your own.
            </h3>
            <div className="triangle-cards">
              <div className="card">
                <div className="icon">
                  <img alt=""
                    src={
                      process.env.PUBLIC_URL + "/images/customer-service.png"
                    }
                  />
                </div>
                <div className="card-cont">
                  <h4>Flexible</h4>
                  <p>
                    Our flexible plans ranging from a single agent to a fully
                    managed, full-stack service – are scalable up and down to
                    meet demand
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="" src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Omnichannel </h4>
                  <p>
                    The communications experience we have means we’ve got all
                    channels covered, allowing you to offer your customers more
                    from the get-go.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <img alt=""
                    src={process.env.PUBLIC_URL + "/images/customer-care.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Scalability</h4>
                  <p>
                    With multi-user support, our contact centre solution enables
                    multiple team members to manage your communications
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="" src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Integration</h4>
                  <p>
                  We are an extension to your business, so our customisable contact centre services integrate with a variety of CRM software, third-party tools, and other services.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <img alt=""
                    src={process.env.PUBLIC_URL + "/images/personal-assist.png"}
                  />
                </div>
                <div className="card-cont">
                  <h4>Cost reduction</h4>
                  <p>
                  Whether you’re looking for a cost reduction for your business, or a cost reduction for your customers, we can help!
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt=""
                    src={process.env.PUBLIC_URL + "/images/insurance-agent.png"}
                  /> 
                </div>
                <div className="card-cont">
                  <h4>Brand Reputation
</h4>
                  <p>
                  A well-managed contact centre enhances your brand's reputation by providing exceptional customer service, resolving issues promptly, and fostering customer loyalty and advocacy.

                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="small-strip">
          <div className="container-med">
            <h3 className="iconheading">
              <img src={process.env.PUBLIC_URL + "/images/successfulblk.png"} alt=""/>
              Outsourced Contact Centres
            </h3>
            <p className="mb-0">
            Outsourcing customer support to our professional UK-based contact centres means you can focus on core business activities while we handle customer interactions. This not only improves customer experience but also alleviates the burden of managing in-house support staff.
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Contact Centre Services
            </h2>
            <h3>Here are some benifits of BJS Contact Centre Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>24x7 Operations</h4>
                <p>
                Your business never sleeps, and neither do we! Our round-the-clock services ensure that your needs are met at any time of day, with our skilled staff available across multiple shifts, meaning we’re there when you need us.

                </p>
              </div>
              <div className="roundcard">
                <h4>Data Security</h4>
                <p>
                We adhere to strict procedures and guidelines to keep your data secure. Critical information is shared only on a need-to-know basis, securely, ensuring privacy and confidentiality, and peace of mind for you.
                </p>
              </div>
              <div className="roundcard">
                <h4>Expert Training</h4>
                <p>
                Our in-house training academy ensures that all our employees are meticulously trained and equipped to provide a personalised experience for your business. 

                </p>
              </div>
              <div className="roundcard">
                <h4>Consultation Services</h4>
                <p>
                Our specialist account managers are always available to address your concerns, providing expert advice and tailored solutions to meet your contact centre services needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some use cases of Contact Center Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Customer Support
</h4>
                <p>
                BJS omnichannel contact centres are ideal for customer support, ready to handle inquiries, resolve issues, and provide seamless communication.

                </p>
              </div>
              <div className="roundcard">
                <h4>Virtual Receptionist</h4>
                <p>
                Easily manage customer appointments, schedule meetings, and coordinate events with our virtual receptionist services.

                </p>
              </div>
              <div className="roundcard">
                <h4>Customer Outreach</h4>
                <p>
                Utilise our centres for proactive customer outreach, including cold calls, lead generation, and re-engaging disengaged customers to grow your business.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Why Choose BJS?</h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Industry Expertise
</h4>
                <p>
                We serve a diverse array of clients from various industries, including automobile, finance, real estate, logistics, supply chains, and more, both in the UK and globally.
                </p>
              </div>
              <div className="roundcard">
                <h4>Comprehensive Training</h4>
                <p>
                Our in-house training academy ensures that our workforce meets stringent standards, providing consistent and proficient service. This competitive edge sets us apart from other Call center solution providers.
                </p>
              </div>
              <div className="roundcard">
                <h4>Transparency</h4>
                <p>
                We offer comprehensive reports, data, and usage details to give you a clear overview of every activity. This transparency allows you to optimise costs and conversions effectively, ensuring you are always in control.
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


export default ContactCenter;
