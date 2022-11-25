import React from "react"
import { Layout } from "../components/layout"
import {
  fontSize,
  fontSizeText,
  imageWidth
} from "./shirt-collection.module.css"
import WhyUs from '../components/home/why-us/why-us'
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const ShirtCollection = () => {

  const [offsetY, setOffsetY] = useState();
  const [offset1Y, setOffset1Y] = useState();
  const [offset2Y, setOffset2Y] = useState();
  
  const handleScroll = () => setOffsetY(window.pageYOffset - 300);
  const handleScroll1 = () => setOffset1Y(window.pageYOffset - 200);
  const handleScroll2 = () => setOffset2Y(window.pageYOffset - 750);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("scroll", handleScroll2);

    return () =>{ 
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll1);
      window.removeEventListener("scroll", handleScroll2);
  }
  }, []);

  return (
    <StaticQuery 
    query={graphql`
    query shirstQuery {
      collectionShirts: allShopifyCollection {
        nodes {
          products {
            title
          }
          description
          handle
          title
          metafields {
            value
            namespace
            description
          }
          id
        }
      }
    }`}
    render={data =>(
    <>
      {/* first section start */}
      <div className="container pt-5 mt-5 overflow_hidden d-none d-md-block">
        <div className="col-12">
          <div className="row pt-5">
            <div className="col-6 position-relative">
            <div className="position-absolute animatedarrow1 text-end d-none d-md-block">
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
              <div style={{ transform: `translateY(20px)` }}>
                <img
                  src="/shirt-collection/classic-fit.jpg"
                  className="img-fluid"
                  alt="classic"
                  style={{width:'93%'}}
                />
           
              </div>
              <div className="py-5 ps-4 position-relative">
              <div className="position-absolute animatedarrow2 text-end d-none d-md-block"style={{transform:`rotate(180deg)`}}>
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
                <Fade left>
                <h1 className={`${fontSize} ps-5 pt-5`}>
                  <p className="Aftika_Light p-0 m-0">Men's Formal</p>
                  <p className={"Aftika_Bold p-0 m-0"}>Slim Fit Shirts</p>
                 
                </h1>
                </Fade>
                <Fade left delay={1000}>
                <p className={`ps-5 pe-5 Aftika_Light primary_text pt-5 ${fontSizeText}`}>
                Perhaps nothing flatters your profile better than an exquisitely-tailored formal slim fit shirt. It embraces your look, in body and spirit, allowing you to stand out - a fitting tribute to how you define yourself.
                </p>
                </Fade>
                <Link to={`https://thinredline.com/collections/slim-fit-mens-shirts`}>
                  <h4 className={`primary_color ps-5 pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade left delay={1500}>
                  <div className="ps-5">
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border " alt="Animated border" />
                </div>
                </Fade>
              </div>
              
              <div style={{ transform: `translateY(${offset2Y * 0.2 }px)` }}>
              
                <img
                  src="/shirt-collection/casual-shirt-updated.jfif"
                  className="img-fluid px-5"
                  alt="classic"
                  style={{width:'97%'}}
                />
              </div>
            </div>
            <div className="col-6">
            <div className="py-5">
              <Fade right>
                <h1 className={`${fontSize}`}>
                  <p className="Aftika_Light p-0 m-0">Men's Formal</p>
                  <p className={"Aftika_Bold p-0 m-0"}>Classic Fit Shirts</p>
                </h1>
                </Fade>
                <Fade right delay={1000}>
                <p className={` Aftika_Light paragraph_color pt-5 ${fontSizeText}`}>
                Be it art, music or automobiles - a connoisseur always prefers the classics. Hand-crafted to exacting standards, each of our formal classic fit shirts bears testimony to a long-standing tradition of creating exceptional wear that complements - and brings compliments to - the discerning dresser.
                </p>
                </Fade>
                  <Link to={`https://thinredline.com/collections/classic-fit-mens-shirts`}>
                  <h4 className={`primary_color pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade right delay={1500}>
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border" alt="Animated border" />
                
                </Fade>
              </div>
            <div className="position-relative pt-3">
              <Fade delay={2000} duration={1000}>
                <img
                  src="/shirt-collection/formal-fit.jpg"
                  className={imageWidth}
                  alt="classic"
                />
                
              </Fade>
              </div>
              <div className="py-5 position-relative">
              <div className="position-absolute animatedarrow3 text-end d-none d-md-block">
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
              <Fade right>
                <h1 className={`${fontSize}  pt-5`}>
                  <p className="Aftika_Light p-0 m-0">Men's</p>
                  <p className={"Aftika_Bold p-0 m-0"}>Casual Shirts</p>
                </h1>
                </Fade>
                <Fade right delay={1000}>
                <p className={`Aftika_Light primary_text pt-5 ${fontSizeText}`}>
                Looking stylish while taking it easy is a trait that only a few can master. Our selection of casual shirts is designed to turn even the most relaxing occasion into an opportunity to steal the spotlight. Woven with care at the hands of experts, it reflects your refined taste.
                </p>
                </Fade>
                  <Link to={`https://thinredline.com/collections/casual-shirts`}>
                  <h4 className={`primary_color pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade right delay={1500}>
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border" alt="Animated border" />
                </Fade>
              </div>
           
            </div>
          </div>
        </div>
      </div>
      {/* first section end */}
      {/* why us section start */}
      <div className="pt-5 pb-3 d-none d-md-block">
      <WhyUs bgColor={"bg-white"} />
      </div>
      {/* why us section send */}
      {/*For Mobile View*/}
      <div className="mt-5 pt-5 d-md-none d-block">
        <div className="col-12">
      <div className="container pt-5 mt-5 overflow_hidden px-4">
      
          <div className="row pb-5">
            <div className="col-12">
            <div>
                <img
                  src="/shirt-collection/classic-2.jpg"
                  className="img-fluid"
                  alt="classic"
                />
              </div> 
              <div className="py-md-5">
                <div className="">
              <div className="position-relative animatedarrow text-end"style={{transform:`rotate(90deg)`}}>
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
                      </div>
                      <div className="">
              <Fade right>
                <h1 className={`${fontSize}`}>
                  <p className="Aftika_Light p-0 m-0">Men's <br/>Formal<br/></p>
                  <p className={"Aftika_Bold p-0 m-0"}>Classic Fit<br/> Shirts</p>
                </h1>
                </Fade>
                <Fade right delay={1000}>
                <p className={`pe-5 Aftika_Light paragraph_color pt-5 ${fontSizeText}`}>
                Be it art, music or automobiles - a connoisseur always prefers the classics. Hand-crafted to exacting standards, each of our formal classic fit shirts bears testimony to a long-standing tradition of creating exceptional wear that complements - and brings compliments to - the discerning dresser.
                </p>
                </Fade>
                  <Link to={`https://thinredline.com/collections/classic-fit-mens-shirts`}>
                  <h4 className={`primary_color pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade right delay={1500}>
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border" alt="Animated border" />
                </Fade>
              </div>
            </div>
            </div>
            </div>
            <div className="row pb-5">
            <div className="col-12">
            <div>
              <Fade delay={2000} duration={1000}>
                <img
                  src="/shirt-collection/formal-1.jpg"
                  className=""
                  alt="classic"
                />
              </Fade>
              </div>
               <div className="col-12">
               <div className="">
               <div className="position-relative animatedarrow text-end"style={{transform:`rotate(90deg)`}}>
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
                      <div className="">
                <Fade left>
                <h1 className={`${fontSize} ps-md-5 pt-md-5`}>
                  <p className="Aftika_Light p-0 m-0">Men's<br/> Formal <br/></p>
                  <p className={"Aftika_Bold p-0 m-0"}>Slim Fit<br/> Shirts</p>
                </h1>
                </Fade>
                <Fade left delay={1000}>
                <p className={`ps-md-5 pe-md-5 Aftika_Light primary_text pt-5 ${fontSizeText}`}>
                Perhaps nothing flatters your profile better than an exquisitely-tailored formal slim fit shirt. It embraces your look, in body and spirit, allowing you to stand out - a fitting tribute to how you define yourself.
                </p>
                </Fade>
                  <Link to={`https://thinredline.com/collections/slim-fit-mens-shirts/`}>
                  <h4 className={`primary_color ps-md-5 pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade left delay={1500}>
                  <div className="ps-3">
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border " alt="Animated border" />
                </div>
                </Fade>
              </div>
                
                
              </div>
                 </div>   
            </div>
            </div>
            <div className="row pb-5">
              <div className="col-12">
              <div className="">
                <img
                  src="/shirt-collection/casuals.jpg"
                  className="img-fluid"
                  alt="classic"
                />
              </div>
              
              <div className="position-relative animatedarrow text-end"style={{transform:`rotate(90deg)`}}>
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>
              <Fade right>
                <h1 className={`${fontSize} pt-3`}>
                  <p className="Aftika_Light p-0 m-0">Men's<br/></p>
                  <p className={"Aftika_Bold p-0 m-0"}>Casual<br/> Shirts</p>
                </h1>
                </Fade>
                <Fade right delay={1000}>
                <p className={`pe-5 Aftika_Light primary_text pt-5 ${fontSizeText}`}>
                Looking stylish while taking it easy is a trait that only a few can master. Our selection of casual shirts is designed to turn even the most relaxing occasion into an opportunity to steal the spotlight. Woven with care at the hands of experts, it reflects your refined taste.
                </p>
                </Fade>
                  <Link to={`https://thinredline.com/collections/casual-shirts/`}>
                  <h4 className={`primary_color pt-3 Aftika_Light font_xs`}>
                  Shop Now
                  </h4>
                </Link>
                <Fade right delay={1500}>
                <img src="/shirt-collection/shop-now.gif" className="img-fluid animated-border" alt="Animated border" />
                </Fade>
              

              </div>
            </div>
          
        </div>
      </div>
      </div>
      {/* End Of Mobile View*/}
    </>
 )}
 />
)
}


export default function IndexPage({ data }) {
  return (
    <Layout>
      <ShirtCollection />
    </Layout>
  )
}
