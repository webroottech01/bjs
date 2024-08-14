import React, { useState } from "react";
import "./header.scss";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
  console.log('API URL:', process.env.REACT_APP_API_URL);

  return (
    <div className="site-header sticky-top">
      <div className="container-max">
        <div className="row align-items-center">
          <div className="col-md-7 px-0">
            <div className="site-nav">
              <Navbar expand="md" expanded={expanded} onToggle={handleToggle}>
                <LinkContainer to="/">
                  <Navbar.Brand className="site-logo" onClick={closeNavbar}>
                    <img src={process.env.PUBLIC_URL + "/images/bjslogo.svg"} alt="" />
                  </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav className="mr-auto">
                    <LinkContainer to="/">
                      <Nav.Link onClick={closeNavbar}>Home</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Solutions" id="nav-dropdown">
                      <LinkContainer to="/solutions/contact-center" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Contact Centre</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/account-management" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Account Management</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/integrated-sales" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Integrated Sales</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/virtual-pa" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Virtual PA</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/human-resources" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Human Resources</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/process-consulting" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Process Consulting</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/finance-ecomm" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Finance & E-Commerce</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/e-commerce" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>E-commerce Support</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/solutions/field-agent-management" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Field Agent Management</Nav.Link>
                      </LinkContainer>
                    </NavDropdown>

                    <NavDropdown title="Industries" id="nav-dropdown">
                      <LinkContainer to="/industries/automobile" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Automobile</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/finance" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Finance</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/e-commerce" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>E-commerce</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/manufacturing" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Manufacturing</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/real-estate" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Real Estate</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/supply-chain" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Supply Chain</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/industries/tele-communications" className="dropdown-item">
                        <Nav.Link onClick={closeNavbar}>Telecommunications</Nav.Link>
                      </LinkContainer>
                    </NavDropdown>

                    <LinkContainer to="/pricing">
                      <Nav.Link onClick={closeNavbar}>Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/insights">
                      <Nav.Link onClick={closeNavbar}>Insights</Nav.Link>
                    </LinkContainer> 
                    <LinkContainer to="/contact-Us">
                      <Nav.Link onClick={closeNavbar}>Contact Us</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className="col-md-5 small-nav">
            <Navbar expand="md" className="justify-content-end">
              <LinkContainer to="/contact-us">
                <Nav.Link className="btn btnyellow" onClick={closeNavbar}>Get Started</Nav.Link>
              </LinkContainer>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 