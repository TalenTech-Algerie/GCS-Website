import React from "react";
import Slider from "react-slick"; 
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
const Brand = () => {
  const settings = {
    infinite: true,         
    speed: 3000,            
    slidesToShow: 5,        
    slidesToScroll: 1,      
    autoplay: true,        
    autoplaySpeed: 0,    
    cssEase: "linear",      
  };

  return (
    <section className="brand">
      <div className="container">
        <div className="heading-title">
          <Title title="Nos partenaires" />
        </div>
        <Slider {...settings} className="brand-content py">
          {[...brand, ...brand].map((item) => (
            <div className="images" key={item.id}>
              <img src={item.cover} alt={item.id} width="60%" height="60%" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brand;
