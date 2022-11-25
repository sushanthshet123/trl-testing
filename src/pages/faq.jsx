import React from "react"
import { Layout } from "../components/layout"
import { container_tiny, huj } from "./faq.module.css"

const Faq = () => {
  return (
    <>
      <div className={`${container_tiny} pt-5 mt-5 mx-auto`}>
        <div className="de pt-5">
          <img src="/faq.png" className="pt-5"></img>
        </div>
        <div className="py-5 my-5 fq">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. OUR SHIRTS
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="fd pb-3">
                    1. WHAT'S SO GREAT ABOUT OUR SHIRTS?
                    <div className="mdk py-3">
                      Everyone has a different requirement from a shirt.
                      However, we believe that comfort and looking smart right
                      to the end of the day are right at the top of the list. If
                      this meets your requirements then you should definitely
                      give us a try!
                    </div>
                  </div>
                  <div className="fd pb-3">
                    2. WHAT FABRIC DO YOU USE?
                    <div className="mdk py-3">
                      We use specially selected superfine long staple cotton.
                      Remember, cotton is like wine and qualities vary from year
                      to year so our expert cotton graders ensure only raw
                      cotton that meets our exacting standards is used. This is
                      then spun into yarn and woven exclusively for us.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    3. DO YOU HAVE A CHOICE OF SLEEVE LENGTH?
                    <div className="mdk py-3">
                      Yes, we offer Regular Sleeve and Extra Long. Want to know
                      more? See the next question.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    4. ARE YOUR COLLARS TRADITIONAL OR CUTAWAY?
                    <div className="mdk py-3">
                      We have always opted for a semi-cutaway collar because we
                      believe this provides the perfect frame for your tie no
                      matter which kind of tie knot you prefer. It is also very
                      smart when worn without a tie
                    </div>
                  </div>
                  <div className="fd pb-3">
                    5. DO YOUR DOUBLE CUFFS FEATURE TWO BUTTON HOLES?
                    <div className="mdk py-3">
                      Yes the inside side of the cuff has two positions allowing
                      you to increase or reduce the sleeve length by half an
                      inch. However, did you know that this feature originally
                      had nothing to do with sleeve length? It first came into
                      being when the Victorian gentleman wanted to retain a
                      clean cuff line. After a day walking the smog-filled
                      streets of London, his cuff edge would appear unclean. The
                      extra cuff link position allowed him to roll the cuff
                      forward by half an inch thus moving the smog-created dark
                      line up inside the cuff and the shirt appeared clean
                      enough to wear for the evening meal!
                    </div>
                  </div>
                  <div className="fd pb-3">
                    6. WHICH IS BEST FOR ME - CLASSIC FIT OR SLIM FIT?
                    <div className="mdk py-3">
                      Whether to go for our classic fit or slim fit shirts is a
                      matter of personal preference. Our advice would be to try
                      our classic fit if you are a heavy build or are used to
                      the traditional generous shirt look. If you are of medium
                      build or have an athletic shape, then you will probably be
                      happier with our slim fit shirts which feature a sharper
                      cut and slightly shorter tails.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    7. WHY DO YOU HAVE ROUNDED CUFF CORNERS?
                    <div className="mdk py-3">
                      This is another traditional tailoring feature that takes a
                      little longer to stitch but is the sign of a quality
                      shirt. Have you ever noticed that a square edged cuff is
                      one of the first things to fray on a shirt? This is
                      because the corner of your cuff is constantly receiving
                      friction from desks when typing or writing. We simply
                      remove this right angle to provide a smooth line so this
                      friction is not concentrated at just one point. This means
                      your cuff should last longer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. SHIPPING AND RETURNS
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4">
                  <div className="fd pb-3">
                    1. WHAT ARE YOUR DELIVERY CHARGES?
                    <div className="mdk py-3">
                    Our standard UK delivery is free while next day delivery we charge £25.99. For delivery in EU our shipping charges are £15 and £25 for rest of the world.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    2. CAN I ORDER OVER THE TELEPHONE?
                    <div className="mdk py-3">
                      Yes you can but please note that most of our offers are on
                      the website only. If you wish to place your order via
                      telephone, please call: 01664 - 485016.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    3. I'VE PLACED MY ORDER ONLINE BUT HAVE MADE A MISTAKE. WHAT
                    CAN I DO?
                    <div className="mdk py-3">
                      If you have submitted an order online and need to make
                      changes, please call our Customer Support line on: 01664 -
                      485016. Please note: we aim to dispatch all orders placed
                      before 1pm on the same day so it will be impossible to
                      make changes if your order has already been dispatched.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    4. WHAT IS YOUR DELIVERY TIME?
                    <div className="mdk py-3">
                      We aim to dispatch all items ordered before 1pm on the
                      same day. 95% of our shirts are delivered next day but
                      this is not guaranteed. If you require next day delivery,
                      please ensure you choose this shipping option at checkout.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    5. WHAT IS YOUR RETURNS POLICY?
                    <div className="mdk py-3">
                      If your shirt has been worn you can return it to us within
                      30 days of purchase for an exchange or refund. If your
                      shirt is unworn and still in its original packaging, you
                      can return it to us for up to 90 days for an exchange or
                      refund. Please note that our guarantee is reduced to 7
                      days for sale items.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    6. HOW DO I RETURN AN ITEM?
                    <div className="mdk py-3">
                      Please send the item back to us having filled out the
                      returns slip (included with your delivery). If you've lost
                      your returns slip, please simply write your name and
                      contact details on a piece of paper stating the reason for
                      the return and whether you would like an exchange or
                      refund and we will do the rest. However, please note that
                      you are responsible for ensuring the returned item reaches
                      us and in good condition so we suggest taking out
                      insurance on the item in case of damage in transit.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    7. HOW LONG DO REFUNDS TAKE?
                    <div className="mdk py-3">
                      Once we've received the item your refund will be back on
                      your card within seven working days.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    8. I LIVE OUTSIDE THE EU. DO YOU OFFER EX-VAT ORDERS?
                    <div className="mdk py-3">
                      No, we have a policy of a single price for all orders,
                      regardless of destination.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    9. Do you deliver to Republic of ireland ?
                    <div className="mdk py-3">
                      Unfortunately we don't deliver to Republic of Ireland.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    10. Can we track our orders?
                    <div className="mdk py-3">
                      We use Royal Mail for delivery. Tracking is only available
                      for UK despatches.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. PAYMENT
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="fd pb-3">
                    1. HOW CAN I PAY
                    <div className="mdk py-3">
                      We accept Visa, Mastercard, Maestro cards and Paypal.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    2. WHAT IF I PAID BUT DID NOT RECEIVE AN EMAIL CONFIRMING
                    THIS?
                    <div className="mdk py-3">
                      Mail us at{" "}
                      <a href="mailto:contact@thinredline.com">
                        contact@thinredline.com
                      </a>
                    </div>
                  </div>
                  <div className="fd pb-3">
                    3. CAN I PLACE AN ORDER FOR LARGE QUANTITIES AS PART OF A
                    CORPORATE ORDER?
                    <div className="mdk py-3">
                      Mail us your requirement at{" "}
                      <a href="mailto:contact@thinredline.com">
                        contact@thinredline.com
                      </a>{" "}
                      and we’ll get back to you.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    4. HOW DO YOU PREVENT CARD FRAUD?
                    <div className="mdk py-3">
                      Online payments are strictly monitored by our systems to
                      prevent card fraud.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    5. CAN I PAY BY CREDIT CARD?
                    <div className="mdk py-3">
                      We accept Visa, Mastercard, Maestro credit cards.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    6. CAN I PAY BY DEBIT CARD?
                    <div className="mdk py-3">
                      We accept Visa, Mastercard and Maestro debit cards.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    7. CAN I PAY WITH A SAVED CREDIT/DEBIT CARD?
                    <div className="mdk py-3">
                      This option is currently unavailable.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    8. I TYPED AN INCORRECT CARD NUMBER. HOW DO I CORRECT IT?
                    <div className="mdk py-3">
                      If your card number has been entered incorrectly, your
                      order will be aborted.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    9. ARE ONLINE PAYMENTS SECURE?
                    <div className="mdk py-3">
                      Online payments are strictly monitored to keep them
                      secure. If our system suspects that a payment might not
                      have been authorised by the owner of the card, the
                      transaction will be kept on hold until we receive further
                      verification to authenticate the transaction.
                    </div>
                  </div>
                  <div className="fd pb-3">
                    10. CAN I PAY USING MY AMEX CARD?
                    <div className="mdk py-3">
                      Amex cards are currently not accepted.
                    </div>
                  </div>
                </div>
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
      <Faq />
    </Layout>
  )
}
