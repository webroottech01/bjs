import React, { useState } from "react";
import "./contact-team.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    company: "",
    contact_no: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contact_no: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://bjs-beyond.com/backend/public/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); 
      })
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);
          console.log(jsonData);
          // Clear the form fields after successful submission
          setFormData({
            name: "",
            email: "",
            designation: "",
            company: "",
            contact_no: "",
            message: "",
          });
          // Update the submission state to true
          setIsSubmitted(true);
        } catch (e) {
          console.error("Error parsing JSON:", e);
          console.error("Response data:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="contactteam-inner">
        <div className="container-med">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your message has been successfully sent. We will contact you soon.</p>
            </div>
          ) : (
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
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                    required
                  />
                </div> 
                <div className="col-md-4">
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
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
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
                    <div className="col-md-12">
                      <PhoneInput
                        type="text"
                        id="contact_no"
                        name="contact_no"
                        value={formData.contact_no}
                        placeholder="Contact Number"
                        required
                        country={"gb"}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    maxLength="200"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 submit-outer">
                <button className="submitbtn" type="submit">
                  Submit Now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactTeam;