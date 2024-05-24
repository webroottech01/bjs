import React from 'react';
import PropTypes from 'prop-types';
import './contact-center.scss';
import Banner from '../../../components/banner/banner';
import FaqTabs from '../../../components/faq-tabs/faq-tabs';
import ContactTeam from '../../../components/contact-team/contact-team';
import TestimonialSlider from '../../../components/testimonial-slider/testimonial-slider';

const ContactCenter = () => {
  const accountfaqs = [ 
    {
      faq_heading : 'What are Contact Centre Services?',
      description : 'Contact Centre services are dedicated centres that manage your communication. They have trained professionals who are involved in communicating with current/potential customers or making calls to generate leads per your needs.'
    },
    {
      faq_heading : 'How Much Do Contact Centre Services in the UK Cost?',
      description : 'Contact Centres largely work on the concept of economies of scale. The more communication there is, the lesser the cost per communication. Another factor is the services that you choose. The costs can vary based on whether you are looking to handle inbound communication, outbound communications, or both. However, for all use cases, BJS is one of the best choices, with special low-cost options curated to start as packages for upscale firms.'
    },
    {
      faq_heading : 'What Customisation Options Do I Get With Contact Centre Services?',
      description : 'Many customisation opportunities are available with top contact centre services like BJS. At BJS, you can set custom scripts for inbound/outbound communications. You may also implement a hybrid model where we handle only a portion of your communications. Custom caller tunes, toll-free numbers, custom holding tone, and more, you name it, and we will get it done.'
    },
    {
      faq_heading : 'Are these services really working 24/7?',
      description : 'Yes, services offered by BJS run 24 hours, 7 days a week, 365 days a year. We work 24 hours a day to ensure your clients get a consistent and reliable experience for you. Ofcourse, we work shifts for employees to take care of their well-being, but the multiple shifts together cover the entire day for you.'
    } 
  ]
  
    return (
      <>
        <div className="contact-center solutions-subpage">
          <Banner title={"Contact Centre Services"} innerpage />
          <div className="container-med">
            <div className="right-splitsec leftimgtype">
              <div className="row align-items-center ">
                <div className="col-md-12 col-lg-6">
                  <div className="splitimg-part">
                    <img src={process.env.PUBLIC_URL + "/images/callinggrp.jpg"} />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <span className="">Communication stability</span>
                  <h3 className="secheading">
                  Manage all your inbound and outbound communications.
                  </h3>
                  <p className="mb-0">
                  It's no secret that managing communications through multiple channels is a tedious task. Being always available to pick up the calls, reply to live chat and emails, or be diligent enough to make cold calls continuously is not everybody’s cup of tea.
                  </p>
                  <p className="mb-0 mt-4">
                  That’s why we at BJS offer robust 24x7 contact centre services to make and take calls on your behalf. The communication is done in your name and is indistinguishable from the communication made by your own staff.
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
              Most of us consider managing communication to be a fairly simple and manageable task. But we beg to differ. Here are five advantages of using a dedicated contact centre service over using your own.
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
                    <h4>Professionalism</h4>
                    <p>
                    A telephone number looks more professional and gives the sense of an established brand compared to an unknown, personally helpful mobile number.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                  </div>
                  <div className="card-cont">
                    <h4>Personal Life
</h4>
                    <p>
                    Telephone services ensure that all business communication happens on the telephone channels, ensuring little to no interference in your personal life.

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
                    <h4>Multi-user
</h4>
                    <p>
                    Multiple users in a firm can use the same communications, making it more scalable. Calls can be transferred to anyone in your office thanks to the multi-user support in our telephone networks.

                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                  </div>
                  <div className="card-cont">
                    <h4>Integration</h4>
                    <p>
                    Our customised contact centre services integrate with CRM software, 3rd party tools and various other services to better scale up and adapt to your business needs.
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
                    <h4>Toll-Free</h4>
                    <p>
                    To reduce the hurdles for your client, the telephone services can be made toll-free, motivating your clients to call you freely, which is impossible with conventional mobile numbers.

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
                    <h4>Brand Reputation</h4>
                    <p>
                    A well-managed contact center can contribute to building a positive brand reputation by delivering exceptional customer service, resolving issues promptly which can lead to increased customer loyalty and advocacy.
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
                Outsourced Contact Centres
              </h3>
              <p className="mb-0">
              Rather than hiring, training, and managing staff for customer support, it is best for you to outsource all your support to our professional UK-based service centres. Not only would it improve customer experience, but it would also reduce the burden on your shoulders.
              </p>
            </div>
          </div>
  
          <div className="benifits-sec">
            <div className="container-max">
              <h2 className="secheading">Benefits of BJS Contact Centre Services</h2>
              <h3>Here are some benifits of BJS Contact Centre Services</h3>
              <div className="roundcard-outer">
                <div className="roundcard">
                  <h4>24x7 Operations</h4>
                  <p>
                    Your business never sleeps, and neither do we. Our services
                    operate 24x7 to ensure all your needs are met at any given
                    time of the day. Equally talented staff across multiple shifts
                    manage your accounts and keep them in an ideal condition.
                  </p>
                </div>
                <div className="roundcard">
                  <h4>Data</h4>
                  <p>
                    Tightly built procedures and guidelines ensure that your data
                    and mission-critical business information remain largely
                    private. Employees are shared critical data on a need-to-know
                    basis. Only specific employees handling your accounts have
                    access to information, and they maintain the privilege.
                  </p>
                </div>
                <div className="roundcard">
                  <h4>Training</h4>
                  <p>
                    Our in-house training institution trains our employees under
                    careful supervision. This guarantees that our personnel are
                    equally qualified and skilled to serve you. Our in-house
                    training facilities set us apart from other providers.
                  </p>
                </div>
                <div className="roundcard">
                  <h4>Consultation</h4>
                  <p>
                    Whenever you are in doubt or confused, feel free to connect
                    with our specialist account managers, who will carefully
                    understand your concerns. They use their skills and training
                    to provide an optimal answer/solution to your problems.
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
                  <h4>Customer Support</h4>
                  <p>
                  BJS omnichannel contact centres are ideal for setting up customer support, as they are ready to communicate, answer queries, and solve common issues. 

                  </p>
                </div>
                <div className="roundcard">
                  <h4>Virtual Receptionist</h4>
                  <p>
                  Set up a virtual receptionist for customer appointments, scheduling meetings, and coordinating events on your behalf easily.

                  </p>
                </div>
                <div className="roundcard">
                  <h4>Customer Outreach</h4>
                  <p>
                  You can use our centres to actively make cold calls, generate leads, recover disengaging customers, and grow your business.
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
                  <h4>Industries</h4>
                  <p>
                  BJS serves a wide array of clients with diverse requirements. We have clients from the UK and across the world in industries like automobile, finance, real estate, logistics, supply chains, and more.
                  </p>
                </div>
                <div className="roundcard">
                  <h4>Training</h4>
                  <p>
                  Our in-house training academy ensures that all of our workforce gets trained under our strict guidelines and supervision. This ensures our staff is equally trained, capable, and proficient in serving your needs. The in-house training facilities give us a competitive edge compared to all other services.
                  </p>
                </div>
                <div className="roundcard">
                  <h4>Transparency</h4>
                  <p>
                  As per your discretion, we provide reports, data, and usage details so that you have a bird’s eye view of every activity. The complete transparency in our operations ensures you are never caught by surprise and can always make changes to optimise costs and conversions.
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
)};

ContactCenter.propTypes = {};

ContactCenter.defaultProps = {};

export default ContactCenter;
