import React, { useState } from "react";
import "./contact-us.scss";
import Banner from "../../components/banner/banner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact_no: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to handle form submission
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: "",
      contact_no: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us">
      <Banner title="Contact us" innerpage  bgimage={'images/contactusban.jpg'}/>
      <div className="center-part">
        <div className="container-max">
          <div className="row">
            <div className="col-md-6 trianglebg">
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
                      type="text"
                      id="contact_no"
                      name="contact_no"
                      value={formData.contact_no}
                      onChange={handleChange}
                      placeholder="Contact Number"
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
            <div className="col-md-6 ">
              <div className="contact-info">
                <span>WHO WE ARE</span>
                <h2 className="secheading">Contact With Us.</h2>
                <p>
                Call us, email us, or visit our office to get acquainted with our staff, who will take care of your needs.
                </p>

                <div className="contact-icon-box">
                  <div className="featured-icon">
                    <img
                      src={process.env.PUBLIC_URL + "/images/emailicon.png"}
                      alt=""
                    />
                  </div>
                  <div className="featured-content">
                    <h5>Drop Mail On</h5>
                   <a href="mailto:info.Indro@Gmail.Com">Info.Indro@Gmail.Com</a>
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
                    <p><a href="tel:(+55) -66 99 88">(+55) -66 99 88</a></p>
                  </div>
                </div>
                <div className="contact-icon-box">
                  <div className="featured-icon">
                    <img
                      src={process.env.PUBLIC_URL + "/images/locationicon.png"}
                      alt=""
                    />
                  </div>
                  <div className="featured-content">
                    <h5>Our Office Locations</h5>
                    <p>27 Divison St, New York,NY 10002,USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      
    </div>
  );
};

export default ContactUs;
