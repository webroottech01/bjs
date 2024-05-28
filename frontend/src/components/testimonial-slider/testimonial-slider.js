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
      name: "Melvin Leadbitter",
      date: "11 march 2024",
      photo: "/images/testimon1.jpg",
      desc: "We serve clients from around the globe, but since our firm is in the UK, our staff is only available during the day to take calls. That’s where BJS came to the rescue and handled all our customer support and communications 24/7. It reduced the burden on my shoulders by handling everything automatically and sending me periodic reports/notes about all the activities to maintain transparency.",
      trust_rating : 5,
    },
    {
      id: 2,
      name: "Olive Ross",
      date: "22 march 2024",
      photo: "/images/testimon2.jpg",
      desc: "As a self-employed sole proprietor, I find it difficult to focus on my work and take calls from current and prospective clients during the day. During a pandemic, communications became even harder to handle. BJS came to our rescue, and I have never looked back since that day. They have handled all my needs and ensured my clients never feel alienated by answering quick calls and accurately responding to all queries.",
      trust_rating : 4,
    },
    {
      id: 3,
      name: "Suzzane Hunt",
      date: "26 march 2024",
      photo: "/images/testimon4.jpg",
      desc: "I run a medium-scale business offering IT services globally. With many departments and a widespread network of professionals, it's impossible to properly get answers for our customers. Fortunately, BJS offers the infrastructure to take calls on our behalf and then transfer them to the concerned person/department to receive responses in almost no time. I have heard praise from my clients about the reduced waiting times and overall improvement in the quality of responses. I consider them a must-have for any business.",
      trust_rating : 3,
    },
    {
      id: 4,
      name: "Louis Omarzai",
      date: "30 march 2024",
      photo: "/images/testimon3.jpg",
      desc: "I run a business with high-profile clients from the US and UK. As a non-native English speaker, it is impossible for me and most of my employees to effectively communicate with them. Fortunately, BJS has a staff that is comprised of native English speakers. That can effectively understand, communicate, and answer queries.",
      trust_rating : 2,
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
