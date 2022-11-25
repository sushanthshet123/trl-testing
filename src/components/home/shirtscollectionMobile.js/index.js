import React, { Component } from "react"
import Slider from "react-slick";
import { sliderText } from "./responsive.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ResponsiveSlider = () => {

    const settings = {
        dots: false,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
    }

    return (
        <>
            <div className="pb-5">
                <h1 className={`text_black Aftika_Bold ${sliderText}`}>Fit For Your<br /> Individuality</h1>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="row">
                        <div className="col-6 pe-0">
                            <img src="/shirt-collection/mob-slider-2.jpg" alt="Shirt Collections" className="img-fluid" />
                        </div>
                        <div className="col-6 ps-0">
                            <img src="/shirt-collection/mob-slider-3.jpg" alt="Shirt Collections" className="img-fluid mt-3" />
                        </div>
                        <div className="col-md-12 pt-3">
                            <img src="/shirt-collection/mob-slider-4.jpg" alt="Shirt Collections" className="img-fluid mx-auto pe-5" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-6 ">
                            <img src="/shirt-collection/mob-slider-5.jpg" alt="Shirt Collections" className="img-fluid" />
                        </div>
                        <div className="col-6 ps-0">
                            <img src="/shirt-collection/mob-slider-6.jpg" alt="Shirt Collections" className="img-fluid mt-4" />
                        </div>
                        <div className="col-md-12 pt-3">
                            <img src="/shirt-collection/mob-slider-7.jpg" alt="Shirt Collections" className="img-fluid mx-auto pe-5" />
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default ResponsiveSlider;