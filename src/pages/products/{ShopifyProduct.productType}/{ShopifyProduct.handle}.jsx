import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import { ImageGallery } from "../../../components/imageGallery";
import Slider from "react-slick";
import { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
  header,
  productImageWrapper,
  scrollForMore,
  noImagePreview,
  selectVariant,
  productDescription,
  horizontalBorder,
  selectedmenu,
  radioStyle,
  cutomimgWidth,
  fontSm,
  salelock
} from "./product-page.module.css"

export default function Product({ data: { product, suggestions, allProducts } }) {
  const { checkout, loading, removeLineItems } = React.useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const relatedProducts = suggestions.nodes;

  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    collections,
    metafields,
    images: [firstImage],
  } = product

  const getselectedVarint = (name) => {
    var result = variant.selectedOptions.find(item => item.name === name);
    return result.value
  }

  const filteredArray = metafields.filter((item) => (item.key.includes('code')))
  // console.log("prod", filteredArray);
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)
  const [sale, setSale] = React.useState();

  const productVariant = client.product.helpers.variantForOptions(product, variant) || variant

  // console.log('iss', productVariant)
  const [actualPrice, setActualPrice] = React.useState([productVariant]);

  // console.log("what is variant", variant.availableForSale)
  // console.log("checking in prodcut page", client.product.helpers.variantForOptions(product, variant) || variant)

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value
    if (value === "") {
      return
    }

    // console.log("what is the variant", variant)

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }


    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    // console.log("what is the selectedVariant", [selectedVariant])
    setActualPrice([selectedVariant])
    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  // console.log("checking", actualPrice[0].compareAtPrice)
  useEffect(() => {
    actualPrice?.map((item) => (
      setSale(((item.compareAtPrice - item.price) / item.compareAtPrice) * 100)
      // if(item.compareAtPrice !== null){
      //   setShowSale(true)
      // }
    ))
  }, [productVariant]);

  return (

    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}

      <div className="container py-md-5 mt-4 pt-5">
        <div className="row justify-content-center absolute px-3 px-md-0">
          <div className="col-md-12">

            <div className="row justify-content-between pt-5 mt-5">
              <div className="col-md-5 position-relaative">
                {hasImages && (
                  <div className={productImageWrapper}>
                    <div
                      role="group"
                      aria-label="gallery"
                      aria-describedby="instructions"
                    >
                      <div className="d-flex align-items-end">
                        <h1 className={`text-uppercase d-block d-md-none w-50 ${header}`}>{title}</h1>
                        <p className="Aftika_ExtraLight primary_text d-block d-md-none w-50 text-end mt-5">{filteredArray.map((item) => (<p>{item.value}</p>))}</p>
                      </div>
                      <div>
                        <ImageGallery available={available} images={images} />
                        
                      </div>
                      {actualPrice[0].compareAtPrice !== null ?
                        <div className={`${salelock} Aftika_Bold text-center`}>SALE <br /> {(parseInt(sale))}% OFF</div> : null}
                    </div>
                    {hasMultipleImages && (
                      <div className={scrollForMore} id="instructions">
                        <span aria-hidden="true">←</span> scroll for more{" "}
                        <span aria-hidden="true">→</span>
                      </div>
                    )}
                  </div>

                )}
                {!hasImages && (
                  <span className={noImagePreview}>No Preview image</span>
                )}
                <div className="d-block d-md-none pb-4">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <span>{actualPrice?.map((item) => (
                        <div>
                          {item.compareAtPrice && <del>£{item.compareAtPrice}</del>}
                          <span className="Aftika_Bold font-2xl">£{item.price}</span>

                        </div>
                      ))}</span>
                    </div>
                    <div>
                      <NumericInput
                        aria-label="Quantity"
                        onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                        onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                        onChange={(event) => setQuantity(event.currentTarget.value)}
                        value={quantity}
                        available={available}
                        min="1"
                        max="20"
                      />
                    </div>
                  </div>
                </div>
                <p className="Aftika_ExtraLight primary_text d-none d-md-block w-50 mb-1 mt-5">{filteredArray.map((item) => (<p>Code : {item.value}</p>))}</p>
                {/* <div className="d-grid">
                  <button className="btnDanger text-white py-2 text-uppercase rounded-0 Aftika_ExtraLight d-none d-md-block">Find Your Fit</button>
                </div> */}
              </div>
              <div className="col-md-6">

                <div>
                  <h1 className={`d-none d-md-block link-text ${header}`}>{title}</h1>
                  <p className={`${productDescription} py-3 d-none d-md-block`}>{description}</p>
                  <div className={`mb-3 d-none d-md-block ${horizontalBorder}`} />
                  {variant.availableForSale != true && <p className="font_xs primary_color">Selected variant is sold out. Please try differnt combinations. </p>}
                  <fieldset className="mb-3">
                    <div className="row">
                      {hasVariants &&
                        options.map(({ id, name, values }, index) => (
                          <div className="col-md-12 mb-2">
                            <div className={`position-relative ${selectVariant}`} key={id} >
                              <label value="" className={`pb-2 primary_text Aftika_Regular font_xs text-uppercase pt-3 pt-md-0 ${fontSm}`} >{`${name}`}</label>
                              <div className={`mb-4 mt-1 d-block d-md-none ${horizontalBorder}`} />
                              <div>
                                <div className="d-flex flex-wrap">
                                  {values.map((value) => (
                                    <div className="mb-2 cursor me-3">
                                      <label style={{ width: '100%' }} className={`p-2 border cursor rounded-2 ${selectedmenu} ${radioStyle}`}
                                        onChange={(event) => handleOptionChange(index, event)}>
                                        <input className={`${selectedmenu} me-2`}
                                          type="radio"
                                          value={value} name={name}
                                          checked={getselectedVarint(name) === value}
                                        />
                                        {value}
                                      </label>
                                      {/* {console.log('oooi', initialVariant)} */}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="d-block d-md-none pt-4">
                        <AddToCart
                          variantId={productVariant.storefrontId}
                          quantity={quantity}
                          available={variant.availableForSale}
                        />
                      </div>
                      {/* <div className="d-grid">
                        <button className="btnDanger text-white py-2 text-uppercase rounded-0 Aftika_ExtraLight d-block d-md-none mt-3">Find Your Fit</button>
                      </div> */}
                      <h1 className={`text-uppercase d-block d-md-none w-75 pt-5 ${header}`}>{title}</h1>
                      <p className={`${productDescription} py-3 d-block d-md-none`}>{description}</p>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between pt-3">
              <div className="col-md-5">
                <div className="row justify-content-between align-items-center">
                  <div className="col-3 col-md-4">
                    <img src="/product/cotton.svg" alt="Cotton" className={`imag-fluid`} />
                  </div>
                  <div className="col-5 col-md-4">
                    <div className="d-flex align-items-center">
                      <img src="/product/truck-svg.svg" alt="" className={`imag-fluid ${cutomimgWidth}`} />
                      <p className="font_xsm mb-0 ps-2">Express Delivery Available</p>
                    </div>
                  </div>
                  <div className="col-4 ps-0">
                    <div className="d-flex align-items-center">
                      <img src="/product/quality.svg" alt="" className={`imag-fluid ${cutomimgWidth}`} />
                      <p className="font_xsm mb-0 ps-2">3 Months Quality Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <NumericInput
                      aria-label="Quantity"
                      onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                      onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                      onChange={(event) => setQuantity(event.currentTarget.value)}
                      value={quantity}
                      available={available}
                      min="1"
                      max="20"
                    />
                  </div>
                  <div>
                    <span>{actualPrice?.map((item) => (
                      <div>
                        {item.compareAtPrice && <del>£{item.compareAtPrice}</del>}
                        <span className="Aftika_Bold font-2xl">£{item.price}</span>

                      </div>
                    ))}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end mt-5">
              <div className={`mb-4 pb-3 d-none d-md-block ${horizontalBorder}`} />
              <div className="col-md-6">
                <div className="row justify-content-end">
                  <div className="col-md-6 text-end d-none d-md-block pe-md-0">
                    <AddToCart
                      variantId={productVariant.storefrontId}
                      quantity={quantity}
                      available={variant.availableForSale}
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <div className="d-grid">
                      <button onClick={handleCheckout}
                        className="btn btnDanger px-5 text-white rounded-0 Aftika_ExtraLight text-uppercase">Buy Now</button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="d-md-none">
              {relatedProducts.length > 0 &&
                <div className="row pt-md-5 justify-content-center mt-md-5 productSlick px-3 px-md-0">
                  <h4 className="px-0 pb-3 Aftika_ExtraLight">Related Products</  h4>
                  <div className={`pb-3 ${horizontalBorder}`} />
                  <Slider {...settings} className="px-0">
                    {relatedProducts.map((value) => (
                      <Link to={value.slug} className="pe-md-5 pt-3">
                        <GatsbyImage
                          objectFit="contain"
                          objectPosi tion="50% 50%"
                          image={value.images[0].gatsbyImageData}
                        />
                        <p className={`mb-1 pt-4 pt-md-5 pb-3 text-uppercase Aftika_ExtraLight link-text text-dark text-center text-md-start ${fontSm}`}>{value.title}</p>
                        <p className={`Aftika_Bold text-dark text-center text-md-start ${fontSm}`}>£{priceRangeV2.minVariantPrice.amount}</p>
                      </Link>
                    ))}
                  </Slider>
                </div>
              }
            </div>
            <div className="row d-none d-md-block pt-5">
              <h4 className="px-0 pb-3 Aftika_ExtraLight">Related Products</h4>
              <div className={`pb-3 pt-3 ${horizontalBorder}`} />
              {relatedProducts.length > 0 &&
                <div className="row justify-content-between">
                  {relatedProducts.map((value) => (
                    <div className="col-md-2 pe-0">
                      <Link to={value.slug} className="pe-md-5 pt-3">
                        <img src={value.images[0].gatsbyImageData.images.fallback.src} alt="" />
                        <p className={`mb-1 pt-4 pt-md-5 pb-3  Aftika_ExtraLight link-text text-dark text-center text-md-start ${fontSm}`}>{value.title}</p>
                        <p className={`Aftika_Bold text-dark text-center text-md-start ${fontSm}`}>£{priceRangeV2.minVariantPrice.amount}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          {
            shopProducts.map((items) => (
              items.collections?.map((arData) => (
                collectionId?.map((Ide) => (
                  arData.id === Ide.id &&
                  <div className="col-md-3">
                   <a href={items.slug}>
                   <p>{items.title}</p>
                   </a>
                  </div>
                ))
              ))
            ))
          }
        </div>
      </div> */}

    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!,) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED,width: 1040, aspectRatio: 0)
      }
      variants {
        availableForSale
        compareAtPrice
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
        image {
          originalSrc
        }
      }
      collections {
        id
        title
      }
      metafields {
        key
        value
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 4
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
    allProducts :allShopifyProduct{
      nodes {
        collections {
          id
        }
        title
      images {
        gatsbyImageData
      }
      slug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
      )
      }
    }
  }
`

