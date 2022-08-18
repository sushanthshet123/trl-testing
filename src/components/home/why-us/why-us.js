import React from 'react'
import {bgColor, usWidth, usWidth2, font_xs  } from './why-us.module.css'
import Fade from 'react-reveal/Fade';

const WhyUs = (props) => {
 

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  return (
    <>
      <div className={`${props.bgColor == 'bgColor' ? bgColor : props.bgColor} d-flex align-items-center py-4 py-md-5`}>
        <div className="container overflow_hidden">
          <div className="row justify-content-center">
        

            <div className="col-md-8">
              <div className="row justify-content-between g-2 g-md-5">
                <div className="col-4 col-md-3 d-flex justify-content-center align-items-center">
                  <Fade left>
                    <div>
                      <img src="/home/uk-shipping.svg" className={`img-fluid mx-auto px-md-5 py-2 ${usWidth}`} alt="uk shipping" />
                      <p className={`text-center ${font_xs} Aftika_Light pt-2 pt-md-0`}>Free UK Shipping</p>
                    </div>
                  </Fade>
                </div>
                <div className="col-4 col-md-3 d-flex justify-content-center align-items-center">
                  <Fade up>
                    <div>
                      <img src="/home/easy-refund.svg" className={`img-fluid mx-auto px-md-5 py-2 ${usWidth}`} alt="uk shipping" />
                      <p className={`text-center ${font_xs} Aftika_Light pt-2 pt-md-0`}>Easy Refund & <br /> Exchange Policy</p>
                    </div>
                  </Fade>
                </div>
                <div className="col-4 col-md-3 d-flex justify-content-center align-items-center">
                  <Fade right>
                    <div>
                      <img src="/home/trusted.svg" className={`img-fluid mx-auto px-md-5 py-2 ${usWidth2}`} alt="uk shipping" />
                      <p className={`text-center ${font_xs} Aftika_Light pt-2 pt-md-0`}>Trusted Premium  Quality</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs