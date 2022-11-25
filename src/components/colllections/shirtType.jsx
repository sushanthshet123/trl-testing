import { Link } from '@reach/router'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import Wishlist from "../../components/add-to-wishlist.jsx"

const ShirtType = (props) => {

const [userData,setUserData]= useState([])
    useEffect(() => {
        setUserData(
        props.user
        .filter(
            props.filterTags == "Checks"
              ? (name) => name.tags.includes("Checks")
              : props.filterTags == "Solids"
              ? (name) => name.tags.includes("Solids")
              : (name) => name.tags.includes("Stripes")
          )
            .filter((use) => {
              if (props.sizeValue != null) {
                if (
                  use?.options[0]?.values.includes(
                    `${props.sizeValue}`
                  )
                ) {
                  return use 
                }
              } else return use
            })
            .slice(props.offset, props.offset + props.perPage))
    },[props.filterTags,props.sizeValue,props.offset,props.perPage])

    console.log("userData",userData)
  return (
    <>
    {userData.length != 0 ? 
    <div className="row px-4 px-md-5 pt-3 conatiner pb-5">
    
    {userData.map((product, index) => (
        <>
          <div
            className="col-6 pb-4 pb-md-5 col-md-4"
            key={index}
          >
            <Link
              to={product.slug}
              className="text_decoration"
            >
              <div>
                <GatsbyImage
                  image={
                    product.images[0]
                      .gatsbyImageData
                  }
                  className="img-fluid"
                />
                <h1 className="text-center  text-md-start font_products pt-3 pt-md-5 Aftika_Light link-text primary_text">
                  {product.title}
                </h1>
                <h1 className="text-center text-md-start font_smx pt-2  Aftika_Bold text_black text_decoration">
                  £
                  {
                    product.priceRangeV2
                      .maxVariantPrice.amount
                  }
                </h1>
              </div>
            </Link>
            <div>
              <div className="d-flex justify-content-center justify-content-md-start">
                <Wishlist />
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
          </div>
        </>
      ))}
  </div> : <h1 className="p-5 text-black text-center bg-white margin_negative position-sticky high_index text-danger">No Items Found</h1> }
  </>
  )
}

export default ShirtType