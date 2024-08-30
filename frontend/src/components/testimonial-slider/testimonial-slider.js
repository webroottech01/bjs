import React from 'react';
import Slider from "react-slick";
import './testimonial-slider.scss';

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  };
  let reviews = [
    {
      id: 1,
      name: "Amarat Gill, Operations Director at Construct IT",
      date: "11 march 2023",
      photo: "/images/usershadow.jpg",
      desc: "We prioritize efficiency and excellence in all our administrative processes. Partnering with Beyond Just Service has significantly enhanced our operational capabilities, resulting in improved productivity, cost savings, and better service quality. Their precision and professionalism make them the best virtual personal assistant services in UK that contributes to your growth and success.",
      trust_rating : 4,
    }, 
    {
      id: 2,
      name: "Khalil Khan, Director, BedsDivans",
      date: "22 Jan 2024",
      photo: "/images/usershadow.jpg",
      desc: "Partnering with Beyond Just Service is the best field service agent management in the UK and has been a game-changer for us at BedsDivans! Their experts efficiently manage our sales and customer service, allowing our small team to streamline operations and enhance the customer experience. We look forward to continued success together ",
      trust_rating : 5, 
    },
    {
      id: 3,
      name: "Aditya Gupta, Director, Fortune Select Forest Hill Resort",
      date: "26 march 2024",
      photo: "/images/usershadow.jpg",
      desc: "Working with Beyond Just Service has transformed our operations at Fortune Select Forest Hill Resort. Their team expertly handles our customer support and administrative tasks, allowing us to focus on delivering an exceptional guest experience. Their professionalism and efficiency have significantly improved our service quality.",
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
                  <img className="review-photo" src={process.env.PUBLIC_URL + review.photo } alt=""/>
                  <div className="review-rating">
                   {review.trust_rating > 4 ?(
                   <img src={process.env.PUBLIC_URL + '/images/star5new.svg' } alt="" />
                   ) : review.trust_rating > 3 ?(
                    <img src={process.env.PUBLIC_URL + '/images/star4new.svg' } alt=""/>
                   ) : (
                    <img src={process.env.PUBLIC_URL + '/images/starmidnew.svg' } alt=""/>
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
