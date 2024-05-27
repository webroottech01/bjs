import React from "react";
import PropTypes from "prop-types";
import "./process-consulting.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";

const ProcessConsulting = () => {
  const accountfaqs = [
    {
      faq_heading: "What exactly is a Process Consulting Service?",
      description:
        "Process Consulting Services are specialists in analysing business processes, understanding your issues, and redesigning, optimising, and creating processes to ensure the desired results are achieved.",
    },
    {
      faq_heading:
        "What are the costs of Process Consulting Services?",
      description:
        "Truth be told, Process Consulting Services are not cheap. The ones that cost less rarely get the job done. You should look into top Process Consulting Services in the UK like BJS for all your consulting needs. They are a premium service with quality professionals that truly deliver results.",
    },
    {
      faq_heading: "Who should hire Process Consulting Services?",
      description:
        "Process Consulting Services can be of major advantage to a wide array of businesses. Any business that has achieved a reasonable scale (multiple full-time employees), should consider process consulting to optimise processes and extract previously unrealised potential.",
    },
  ];

  return (
    <>
      <div className="process-consulting solutions-subpage">
        <Banner title={"Process Consulting"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img src={process.env.PUBLIC_URL + "/images/processonsulting.jpg"} />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Efficiency Improvement</span>
                <h3 className="secheading">
                  Optimise Processes and Remove Inefficiencies
                </h3>
                <p className="mb-0">
                  In the ever-changing business landscape, it is vital to
                  constantly adapt, rethink, and redesign your processes to
                  maximise output. What worked last year might not suit you this
                  year. In addition, as businesses scale, you are forced to do
                  the difficult task of rethinking the processes to maintain
                  efficiency.
                </p>
                <p className="mb-0 mt-4">
                  If you have also faced such difficulties, you are not alone.
                  The solution to such problems is to have process consulting
                  experts audit your business to design/redesign, optimise, and
                  troubleshoot various processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">
              Advantages of Process Consulting Services
            </h2>
            <h3>
              At first look, it might be hard to realise what benefits Process
              Consulting Services might offer. But let’s take a hard look into
              Process Consulting to help you understand their significance.
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
                  <h4>Bottlenecks</h4>
                  <p>
                    Sometimes, the entire firm might suffer due to limitations
                    at a particular bottleneck in the workflow. Experts use
                    their experience to identify the root problem and design new
                    processes and training plans to implement those changes.
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
                    Existing processes might have many issues that cause
                    significant losses as your company scales up. Process
                    consultants carry out proper optimisations to reduce time
                    spent and minimise costs.
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
                  <h4>Tools</h4>
                  <p>
                    One of the best things about process consulting is that it
                    helps automate processes and tasks that humans currently do.
                    Modern machines, efficient equipment, and automation can
                    help massively reduce the variables and optimise the
                    processes.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Technology</h4>
                  <p>
                    You enjoy the increased consistent performance while saving
                    on costs through technological advancements. Proper
                    real-time insights and recommendations help in the early
                    detection of any upcoming issue and effective resolution of
                    the same.
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
                  <h4>Customise</h4>
                  <p>
                    We understand that every organisation has its own set of
                    unique requirements. We got our reputation and stature due
                    to our customisations. Our team adapts to our business and
                    created tailor-made processes and plans to suit you. We
                    don’t do the one-size-fits-all!
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
                  <h4>Consultation</h4>
                  <p>
                    If you plan on buying a new office, changing locations,
                    restructuring teams, adding new products, or any other
                    significant change, you need advice on the best part. Best
                    process consultants in the UK, like BJS, offer proper
                    consultation to help you plan.
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
              Process Consulting Services
            </h3>
            <p className="mb-0">
              Your business needs to be optimised, and every process needs to be
              rethought to ensure maximum performance and results. Let BJS
              handle all these needs for you.
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS Process Consulting</h2>
            <h3>Here are some benifits of BJS Process Consulting</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Experience</h4>
                <p>
                  We train our staff using industry-leading methods and
                  procedures to ensure they can handle your requirements.
                </p>
              </div>
              <div className="roundcard">
                <h4>Methodologies & Approach</h4>
                <p>
                  All process consultants have an in-depth understanding of
                  state-of-the-art methodologies and approaches utilised in your
                  firm’s process redesign.
                </p>
              </div>
              <div className="roundcard">
                <h4>Company Restructuring</h4>
                <p>
                  If you are scaling up, changing offices, adding/removing
                  products, or restructuring, our firm can check and optimise
                  processes. This ensures that you can achieve maximum possible
                  efficiency.
                </p>
              </div>
              <div className="roundcard">
                <h4>Flexibility</h4>
                <p>
                  We don’t implement run-of-the-mill generic procedures for your
                  firm. Our proper analysis creates customised, flexible, and
                  tailored solutions for your business priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some Use Cases of Process Consulting Services</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Choke Points</h4>
                <p>
                  Rapidly scaling businesses suffer downtime because of a few
                  slow processes. We identify, rethink, and redesign processes
                  to mitigate issues.
                </p>
              </div>
              <div className="roundcard">
                <h4>Troubleshooting</h4>
                <p>
                  Sometimes, poor process coordination can cause massive losses.
                  Like if the product isn’t ready, but the order pickup truck is
                  already there, waiting for you, costing money. We troubleshoot
                  company-wide processes to ensure better coordination.
                </p>
              </div>
              <div className="roundcard">
                <h4>Optimisation</h4>
                <p>
                  Our experts carefully inspect all processes to accurately
                  identify room for improvement. This is useful to improve
                  revenue, reduce cost overruns, and decrease the workforce
                  needed for the job.
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
                We have worked in almost all sectors achieving impressive results with minimum efforts. Our team has experience in automobile, finance, IT, manufacturing, logistics, supply chains, and various other areas.

                </p>
              </div>
              <div className="roundcard">
                <h4>Expertise</h4>
                <p>
                We believe that your business deserves the best experts. All our consultants are expert and very capable of handling. Our in-house training program ensures all our workforce has reached expert-level before entering service for you.

                </p>
              </div>
              <div className="roundcard">
                <h4>Integration</h4>
                <p>
                One of the difficult parts of process management is coordination between different departments. Lucky for you, you can outsource everything from marketing, sales, support, communications, consulting, finance, account management, and more to BJS with our integrated services, resulting in an even more optimised workflow for you.

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

export default ProcessConsulting;
