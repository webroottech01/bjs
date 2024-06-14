import React , {useRef}  from 'react';
import './services-slider.scss';
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ServicesSlider = () => {


  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    speed: 7000,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: "linear" ,
    pauseOnHover: true,
    autoplaySpeed: 2000,
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
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            initialSlide: 2,
            centerPadding: "10%",
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  }; 
  let services = [
    {
      id: 1,
      name: "Contact Center",
      subhead: "Busy People",
      icon_url: "/images/phone.svg",
      image_url: "./images/contact-center.webp",
      main_url: "./solutions/contact-center",
    },
    {
      id: 2,
      name: "Account Management ",
      subhead: "Smaller companies",
      icon_url: "/images/mugcall.svg",
      image_url: "./images/accountmanage.webp",
      main_url: "/solutions/account-management",
    },
    {
      id: 3,
      name: "Integrated Sales ",
      subhead: "Smaller companies",
      icon_url: "/images/headphones.svg",
      image_url: "./images/integrtedsale.webp",
      main_url: "/solutions/integrated-sales",
    },
    {
      id: 4,
      name: "Virtual PA ",
      subhead: "Busy People",
      icon_url: "/images/phone.svg",
      image_url: "./images/virtualpa.webp",
      main_url: "/solutions/virtual-pa",
    },
    {
      id: 5,
      name: "Human Resources ",
      subhead: "Smaller companies",
      icon_url: "/images/mugcall.svg",
      image_url: "./images/hrres.webp",
      main_url: "/solutions/human-resources",
    },
    {
      id: 6,
      name: "Process Consulting",
      subhead: "Smaller companies",
      icon_url: "/images/headphones.svg",
      image_url: "./images/processconsult.webp",
      main_url: "/solutions/process-consulting",
    },
    {
      id: 7,
      name: "Finance and Accounting",
      subhead: "Busy People",
      icon_url: "/images/phone.svg",
      image_url: "./images/financialgrow.webp",
      main_url: "/solutions/finance-accounting",
    },
    {
      id: 8,
      name: "E-Commerce Support ",
      subhead: "Smaller companies",
      icon_url: "/images/mugcall.svg",
      image_url: "./images/ecommsupport.webp",
      main_url: "/solutions/e-commerce",
    },
    {
      id: 9,
      name: "Field Agent Management",
      subhead: "Smaller companies",
      icon_url: "/images/headphones.svg",
      image_url: "./images/fieldmanage.webp",
      main_url: "/solutions/field-agent-management",
    }, 
  ];
  return (
    <div className="slider-container serv-slider">
      <Slider {...settings}>
      {services.map((service) => (
        <div key={service.id} class="srvcMain">
            <div className="serv-single" key={service.id} style={{ backgroundImage: `url(${service.image_url})` }}>
              <div className="serv-center" >
                <div className='serv-icon'><img src={process.env.PUBLIC_URL + service.icon_url} /></div>
                <h3>{service.name}</h3>
                <p>{service.subhead}</p>
                <Link to={service.main_url}>Explore More</Link>
              </div>
            </div>
            </div>
          ))}
      </Slider>
       
    </div>
  );
}
export default ServicesSlider;
