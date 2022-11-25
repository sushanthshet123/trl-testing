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
import Wishlist from "../../components/add-to-wishlist.jsx"
import { StoreContext } from "../../context/store-context"
import Loader from "../../components/loader"
import {
  header,
  productImageWrapper,
  scrollForMore,
  noImagePreview,
  selectVariant,
  productDescription,
  horizontalBorder,
  selectedmenu,
  radioStyles,
  cutomimgWidth,
  fontSm,
  salelock,
} from "../products/product-page.module.css"
import { includes } from "lodash"
import CollectionData from "../../components/colllections"
import ShirtType from "../../components/colllections/shirtType"

const sizeVariant = [
  { name: "14", value: 14 },
  { name: "14.5", value: 14.5 },
  { name: "15", value: 15 },
  { name: "15.5", value: 15.5 },
  { name: "16", value: 16 },
  { name: "16.5", value: 16.5 },
  { name: "17", value: 17 },
  { name: "17.5", value: 17.5 },
  { name: "18", value: 18 },
]

const PER_PAGE = 6

const Collection = ({
  data: { collectionData, product, productDataSearchFilter, productCollection },
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [productLength, setProductLength] = useState(0)
  const [productTagLength, setProductTagLength] = useState(0)
  const [filterTags, setFilterTags] = useState(null)
  const [featured, setFeatured] = useState(false)
  const [priceFilter, setPriceFilter] = useState(false)
  const [swap, setSwap] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [search, setSearch] = useState(false)
  const [pageCount, setPageCount] = useState(null)
  const [pageTagCount, setPageTagCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sizeValue, setSizeValue] = useState(null)
  const [userValue,setUserValue] = useState(null)

  const [casualShirt] = useState("featured-casual-shirt")
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


  console.log("productCollection",userValue)

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
    setSizeValue(null)
  }
  function handleDescending() {
    setPriceFilter(false)
    setSwap(true)
    setFeatured(false)
    setSizeValue(null)
  }

  const location = useLocation()
  // let queryData = location.pathname.split('collections/')
  let queryData = productCollection?.handle

  console.log("location", queryData)

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  useEffect(() => {
    setLoading(true)
    collectionData.nodes.map((user) =>
      user.handle == queryData ? setProductLength(user.products.length) : null
    )
    setCurrentPage(0)
  }, [queryData])

  var i = 1
  useEffect(() => {
    setLoading(true)
    collectionData?.nodes.map((user) =>
      user.handle == queryData
        ? user.products
            .filter(
              filterTags == "Checks"
                ? (name) => name.tags.includes("Checks")
                : filterTags == "Solids"
                ? (name) => name.tags.includes("Solids")
                : (name) => name.tags.includes("Stripes")
            )
            .map((product, index) => setProductTagLength(i++))
        : null
    )
    setCurrentPage(0)
  }, [queryData])

  useEffect(() => {
    setPageCount(Math.ceil(productLength / PER_PAGE))
    setPageTagCount(Math.ceil(productTagLength / PER_PAGE))
  }, [productLength, productTagLength])
  const handleOnSearch = (string, results) => {}

  const handleOnHover = (result) => {}

  const handleOnSelect = (item) => {
    navigate(`${item.slug}`, { replace: true })
    window.location.reload()
  }

  const handleOnFocus = (item) => {}

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
  }, 1000)

  function onChangeSizeValue(event) {
    setSizeValue(event)
  }
  console.log("enta dataddd", sizeValue)

  const options = collectionData?.nodes[2]?.products.filter(
    (user) => user?.options
  )
  console.log(
    "enta data",
    collectionData?.nodes[2]?.products.filter((user) => {
      if (user?.options[0]?.values.includes(`${sizeValue}`)) {
        return user
      }
    })
  )

  return (
    <Layout>
      <h1></h1>
      {/* <MobbileNavbar /> */}
      {loading == true ? (
        <Loader />
      ) : (
        <div className="mt-5 pt-3">
          <div className="pt-md-5 mt-5 w-100">
            {collectionData?.nodes?.map((user) => (
              <>
                {user.handle == queryData ? (
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
                                  {meta.key == "metafields" ? (
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
                                            <strong>
                                              {meta.value.split('"')[5]}
                                            </strong>
                                          </div>
                                        </div>

                                        <div className="col-4 d-block d-md-none">
                                          <div
                                            className="d-block d-md-none"
                                            style={{
                                              transform: "rotate(180deg)",
                                            }}
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
                                  ) : (
                                    ""
                                  )}
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
                                    name.tags.includes(
                                      "featured-slim-fit-shirts"
                                    ) ||
                                    name.tags.includes(
                                      "featured-casual-shirt"
                                    ) ||
                                    name.tags.includes(
                                      "featured-classic-fit-shirts"
                                    ) ||
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
                                              product.priceRangeV2
                                                .maxVariantPrice.amount
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
                  {search == false ? (
                    <div
                      className="d-flex"
                      onClick={() => setShowFilter(!showFilter)}
                    >
                      <img
                        src="/filter-icon.svg"
                        className="img-fluid"
                        alt="filter-icon"
                      />
                      <span className="ps-2">Filter</span>
                    </div>
                  ) : (
                    <div style={{ width: "80%" }}>
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
                  )}

                  <div>
                    {showFilter == false ? (
                      <img
                        src="/search-icon.svg"
                        className="img-fluid"
                        alt="filter-icon"
                        onClick={() => setSearch(!search)}
                      />
                    ) : (
                      <img
                        src="/cancel-icon.svg"
                        className="img-fluid pt-1"
                        alt="filter-icon"
                        style={{ height: "18px" }}
                        onClick={() => setShowFilter(!showFilter)}
                      />
                    )}
                  </div>
                </div>

                {showFilter == true ? (
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
                    <hr
                      className="mt-2 mx-auto mb-2"
                      style={{ width: "80%" }}
                    />

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
                    <hr
                      className="mt-2 mx-auto mb-2"
                      style={{ width: "80%" }}
                    />

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
                    <hr
                      className="mt-2 mx-auto mb-2"
                      style={{ width: "80%" }}
                    />
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
                    <hr
                      className="mt-2 mx-auto mb-2"
                      style={{ width: "80%" }}
                    />
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
                    <div className="col-md-12 my-5 px-5 Aftika_Light font_smx">
                      <h5 className="my-4 Aftika_Light font_smx">
                        Filter By Sizes
                      </h5>
                      <div className="d-flex flex-wrap">
                        {sizeVariant.map((data) => (
                          <div className={`me-2`}>
                            <div
                              className={`mb-4 mt-1 d-block d-md-none ${horizontalBorder}`}
                            />
                            <div>
                              <div className="">
                                <div className="mb-2 cursor">
                                  <label
                                    className={`flex p-2 border cursor rounded-2 Aftika_Extra small-font ${radioStyles}`}
                                  >
                                    <input
                                      className={`${selectedmenu} me-2 small-font`}
                                      type="radio"
                                      id={data.name}
                                      name="size"
                                      // value={data.value}
                                      checked={data.value == sizeValue}
                                      onChange={() =>
                                        onChangeSizeValue(data.value)
                                      }
                                    />
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ul>
                  
                ) : null}
              </div>
            </div>
            <div id="refineBy" className="scrollMargin container">
              <h1 className="Aftika_Light font_smx d-none d-md-block">
                Refine By
              </h1>

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
{queryData !== "pure-silk-ties" ? 
                    <div className="col-md-12 my-5">
                      <h5 className="my-4 Aftika_Light font_smx">
                        Filter By Sizes
                      </h5>
                      <div className="d-flex flex-wrap">
                        {sizeVariant.map((data) => (
                          <div className={`me-2`}>
                            <div
                              className={`mb-4 mt-1 d-block d-md-none ${horizontalBorder}`}
                            />
                            <div>
                              <div className="">
                                <div className="mb-2 cursor">
                                  <label
                                    className={`flex p-2 border cursor rounded-2 Aftika_ExtraLight small-font ${radioStyles}`}
                                  >
                                    <input
                                      className={`${selectedmenu} me-2`}
                                      type="radio"
                                      id={data.name}
                                      name="size"
                                      // value={data.value}
                                      checked={data.value == sizeValue}
                                      onChange={() =>
                                        onChangeSizeValue(data.value)
                                      }
                                    />
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> : null}
                  </div>
                  <div className="col-12 col-md-9 container align-self-center">
                    {priceFilter == false
                      ? collectionData.nodes?.map((user) => (
                          <div className="">
                            {user.handle == queryData ? (
                              <CollectionData user={user.products} offset={offset} perPage={PER_PAGE} swap={swap} sizeValue={sizeValue} />
                            ) : null}
                          </div>
                        ))
                      : collectionData.nodes?.map((user) => (
                          <>
                            {user.handle == queryData ? (
                           <ShirtType filterTags={filterTags} user={user.products} offset={offset} perPage={PER_PAGE} swap={swap} sizeValue={sizeValue} />
                            ) : null}
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
      )}
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
  query ($id: String!) {
    productCollection: shopifyCollection(id: { eq: $id }) {
      title
      description
      image {
        gatsbyImageData
      }
      metafields {
        value
        namespace
        description
        type
        key
      }
      handle
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
        slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        handle
      }
    }
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
          options {
            values
          }
          collections {
            title
          }
          slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
        slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
          slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
              slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
          slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
              slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
      productTypeSlug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
          slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
              slug: gatsbyPath(filePath: "/products/{ShopifyProduct.handle}")
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
    allProducts: allShopifyProduct {
      nodes {
        collections {
          id
        }
        title
        images {
          gatsbyImageData
        }
        slug: gatsbyPath(filePath: "/collections/{ShopifyCollection.handle}")
      }
    }
  }
`
