import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import "./mobile-header.css"
import { Toast } from "./toast"
import { StoreContext } from "../context/store-context"
import { CartButton } from "./cart-button"
import { StaticQuery, graphql } from "gatsby"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { navigate } from "@reach/router"

function Navbar() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    navigate(`${item.slug}`, { replace: true })
    window.location.reload()
  }


  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <p style={{ display: "block", textAlign: "left" }}>
          {/* <img src={item.images[0].GatsbyImageData.images.fallback.src} className="img-fluid" alt="" /> */}
          {item.title}
        </p>
      </>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query mobileQuery {
          collectionMobile: allShopifyCollection {
            nodes {
              products {
                title
              }
              description
              handle
              title
              metafields {
                value
                namespace
                description
                type
              }
              id
            }
          }
          productDataSearch: allShopifyProduct {
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
        }
      `}
      render={(data) => (
        <div className="d-block d-lg-none fixed-top header-bg">
          {/* {console.log("jai ganesha", data.productDataSearch)} */}
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="container py-3 searchWrapper">
              <ReactSearchAutocomplete
                items={data.productDataSearch.nodes}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                fuseOptions={{ keys: ["title", "images"] }}
                resultStringKeyName="title"
                formatResult={formatResult}
                placeholder="aA"
                className="mx-2"
                styling={{
                  backgroundColor: "#454546",
                  hoverBackgroundColor: "rgb(51 65 85)",
                  color: "rgb(148 163 184)",
                  zIndex: "999",
                  borderRadius: "17px",
                }}
              />
            </div>
            <div className="container navbar_element justify-content-between">
              <Link className="menu_bars">
                <FaIcons.FaBars
                  className="text-dark py-1"
                  onClick={showSidebar}
                />
              </Link>
              <div className="">
                <Link to={`/`}>
                  <img
                    src="/header/mob-logo-red.svg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="pe-4">
                <div className="mx-auto">
                  <CartButton quantity={quantity} />
                </div>
              </div>
            </div>
            <Toast show={loading || didJustAddToCart} className="high_index">
              {!didJustAddToCart ? (
                "Updating…"
              ) : (
                <>
                  Added to cart{" "}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                      fill="#fff"
                    />
                    <path
                      d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                      fill="#fff"
                    />
                    <path
                      d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                      fill="#fff"
                    />
                  </svg>
                </>
              )}
            </Toast>
            <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
              <div className="nav_menu_items" onClick={showSidebar}>
                <div className="d-flex justify-content-between px-2 px-md-5">
                  <div className="d-flex">
                    <div className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="https://thin-red-line-shirts.myshopify.com/account"
                      >
                        <div>
                          <img
                            src="/header/login-icon.svg"
                            alt="login-icon"
                            className="img-fluid mx-auto pb-1"
                          />
                          <span className="font_xsm mx-0 primary_text">
                            LOGIN
                          </span>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="#"
                      >
                        <div>
                          <img
                            src="/header/wishlist-icon.svg"
                            alt="login-icon"
                            className="img-fluid mx-auto pb-1"
                          />
                          <span className="font_xsm mx-0 primary_text">
                            WISHLIST
                          </span>
                        </div>
                      </Link>
                    </div> */}
                  </div>
                  <div className="pe-4 pt-3">
                    <img src="/menu-button-animation.gif" style={{ width: '35px' }} />
                  </div>
                </div>
                <ul className="list-unstyled py-4 primary-text py-4">
                  {data.collectionMobile.nodes.map((user) => (
                    <>
                      <Link to={`/collections/${user.handle}`}>
                        <li
                          className="py-3 mx-auto primary_text"
                          style={{ width: "90%", borderBottom: "2px dotted" }}
                        >
                          {user.title}
                        </li>
                      </Link>
                      {/* <hr className="mt-2 mx-auto mb-2" style={{width:"90%"}} /> */}
                    </>
                  ))}
                  {/* <Link to={`/`}>
                    <li
                      className="py-3 mx-auto primary_text"
                      style={{ width: "90%", borderBottom: "2px dotted" }}
                    >
                      Find Your Fit
                    </li>
                  </Link> */}
                  {/* <hr className="mt-2 mx-auto mb-2" style={{width:"90%"}} /> */}
                  <Link to={`/about`}>
                    <li
                      className="py-3 mx-auto primary_text"
                      style={{ width: "90%", borderBottom: "2px dotted" }}
                    >
                      Our Journey
                    </li>
                  </Link>
                  {/* <hr className="mt-2 mx-auto mb-2" style={{width:"90%"}} /> */}
                </ul>
              </div>
            </nav>
          </IconContext.Provider>
        </div>
      )}
    />
  )
}

export default Navbar
