import React from "react"
import { banner,fontSize, paragraphText } from "./unmistabakly.module.css";
import Fade from 'react-reveal/Fade';

const Unmistabakly = () => {

  return (
    <>
      <div className={`${banner}  container text-center text-md-start`}>
        <div className={` text-white ms-3 ms-md-5 me-3 me-md-0 ps-md-5 mt-md-5 pt-md-3`}>
          <Fade left>
            <h1 className={`${fontSize} Aftika_Bold`}>
              Wear Who <br />
              You Are
            </h1>
          </Fade>
          <Fade left delay={1000}>
            <p className={`Aftika_Light text-white ${paragraphText} py-3 d-none d-md-block`}>
            A good shirt accentuates your silhouette while an excellent<br/> one complements your personality.
            We offer ready-to-wear<br/> menswear for the distinguished dresser.
            </p>
            <p className={`Aftika_Light text-white ${paragraphText} py-3 d-block d-md-none`}>
            A good shirt accentuates your silhouette while an excellent one complements your personality.
            </p>
          </Fade>
        </div>
        {/* <div className="ps-md-5 ms-md-5">
          <Fade left delay={1500}>
            <button type="button" className="btn bgblack px-5 py-2">
              <span className="Aftika_Light text-white font_xmd">FIND YOUR FIT</span>
            </button>
          </Fade>
        </div> */}


      </div>
    </>
  )
}

export default Unmistabakly
