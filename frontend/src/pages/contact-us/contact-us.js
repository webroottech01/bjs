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
      <Banner title="Contact US" innerpage />
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
      <div className="maparea ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905792899!2d76.68831093050598!3d30.732401984452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1712559299851!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </div>
  );
};

export default ContactUs;
