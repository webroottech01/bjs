import React from "react";
import "./footer.scss";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => (
  <>
    <div className="site-footer">
      <div className="container-max">
        <div className="row upper-footer">
          <div className="col-md-6">
            <img
              className="footer-logo"
              src={process.env.PUBLIC_URL + "/images/bjslogo.svg"}
              alt="Logo"
            />
            <p>
            We are known as the agile contact center experts because we adapt to your industry's changing needs.
            </p>
            <div className="social-links">
              <a target="blank" href="https://www.facebook.com/profile.php?id=61559815511782">
                <img
                  src={process.env.PUBLIC_URL + "/images/facebook-icon.png"}
                  alt=""
                />
              </a>
              {/* <a target="blank" href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/twitter-icon.png"}
                  alt=""
                />
              </a> */}
              <a target="blank" href="https://www.instagram.com/bjs_beyond/">
                <img
                  src={process.env.PUBLIC_URL + "/images/instagram-icon.png"}
                  alt=""
                />
              </a>
              {/* <a target="blank" href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/youTube-icon.png"}
                  alt=""
                />
              </a> */}
              <a target="blank" href="https://www.linkedin.com/company/bjs-beyond/">
                <img
                  src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <h6>Quick LInks</h6>
                <Navbar className="footer-nav">
                  <Nav className="mr-auto">
                    <LinkContainer to="/industries/automobile">
                      <Nav.Link>Automobile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pricing">
                      <Nav.Link>Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/solutions/contact-center">
                      <Nav.Link>Contact Centre</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact-us">
                      <Nav.Link>Contact-Us</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar>
              </div>
              <div className="col-md-4 footer-contact">
                <h6>Contact Us</h6>
                <a href="tel:9878985666">+91 98789 85666</a>
                <a href="mailto:info@bjs-beyond.com">info@bjs-beyond.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex">
          <p>© 2024 BJS Family. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="https://webroottech.com/" target="blank">
              Webroot Technologies
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
);


export default Footer;
