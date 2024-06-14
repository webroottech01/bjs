import React from "react";
import PropTypes from "prop-types";
import "./banner.scss";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const bannerClass = props.innerpage ? 'inner-page-banner' : 'regular-banner';

  return( 
  <>
    <div  className={`site-banner ${bannerClass}`} style={{ background: `url(${props.bgimage}), #ffb600` }}>
      <div className="banner-inner">
        <div className="container-max">
        <h2 className="banner-title">
          {props.title}
        </h2>
        <p className="banner-desc">{props.desc}</p>
        <div className="banner-gettouch">
          <Link to='contact-us'>Get in Touch</Link>
        </div>
      </div>
      </div>
      
      <div className="triblocks">
        <img className="leftyban" src={process.env.PUBLIC_URL + "/images/lefttriangle.webp"} alt="leftyban" />
      
      
        <img className="bottomban" src={process.env.PUBLIC_URL + "/images/bottomtriangle.webp"} alt="bottomban" />
      
      
        <img className="rightban" 
        src={process.env.PUBLIC_URL + "/images/righttriangle.webp"} alt="rightban" />
      
      </div>
    </div>
  </>
  )
      };

Banner.propTypes = {
  title: PropTypes.string ,
  desc: PropTypes.string,
};

Banner.defaultProps = {
  bgimage : 'images/testbanner.webp', 
}

export default Banner;
