import React from "react";
import "./field-agent-management.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const FieldAgentManagement = () => {
  const accountfaqs = [
    {
      faq_heading: "What exactly is Field Agent Management Services?",
      description:
        "These services properly manage, track, and administer all the agents working outside your office space in various roles such as logistics, deliveries, marketing, branding, etc.",
    },
    {
      faq_heading: "How can Field Agent Management Benefit Me?",
      description:
        "Field Agent Management ensures that your staff is properly tracked, accounted for, and monitored. Any misdemeanour or inefficiencies by our employees would be immediately made visible. This helps maximise performance, focus on efficiency, and avoid any unexpected hiccups in your business.",
    },
    {
      faq_heading: "What are the costs of Field Agent Management Services?",
      description:
        "Field Agent Management services are costly, as they must deploy large, complicated software solutions for you, your agents, and your database/servers. Along with the salaries of the managers who monitor and administer all the agents. Some cheap services are not able to deliver your expected quality. That’s why you should choose BJS, a professional, experienced, outsourced field management service provider offering great value for money and ensuring all your needs are catered to.",
    },
    {
      faq_heading: "Are Field Agent Management Services Worth it?",
      description:
        "Most of the time, field agent management is seen as an extra cost. This could largely be due to your trust in the employees or underestimation of inefficiencies. But, once you start using them, the gains made make them a necessity. If you are looking for Field Agent Management Services, BJS is the perfect choice for you.",
    },
  ];

  return (
    <>
      <div className="field-agent-management solutions-subpage">
        <Banner title={"Field Agent Management"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img
                    src={process.env.PUBLIC_URL + "/images/fieldmanage.jpg"}
                  />
                </div> 
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Task Coordination</span>
                <h3 className="secheading">
                  Manage Tasks, Word Orders, and Schedules for Teams on the road
                </h3>
                <p className="mb-0">
                  Whether your business utilises on-the-road sales teams,
                  delivery teams, gas and electrical engineers, or other field
                  operatives, managing their workloads, schedules, safety, and
                  daily tasks can be difficult.
                </p>
                <p className="mb-0 mt-4">
                  Wouldn’t it be great if there was a way to properly manage
                  your teams and ensure they are able to achieve their goals?
                  Well, lucky for you, the best field agent management services
                  implement exactly that.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">Advantages of Field Agent Management</h2>
            <h3>
              Take a hard look at your business. Are you actually able to manage
              everything in your firm and still work towards its growth?
              Probably not. To reduce your workload and focus on more important
              things, delegate the task of field agent management.
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
                  <h4>Monitoring</h4>
                  <p>
                    Field Agent Monitoring Services keep track of all their team
                    members, tracking their activity, progress, and more. They
                    ensure that the team don’t take unnecessary breaks or divert
                    to do personal tasks.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Technology</h4>
                  <p>
                    Technology remains at the forefront of all the activities
                    related to field agent management. Proper task lists
                    detailing their itinerary for the day are prepared and made
                    available through software solutions. In addition, apps are
                    provided to track their location and progress.
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
                  <h4>Data</h4>
                  <p>
                    Unlike older manual methods, where data was manually
                    collected, compiled, and took days to be updated, our
                    approach is real-time. A completely optimised process
                    pipeline ensures that activities and their associated data
                    is updated in real-time.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Transparency</h4>
                  <p>
                    Tracking your employee activity and supervising the work is
                    critical for helping them be at their best. That’s why our
                    tools and services help build better transparency and flow
                    of data between your different departments.
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
                  <h4>Performance</h4>
                  <p>
                    Various KPIs are tracked, and the Field Agent Management
                    Services constantly monitors the performance of all the team
                    members. Appropriate actions are taken to improve speed and
                    maximise results for you.
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
                    Our experienced staff can provide you with proper
                    consultation to help you improve your logistics, and take
                    actionable steps to manage and create a strategy for the
                    best efficiency. This can include relocating the workforce,
                    optimising work hours and more.
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
              Field Agent Management
            </h3>
            <p className="mb-0">
              Manage field agents and ensure your team members are doing their
              best. The autonomous field management services work flawlessly to
              ensure the proper working of your agents.
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">
              Benefits of BJS Field Agent Management
            </h2>
            <h3>Here are some benifits of BJS Field Agent Management </h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  Our in-house training ensures our workforce is adequately
                  trained to handle all your requirements with ease.
                </p>
              </div>
              <div className="roundcard">
                <h4>Access</h4>
                <p>
                  Our technology-driven approach ensures that our advanced
                  software solutions are made available to you and your agents,
                  ensuring ideal accessibility in all conditions.
                </p>
              </div>
              <div className="roundcard">
                <h4>Real-Time</h4>
                <p>
                  With high-performance data collection and interpretation
                  capabilities, you can check the real-time status of all field
                  agents with remarkable accuracy.
                </p>
              </div>
              <div className="roundcard">
                <h4>Security</h4>
                <p>
                  Our firm uses the latest security protocols and procedures to
                  ensure your data is safe and never misused/misled in any way.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Use Cases</h2>
            <h3>Here are some use Cases of Field Agent Management </h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Delivery</h4>
                <p>
                  Track delivery agents and make sure they are traversing the
                  most suitable paths only. Proper monitoring is done to ensure
                  any detour or unwanted stop is immediately detected.
                </p>
              </div>
              <div className="roundcard">
                <h4>Sales</h4>
                <p>
                  Door-to-door sales agents are tracked to ensure their location
                  is always known, and they complete the assigned tasks without
                  any skips.
                </p>
              </div>
              <div className="roundcard">
                <h4>Procurement</h4>
                <p>
                  Businesses involved in a lot of raw material procurement have
                  their agents roam around all day. Properly track their status,
                  progress, location, and health.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Why Choose BJS?</h2>
            <h3>Unmatched Service and Quality</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Industries</h4>
                <p>
                  From automobiles to manufacturing, logistics, supply chains,
                  and more. We have worked in almost all notable industries
                  around the globe, serving clients through our field agent
                  services.
                </p>
              </div>
              <div className="roundcard">
                <h4>Monitor</h4>
                <p>
                  While our work remains seamless and requires no attention from
                  you, occasionally, you might still like to check in on your
                  agents. In those scenarios, our intuitive dashboard will give
                  you a bird’s eye view of all activities by letting you monitor
                  all agent activities in real-time.
                </p>
              </div>
              <div className="roundcard">
                <h4>Integration</h4>
                <p>
                  Our services effortlessly integrate with your existing
                  software stack, servers, and databases to ensure things keep
                  functioning properly in your firm.
                </p>
              </div>
              <div className="roundcard">
                <h4>Personalise</h4>
                <p>
                  We personalise services with customised solutions and help you
                  implement any custom use cases and special requirements. Our
                  agents adapt to your work requirements and implement any
                  specific changes to be able to serve you better.
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

export default FieldAgentManagement;
