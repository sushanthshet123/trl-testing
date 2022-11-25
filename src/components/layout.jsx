import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import  MobileHeader  from "./mobile-header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import Acode from "./home/announcement"

export function Layout(props) {
  return (
    <div className="position-relative">
      <Seo />
      <SkipNavLink />
      
      <MobileHeader data={props.header} />
      <Acode />
      <Header data={props.header} />
      <SkipNavContent>{props.children}
     </SkipNavContent>
      <Footer />
    </div>
  )
}
