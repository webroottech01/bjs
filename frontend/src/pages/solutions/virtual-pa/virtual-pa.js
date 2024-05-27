import React from "react";
import PropTypes from "prop-types";
import "./virtual-pa.scss";
import Banner from "../../../components/banner/banner";
import FaqTabs from "../../../components/faq-tabs/faq-tabs";
import ContactTeam from "../../../components/contact-team/contact-team";
import TestimonialSlider from "../../../components/testimonial-slider/testimonial-slider";

const VirtualPa = () => {
  const accountfaqs = [
    {
      faq_heading: "Is a Virtual PA actually beneficial?",
      description:
        "Yes, apart from making you look established and professional, the PA ensures you never have to handle cumbersome tasks and can focus on the more critical matters at hand. BJS virtual PA saves you time, performs tasks, and keeps your partners, clients, and affiliates happy.",
    },
    {
      faq_heading:
        "What are the key differences between dedicated and virtual PA?",
      description:
        "A virtual PA is significantly better since it doesn’t require your office space or infrastructure and can work from anywhere. The virtual nature ensures it is available all through your working hours, even when you are travelling.",
    },
    {
      faq_heading: "What are the costs of Integrated Sales Services?",
      description:
        "The best virtual PAs are never cheap. BJS virtual PA services are robust and powerful. Our services are capable of saving you precious time and are resourced to the point that you can easily earn back the cost of PAs and more.",
    },
    {
      faq_heading: "Who should hire Virtual PA Services?",
      description:
        "Virtual PAs should be hired by professionals who miss calls and opportunities due to their busy schedules. In addition, those who struggle to manage different activities and effectively coordinate tasks would also benefit from virtual PAs.",
    },
  ];

  return (
    <>
      <div className="virtual-pa solutions-subpage">
        <Banner title={"Virtual Private Assistant"} innerpage />
        <div className="container-med">
          <div className="right-splitsec leftimgtype">
            <div className="row align-items-center ">
              <div className="col-md-12 col-lg-6">
                <div className="splitimg-part">
                  <img src={process.env.PUBLIC_URL + "/images/virtualpa.jpg"} />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <span className="">Virtual Assistance</span>
                <h3 className="secheading">
                  Virtual Assistant to Manage Your Needs
                </h3>
                <p className="mb-0">
                  Various other professions require proper calendar management,
                  meeting scheduling, and coordination, which are quite
                  time-consuming. Managing receipts on the table, sending thank
                  you notes, sorting files, and more… These are things that can
                  waste your time.
                </p>
                <p className="mb-0 mt-4">
                  Clients might call at odd hours with queries, appointment
                  scheduling, or general consultation requests. Being available
                  for all this throughout the day isn’t feasible. Worry not. We
                  have a solution for you. Our virtual PA services are here to
                  rescue you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="helpyou-sec">
          <div className="container-max">
            <h2 className="secheading">Advantages of Virtual Assistants</h2>
            <h3>
              You might consider virtual assistants to be overkill for your
              requirements. But trust us, you don’t really know until you try
              one.
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
                  <h4>Reminders</h4>
                  <p>
                    Busy with work and worried you might miss a meeting? Your PA
                    will give you a reminder call, ensuring you leave on time.
                    They ensure you are always on time for all the activities
                    scheduled.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/business.png"} />
                </div>
                <div className="card-cont">
                  <h4>Management</h4>
                  <p>
                    There are many things that are necessary yet way too
                    time-consuming for you to handle. This can include creating
                    bills for the hours spent for a client and filing receipts
                    for reimbursements. Virtual Receptionists handle them all.
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
                  <h4>Incoming Calls</h4>
                  <p>
                    They attend to all incoming calls to save you time. Relevant
                    information is passed on directly to you. In addition, if
                    there is any appointment booked, meeting scheduled, or
                    consultation requested, the events are added to your
                    calendar directly.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + "/images/mentoring.png"} />
                </div>
                <div className="card-cont">
                  <h4>Interactions</h4>
                  <p>
                    They handle various formalities and interactions on your
                    behalf. This could include sending formality greetings to
                    acquaintances, arranging for gifts for notable business
                    partners, managing your social media, and more
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
                  <h4>Response Times</h4>
                  <p>
                    You cannot always be available to take calls. Customers get
                    impatient if their calls are not picked up instantly. Our
                    staff is trained to ensure that calls are picked up
                    instantly and the customer is kept engaged.
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
                  <h4>Personalised</h4>
                  <p>
                    Our services are personalised according to your needs.
                    Custom scripts, greetings, procedures, and more, you name
                    it, and we implement it. This ensures your unique
                    requirements, needs, and use cases are taken into
                    consideration by our PA, delivering the best results for
                    your firm.
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
              Virtual PA Services
            </h3>
            <p className="mb-0">
              Why hire a physical PA when you can have a virtual human assistant
              available all the time, offering much better service?
            </p>
          </div>
        </div>

        <div className="benifits-sec">
          <div className="container-max">
            <h2 className="secheading">Benefits of BJS Virtual PA</h2>
            <h3>Here are some benifits of BJS Virtual PA</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Native English Speaker</h4>
                <p>
                  As a UK-based firm, most of our workforce is from the UK, with
                  an overwhelming portion of our staff being native English
                  speakers. This ensures all communication is clear and
                  understandable.
                </p>
              </div>
              <div className="roundcard">
                <h4>Time Saving</h4>
                <p>
                  Many activities, like responding to greetings, sending thank
                  you messages, socialisation, and more, would take place
                  seamlessly without needing your involvement, saving precious
                  time.
                </p>
              </div>
              <div className="roundcard">
                <h4>Training</h4>
                <p>
                  Our training ensures that your PA understands your top
                  priorities very well. This understanding is used to plan your
                  day, keeping your best interests in check.
                </p>
              </div>
              <div className="roundcard">
                <h4>Availability</h4>
                <p>
                  We adapt to your needs, not the other way around. Our
                  workforce adjusts to your schedule, working hours, and
                  requirements to ensure maximum availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benifits-sec threeelements">
          <div className="container-max">
            <h2 className="secheading">Responsibilities</h2>
            <h3>Here are some key Responsibilities to fulfill</h3>
            <div className="roundcard-outer">
              <div className="roundcard">
                <h4>Schedule</h4>
                <p>
                  One of the most critical responsibilities of PA is to ensure
                  you remain on schedule and can reach relevant
                  destinations/events on time.
                </p>
              </div>
              <div className="roundcard">
                <h4>Coordination</h4>
                <p>
                  They can perform proper coordination of video conferences,
                  arrange for physical meetings, prepare appointments, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>Planning</h4>
                <p>
                  They plan your day on your behalf in a calendar. Critical
                  activities, important meetings, and tasks are given clear time
                  slots as needed.
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
                <h4>Experience</h4>
                <p>
                  Apart from our experienced staff, we as a firm have decades
                  long experience in serving diverse clients globally. This
                  experience has made us a master at understanding, adapting,
                  and adjusting to client needs instantly.
                </p>
              </div>
              <div className="roundcard">
                <h4>Industries</h4>
                <p>
                  Our experience has ensured that we serve and learn from most
                  of the common industries, including automobile, finance, real
                  estate, supply chains, hospitality, and more.
                </p>
              </div>
              <div className="roundcard">
                <h4>24x7</h4>
                <p>
                  We ensure our services operate around the clock, with equally
                  talented employees taking shift after shift. You can set your
                  own working hours and schedules, and your PA will remain fully
                  available for your needs.
                </p>
              </div>
              <div className="roundcard">
                <h4>Understanding</h4>
                <p>
                  Over a period of time, your PA understands your preferences,
                  requirements, and choices. Accordingly, it is able to
                  accurately guess events and schedule calendars for your needs,
                  including rest periods, breaks, relative birthdays, family
                  events, and various other events.
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

export default VirtualPa;
