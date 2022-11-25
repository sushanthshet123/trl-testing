import React from "react"
import { Layout } from "../components/layout"


const Shipping = () => {
  return (
    <>
      <div className="col-md-10 mx-auto pt-5 privacy">
        <div className="container pt-5 mt-5 px-md-0 px-3 mx-auto">
          <div className="mt-md-0 mt-5 py-5">
            <div className="fd pb-3">
              Thin Red Line Ltd is committed to protecting the privacy of our
              website visitors and customers. We will not disclose information
              about our customers to third parties except where it is part of
              providing a service to you - e.g. arranging for a product to be
              sent to you.
            </div>
            <div className="fd pb-3">
              1. WHAT INFORMATION DO WE COLLECT?
              <div className="mdk py-3">
                In accordance with the General Data Protection Regulation, we
                collect and hold customer data to ensure our communications are
                relevant and of interest to you. We collect information about
                you when you register with us or place an order for our
                products. Your contact details are saved so that we can get in
                touch with you about your orders and send you information about
                our latest products. We keep your order history so that we send
                you communications that will interest you.
                <br /> <br />
                When customers visit our website, we collect data, using
                cookies, about the pages visited and products viewed. This helps
                us to improve our website. We also use information provided when
                you respond to surveys or give feedback to improve our products
                and customer service.
              </div>
            </div>
            <div className="fd pb-3">
              2. HOW WILL WE USE THE INFORMATION ABOUT YOU?
              <div className="mdk py-3">
                We collect information about you to execute your order, update
                you on your order status and manage your account.
              </div>
            </div>
            <div className="fd pb-3">
              3. PROMOTION & ACCESS TO EXCLUSIVE OFFERS
              <div className="mdk py-3">
                When you place an order with us we may send you information
                about our products, news and special offers by email.
                <br /> <br />
                You have the right to object to your data being profiled by Thin
                Red Line by contacting us at <a href="mailto:contact@thinredline.com">contact@thinredline.com</a>.
                <br /> <br />
                You also have the right to object to receiving any marketing
                communications from Thin Red Line. If you do not wish to any
                communication from us you can log in to your account to manage
                your preferences.
              </div>
            </div>
            <div className="fd pb-3">
              4. FOR HOW LONG WILL WE HOLD YOUR DATA?
              <div className="mdk py-3">
                We will hold your data for 7 years after your most recent order
                with us (we are required to keep data for this period for tax
                purposes)
                <br /> <br />
                Once this period has elapsed we will remove any personally
                identifiable data from our records.
                <br /> <br />
                If at any time, you wish for your data to be removed from our
                database email us at <a href="mailto:contact@thinredline.com">contact@thinredline.com</a>.
              </div>
            </div>
            <div className="fd pb-3">
              <h4>YOUR INFORMATION AND CORRECTION</h4>
              <div className="mdk py-3">
                <ul>
                  <li className="pb-3">
                    <strong>Right to be forgotten</strong> You can contact us at
                    any time and request that we delete any personally
                    identifiable details (name, address, email address,
                    telephone number etc) that we hold. For tax purposes, we
                    will retain any name and address details that relate to a
                    transaction for a period of 7 years after the date the order
                    was placed.
                  </li>
                  <li className="pb-3">
                    <strong>Right to access</strong> You have the right to
                    request a copy of the information that we hold about you. We
                    will supply you with this information within a month of the
                    initial request. You may ask us to remove or correct any
                    information you think is inaccurate.
                  </li>
                  <li className="pb-3">
                    <strong>Right to object</strong> to processing You can
                    request us to cease processing your data at any time.
                  </li>
                  <li>
                    <strong>Right to lodge a complaint</strong> If you wish to
                    make a complaint about Thin Red Line, you can do so by
                    contacting the ICO (Information Commissioner’s Office) at
                    <a href="https://ico.org.uk/concerns/" target="_blank">
                      https://ico.org.uk/concerns/
                    </a>
                    or calling their helpline on 01664 - 485016.
                  </li>
                </ul>
              </div>
            </div>
            <div className="fd pb-3">
           <h5> How to contact us</h5>
              <div className="mdk py-3">
              If you have any questions or feedback, please contact our customer services team using the contact details below:
              <br/><br/>
              Tel UK: <a href="mailto:contact@thinredline.com">email: contact@thinredline.com</a><br/><br/>
              Our Privacy Policy is periodically updated.



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
      <Shipping />
    </Layout>
  )
}
