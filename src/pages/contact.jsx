import React, { useState } from "react"
import { Layout } from "../components/layout"
import {
  banner,
  font_sm,
  margin_sec,
} from "./contact.module.css"
import axios from "axios"
import swal from "sweetalert"
import { Link } from "@reach/router"
import { FiPhoneCall } from 'react-icons/fi';
import { BiMessageSquareEdit } from 'react-icons/bi';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()

    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    }
    axios
      .post("https://usebasin.com/f/632309185d15", userData)
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: "Thanks for the message",
            text: "Your submission was received :)",
            icon: "success",
            button: "okay",
          })
        }
      })

      .catch((error) => {
        if (error.response) {
          swal({
            title: "Something Went Wrong",
            text: "please try after sometime:)",
            icon: "error",
            button: "okay",
          })
        } else if (error.request) {
          swal({
            title: "Network Error",
            text: "please try after sometime:)",
            icon: "error",
            button: "okay",
          })
        } else {
          swal({
            title: "Thanks for the message",
            text: "Your submission was received :)",
            icon: "success",
            button: "okay",
          })
        }
      })
  }

  return (
    <>
      <div className={`${banner} ${margin_sec}  pt-5`}>
        <div className="container px-4 md:px-0">
          <div className="row justify-content-between bgopcaity mb-5 align-items-center py-5 px-2 md:px-5">
            <div className=" col-12 col-md-6 ">
              <iframe
                width="100%"
                height="230"
                frameborder="0"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.9882210805326!2d-0.8723867684148523!3d52.768486315450616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879d560422a64ef%3A0xd9d464ad73d2b11a!2sThin%20Red%20Line!5e0!3m2!1sen!2sin!4v1665408384427!5m2!1sen!2sin"
                allowfullscreen
              >
              </iframe>
              <h6 className="fw-bolder pt-4 med-font">Support</h6>
              <h3 className="py-1 trlred Cremona-Regular">We are here to help!</h3>
              <div className="d-flex flex-md-row flex-column small-font fw-bolder pb-3 md-py-5">
                <Link to='/faq' className="px-2 text-dark pb-3 md:pb-0"> FAQ's</Link>
                <Link to='/shipping-and-returns' className="px-2 text-dark pb-3 md:pb-0"> Shipping & Returns</Link>
                <Link to='/sizing-information' className="px-2 text-dark pb-3 md:pb-0"> Sizing Information </Link>
                <Link to='/terms-conditions' className="px-2 text-dark"> Term's & Conditions</Link>
              </div>
              <p className="px-2 small-font fw-bold trlred">Didn't find what you are looking for? we will be glad to assist.</p>
              <p className="px-2 text-secondary small-font"><b>Head Office</b> : PO Box 5  Melton mowbray Leicestershire LE13 1ZG Melton Mowbray</p>
              <div className="d-flex flex-md-row flex-column small-font ">
                <p className="px-2 text-secondary d-flex flex-row">
                  <span className="px-1 fs-5">
                    <FiPhoneCall />
                  </span>
                  <span className="pl-1"><b>Call Us </b> : <a className="text-secondary border-bottom border-danger" href="tel:+44 1664 412052">+44 1664 412052</a></span></p>
                <p className="px-2 text-secondary d-flex flex-row">
                  <span className="px-1 fs-5">
                    <BiMessageSquareEdit />
                  </span>
                  <a href="mailto:contact@thinredline.com" className="text-secondary" target="_blank">
                    <b>Write to us</b> :
                    <span className="ms-1 border-bottom border-danger">
                      contact@thinredline.com
                    </span>
                  </a></p>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <form
                class="row g-3"
                action="https://usebasin.com/f/e23dfb48d8ea"
                method="POST"
                onSubmit={submitHandler}
              >
                <h5 className="Aftika_Bold">Write to us.</h5>
                <div class="col-12">
                  <label for="Name" class={`form-label ${font_sm}`}>
                    First & Last Name{" "}
                    <span style={{ color: `#ff0000` }}>*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    name="name"
                    required
                    onChange={changeHandler}
                  />
                </div>
                <div class="col-xl-6">
                  <label for="phone-number" class={`form-label ${font_sm}`}>
                    Phone number <span style={{ color: `#ff0000` }}>*</span>
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    name="phone"
                    required
                    onChange={changeHandler}
                  />
                </div>
                <div class="col-xl-6">
                  <label for="email" class={`form-label ${font_sm}`}>
                    Email address <span style={{ color: `#ff0000` }}>*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={changeHandler}
                  />
                </div>

                <div class="col-12">
                  <label for="message" class={`form-label ${font_sm}`}>
                    Message <span style={{ color: `#ff0000` }}>*</span>
                    <textarea
                      id=""
                      className="form-control"
                      name="message"
                      rows="4"
                      cols="100"
                      required
                      onChange={changeHandler}
                    ></textarea>
                  </label>
                </div>

                <div> <label for="Name" class={`form-label ${font_sm}`}>
                  Fields Required{" "}
                  <span style={{ color: `#ff0000` }}>*</span>
                </label></div>

                <div class="col-11 d-flex flex-row justify-content-evenly">
                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    style={{
                      backgroundColor: `#C51626`,
                      border: `none`,
                      marginRight: `40px`,
                      borderRadius: `0px`,
                    }}
                  >
                    SUBMIT
                  </button>
                  <button
                    type="reset"
                    value="clear"
                    class="btn btn-primary w-100"
                    style={{
                      backgroundColor: `#000000`,
                      border: `none`,
                      borderRadius: `0px`,
                    }}
                  >
                    RESET
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}
