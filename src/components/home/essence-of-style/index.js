import React from 'react'
import { useEffect } from "react"
import { fontSize, centeredarrow } from './essence.module.css'
import Fade from 'react-reveal/Fade';
import Rellax from "rellax";
import { Link } from "gatsby"

const WhyUs = () => {
    useEffect(() => {
        var rellax = new Rellax(".rellax", {
            speed: -1,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
        });
    }, []);
    return (
        <>
            <div className="container px-0">
                <div className="col-12 overflow_hidden">
                    <div className="row py-md-5">
                        <div className={`col-md-6 rellax mt-md-2`} data-rellax-zindex="5" data-rellax-speed="3">
                            <img src="/home/material.jpg" className="img-fluid " alt="essence of styleing" />
                        </div>
                        <div className="col-md-6 my-auto">
                            <div className="p-4 p-md-5">
                                <Fade right>
                                    <h1 className={`${fontSize} Aftika_Bold pb-3 text-center text-md-start`}>Material Possessions</h1>
                                </Fade>
                                <Fade right dalay={1000}>
                                    <p className="primary_text Aftika_Light pt-5 text-center text-md-start pb-3">Perhaps one of the most treasured acquisitions in a gentleman’s wardrobe is a finely crafted shirt. An exquisitely tailored piece can go a long way towards enriching his style in more ways than one.</p>
                                </Fade>
                                <Link to='/our-fits'>
                                <h4 className={`primary_color Aftika_Light font_xs text-center text-md-start`}>Choose Your Style</h4>
                                </Link>
                                <div className='mx-auto'>
                                    <img
                                        src="/scroll-horizontal.gif" style={{ width: "140px" }}
                                        className={centeredarrow}
                                        alt="scroll"
                                    />
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