import React from "react"
import { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { container, container1, sliderHeight, font_mob, blackfriday } from "./banner-slider.module.css"
import Fade from "react-reveal/Fade"
import { Link } from 'gatsby';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
          }
        }
      ]
    }
    return (
      <div className='slickDotStyles mt-5 mt-md-0 pt-5 pt-md-0'>
        <Slider {...settings}>
          <div className={blackfriday}>
             <h1 className="text-white mt-5 Aftika_Bold">BLACK <span className="text-danger">FRIDAY</span> SALE</h1>
             <p className="text-white text-uppercase">Shirts for just £29</p>
             <p className="text-white text-uppercase">BUY 2 Shirts and get a TIE FREE</p>
             <p className="text-white text-uppercase">GET Flat 30% OFF on NON SALE Shirts USE CODE : DROP70</p>
             <a href="https://thinredline.com/collections/slim-fit-mens-shirts" className="text-underline border-bottom  border-white">Shop Now</a>
          </div>
          <div className={container}>
            <div className={`container d-flex flex-column justify-content-end align-items-center align-items-md-end pb-5 ${sliderHeight}`}>
              <Fade duration={2000}>
                <h1 className={`text-white font_md ${font_mob} Aftika_Light pb-2 text-md-end text-center mt-5 mt-md-0`}>
                  Buy 3 Shirts
                  <br />
                  get 30% off.
                </h1>
              </Fade>
              <Link to="/our-fits">
                <Fade delay={1000} right duration={1000}>
                  <button
                    type="button"
                    className="btn text-white rounded-0 bgblack px-4 py-2 mt-2"
                  >
                    <span className="Aftika_Light font_xmd">
                      Browse Collection
                    </span>
                  </button>
                </Fade>
              </Link>
            </div>
          </div>
          <div className={container1}>
            <div className={`container d-flex flex-column justify-content-end  align-items-center align-items-md-end pb-5 ${sliderHeight}`}>
              <Fade duration={2000}>
                <h1 className={`text-white font_md ${font_mob} Aftika_Light pb-2 text-md-end text-center mt-5 mt-md-0`}>
                  Finest Fabrics. Finest Fits
                </h1>
              </Fade>
              <Link to="/our-fits">
                <Fade delay={1000} right duration={1000}>
                  <button
                    type="button"
                    className="btn text-white rounded-0 bgblack px-4 py-2 mt-2"
                  >
                    <span className="Aftika_Light font_xmd">
                      Browse Collection
                    </span>
                  </button>
                </Fade>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
