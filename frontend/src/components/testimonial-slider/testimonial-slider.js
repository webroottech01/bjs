import React from 'react';
import Slider from "react-slick";
import './testimonial-slider.scss';

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  let reviews = [
    {
      id: 1,
      name: "Really helpfull!!",
      date: "11 march 2023",
      photo: "/images/usershadow.jpg",
      desc: "The whole company were really helpful and friendly, from the people in customer service to the delivery guys, really did a great job, and the mattress is 100% fantastic. Well done",
      trust_rating : 5,
    },
    {
      id: 2,
      name: "Maia Garden Furniture",
      date: "22 Jan 2024",
      photo: "/images/usershadow.jpg",
      desc: "I was kept up to date with my order every step of the way. An excellent customer service experience. I was extremely impressed that I was given a 3 hour delivery time but they arrived in half the time very efficient service.",
      trust_rating : 4, 
    },
    {
      id: 3,
      name: "Very professional service",
      date: "26 march 2024",
      photo: "/images/usershadow.jpg",
      desc: "Had 6 chairs ordered. 2 however had damage. I rang there customer service who then replaced the 2 faulty chairs. Received the replacements within a couple of days. Very friendly and professional service.",
      trust_rating : 4,
    },
    
  ]
  return (
    <div className="testimonial-slider">
      <div className="container-max">
      <Slider {...settings}>
      {reviews.map((review) => (
          <div key={review.id}>
            <div className="single-review">
              <div className="d-flex">
                <div className="review-photo">
                  <img className="review-photo" src={process.env.PUBLIC_URL + review.photo } />
                  <div className="review-rating">
                   {review.trust_rating > 4 ?(
                   <img src={process.env.PUBLIC_URL + '/images/star5.svg' } />
                   ) : review.trust_rating > 3 ?(
                    <img src={process.env.PUBLIC_URL + '/images/star4.svg' } />
                   ) : (
                    <img src={process.env.PUBLIC_URL + '/images/starmid.svg' } />
                   )}
                   </div>
                </div>
                <div className="review-details">
                  
                  <div className="d-flex">
                    <div className="review-name">
                      <h3>{review.name}</h3>
                      <span>{review.date}</span>
                      </div>
                    <div className="col-3 hypeicon">
                    
                    </div>
                  

                  </div> 
                  
                <p>{review.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default TestimonialSlider;
