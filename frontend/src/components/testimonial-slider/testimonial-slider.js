import React from 'react';
import Slider from "react-slick";
import './testimonial-slider.scss';

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  let reviews = [
    {
      id: 1,
      name: "Ryan Warner",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
    },
    {
      id: 2,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 4,
    },
    {
      id: 3,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 3,
    },
    {
      id: 4,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 2,
    },
    {
      id: 5,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
    },
    {
      id: 6,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
    },
    {
      id: 7,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
    },
    {
      id: 8,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
    },
    {
      id: 9,
      name: "Customer service",
      date: "11 march 2024",
      photo: "/images/user-photu.jpg",
      desc: "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
      trust_rating : 5,
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
