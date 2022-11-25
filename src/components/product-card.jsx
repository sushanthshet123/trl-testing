import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
} from "./product-card.module.css"
import Wishlist from './add-to-wishlist.jsx'

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
    collections
  } = product


  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }


  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

  return (
    <div className="col-md-12 py-4">
    <Link
      className=""
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage
        ? (
          <div className={productImageStyle} data-name="product-image-box">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }
      <div className="">
        {/* <div className={productVendorStyle}>{vendor}</div> */}
        <h1 className="font_smx pt-5 Aftika_Light primary_text text-uppercase">
          {title}
        </h1>
        <h1 className="font_smx pt-3 text-dark Aftika_Bold">
        {price}
        </h1>
        <div className="d-flex justify-content-md-start justify-content-center">
        <Wishlist variantId={product.storefrontId}
                                      quantity={1}
                                      available={true} />
        <Link to={product.slug}>
        <img
                                        src="/header/mycart-icon.svg"
                                        className="img-fluid"
                                        alt="cart"
                                        title="Add to cart"
                                      />
                                      </Link>
                                      </div>
      </div>
    </Link>
    </div>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 1040)
    }
    collections {
      id
      title
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
