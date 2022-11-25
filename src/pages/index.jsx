import * as React from "react"
import { Layout } from "../components/layout"
import { backgroundClass } from "./index.module.css"
import Banner from "../components/home/banner-slider/banner-slider"
import WhyUs from "../components/home/why-us/why-us"
import Essance from "../components/home/essence-of-style"
import TimelessMustHave from "../components/home/timeless-must-have"
import Unmistabakly from "../components/home/unmistabakbly"
import Journey from "../components/home/our-journey"
import Gallery from "../components/home/shirt-collection-slider"
import ResponsiveSlider from "../components/home/shirtscollectionMobile.js";
import Acode from "../components/home/announcement"
import { useState, useEffect } from "react";

function Hero() {

  return (
    <section>
    

      <div className="mk"><Acode /></div>
      <div className={`mt-5 mt-md-0 ${backgroundClass}`}>
        <Banner />
      </div>

      <div className="scroll_animation d-none d-md-block">
        <img
          src="/scroll.gif"
          style={{ height: "140px" }}
          className="img-fluid"
          alt="scroll"
        />
      </div>

      {/* why us section start */}
      <WhyUs bgColor={"bgColor"} />
      {/* why us section end */}


      {/* the essance of style start */}
      <Essance />
      {/* the essance of style end */}

      {/* timeless must have section start */}
      <TimelessMustHave />
      {/* timeless must have section end */}

      {/* gallery section start */}
      <div className="overflow-hidden pt-md-5 my-md-5">
        <div className="row justify-content-center">
          <div className="col-md-12 d-none d-md-block">
            <Gallery />
          </div>
          <div className="col-md-12 d-block d-md-none px-5 pb-5 mb-4">
            <ResponsiveSlider />
          </div>
        </div>
      </div>
      {/* gallery section end */}

      {/* Unmistabakly section start */}
      <div className="py-md-5">
        <Unmistabakly />
      </div>
      {/* Unmistabakly section end */}

      {/* Journey secton start */}
      <div className="py-md-5">
        <Journey />
      </div>
      {/* Journey secton end */}

      {/* vedio section start */}
      <section id="hero" className="position-relative">
        <div className={`container-fluid p-0`}>
          <video
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            className={`w-100 `}
          >
            <source src="/home/trl-lifestyle.mp4" type="video/mp4"></source>
          </video>
        </div>
      </section>
      {/* vedio secton end */}
      
    </section>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
