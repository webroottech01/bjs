import React, { useState } from "react";
import "./contact-us.scss";
import Banner from "../../components/banner/banner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContactTeam from "../../components/contact-team/contact-team";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    company: "",
    contact_no: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contact_no: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to handle form submission
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      designation: "",
      company: "",
      contact_no: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>
        Go through BJS’ Contact Details to Reach Out to Us
        </title>
        <meta
          name="description"
          content="Get in touch with BJS Beyond for inquiries, support, or consultations. Contact us through our easy-to-use form and we’ll get back to you promptly."
        />
      </Helmet>
      <div className="contact-us">
        <Banner
          title="Contact us"
          innerpage
          bgimage={"images/contactusbg.jpg"}
        />
        <div className="center-part">
          <div className="container-max">
            <div className="row">
              <div className="col-md-4 ">
                <div className="contact-headings">
                  <span>WHO WE ARE</span>
                  <h2 className="secheading">
                    At BJS Beyond "hold" doesn't mean forever.
                  </h2>
                  <p>
                    We are known as the agile contact center experts because we
                    adapt to your industry's changing needs.
                  </p>
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="contact-info">
                  <div className="contact-icon-box">
                    <div className="featured-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/emailicon.png"}
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <h5>Drop Mail On</h5>
                      <a href="mailto:info@bjs-beyond.com">
                        info@bjs-beyond.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-icon-box">
                    <div className="featured-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/phoneicon.png"}
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <h5>Call Us On</h5>
                      <p>
                        <a href="tel:9878985666">+91 98789 85666</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-icon-box">
                    <div className="featured-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/locationicon.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <h5>Our Office</h5>
                      <a
                        href="https://maps.app.goo.gl/qhbe9geJ7rf8cDiw7"
                        target="blank"
                      >
                        Plot No.14, Rajiv Gandhi IT Park, Opposite Infosys,
                        Chandigarh, 160101
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-sec col-12">
                <h2 className="secheading">
                  Ready to think beyond just service?
                </h2>
                <ContactTeam />
              </div>

              {/* <div className="col-md-6 trianglebg">
              <form onSubmit={handleSubmit} className="basic-form">
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Designation"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <PhoneInput
                      type="text"
                      id="contact_no"
                      name="contact_no"
                      value={formData.contact_no}
                      placeholder="Contact Number"
                      required
                      country={"us"}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 submit-outer">
                    <button className="submitbtn" type="submit">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
            <img
                      src={process.env.PUBLIC_URL + "/images/emailicon.png"}
                      alt=""
                    />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
