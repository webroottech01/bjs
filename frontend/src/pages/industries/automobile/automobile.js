import React from "react";
import "./automobile.scss";
import Banner from "../../../components/banner/banner";
import ContactTeam from "../../../components/contact-team/contact-team";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";

const Automobile = () => {
  const accountfaqs = [ 
    {
      faq_heading : 'Is it safe to outsource services?',
      description : 'Yes, in fact, it is better to outsource certain non-critical services than to have them in-house. Without proper oversight, experience, and skills, your in-house staff will not be able to match and deliver the quality standards offered by quality service outsourcing firms like BJS.'
    },
    {
      faq_heading : 'What are the costs of outsourcing certain business services?',
      description : 'The costs largely depend on the services that you choose, the scale of your firm, and your requirements. Rather than getting a standardised quote, you should look to go for firms like BJS in the UK. They carefully analyse all your requirements and perform actions to produce a tailor-made pricing structure for your needs.'
    }
  ]
  return (
    <>
      <div className="automobile industries-subpage">
        <Banner title="Automobile" innerpage />
        <div className="container-med">
          <div className="right-splitsec">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <span className="">Driving Efficiency</span>
                <h3 className="secheading">
                  Perfect Solutions For All The Needs of Automobile
                </h3>
                <p className="mb-0">
                  The automobile industry, by nature, is complex and requires
                  various smoothly functioning components to be able to run
                  properly. However, it's rare for most firms to have elaborate
                  systems and logistics to manage everything as expected.
                </p>
                <p className="mb-0 mt-4">
                  The industry leaders in automobiles rely on BJS for all their
                  requirements and needs. Our systems have been able to maximise
                  growth and solve hurdles for many firms in this industry.
                  Let’s see how.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 order-lg-1">
                <div className="splitimg-part">
                  <img alt="" src={process.env.PUBLIC_URL + "/images/perfactsol.jpg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-strip">
          <div className="container-med">
            <h3 className="iconheading">
              <img alt="" src="images/successfulblk.png" />
              Complete Solution
            </h3>
            <p className="mb-0">
              The automobile industry, by nature, is complex and requires
              various smoothly functioning components to be able to run
              properly. However, it's rare for most firms to have elaborate
              systems and logistics to manage everything as expected.
            </p>
          </div>
        </div>
        <div className="outsourcing-sec">
          <div className="container">
            <h3>
              What are Outsourced Services? <br /> Do Automobile Firms Benefit from
              Outsourcing?
            </h3>
            <p>
              Simply put, outsourcing means delegating important yet
              time-consuming tasks to an external agency or individual. These
              are tasks like tax filing, book keeping, customer support and more
              that are important for a firm but exactly worth your own time.
            </p>
            <p>
              Delegating tasks to external firms results in a reduced workload
              in your firm while simultaneously getting better results due to
              the skills and experience of outsourced service providers.
            </p>
            <p>
              As an automobile firm, outsourcing work helps you focus on what
              matters the most - the automobile. The rest of the things work
              seamlessly in the backend with little to no involvement needed
              from your side.
            </p>
            <p>
              Among all the outsourcing firms, BJS is the best outsourced
              business services firm in UK for all your needs and requirements.
            </p>
          </div>
        </div>
        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">How Can BJS Help You?</h2>
            <h3>Here are some key ways BJS serves your Industry:</h3>
            <div className="triangle-cards">
              <div className="card">
                <div className="icon"> 
                  <img alt=""
                    src={process.env.PUBLIC_URL + "/images/customer-service.png"}
                   />
                </div>
                <div className="card-cont">
                  <h4>Call Centres</h4>
                  <p>
                    Customer Satisfaction is critical for any automobile firm.
                    We set up robust customer care and support systems to ensure
                    your customers are always satisfied. Any queries,
                    complaints, or issues are immediately addressed.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="" src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Integrated Sales</h4>
                  <p>
                    Our integrated sales teams offer unified marketing and sales
                    teams that perform hand-holding of the client from the first
                    interaction until onboarding is completed. Conventional
                    marketing teams make bold promises that are rarely kept in
                    reality. Many times, poor coordination between sales and
                    marketing results in interested clients remaining improperly
                    treated or being left high and dry due to miscommunications.
                    Our Integrated Sales ensures that once the customer is
                    interested, the same team responsible for marketing
                    coordinates discussions, negotiations, and more, to ensure
                    frictionless working.
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
                  <h4>Human Resources</h4>
                  <p>
                    It’s no secret that Automobile firms have a lot of labour
                    spread across various departments. This can include on-role,
                    off-role, contractual, and freelance workforce. Accurately
                    managing the salaries, performance, leaves, salaries,
                    employee benefits of all employees is quite difficult. In
                    addition, complicated laws and regulations make proper
                    compliance difficult. Fortunately, BJS has many years of
                    experience in Automobile. We can completely take over your
                    HR work, ensuring complete compliance, happy employees, and
                    a leaner, more efficient workforce overall.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="" src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Process Consulting</h4>
                  <p>
                    Automobile-related businesses are highly process-driven.
                    Smooth operation and collaboration between many processes
                    together result in optimal business performance. Our process
                    consultants can redesign, modify, and adjust processes to
                    ensure smooth operations and maximum throughput. Any
                    bottlenecks or hiccups in your business can be discussed and
                    handled as well.
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
                  <h4>Virtual Assistants</h4>
                  <p>
                    Virtual Assistants can digitally take care of all matters,
                    maintain calendars, coordinate client meetings, business
                    meets, and more. Our virtual assistants organise your
                    documents and files, book meetings, take follow-ups, send
                    reminders, and thank you notes, as well as perform various
                    other time-consuming tasks on your behalf, saving you
                    precious time.
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
                  <h4>Field Agent Management</h4>
                  <p>
                    Field agents include your logistics personnel, who are
                    responsible for transporting automobiles, procurement
                    agents, and more. Properly monitoring and supervising such
                    employees is quite difficult. Unnecessary breaks and
                    diversions by them can impact business. Our Field Agent
                    Management service tracks all your employees and ensures
                    they are performing as per expectations. This gives you
                    peace of mind and the confidence that all the assigned tasks
                    will be completed at the day's end.
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
            Here are some of the key benefits of choosing BJS as your service
            provider
          </h3>
          <div className="roundcard-outer">
          <div className="roundcard">
          <h4>24x7 Workforce</h4>
          <p>
            We never sleep. Our staff is split across multiple shifts and is
            available 24/7 to take care of all your needs.
          </p>
        </div>
        <div className="roundcard">
          <h4>Experience</h4>
          <p>
          Across all the services offered, we deploy thoroughly trained and experienced staff that can quickly understand and handle your needs

          </p>
        </div>
        <div className="roundcard">
          <h4>Consultation</h4>
          <p>
          We don’t just stop doing what you tell us to do. Our team of experts can provide you with expert advice and guidance to save on taxes, improve performance, and optimise systems

          </p>
        </div>
        <div className="roundcard">
          <h4>Personalised</h4>
          <p>
          There is no one-size-fits-all in business. Solutions need to be customised to the business needs. That’s why our teams work diligently to make our service aligned with all your needs.

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
          <FaqTabs faqs={accountfaqs} /> 
        </div>

        
      </div>
    </>
  );
};


export default Automobile;
