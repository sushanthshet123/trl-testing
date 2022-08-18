import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import { CartButton } from "./cart-button"
import { Toast } from "./toast"
import { StaticQuery, graphql } from "gatsby"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useLocation } from "@reach/router"

import {
  logo as logoCss,
  navbarStyle,
  dropdownwidth,
  whiteNavbar,
  topp,
} from "./header.module.css"

export function Header({ data }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const location = useLocation()
  // console.log("location",location.pathname.length)


  const [colorChange, setColorchange] = useState(false);

  
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 70) {
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor)
  }, []);




  return (
    <StaticQuery
      query={graphql`
      query ourQuery {
        collection: allShopifyCollection {
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
      }`}
      render={data => (
        <nav
          className={location.pathname.split('/').length == 1 ?
            `navbar navbar-expand-lg navbar-light d-none d-lg-block mt-3 bg-white fixed-top`
            : `navbar navbar-expand-lg mt-3 navbar-light pt-4 d-none d-lg-block ${colorChange == false ? navbarStyle : whiteNavbar
            } fixed-top`}
        >


          <div className="container pt-2">
            <Link className="navbar-brand pe-5" to="/">
              {colorChange == false && location.pathname.length == 1 ?
                <img src="/header/test-2.svg" className="img-fluid pe-5" /> :
                <img src="/header/test.svg" className="img-fluid pe-5" />

              }
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`Aftika_Light navbar-nav ms-auto align-items-end mb-2 mb-lg-0`}>
                <li className="nav-item dropdown pe-3">

                  <a className="font_smx nav-link dropdown-toggle text_black d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {colorChange == false && location.pathname.length == 1 ?
                      <span className="pe-2 text-white">SHIRTS</span> : <span className="pe-2">SHIRTS</span>}
                    {colorChange == false && location.pathname.length == 1 ?
                      <img src="/header/header-dropdown-arrow-white.svg" className="img-fluid" style={{ transform: "rotate(90deg)" }} alt="arrow" /> :
                      <img src="/header/shirt-header-dropdown-arrow.svg" className="img-fluid" style={{ transform: "rotate(90deg)" }} alt="arrow" />
                    }


                  </a>
                  <ul
                    className="font_sm dropdown-menu animate slideIn pt-3 px-3 Aftika_Light border-0"
                    aria-labelledby="navbarDropdown"
                  >
                    {data.collection.nodes?.filter(name => name.title.includes('Shirts')).map((user) => (
                      <>
                        <li className={dropdownwidth}>
                          <Link className="dropdown-item d-flex"  to={`/collection/${user.handle}`}>
                            <span>{user.title}</span>
                            <img
                              src="/header/header-dropdown-arrow.svg"
                              className="img-fluid ms-auto"
                              alt="arrow"
                            />
                          </Link>
                        </li>
                        <hr />
                      </>
                    ))}

                  </ul>
                </li>
                {data.collection.nodes?.filter(name => name.title.includes('Ties')).map((user) => (
                  <li className="nav-item px-3 fc">
                    <>

                      {colorChange == false && location.pathname.length == 1 ?
                        <Link
                          className="nav-link active font_smx text-uppercase"
                          aria-current="page"
                          to={`/collection/${user.handle}`}
                        >
                          <span style={{ color: "white" }}> {user.title}</span>
                        </Link> :
                        <Link
                          className="nav-link active font_smx text-uppercase"
                          aria-current="page"
                          to={`/collection/${user.handle}`}
                        >
                          <span>{user.title}</span>
                        </Link>}

                    </>
                  </li>
                ))}
                <li className="nav-item px-3 ">
                  <a className="nav-link active" aria-current="page" href="https://thin-red-line-shirts.myshopify.com/account">
                    <div>
                      {colorChange == false && location.pathname.length == 1 ?

                        <img src="/header/login-white.svg" alt="login-icon" className="img-fluid mx-auto pb-1" /> :
                        <img src="/header/login-icon.svg" alt="login-icon" className="img-fluid mx-auto pb-1" />

                      }
                      {colorChange == false && location.pathname.length == 1 ?

                        <span className="font_xsm mx-auto text-white">LOGIN</span> :
                        <span className="font_xsm mx-auto ">LOGIN</span>


                      }
                    </div>
                  </a>
                </li>

                <li className="nav-item px-3">
                  <a className="nav-link active" href="/cart">
                    <div>
                      <CartButton quantity={quantity} />
                      {colorChange == false && location.pathname.length == 1 ?
                        <span className="font_xsm mx-auto text-white  ">MY CART</span> :
                        <span className="font_xsm mx-auto">MY CART</span>
                      }
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Toast show={loading || didJustAddToCart}>
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
        </nav>
      )}
    />
  )
}
