import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./insights.scss";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_4383641f3a58b9c41767fa46b023d2083e991&q=services"
    )
      .then((res) => {
        return res.json(); 
      })
      .then((data) => {
        console.log(data);
        console.log("https://newsapi.org/v2/top-headlines?q=tesla&from= + new Date().toISOString().split('T')[0] +&sortBy=publishedAt&apiKey=62f81cba61464860ad3ef7849b210627")
        setInsights(data.results);
        
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
              <div className="col-md-6" key={insight.article_id}>
                <div className="insight-inner">
                  <div>
                    <img src={insight.image_url} alt="" />
                    <div className="insight-detail">
                      <h2>{insight.title}</h2>
                      <p>{insight.description}</p>
                      <Link to="#" className="btn btnyellow">
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
