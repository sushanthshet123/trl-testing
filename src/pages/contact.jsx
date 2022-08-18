import React, { useState } from "react"
import { Layout } from "../components/layout"
import { banner, formPosition, font_sm, margin_sec, heightt } from "./contact.module.css"
import axios from "axios";
import swal from "sweetalert";


const Contact = () => {
  const[data,setData]=useState({
    name:'',
    phone:'',
    email:'',
    message:'',
  })
  const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler =e =>{
    e.preventDefault();

    const userData = {
      name: data.name,
      email: data.email,
      phone:data.phone,
      message:data.message
    };
    axios.post("https://usebasin.com/f/632309185d15", userData).then((response) => {
          if (response.status === 200){
            swal({
              title: "Thanks for the message",
              text: "Your submission was received :)",
              icon: "success",
              button: "okay",
            });
          }
        })

      
        .catch((error) => {
            if (error.response) {
              swal({
                title: "Something Went Wrong",
                text: "please try after sometime:)",
                icon: "error",
                button: "okay",
              });
            } else if (error.request) {
              swal({
                title: "Network Error",
                text: "please try after sometime:)",
                icon: "error",
                button: "okay",
              });
            } else {
              swal({
                title: "Thanks for the message",
                text: "Your submission was received :)",
                icon: "success",
                button: "okay",
              });
            }
          });
    
  }
  
  return (
    <>
      <div className={`${banner} ${margin_sec} overflow-hidden pt-5`}>
        <div className="container">
         <div className="row justify-content-center justify-content-md-end">
         <div className={`col-11 col-md-5`}>
          <div className={`bg-white p-5 my-auto`}>
            <form class="row g-3"action="https://usebasin.com/f/e23dfb48d8ea" method="POST"  onSubmit={submitHandler}>
              <h5 className="Aftika_Bold">Details</h5>
              <div class="col-12">
                <label for="Name" class={`form-label ${font_sm}`}>
                  First & Last Name <span style={{ color: `#ff0000` }}>*</span>
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


                  <textarea id="" className="form-control" name="message" rows="4" cols="100" required onChange={changeHandler}>

                  </textarea>
                </label>
              </div>

              <div class="col-11 d-flex flex-row justify-content-evenly">
                <button type="submit" class="btn btn-primary w-100" style={{ backgroundColor: `#C51626`, border: `none`, marginRight: `40px`, borderRadius: `0px` }}>
                  SUBMIT
                </button>
                <button type="reset" value="clear" class="btn btn-primary w-100" style={{ backgroundColor: `#000000`, border: `none`, borderRadius: `0px` }}>RESET</button>
              </div>

            </form>
          </div>
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
