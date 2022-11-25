import React from "react"
import { Layout } from "../components/layout"
import {
  fontSize,
  negativeMargin,
  fontSizeText,
  ZIndex,
  measureShirt,
  text_centerr,
  fontsm_size,
  font_size,
  text_right,
  Aftika_Light,
} from "./about.module.css"
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from "react"


const About = () => {
  const [offsetY, setOffsetY] = useState();
  const [offset1Y, setOffset1Y] = useState();
  const [offset2Y, setOffset2Y] = useState();
  const [zoom, setZoom] = useState();

  const handleScroll = () => setOffsetY(window.pageYOffset - 250);
  const handleScroll1 = () => setOffset1Y(window.pageYOffset - 400);
  const handleScroll2 = () => setOffset2Y(window.pageYOffset - 1300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll1);
      window.removeEventListener("scroll", handleScroll2);
    }
  }, []);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 50 && window.scrollY <= 200) {
        setZoom(true);
      }
      else {
        setZoom(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor)
  }, []);

  return (
    <>
      {/* whats make the perfect dress section start */}
      <div className="container pt-5 overflow_hidden mt-5 mt-md-0">
        <div className="col-12 pt-5 mt-5">
          <div className="row py-md-5 py-3">
            <div className="col-md-6 d-md-block d-none pt-5" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
              <img
                src="/about/cotton-2.jpg"
                className="img-fluid pt-3"
                alt="cotton image"
              />
            </div>
            <div className="col-md-6 my-auto">
              <div className="p-md-5 p-3">
                <Fade right delay={0}>
                  <h1 className={`${fontSize} Aftika_Bold pb-3 ${fontsm_size} text-center text-md-start`}>
                    <span className={`${Aftika_Light}`}> The Perfect Dress</span> Shirt? <br className="d-none d-md-block" />Weave got it covered.
                  </h1>
                  <img
                    src="/about/cotton-2.jpg"
                    className={zoom == true ? `img-fluid zoom d-block d-md-none pt-5` : `img-fluid d-block d-md-none pt-5`}
                    alt="cotton image"
                  />
                </Fade>
                <Fade right delay={300}>
                  <p className={`Aftika_Light primary_text ${fontSizeText}  pt-5 mt-5 mt-md-0 pt-md-3 ${text_centerr}`}>
                    {/* A careful combination of premium materials, high quality
                    construction, cool design and perfect fit. */}
                    There are four carefully-planned aspects that constitute a premium dress shirt - the fabric, the cut, the design and the fit. Of these, the fabric, we feel, is what matters most.
                  </p>
                </Fade>
                {/* <Fade right delay={660}>
                  <p className={`Aftika_Light primary_text ${fontSizeText}  py-2 ${text_centerr}`}>
                    The fabric, we think, is what a shirt is actually made out of
                    after all, that’s why its weave is one of the most important
                    feature.
                  </p>
                </Fade>
                <Fade right delay={900}>
                  <p className={`Aftika_Light primary_text ${fontSizeText} ${text_centerr} `}>
                    But what exactly is it? The weave is the way in which the
                    threads of cotton called warp and weft are actually put
                    together to make a fabric.
                  </p>
                </Fade> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* whats make the perfect dress section end */}

      {/* the weave section start */}
      <div className="container py-md-5 px-3 px-md-0">
        <div className="row">

          <div className={`col-md-5 position-relative`}>
            <Fade delay={200} left>
              <h1 className={`${fontSize} Aftika_Bold`}><span className={`${Aftika_Light}`}>The</span><br className="d-block d-md-none  " /> Weave</h1>
            </Fade>
            <div className="col-md-10 d-md-none d-block">
              <img src="/about/weave.jpg" className="img-fluid" alt="the Weave" />
            </div>
            <Fade delay={400} left>
              <p className={`Aftika_Light primary_text ${fontSizeText} ${ZIndex}  py-2`}>
                {/* The weave is the way in which the threads of cotton called warp
                and weft are actually put together to make a fabric. Different
                techniques create different properties in the fabric. */}
                We cannot talk about fabric without referring to the weave - the manner in which the threads are stitched together. The makeup of the weave comprises the warp - the threads that go lengthwise - and the weft - the threads that go under the warp widthwise.
              </p>
            </Fade>
            <p className={`Aftika_Light primary_text ${fontSizeText} ${ZIndex}  py-2`}>
            It is the different techniques applied to the warp and weft process that go a long way towards creating a shirt as distinct as you are.
            </p>
          </div>

          <div className={`${negativeMargin} d-flex justify-content-end`}>
            <div className="col-md-10 d-none d-md-block">
              <img src="/about/weave.jpg" className="img-fluid" alt="the Weave" />
            </div>
          </div>
        </div>
      </div>
      {/* the weave section end */}

      {/* measure dress shirt start */}
      <div className="container-fluid pt-5">
        <div className="col-12 px-3 px-md-0">
          <div className="row">
            <div className={`${measureShirt} col-md-6 col-10 order-md-0 order-2`}></div>
            <div className="col-md-6 my-auto pe-md-5 order-md-0 order-1">
              <div className="p-md-5 overflow-hidden">
                <Fade right delay={200}>
                  <h1 className={`${fontSize} Aftika_Bold pb-3 ${font_size}`}>
                    <span className={`${Aftika_Light}`}>Ready To Wear</span> <br/>Dress Shirts
                  </h1>
                </Fade>
                <Fade right deyal={400}>
                  <p className={`Aftika_Light ${text_right} primary_text ${fontSizeText} pe-md-5 pt-3 col-lg-10 text-center text-md-start`}>
                    {/* Need to look your best? Our formal shirts for men are not only wonderful to wear but will also keep you looking smart right to the end of the day. Our formal shirts are hand-cut in the traditional way and stitched with exacting detail, creating a quality shirt that is done right. */}
                    Style that measures up to your taste - right off the rack. Our ready-to-wear shirts are designed to delight the most fastidious dresser. Each shirt is handcrafted with care and precision under the trained eye of our expert outfitters to ensure that you delight in wearing it as much as we do in creating it.
                  </p>
                </Fade>
              </div>

            </div>

          </div>
        </div>
      </div>
      {/* measure dress shirt end */}
    </>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <About />
    </Layout>
  )
}
