import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import {
  dottedBorder,
} from "./wishlist.module.css" 

export default function CartPage({item}) {
  const { checkout, loading, removeLineItems} = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0;

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const ClearCart = () => {
    let items = []
    checkout.lineItems.map(item => {
      items.push(item.id);
    })
    removeLineItems(checkout.id, items);
  }

  return (
    <Layout>
      <div className={`mt-5 py-5 container`}>
        {emptyCart ? (
          <div className='text-center pt-5'>
            <h1 className="Aftika_Regular py-3 mt-5 mt-md-0">Your Wishlist is empty</h1>
              <p className="mb-2 mb-md-4">Item Missing? Try to them here log in.</p>
              <div className={`${dottedBorder}`}></div>
              <div className="d-grid d-md-block mt-5">
              <button className="bgblack text-white rounded-0 px-5 py-3">ENTER</button>
              </div>
          </div>
        ) : (
          <div className="py-5 mt-5 px-4 px-md-0">
            <div className="row pb-5 ">
              <div className="col-md-12 border-bottom pb-3 px-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img src="/header/wishlist-icon.svg" alt="" className="img-fluid d-inline mb-1" />
                    <span className="ps-3 font_xs Aftika_Light">WISHLIST</span>
                  </div>
                  <div className="cursor" onClick={ClearCart}>
                    <span className="text-uppercase font_xs pe-3 Aftika_Light" >Clear Cart</span>
                    <img src="/cart/remove-icon-svg.svg" alt="" className="img-fluid d-inline" />
                  </div>
                </div>
              </div>
            </div>
            {checkout.lineItems.map((item) => (
              <LineItem item={item} key={item.id} />
            ))}
            <div className="row justify-content-end">
              <div className="col-md-10 text-end px-0 Aftika_Bold">
                <div className={` pt-4 ${dottedBorder}`}></div>
                <span className="pe-5 primary_text Aftika_Light">TOTAL</span>
                {formatPrice(
                  checkout.subtotalPriceV2.currencyCode,
                  checkout.subtotalPriceV2.amount
                )}
              </div>
            </div>
          </div>
        )}
        <div className="container">
        <div className="row justify-content-end py-4">
          <div className="col-5 col-md-2 px-0">
            <div className="d-grid">
              {checkout.lineItems.length > 0 &&
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="btn bgblack text-white rounded-0"
                >
                  Checkout
                </button>
              }
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}
