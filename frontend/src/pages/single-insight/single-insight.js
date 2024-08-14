import React, { useState, useEffect } from "react";
import "./insights.scss";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
const SingleInsight = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/getpost/${title}`) 
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInsights(data.data);
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
                <div className="col-md-6" key={insight.id}>
                  <div className="insight-inner">
                    <div>
                      <img src={insight.image} alt="" />
                      <div className="insight-detail">
                        <h2>{insight.title}</h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: insight.description,
                          }}
                        ></div>
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

export default SingleInsight; 
