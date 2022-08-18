import * as React from "react"
import debounce from "lodash.debounce"
import { StoreContext } from "../context/store-context"
import { formatPrice } from "../utils/format-price"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { NumericInput } from "./numeric-input"
import {
  remove,

} from "./line-item.module.css"

export function LineItem({ item }) {

  const [itemData, setitem] = React.useState(item)


  const {
    removeLineItem,
    checkout,
    updateLineItem,
    loading,
  } = React.useContext(StoreContext)
  const [quantity, setQuantity] = React.useState(itemData.quantity)


  const variantImage = {
    ...itemData.variant.image,
    originalSrc: itemData.variant.image.src,
  }
  const price = formatPrice(
    itemData.variant.priceV2.currencyCode,
    Number(itemData.variant.priceV2.amount)
  )

  const subtotal = formatPrice(
    itemData.variant.priceV2.currencyCode,
    Number(itemData.variant.priceV2.amount) * quantity
  )

  const handleRemove = () => {
    removeLineItem(checkout.id, itemData.id)
  }

  const uli = debounce(
    (value) => updateLineItem(checkout.id, itemData.id, value),
    300
  )
  // eslint-disable-next-line
  const debouncedUli = React.useCallback((value) => uli(value), [])

  const handleQuantityChange = (value) => {
    if (value !== "" && Number(value) < 1) {
      return
    }
    setQuantity(value)
    if (Number(value) >= 1) {
      debouncedUli(value)
    }
  }

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1)
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1)
  }

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 160,
        height: 160,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  )

  return (
    <div>
      <div className="row pb-5 mb-2 align-items-center">
        <div className="col-6 col-md-2 ps-0">
          {image && (
            <GatsbyImage
              key={variantImage.src}
              image={image}
              alt={variantImage.altText ?? item.variant.title}
            />
          )}
        </div>
        <div className="col-6 col-md-5">
          <div className={`${remove} d-md-none text-end pb-2`}>
            <button onClick={handleRemove}>
              <img src="/cart/remove-icon-svg.svg" alt="" className="img-fluid d-inline" />
            </button>
          </div>
          <h2 className='Aftika_Light font_xs text-uppercase primary_text'>{item.title}</h2>
          <div className="mb-2 mb-md-0 py-md-3 font_xsm primary_text">
            {item.variant.title === "Default Title" ? "" : item.variant.title}
          </div>
          <NumericInput
            disabled={loading}
            value={quantity}
            aria-label="Quantity"
            onIncrement={doIncrement}
            onDecrement={doDecrement}
            onChange={(e) => handleQuantityChange(e.currentTarget.value)}
          />
          <div className="d-block d-md-none pt-3">
            <div className="d-flex justify-content-between">
              <h2 className='Aftika_Light font_xs text-uppercase primary_text '>Amount</h2>
              <h2 className='Aftika_Bold font_xs  text-uppercase '>{subtotal}</h2>
            </div>
          </div>
        </div>
        <div className="col-5 col-md-3 text-center d-none d-md-block">
          <div className="d-flex align-content-between flex-column">
            <h2 className='Aftika_Light font_xs text-uppercase primary_text pb-5 mb-4'>Remove</h2>
            <div className={remove}>
              <button onClick={handleRemove}>
                <img src="/cart/remove-icon-svg.svg" alt="" className="img-fluid d-inline" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-end pe-0 d-none d-md-block" >
          <div className="d-flex justify-content-between flex-column">
            <h2 className='Aftika_Light font_xs text-uppercase primary_text pb-5 mb-4'>Amount</h2>
            <h2 className='Aftika_Bold font_xs  text-uppercase '>{subtotal}</h2>
          </div>
        </div>
      </div>

    </div>

  )
}
