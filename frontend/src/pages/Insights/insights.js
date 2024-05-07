import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./insights.scss";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?q=tesla&from= + new Date().toISOString().split('T')[0] +&sortBy=publishedAt&apiKey=62f81cba61464860ad3ef7849b210627"
    )
      .then((res) => {
        return res.json(); 
      })
      .then((data) => {
        console.log(data);
        console.log("https://newsapi.org/v2/top-headlines?q=tesla&from= + new Date().toISOString().split('T')[0] +&sortBy=publishedAt&apiKey=62f81cba61464860ad3ef7849b210627")
        setInsights(data.articles);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return ( 
    <>
      <Banner title={"Insights"} innerpage /> 
      <div className="insights-outer">
      <div className="in-overlay">
        <div className="container-max">
          <div className="row">
            {insights.map((insight) => (
              <div className="col-md-6" key={insight.title}>
                <div className="insight-inner">
                  <div>
                    <img src={insight.urlToImage} alt="" />
                    <div className="insight-detail">
                      <h2>{insight.title}</h2>
                      <p>{insight.description}</p>
                      <Link to="" className="btn btnyellow">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

Insights.propTypes = {};

Insights.defaultProps = {};

export default Insights;
