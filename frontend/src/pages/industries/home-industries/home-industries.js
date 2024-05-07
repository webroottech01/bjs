import React , {useState} from "react";
import PropTypes from "prop-types";
import "./home-industries.scss";
import { Link } from "react-router-dom";  

const HomeIndustries = () => {
  const [allloaded , setAllloaded] = useState(false);

  const loadmore =()=>{
    setAllloaded(!allloaded);
  }

  const industries = [
    {
      id : 1,
      name : 'Automobile',
      short_desc : 'dhakhdasjdhkadh dasdkadhaksd  dhadjakdhak',
      background : 'red'
    }
  ]


  return (
    <>
      <div className="container-med features-inner">
        <div className="row">
          <div className="col-md-4">
            <div className="feature-single bgpink">
              <Link to="/industries/automobile" >
              <h3>Automobile</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpink"></div> 
          </div>
          <div className="col-md-4">
            <div className="feature-single bgpurple">
              <Link to="/industries/finance" >
              <h3>Finance</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpurple"></div>
          </div>
          <div className="col-md-4">
            <div className="feature-single bgpeach">
              <Link to="/industries/ecommerce" >
              <h3>Ecommerce</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpeach"></div>
          </div>

          <div className="col-md-4">
            <div className="feature-single bgpurple">
              <Link to="/industries/hospitality" >
              <h3>Hospitality</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpurple"></div>
          </div>
          <div className="col-md-4">
            <div className="feature-single bgpeach">
              <Link to="/industries/real-estate" >
              <h3>Real Estate</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpeach"></div>
          </div>
          <div className="col-md-4">
            <div className="feature-single bgpink">
              <Link to="/industries/supply-chain" >
              <h3>Supply Chain</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpink"></div>
          </div>
{allloaded && 
          <div className="col-md-4">
            <div className="feature-single bgpink">
              <Link to="/industries/tele-communication" >
              <h3>Tele Comm..</h3>
              <p>
                The impact of well-crafted website content cannot be overstated
                and can be the difference between a thriving online presence and
                a lackluster one. If you find yourself unsure about writing your
                own content we have just the thing for you.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpink"></div>
          </div>
        }

        </div>
        <button onClick={loadmore} className="btn btnyellow">
        {allloaded ? 'Show Less' : 'Load More'} 
      </button> 
      </div>
      
    </>
  );
};

HomeIndustries.propTypes = {};

HomeIndustries.defaultProps = {};

export default HomeIndustries; 
