import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { GatsbyImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import WhyUs from "../../components/home/why-us/why-us"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { navigate } from "@reach/router"
import Wishlist from '../../components/add-to-wishlist.jsx'
import { StoreContext } from "../../context/store-context"
import Loader from '../../components/loader'



const PER_PAGE = 6

const Collection = ({
  data: { collectionData, product, productDataSearchFilter },
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [productLength, setProductLength] = useState(0)
  const [productTagLength, setProductTagLength] = useState(0)
  const [filterTags, setFilterTags] = useState(null)
  const [featured, setFeatured] = useState(false)
  const [priceFilter, setPriceFilter] = useState(false)
  const [swap, setSwap] = useState(false)
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState(false)
  const [pageCount, setPageCount] = useState(null)
  const [pageTagCount, setPageTagCount] = useState(null)
  const [loading,setLoading] = useState(true)


  const [casualShirt] = useState('featured-casual-shirt')
  const { client } = React.useContext(StoreContext)
  const {
    variants: [initialVariant],
    images: [firstImage],
  } = product

  const [variant, setVariant] = React.useState({ ...initialVariant })

  function handleBestSellingClick() {
    setFilterTags("Checks")
    setPriceFilter(true)
    setFeatured(true)
    

  }
  function handleFeaturedClick() {
    setFilterTags("Solids")
    setPriceFilter(true)
    setFeatured(true)

  }
  function handleStripeClick() {
    setFilterTags("Stripes")
    setPriceFilter(true)
    setFeatured(true)

  }

  function handleAscending() {
    setPriceFilter(false)
    setSwap(false)
    setFeatured(false)

  }
  function handleDescending() {
    setPriceFilter(false)
    setSwap(true)
    setFeatured(false)

  }

  const location = useLocation()
  let queryData = location.pathname.split('collection/')

  console.log("location",queryData)

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  useEffect(() => {
    setLoading(true)
    collectionData.nodes.map((user) =>
      user.handle == queryData[1] ?
        setProductLength(user.products.length)
        : null
    )
    setCurrentPage(0)
  }, [queryData[1]])


  var i = 1
  useEffect(() => {
    setLoading(true)
    collectionData?.nodes.map((user) =>
      user.handle == queryData[1]
        ? user.products
        .filter(
          filterTags == "Checks"
            ? (name) => name.tags.includes("Checks")
            : filterTags == "Solids"?(name) => name.tags.includes("Solids"):
            (name) => name.tags.includes("Stripes")
        )
          .map((product, index) => setProductTagLength(i++))
        : null
    )
    setCurrentPage(0)
  }, [queryData[1]])


  useEffect(() => {
    setPageCount(Math.ceil(productLength / PER_PAGE))
    setPageTagCount(Math.ceil(productTagLength / PER_PAGE))
  }, [productLength, productTagLength])
  const handleOnSearch = (string, results) => {
  }

  const handleOnHover = (result) => {
  }

  const handleOnSelect = (item) => {
    navigate(`${item.slug}`, { replace: true })
    window.location.reload()
  }

  const handleOnFocus = (item) => {
  }


  const formatResult = (item) => {
    return (
      <>
        <p style={{ display: "block", textAlign: "left", fontSize: "12px" }}>
          {item.title}
        </p>
      </>
    )
  }
  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <Layout>
      <h1></h1>
      {/* <MobbileNavbar /> */}
      {loading == true ?
      <Loader /> :
      <div className="mt-5 pt-3">
      <div className="pt-md-5 mt-5 w-100">
        {collectionData.nodes?.map((user) => (

          <>

            {user.handle == queryData[1] ? (
              <div key={user.handle} className="py-4 container">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-md-5 pe-md-5 px-0 pt-md-0 pt-4 position-relative">
                      <div className="position-absolute animatedarrow text-end d-none d-md-block">
                        <img
                          src="/shirt-collection/animated-arrow-dark.png"
                          alt=""
                          className="d-inline primera arrow"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-med.png"
                          alt=""
                          className="d-inline arrow-2"
                        />
                        <img
                          src="/shirt-collection/animated-arrow-light.png"
                          alt=""
                          className="d-inline arrow-3"
                        />
                      </div>

                      {user?.image?.gatsbyImageData == null ? (
                        <img
                          src="/no_image.jfif"
                          className="img-fluid"
                          alt="no image to preview"
                        />
                      ) : (
                        <GatsbyImage
                          image={user?.image?.gatsbyImageData}
                          className="img-fluid"
                        />
                      )}
                    </div>
                    <div className="position-relative col-12 col-md-7 ps-5 pe-5 pe-md-0 pt-2 pt-md-3">
                      <div className="">
                        <div>

                          {user?.metafields?.map((meta) => (
                            <>
                              {meta.key == "metafields" ?
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-8 col-md-12">
                                      <h1 className="Aftika_ExtraLight font_lg_lite">
                                        {meta.value.split('"')[1]}
                                      </h1>
                                      <h1 className="font_lg_lite Aftika_Light">
                                        {meta.value.split('"')[3]}
                                      </h1>
                                      <div className="Aftika_bold pt-5">
                                        <strong>{meta.value.split('"')[5]}</strong>
                                      </div>
                                    </div>


                                    <div className="col-4 d-block d-md-none">
                                      <div
                                        className="d-block d-md-none"
                                        style={{ transform: "rotate(180deg)" }}
                                      >
                                        <img
                                          src="/arrow-downword.gif"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                : ""}
                            </>

                          ))}


                          <p className="pt-2 font_smx Aftika_Light primary_text">
                            {user.description}
                          </p>
                        </div>
                      </div>
                      <a href="#refineBy">
                        <h4
                          className={`primary_color pt-3 Aftika_Light font_smx d-none d-md-block`}
                        >
                          Shop Now
                        </h4>
                        <img
                          src="/scroll-horizontal.gif"
                          style={{ width: "100px" }}
                          className="img-fluid d-none d-md-block"
                          alt="scroll"
                        />
                      </a>

                      <div className="col-12 py-5 d-none d-md-block">
                        <div className="row">
                          {/* {console.log('sdsss', user.products)} */}
                          {user.products
                            .filter(
                              (name) =>
                                name.tags.includes("featured-slim-fit-shirts") ||
                                name.tags.includes("featured-casual-shirt") ||
                                name.tags.includes("featured-classic-fit-shirts") ||
                                name.tags.includes("featured-ties")
                            )
                            .map((product, index) => (
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
                                          product.images[0].gatsbyImageData
                                        }
                                        className="img-fluid"
                                      />
                                      <h1 className="text-center  text-md-start font_products pt-3 pt-md-4 Aftika_Light link-text primary_text">
                                        {product.title}
                                      </h1>
                                      <h1 className="text-center text-md-start font_smx pt-2 Aftika_Bold text_black text_decoration">
                                        £
                                        {
                                          product.priceRangeV2.maxVariantPrice
                                            .amount
                                        }
                                      </h1>
                                    </div>
                                  </Link>
                                  <div>
                                    <div className="d-flex">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        ))}
        <div>

          <div className="mb-3 col-12 d-block d-md-none filter_background">
            <div
              className=" btn d-flex px-5 py-3 justify-content-between w-100 filter_background border-0"
              type="button"

            >

              {search == false ?
                <div className="d-flex" onClick={() => setShowFilter(!showFilter)}>
                  <img
                    src="/filter-icon.svg"
                    className="img-fluid"
                    alt="filter-icon"
                  />
                  <span className="ps-2">Filter</span>
                </div>
                :
                <div style={{ width: "80%", }}>
                  {/* {console.log("filter data",productDataSearchFilter)} */}
                  <ReactSearchAutocomplete
                    items={productDataSearchFilter.nodes}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    fuseOptions={{ keys: ["title", "images"] }}
                    autoFocus
                    resultStringKeyName="title"
                    formatResult={formatResult}
                    className="mx-2"
                    styling={{
                      backgroundColor: "#EAE7E7",
                      hoverBackgroundColor: "white",
                      color: "rgb(148 163 184)",
                      zIndex: "999",
                      margin: "0px",
                      height: "0px",
                      borderRadius: "0px",
                      boxShadow: "0 2px 3px -2px black;",
                    }}
                  />

                </div>
              }

              <div>
                {showFilter == false ?
                  <img
                    src="/search-icon.svg"
                    className="img-fluid"
                    alt="filter-icon"
                    onClick={() => setSearch(!search)}
                  /> :
                  <img
                    src="/cancel-icon.svg"
                    className="img-fluid pt-1"
                    alt="filter-icon"
                    style={{ height: '18px' }}
                    onClick={() => setShowFilter(!showFilter)}
                  />}
              </div>
            </div>

            {showFilter == true ?
              <ul
                className="w-100 py-3 radio_active_style list-unstyled filter_background"
                aria-labelledby="dropdownMenuButton1"

              >
                <li>
                  <div className="d-flex justify-content-between py-2 px-5 Aftika_Light font_smx">
                    <label for="high_to_low">Sort, A-Z</label>
                    <input
                      class="form-check-input cursor"
                      style={{ transform: "scale(1.5)" }}
                      type="radio"
                      id="high_to_low"
                      onClick={handleAscending}
                      value=""
                      name="flexCheckDefault"
                      defaultChecked
                    />
                  </div>
                </li>
                <hr className="mt-2 mx-auto mb-2" style={{ width: "80%" }} />

                <li>
                  <div className="d-flex justify-content-between py-2 px-5 Aftika_Light font_smx">
                    <label for="low_to_high">Sort, Z-A</label>
                    <input
                      class="form-check-input cursor"
                      id="low_to_high"
                      style={{ transform: "scale(1.5)" }}
                      type="radio"
                      onClick={handleDescending}
                      value=""
                      name="flexCheckDefault"
                    />
                  </div>
                </li>
                <hr className="mt-2 mx-auto mb-2" style={{ width: "80%" }} />

                <li>
                  <div className="d-flex justify-content-between px-5 py-2 Aftika_Light font_smx ">
                    <label for="best_selling">Checks</label>
                    <input
                      class="form-check-input cursor"
                      style={{ transform: "scale(1.5)" }}
                      type="radio"
                      id="best_selling"
                      onClick={handleBestSellingClick}
                      name="flexCheckDefault"
                    />
                  </div>
                </li>
                <hr className="mt-2 mx-auto mb-2" style={{ width: "80%" }} />
                <li>
                  <div className="d-flex justify-content-between px-5 py-2 Aftika_Light font_smx">
                    <label for="featured">Solids</label>
                    <input
                      class="form-check-input cursor"
                      style={{ transform: "scale(1.5)" }}
                      type="radio"
                      id="featured"
                      onClick={handleFeaturedClick}
                      value=""
                      name="flexCheckDefault"
                    />
                  </div>
                </li>
                <hr className="mt-2 mx-auto mb-2" style={{ width: "80%" }} />
                <li>
                  <div className="d-flex justify-content-between px-5 py-2 Aftika_Light font_smx">
                    <label for="featured">Stripes</label>
                    <input
                      class="form-check-input cursor"
                      style={{ transform: "scale(1.5)" }}
                      type="radio"
                      id="featured"
                      onClick={handleStripeClick}
                      value=""
                      name="flexCheckDefault"
                    />
                  </div>
                </li>
              </ul>
              : null}
          </div>
        </div>
        <div id="refineBy" className="scrollMargin container">
          <h1 className="Aftika_Light font_smx d-none d-md-block">Refine By</h1>

          <hr className="d-none d-md-block" />
          <div className="col-12">
            <div className="row pt-md-3">
              <div className="col-3 d-none d-md-block radio_active_style">
                <div className="d-flex justify-content-between Aftika_Light font_smx">
                  <p>Sort, A-Z</p>
                  <input
                    class="form-check-input cursor"
                    style={{ transform: "scale(1.5)" }}
                    type="radio"
                    onClick={handleAscending}
                    defaultChecked
                    value=""
                    name="flexCheckDefault"
                  />
                </div>
                <hr className="mt-0 mb-4" />
                <div className="d-flex justify-content-between Aftika_Light font_smx">
                  <p>Sort, Z-A</p>
                  <input
                    class="form-check-input cursor"
                    style={{ transform: "scale(1.5)" }}
                    type="radio"
                    onClick={handleDescending}
                    value=""
                    name="flexCheckDefault"
                  />
                </div>
                <hr className="mt-0 mb-4" />
                <div className="d-flex justify-content-between Aftika_Light font_smx">
                  <p>Checks</p>
                  <input
                    class="form-check-input cursor"
                    style={{ transform: "scale(1.5)" }}
                    type="radio"
                    onClick={handleBestSellingClick}
                    name="flexCheckDefault"
                  />
                </div>
                <hr className="mt-0 mb-4" />
                <div className="d-flex justify-content-between Aftika_Light font_smx">
                  <p>Solids</p>
                  <input
                    class="form-check-input cursor"
                    style={{ transform: "scale(1.5)" }}
                    type="radio"
                    onClick={handleFeaturedClick}
                    value=""
                    name="flexCheckDefault"
                  />
                </div>
                <hr className="mt-0 mb-4" />
                <div className="d-flex justify-content-between Aftika_Light font_smx">
                  <p>Stripes</p>
                  <input
                    class="form-check-input cursor"
                    style={{ transform: "scale(1.5)" }}
                    type="radio"
                    onClick={handleStripeClick}
                    value=""
                    name="flexCheckDefault"
                  />
                </div>
                <hr className="mt-0 mb-4" />

              </div>
              <div className="col-12 col-md-9 container">

                {priceFilter == false
                  ? collectionData.nodes?.map((user) => (
                    <>
                      {user.handle == queryData[1] ? (
                        <div className="row px-4 px-md-5 pt-3 pb-5 g-md-5">
                          {user.products
                            .sort(
                              swap == false
                                ? (a, b) =>
                                  (a.title > b.title ? 1 : -1)
                                : (a, b) =>
                                  (a.title > b.title ? -1 : 1)
                            )
                            .slice(offset, offset + PER_PAGE)
                            .map((product, index) => (
                              <>
                                <div
                                  className="col-6 pb-4 pb-md-0 mx-auto col-md-4"
                                  key={index}
                                >
                                  <Link
                                    to={product.slug}
                                    className="text_decoration"
                                  >
                                    <div>
                                      <GatsbyImage
                                        image={
                                          product.images[0].gatsbyImageData
                                        }
                                        className="img-fluid "
                                      />
                                      <h1 className="text-center text-md-start font_products pt-3 pt-md-4 Aftika_Light link-text primary_text">
                                        {product.title}
                                      </h1>
                                      <h1 className="text-center text-md-start font_smx pt-2 Aftika_Bold text_black text_decoration">
                                        £
                                        {
                                          product.priceRangeV2.maxVariantPrice
                                            .amount
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
                        </div>
                      ) : null}
                    </>
                  ))
                  : collectionData.nodes?.map((user) => (
                    <>
                      {user.handle == queryData[1] ? (
                        <div className="row px-4 px-md-5 pt-3 conatiner pb-5">
                          {user.products
                            .filter(
                              filterTags == "Checks"
                                ? (name) => name.tags.includes("Checks")
                                : filterTags == "Solids"?(name) => name.tags.includes("Solids"):
                                (name) => name.tags.includes("Stripes")
                            )
                            .slice(offset, offset + PER_PAGE)
                            .map((product, index) => (
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
                                          product.images[0].gatsbyImageData
                                        }
                                        className="img-fluid"
                                      />
                                      <h1 className="text-center  text-md-start font_products pt-3 pt-md-5 Aftika_Light link-text primary_text">
                                        {product.title}
                                      </h1>
                                      <h1 className="text-center text-md-start font_smx pt-2  Aftika_Bold text_black text_decoration">
                                        £
                                        {
                                          product.priceRangeV2.maxVariantPrice
                                            .amount
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
                        </div>
                      ) :null}
                    </>
                  ))}

                {featured == false ? (
                  <div className="py-2 d-flex justify-content-center">
                    <ReactPaginate
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageCount={pageCount}
                      previousLabel="<"
                      breakLabel="..."
                      breakLinkClassName="page-link"
                      breakClassName="page-item"
                      containerClassName={"pagination"}
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link1"
                      nextClassName="page-item"
                      nextLinkClassName="page-link1"
                      activeClassName="active"
                      marginPagesDisplayed={2}
                      
                    />
                  </div>
                ) : (
                  <div className="py-2 d-flex justify-content-center">
                    <ReactPaginate
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageCount={pageTagCount}
                      previousLabel="<"
                      breakLabel="..."
                      breakLinkClassName="page-link"
                      breakClassName="page-item"
                      containerClassName={"pagination"}
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link1"
                      nextClassName="page-item"
                      nextLinkClassName="page-link1"
                      activeClassName="active"
                      marginPagesDisplayed={2}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="d-none d-md-block" />
      </div>
      </div>
}
      {/* why us section start */}
      <div className="d-md-block d-none">
        <WhyUs bgColor={"bg-white"} />
      </div>
      {/* why us section send */}
    </Layout>
  )
}

export default Collection

export const query = graphql`
  query myquery {
    collectionData: allShopifyCollection {
      nodes {
        title
        description
        handle
        id
        image {
          gatsbyImageData
          id
        }
        metafields {
          value
          namespace
          description
          type
          key
        }
        products {
          images {
            gatsbyImageData
          }
          title
          storefrontId
          tags
          collections {
            title
          }
          slug: gatsbyPath(
            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
          )
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          handle
        }
      }
    }
    productDataSearchFilter: allShopifyProduct {
      nodes {
        collections {
          id
        }
        title
        id
        images {
          src
        }
        slug: gatsbyPath(
          filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
        )
      }
    }
    productData: allShopifyProduct(filter: { tags: { eq: "Checks" } }) {
      edges {
        node {
          id
          images {
            gatsbyImageData
          }
          title
          slug: gatsbyPath(
            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
          )
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          collections {
            id
            products {
              images {
                gatsbyImageData
              }
              handle
              slug: gatsbyPath(
                filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
              )
              title
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
    productData2: allShopifyProduct(filter: { tags: { eq: "Stripes" } }) {
      edges {
        node {
          id
          images {
            gatsbyImageData
          }
          title
          slug: gatsbyPath(
            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
          )
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          collections {
            id
            products {
              images {
                gatsbyImageData
              }
              handle
              slug: gatsbyPath(
                filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
              )
              title
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
    product: shopifyProduct {
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
        gatsbyImageData(layout: CONSTRAINED, width: 1040, aspectRatio: 1)
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
    productData1: allShopifyProduct(filter: { tags: { eq: "Solids" } }) {
      edges {
        node {
          id
          images {
            gatsbyImageData
          }
          title
          slug: gatsbyPath(
            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
          )
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          collections {
            id
            products {
              images {
                gatsbyImageData
              }
              handle
              title
              slug: gatsbyPath(
                filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
              )
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`
