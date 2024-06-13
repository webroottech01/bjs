import React, { useState } from "react";
import "./pcakages.scss";
import ContactTeam from "../../components/contact-team/contact-team";
import Modal from "react-bootstrap/Modal";
const Pcakages = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="packages-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="package-card">
                <div className="package-detail">
                  <div className="package-icon">
                    <img src={process.env.PUBLIC_URL + "/images/phone.svg"} />
                  </div>

                  <div className="package-name">
                    <h3>Basic Plan:</h3>
                    <h4>(Small Businesses)</h4>
                    <h5>
                      Price : £5.5<span>per Agent/Hour</span>
                    </h5>
                  </div>
                </div>
                <div className="package-desc">
                  <h5>Features :</h5>
                  <ul>
                    <li>Inbound and outbound calling</li>
                    <li>Email support</li>
                    <li>Basic IVR (Interactive Voice Response)</li>
                    <li>Reporting and analytics</li>
                    <li>
                      Ideal for small businesses or startups with limited
                      requirements.
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="package-card">
                <div className="package-detail">
                  <div className="package-icon">
                    <img src={process.env.PUBLIC_URL + "/images/phone.svg"} />
                  </div>

                  <div className="package-name">
                    <h3> Standard Plan:</h3>
                    <h4>(Growing Enterprises)</h4>
                    <h5>
                      Price : £6<span>per Agent/Hour</span>
                    </h5>
                  </div>
                </div>
                <div className="package-desc">
                  <h5>
                    Features <span>(in addition to Basic Plan):</span>
                  </h5>
                  <ul>
                    <li>Advanced IVR customization</li>
                    <li>Live chat support</li>
                    <li>CRM integration</li>
                    <li>Call recording and monitoring</li>
                    <li>
                      Suitable for growing businesses looking for more advanced
                      features.
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="package-card">
                <div className="package-detail">
                  <div className="package-icon">
                    <img src={process.env.PUBLIC_URL + "/images/phone.svg"} />
                  </div>

                  <div className="package-name">
                    <h3>Premium Plan:</h3>
                    <h4>(Large Firms and Corporations)</h4>
                    <h5>
                      Price : £6.5<span>per Agent/Hour</span>
                    </h5>
                  </div>
                </div>

                <div className="package-desc">
                  <h5>Features <span>(in addition to Standard Plan):</span></h5>
                  <ul>
                    <li>
                    Multi-channel support (phone, email, chat, social media)
                    </li>
                    <li>
                    Predictive dialer for outbound campaigns
                    </li>
                    <li>
                    Advanced reporting with real-time analytics
                    </li>
                    <li>
                    Dedicated account manager
                    </li>
                    <li>
                    Designed for larger enterprises requiring comprehensive contact center solutions.
                    </li>
                  </ul>
                  
                </div>
                <button
                  type="button"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="package-card">
                <div className="package-detail">
                  <div className="package-icon">
                    <img src={process.env.PUBLIC_URL + "/images/phone.svg"} />
                  </div>

                  <div className="package-name">
                    <h3>Custom Plan:</h3>
                    
                    <h5>
                    Business can submit requirement for BJS to customize the tailored plan.
                   
                    </h5>
                  </div>
                </div>

                <div className="package-desc">
                  
                  <ul>
                  <li>Ideal for companies with unique or specialized requirement</li>
                    <li>
                    Personalized consultation to understand and address specific business needs.
                    </li>
                    <li>
                    Flexible pricing based on the specific features and services required.
                    </li>
                    <li>
                    Comprehensive support to ensure seamless integration and implementation.
                    </li>
                    <li>
                    Access to exclusive tools and resources tailored to your unique requirements.
                    </li>
                    
                  </ul>
                  
                </div>
                <button
                  type="button"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal size="90w" show={modalShow} className="modal-dialog-centered">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Please fill out this form and we will get back to you shortly!
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setModalShow(false)}
          ></button>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <ContactTeam />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pcakages;
