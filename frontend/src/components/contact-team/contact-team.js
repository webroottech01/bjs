import React, { useState } from "react";
import "./contact-team.scss";

const ContactTeam = () => {
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
    <>
      <div className="contactteam-inner">
      <div className='container-med'>
        <form onSubmit={handleSubmit} className="basic-form">
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-8">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="col-md-4 submit-outer">
              <button className="submitbtn" type="submit">Submit Now</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default ContactTeam;
