import React from "react"
import { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { container, container1, sliderHeight, font_mob } from "./banner-slider.module.css"
import Fade from "react-reveal/Fade"
import { Link } from 'gatsby';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
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
          <div className={container}>
            <div className={`container d-flex flex-column justify-content-end align-items-center align-items-md-end pb-5 ${sliderHeight}`}>
              <Fade duration={2000}>
                <h1 className={`text-white font_md ${font_mob} Aftika_Light pb-2 text-md-end text-center mt-5 mt-md-0`}>
                  For The Man Who
                  <br />
                  Measures Up
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
