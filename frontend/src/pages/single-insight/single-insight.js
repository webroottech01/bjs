import React, { useState, useEffect } from "react";
import "./single-insight.scss";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
const SingleInsight = () => {
  const [insights, setInsights] = useState([]);
  const id = useParams().id; 
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/${id}`) 
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
      <Banner title={insights.title} innerpage bgimage={process.env.REACT_APP_MEDIA_URL + "/" +insights.image} />
      <div className="singleinsights">
        <div className="in-overlay">
          <div className="container-max">
          <div
                          dangerouslySetInnerHTML={{
                            __html: insights.description,
                          }}
                        ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleInsight; 
