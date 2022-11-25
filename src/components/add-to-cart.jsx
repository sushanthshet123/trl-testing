import * as React from "react"
import { StoreContext } from "../context/store-context"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <div className="d-grid">
      {console.log('AVV', available)}
      <button
        type="submit"
        className="addtoCart text-white px-5 rounded-0 Aftika_ExtraLight text-uppercase py-2"
        onClick={addToCart}
        disabled={!available || loading}
        {...props}
      >
        {available === true ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  )
}
