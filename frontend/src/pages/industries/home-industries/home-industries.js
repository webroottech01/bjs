import React , {useState} from "react";
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
                The automobile industry, by nature, is complex and requires various smoothly
                 functioning components to be able to run properly. However, it's rare for most 
                 firms to have elaborate systems and logistics to manage everything as expected.
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
              The finance industry is a fast-moving sector. Every minute wasted is money lost. 
              Focusing on less-important tasks like customer support, account management, 
              or HR is the time you could have invested into growing your business. At the same...
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpurple"></div>
          </div>
          <div className="col-md-4">
            <div className="feature-single bgpeach">
              <Link to="/industries/e-commerce" >
              <h3>Ecommerce</h3>
              <p>
              E-Commerce is an industry of tight margins. Every dime is precious, and every minute is make or break. 
              Businesses need to have their systems in perfect condition to be able to grow and succeed in such a tight market. 
              That’s where BJS comes into play.
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpeach"></div>
          </div>

          <div className="col-md-4">
            <div className="feature-single bgpurple">
              <Link to="/industries/manufacturing" >
              <h3>Manufacturing</h3>
              <p>
              In the manufacturing sector, efficiency and precision are crucial. 
              Small errors can disrupt production, affecting supply chains, customer satisfaction, and your bottom line. 
              Ensuring smooth operations is essential for maintaining a competitive edge...
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
              Real estate customers often require multiple rounds of location tours, 
              negotiations, and discussions before sealing the deal. 
              During the process, any hiccup can turn them away from your firm. To ensure smooth operations and a tight-knit...
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
              It’s not easy to manage supply chains. Keeping all the supply chains running reliably 
              and delivering the desirable results is a tall order. It gets even more challenging when there is the added burden of 
              customer support, human resources, account...
              </p>
              </Link>
              <div></div>
            </div>
            <div className="shape bgpink"></div>
          </div>
{allloaded && 
          <div className="col-md-4">
            <div className="feature-single bgpink">
              <Link to="/industries/tele-communications" >
              <h3>Tele Comm..</h3>
              <p>
              The Telecom industry is known for its tough, unforgiving nature and tight regulations. 
              Human Resources, IT support, data management, analytics, planning, and finance, 
              many things need to be nailed for the success and growth of your firm.
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


export default HomeIndustries; 
