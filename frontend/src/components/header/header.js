import React from "react";
import "./header.scss";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div className="site-header sticky-top">
      <div className="container-max">
        <div className="row align-items-center">
          <div className="col-md-7 px-0">
            <div className="site-nav">
              <Navbar expand="md">
                <LinkContainer to="/">
                  <Navbar.Brand className="site-logo">
                    <img src={
                      process.env.PUBLIC_URL + "/images/bjslogo.svg"} alt="" /> 
                  </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav className="mr-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Solutions" id="nav-dropdown">
                    <LinkContainer to="/solutions/contact-center" className="dropdown-item">
                        <Nav.Link>Contact Centre</Nav.Link>
                      </LinkContainer> 
                    <LinkContainer to="/solutions/account-management" className="dropdown-item">
                        <Nav.Link>Account Management</Nav.Link>
                      </LinkContainer> 
                      <LinkContainer to="/solutions/integrated-sales" className="dropdown-item">
                        <Nav.Link>Integrated Sales</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/virtual-pa" className="dropdown-item">
                        <Nav.Link>Virtual PA</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/human-resources" className="dropdown-item">
                        <Nav.Link>Human Resources</Nav.Link>
                      </LinkContainer>
                      
                      <LinkContainer to="/solutions/process-consulting" className="dropdown-item">
                        <Nav.Link>Process Consulting</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/finance-ecomm" className="dropdown-item">
                        <Nav.Link>Finance & E-Commerce</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/e-commerce" className="dropdown-item">
                        <Nav.Link>E-commerce Support</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/field-agent-management" className="dropdown-item">
                        <Nav.Link>Field Agent Management</Nav.Link>
                      </LinkContainer>    
                    </NavDropdown>
                    <NavDropdown title="Industries" id="nav-dropdown">
                      <LinkContainer to="/industries/automobile" className="dropdown-item">
                        <Nav.Link>Automobile</Nav.Link>  
                      </LinkContainer> 
                      <LinkContainer to="/industries/finance" className="dropdown-item">
                        <Nav.Link>Finance</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/e-commerce" className="dropdown-item">
                        <Nav.Link>E-commerce</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/manufacturing" className="dropdown-item">
                        <Nav.Link>Manufacturing</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/real-estate" className="dropdown-item">
                        <Nav.Link>Real Estate</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/supply-chain" className="dropdown-item">
                        <Nav.Link>Supply Chain</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/tele-communications" className="dropdown-item">
                        <Nav.Link>Telecommunications</Nav.Link>
                      </LinkContainer>
                    </NavDropdown>

                    <LinkContainer to="/pricing">
                      <Nav.Link>Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact-Us">
                      <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className="col-md-5 small-nav">
            <Navbar expand="md" className="justify-content-end">

              <LinkContainer to="/contact-us">
                <Nav.Link className="btn btnyellow">Get Started</Nav.Link>
              </LinkContainer>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
