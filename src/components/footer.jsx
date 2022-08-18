import * as React from "react"
import {
  footerStyle,
  fontsm,
  heading_fontsm,
  info,
  heading_fontsmm,
} from "./footer.module.css"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

export function Footer() {
  return (
    <StaticQuery 
    query={graphql`
    query footerQuery {
      collectionFooter: allShopifyCollection {
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
            type
          }
          id
        }
      }
    }`}
    render={data =>(
    <footer className={`${footerStyle} position-relative `}>
      <div className="container pt-5">
        <div className="d-md-none d-block">
      <div className={`row justify-content-center ${info}`}>
      
              <div className="col-4 d-flex justify-content-center align-items-center">
              
                  <div>
                  <img src="/footer/free-shipping.png" className="img-fluid mx-auto" alt="uk shipping" />
                  <p className="text-center font_xsm Aftika_Light">Free UK Shipping</p>
                  </div>
             
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
              
              <div>
                  <img src="/footer/easy-refund.png" className="img-fluid mx-auto" alt="uk shipping" />
                  <p className="text-center font_xsm Aftika_Light">Easy Refund & <br/> Exchange Policy</p>
                  </div>
              
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
              
              <div>
                  <img src="/footer/Trusted Premium.png" className="img-fluid mx-auto" alt="uk shipping" />
                  <p className="text-center font_xsm Aftika_Light" >Trusted Premium  Quality</p>
                  </div>
            
              </div>
              
            </div>

            <hr className="mx-auto d-md-none d-block" style={{ borderBottom : 'dotted',width:'100%' }}></hr>
          </div>
        <div className="row">
          <div className="col-md-3 order-md-0 order-1">
            <img
              src="/footer/red-footer.svg"
              className="img-fluid pb-5 pe-md-5 mx-md-0 mx-auto d-none d-md-block"
              alt="thin red line logo"
            />
            <img
              src="/header/mob-logo-red.svg"
              className="img-fluid pe-md-5 mx-md-0 mx-auto d-block d-md-none py-4"
              alt="thin red line logo"
            />
          </div>
          <div className="col-md-2 col-6 listStyle order-md-0 order-3 pb-md-0 pb-5 ps-md-0 ps-3">
            <ul className={`text-start font_xs list-unstyled Aftika_Light primary_text ${fontsm}`}>
              <li className="pb-md-1 pb-3 ">
                <Link to="/about">About</Link>
              </li>
              <li className="pb-md-1 pb-3">
                <Link to="/sizing-information">Sizing Information</Link>
              </li>

              <li className="pb-md-1 pb-3">
                <Link to="/our-fits">Our Fits</Link>
              </li>

              <li className="pb-md-1 pb-3">
                <Link to="/faq">FAQ</Link>
              </li>

              <li className="pb-md-1 pb-3">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>

              <li className="pb-md-1 pb-3">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>

              <li className="pb-md-1 pb-3">
                <Link to="/shipping-and-returns">Shipping and Returns</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6 listStyle order-md-0 order-2 pb-md-0 pb-5">
            <ul className={`text-start font_xs list-unstyled Aftika_Light primary_text ${fontsm}`}>
            {data.collectionFooter.nodes?.map((user)=>(
              <li className="pb-md-1 pb-3">
                <Link to={`/collection/${user.handle}`}>
                  {user.title}
                  </Link>
                </li>
                     ))}
              {/* <li className="pb-md-1 pb-3">
                <Link to="#">
                  E-Gift Cards
                  </Link>
                </li> */}
              {/* <li className="pb-md-1 pb-3">
                <Link to="#">
                  Affiliate Program
                  </Link>
                </li> */}
              <li className="pb-md-1 pb-3">
               <Link to="/contact">
                  Contact Us
                 </Link>
                
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 text-start order-md-0 order-4 pb-md-0 pb-5">
            <div>
            <div className="d-flex py-4 d-block d-md-none">
            <Link to="https://www.facebook.com/ThinRedLineShirts/" target="_blank">
                <img
                  src="/footer/facebook-icon.svg"
                  className="img-fluid pe-4"
                  alt="facebook"
                />
                </Link>
                <Link to="https://www.instagram.com/thinredlineshirts/" target="_blank">
                <img
                  src="/footer/instagram-icon.svg"
                  className="img-fluid"
                  alt="instagram"
                />
                  </Link>
              </div>
              <h5 className={`Aftika_Bold font_sm text_black ${heading_fontsmm}`}>
                Customer Support
              </h5>
              <div className="pt-1">
              <Link to="mailto:contact@thinredline.com"> 
                <p className={`Aftika_Light p-0 m-0 font_xs primary_text ${fontsm}`}>
                 contact@thinredline.com
                </p>
                </Link>
                <Link to="tel:01664 - 412052">
                <p className={`Aftika_Light p-0 m-0 font_xs primary_text ${fontsm}`}>
                  01664 - 412052
                </p>
                </Link>
              </div>
              <div className="d-md-block d-none">
              <div className="d-flex pt-4">
                <Link to="https://www.facebook.com/ThinRedLineShirts/" target="_blank">
                <img
                  src="/footer/facebook-icon.svg"
                  className="img-fluid pe-4"
                  alt="facebook"
                />
                </Link>
                <Link to="https://www.instagram.com/thinredlineshirts/" target="_blank">
                <img
                  src="/footer/instagram-icon.svg"
                  className="img-fluid"
                  alt="instagram"
                />
                </Link>
              </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-6 order-md-0 order-5 pb-md-0 pb-5">
            <img style={{opacity:"40%",marginTop:"-20px", width:"60%"}}
              src="/footer/royal-mail.svg"
              className="img-fluid d-none d-md-block mx-auto"
              alt="instagram"
            />
            <img style={{opacity:"40%"}}
              src="/footer/royal-mail-mob.svg"
              className="img-fluid d-block d-md-none mx-auto"
              alt="instagram"
            />
            <div>
              <h6 style={{opacity:"60%"}} className={`Aftika_Bold pt-md-0 pt-3 opacity-50 text_black ${heading_fontsm}`}>
                We use Royal Mail for
                <br />   Delivery
              </h6>
            </div>
          </div>

          <div className="col-12 order-md-0 order-last pb-md py-3 py-md-4">
            <p className="p-0 m-0 Aftika_Light font_xs primary_text">
              © 2022 Thin Red Line . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
 )}
 />
)
}