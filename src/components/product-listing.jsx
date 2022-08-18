import * as React from "react"
import { ProductCard } from "./product-card"
import { textcenterr } from "./product-listing.module.css"
// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products = [] }) {
  
  return (
    <div className="row justify-content-center">
      

<div className="col-md-10">
  <div className="row">
      {products.map((p, index) => (
      
          <div className={`col-md-4 col-6 ${textcenterr}`}>
        <ProductCard product={p} key={p.id} eager={index === 0} />
        </div>
        
      ))}
    </div>
    </div>
    </div>
    
  )
  
}
