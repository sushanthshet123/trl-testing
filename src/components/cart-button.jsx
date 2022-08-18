import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import CartIcon from "../icons/cart"
import { cartButton, badge } from "./cart-button.module.css"
import { useLocation } from "@reach/router"

export function CartButton({ quantity }) {
  const [colorChange, setColorchange] = useState(false)

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor)
  }, []);
  const location = useLocation()
  // console.log("location",location.pathname.split('/').length)

  return (
    <Link
      aria-label={`Shopping Cart with ${quantity} items`}
      to="/cart"
      className={cartButton}
    >
      <img src="/header/mycart-mobile-icon.svg" alt="login-icon" className="d-block d-lg-none img-fluid mx-auto" />
      {colorChange == false && location.pathname.length ==1 ?
      <img src="/header/cart-white.svg" alt="login-icon" className="d-none d-lg-block img-fluid mx-auto" /> :
      <img src="/header/mycart-icon.svg" alt="login-icon" className="d-none d-lg-block img-fluid mx-auto" /> 
      
}
      {quantity > 0 && <div className={badge}>{quantity}</div>}
    </Link>
  )
}
