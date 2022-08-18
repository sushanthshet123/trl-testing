import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import "@popperjs/core/dist/umd/popper.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
// import "../na/slick-carousel/slick/slick.css"; 
// import "/slick-carousel/slick/slick-theme.css";
// import "./node_modules/slick-carousel/slick/slick.css"
// import "./node_modules/slick-carousel/slick/slick-theme.css"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
