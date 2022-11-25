import React from "react"
import { Layout } from "../components/layout"
import { container_tiny, huj } from "./faq.module.css"

const Shipping = () => {
  return (
    <>
    
        <div className="col-md-10 mx-auto">
      <div className= "container pt-5 mt-5 px-md-0 px-3 mx-auto">
        <div className="mt-md-0 mt-5 py-5">
          <div className="fd pb-3">
            1. Our standard UK delivery is free.
            <div className="mdk py-3">
             Next day Delivery is £25.99, EU is £15 and Rest of the World is £25.
            </div>
            <div className="mdk">
            Tracking is only available for UK shipments. All other shipments are without tracking.
            </div>
          </div>
          <div className="fd pb-3">
            2. CAN I ORDER OVER THE TELEPHONE?
            <div className="mdk py-3">
              Yes you can but please note that most of our offers are on the
              website only. If you wish to place your order via telephone,
              please call: 01664 - 412052
            </div>
          </div>
          <div className="fd pb-3">
            3. I'VE PLACED MY ORDER ONLINE BUT HAVE MADE A MISTAKE. WHAT CAN I
            DO?
            <div className="mdk py-3">
              If you have submitted an order online and need to make changes,
              please call our Customer Support line on: 01664 - 485016. Please
              note: we aim to dispatch all orders placed before 1pm on the same
              day so it will be impossible to make changes if your order has
              already been dispatched.
            </div>
          </div>
          <div className="fd pb-3">
            4. WHAT IS YOUR DELIVERY TIME?
            <div className="mdk py-3">
              We aim to dispatch all items ordered before 1pm on the same day.
              95% of our shirts are delivered next day but this is not
              guaranteed. If you require next day delivery, please ensure you
              choose this shipping option at checkout.
            </div>
          </div>
          <div className="fd pb-3">
            5. WHAT IS YOUR RETURNS POLICY?
            <div className="mdk py-3">
              If your shirt has been worn you can return it to us within 30 days
              of purchase for an exchange or refund. If your shirt is unworn and
              still in its original packaging, you can return it to us for up to
              90 days for an exchange or refund. Please note that our guarantee
              is reduced to 7 days for sale items.
            </div>
          </div>
          <div className="fd pb-3">
            6. HOW DO I RETURN AN ITEM?
            <div className="mdk py-3">
              Please send the item back to us having filled out the returns slip
              (included with your delivery). If you've lost your returns slip,
              please simply write your name and contact details on a piece of
              paper stating the reason for the return and whether you would like
              an exchange or refund and we will do the rest. However, please
              note that you are responsible for ensuring the returned item
              reaches us and in good condition so we suggest taking out
              insurance on the item in case of damage in transit.
            </div>
          </div>
          <div className="fd pb-3">
            7. HOW LONG DO REFUNDS TAKE?
            <div className="mdk py-3">
              Once we've received the item your refund will be back on your card
              within seven working days.
            </div>
          </div>
          <div className="fd pb-3">
            8. I LIVE OUTSIDE THE UK. DO YOU OFFER EX-VAT ORDERS?
            <div className="mdk py-3">
              No, we have a policy of a single price for all orders, regardless
              of destination.
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
