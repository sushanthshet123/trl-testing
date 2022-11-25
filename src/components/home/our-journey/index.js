import React from "react"
import { banner, unmistabkablyText, fontSize } from "./journey.module.css"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'

const OurJourney = () => {

  return (
    <>
      <div className={`${banner} container position-relative`}>
        <div className={`${unmistabkablyText} overflow_hidden text-dark`}>
          <Fade left>
            <h1 className={`${fontSize} Aftika_Bold pb-3 ps-5 ps-md-0`}>
              Weaving A <br />
              Legacy
            </h1>
          </Fade>
          <Link to="/about">
            <Fade left dalay={1000}>
              <button type="button" className="btn bgblack  px-5 py-2 rounded-0 ms-5 ms-md-0">
                <span className="Aftika_Light fs-6 px-3 text-white font_xmd">Our Story</span>
              </button>
            </Fade>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OurJourney
