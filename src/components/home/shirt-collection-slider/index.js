import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { sliderHeight, imageThree,imageTwo, sliderText, imageFour, imageOne, sliderTextFont, imageFive } from "./slider.module.css"
import { useState, useEffect } from "react"


const Shirts = () => {

    const settings = {
      dots: false,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 40000,
      infinite: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
    }

    const [offsetY, setOffsetY] = useState();

    const handleScroll = () => setOffsetY(window.pageYOffset - 2500);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
      <div className="container">
      <div className={`py-5 overflow-hidden position-relative`}>
           <div className={`position-absolute ${sliderText}`}>
                <h1 className={`text_black ${sliderTextFont} Aftika_Bold`}>Fit for your<br />individuality</h1>
              </div>
           <div className="" style={{ transform: `translateX(${offsetY * 0.2 }px)` }}>
        <Slider {...settings}>
          <div>
            <div className={`position-relative ${sliderHeight}`}>
              <div className={`position-absolute ${imageThree}`}>
                <img
                  src="/shirt-collection/shirt1.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
              <div className={`position-absolute ${imageTwo}`}>
                <img
                  src="/shirt-collection/shirt3.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
            
              <div className={`position-absolute ${imageFour}`}>
                <img
                  src="/shirt-collection/shirt2.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
              <div className={`position-absolute ${imageOne}`}>
                <img
                  src="/shirt-collection/shirt4.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
            </div>
          </div>
          <div>
            <div className={`position-relative ${sliderHeight}`}>
              <div className={`position-absolute ${imageThree}`}>
                <img
                  src="/slider-5.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
              <div className={`position-absolute ${imageTwo}`}>
                <img
                  src="/slider-6.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
             
              <div className={`position-absolute ${imageFour}`}>
                <img
                  src="/slider-7.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
              <div className={`position-absolute ${imageOne}`}>
                <img
                  src="/slider-8.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
              <div className={`position-absolute ${imageFive}`}>
                <img
                  src="/slider-9.jpg"
                  className="img-fluid"
                  alt="shirt"
                />
              </div>
            </div>
          </div>

        </Slider>
        </div>
      </div>
      </div>
    )
  }

  export default Shirts
