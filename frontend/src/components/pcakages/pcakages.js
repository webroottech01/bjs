import React , {useState} from "react";
import "./pcakages.scss";
import ContactTeam from "../../components/contact-team/contact-team";
import Modal from 'react-bootstrap/Modal';
const Pcakages = () => {

  const [modalShow , setModalShow] = useState(false);
  return (
    <>
      <div className="packages-inner">
        <div className="container-max">
        <div className="row">
          <div className="col-md-4">
          <div className="package-card">
            <div className="package-detail">
              <div className="package-icon">
              <img  src={process.env.PUBLIC_URL + "/images/phone.svg"} />
              </div>
              
              <div className="package-name">
                <h3>Telephone Answering</h3>
                <h4>(Busy People)</h4>
                <h5>
                  $ 800 <span>/month</span>
                </h5>
              </div>
            </div>
            <div className="package-desc">
              <ul>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
              </ul>
              <p>Our ContentWriter package is designed to elevate your website content</p>
            </div>
            <button type="button" variant="primary" onClick={() => setModalShow(true)}>
            Get Started
            </button> 
          </div>
          </div>
          <div className="col-md-4">
          <div className="package-card">
            <div className="package-detail">
              <div className="package-icon">
              <img  src={process.env.PUBLIC_URL + "/images/phone.svg"} />
              </div>
              
              <div className="package-name">
                <h3>Telephone Answering</h3>
                <h4>(Busy People)</h4>
                <h5>
                  $ 800 <span>/month</span>
                </h5>
              </div>
            </div>
            <div className="package-desc">
              <ul>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
              </ul>
              <p>Our ContentWriter package is designed to elevate your website content</p>
            </div>
            <button type="button" variant="primary" onClick={() => setModalShow(true)}>
            Get Started
            </button> 
          </div>
          </div>
          <div className="col-md-4">
          <div className="package-card">
            <div className="package-detail">
              <div className="package-icon">
              <img  src={process.env.PUBLIC_URL + "/images/phone.svg"} />
              </div>
              
              <div className="package-name">
                <h3>Telephone Answering</h3>
                <h4>(Busy People)</h4>
                <h5>
                  $ 800 <span>/month</span>
                </h5>
              </div>
            </div>
            <div className="package-desc">
              <ul>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
                <li>Our ContentWriter package is designed to elevate your website content</li>
              </ul>
              <p>Our ContentWriter package is designed to elevate your website content</p>
            </div>
            <button type="button" variant="primary" onClick={() => setModalShow(true)}>
            Get Started
            </button> 
          </div>
          </div>
        </div>
      </div>
      </div> 
      
      
      <Modal size='90w'  show={modalShow} className="modal-dialog-centered">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Please fill out this form and we will get back to you eventually!
        </Modal.Title>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setModalShow(false)}></button>
      </Modal.Header>
      <Modal.Body className="grid-example">
       <ContactTeam />
      </Modal.Body>
    </Modal> 
    
    </>
  );
};



export default Pcakages;
