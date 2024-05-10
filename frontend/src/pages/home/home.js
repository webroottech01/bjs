import React from "react";
import "./home.scss";
import Banner from "../../components/banner/banner";
import Counter from "../../components/counter/counter";
import ServicesSlider from "../../components/services-slider/services-slider";
import TestimonialSlider from "../../components/testimonial-slider/testimonial-slider";
import Pcakages from "../../components/pcakages/pcakages";
import ContactTeam from "../../components/contact-team/contact-team";
import HomeIndustries from "../industries/home-industries/home-industries";

const Home = () => {
  let pagetitle = "Time to think Beyond Just";
  let pagedesc =
    "You’re bogged down with processes, spinning plates, juggling workloads, and generally just struggling to keep it all together – hi 👋 we’re here to help.";
  let bgimage = "images/bghome.webp"; 
  
  return (
    <div className="home">
      <Banner
        title={pagetitle}
        desc={pagedesc}
        subtitle="Services"
        bgimage={bgimage}
      />
      <div className="services-sec">
        <h2 className="secheading">Solutions</h2>
        <h3>Beyond Just Service</h3>
        <p>Need someone to answer the phone for you? We’re on the end of the line. A mountain of spreadsheets that need sorting? Let us pick up the tab. Invoices piling up and no end in sight? We’ll balance the books! We’re the flexible extra pairs of hands you need to transform your business – trust the process and let us do the heavy lifting.</p> 
        
          <ServicesSlider />
        
      </div>
      <div className="justimage-sec">
        <img src={process.env.PUBLIC_URL + "/images/justgirl.webp"}  />
        <div className="bounceball one"></div>
        <div className="bounceball two"></div>
        <div className="bounceball three"></div>
        <div className="bounceball four"></div>
        <div className="bounceball five"></div>
        <div className="bounceball six"></div>
        <div className="bounceball seven"></div>
        <div className="bounceball eight"></div>
      </div>
      <div className="features-sec">
        <h2 className="secheading">Industries</h2>
        <p>
        Whatever your requirements are, we provide industry-specific expertise using dedicated teams to build deep connections with our businesses and customers.
        </p>
        <HomeIndustries /> 
      </div>
      <div className="counter-sec">
        <div className="container-max">
          <div className="d-flex">
            <div className="bgpink">
              <h3 className="textblack">
                <Counter fromValue={1} toValue={15} suffix="m" prefix="" />
              </h3>
              <p className="textblack">Calls Handled</p>
            </div>

            <div className="bgpurple">
              <h3>
                <Counter fromValue={50} toValue={250} suffix="" prefix="" />
              </h3>
              <p>Clients Served</p>
            </div>

            <div className="bgpeach">
              <h3>
                <Counter fromValue={50} toValue={350} suffix="+" prefix="" />
              </h3>
              <p>Fabulous People</p>
            </div>

            <div className="bgpowder">
              <h3 className="textblack">
                <Counter fromValue={0} toValue={7} suffix="" prefix="24/" />
              </h3>
              <p className="textblack">All Year Round</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-sec">
        <h2 className="secheading">What our partners say about us</h2>
          <TestimonialSlider />
      </div>

      {/* <div className="package-sec">
        <h2 className="secheading">Answering Packages</h2>
          <Pcakages />
      </div> */}

      <div className="contact-sec">
      <h2 className="secheading">Ready to think beyond just service?</h2>
      <ContactTeam />
      </div>

      <div className="familylogos-sec">
        <div className="container-max">
          <div className="d-flex">
            <img src={process.env.PUBLIC_URL + "/images/bjscouriers.svg"} />
            <img src={process.env.PUBLIC_URL + "/images/bjshaulage.svg"} />
            <img src={process.env.PUBLIC_URL + "/images/bjsextra.svg"} />
            <img src={process.env.PUBLIC_URL + "/images/constructit.svg"} />
          </div>
        </div>
      </div>
    </div>
    
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home; 
