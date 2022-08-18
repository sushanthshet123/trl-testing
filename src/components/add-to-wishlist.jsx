import * as React from "react"
import { StoreContext } from "../context/store-context"

export default function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  // console.log("wish list store",variantId)
  return (
    <div className="d-grid">
      {/* <button
        type="submit"
        className="addtoCart text-white px-5 rounded-0 Aftika_ExtraLight text-uppercase py-2"
        onClick={addToCart}
        disabled={!available || loading}
      >
        {available ? "Add to Cart" : "Out of Stock"}
      </button> */}
      <img
      type="submit"
        src="/header/wishlist-icon.svg"
        className="img-fluid pe-2"
        alt="wishlist"
        // onClick={addToCart}
        {...props}
      />
    </div>
  )
}
