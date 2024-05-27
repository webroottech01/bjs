import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => (
  <>
    <div className="site-footer bgpurple">
      <div className="container-max">
        <div className="row upper-footer">
          <div className="col-md-6">
            <img
              className="footer-logo"
              src={process.env.PUBLIC_URL + "/images/bjslogofooter.svg"}
              alt="Logo"
            />
            <p>
              The impact of well-crafted website content cannot be overstated
              and can be the difference between a thriving online presence and a
              lackluster one.
            </p>
            <div className="social-links">
              <a href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/facebook.svg"}
                  alt=""
                />
              </a>
              <a href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                  alt=""
                />
              </a>
              <a href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/instagram.svg"}
                  alt=""
                />
              </a>
              <a href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/youtube.svg"}
                  alt=""
                />
              </a>
              <a href="facebook.com">
                <img
                  src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
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
                      <Nav.Link>Contact Center</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact-us">
                      <Nav.Link>Contact-Us</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar>
              </div>
              <div className="col-md-4 footer-contact">
                <h6>Contact Us</h6>
                <a href="tel:(+55) -66 99 88">(+55) -66 99 88</a>
                <a href="tel:(+55) -66 99 88">(+55) -66 99 88</a>
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

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
