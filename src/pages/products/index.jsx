import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"

import { Seo } from "../../components/seo"
import ReactPaginate from "react-paginate"
import { useState,useEffect } from "react"
import { ProductCard } from "../../components/product-card"

const PER_PAGE = 18
export default function Products({ data: { products } }) {
  // const handlePageClick =()=>{
  //   console.log("clicked")
  // }
  const [items,setItems]=useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(null)
  const [productLength, setProductLength] = useState(0)
  // useEffect(()=> {
    
  //   setItems(products.nodes);
  
  // },
  // []);
  useEffect(() => {
    setItems(products.nodes.length)
  }, [])
  useEffect(() => {
        setProductLength(products.nodes.length)
    
  }, [])
  
  useEffect(() => {
    setPageCount(Math.ceil(productLength / PER_PAGE))
  }, [productLength])

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }
  const offset = currentPage * PER_PAGE
  return (
    <Layout>
      <Seo title="All Products" />
      <div className="mt-5 pt-5 col-md-9 mx-auto">
        <div className="pt-4 mx-auto">
        <h1 className="pt-5"></h1>
        <div className="row row-cols-md-3 row-cols-2">
        
        {products.nodes.slice(offset, offset + PER_PAGE).map((p,index) => (
          
      <div className="">
      <div className={`col`}>
    <ProductCard product={p} key={p.id} eager={index === 0} />
    </div>
    </div>
  
  ))}
  </div>
  
      
      </div>
      <ReactPaginate 
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link1'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link1'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      
      />
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  {
    products: allShopifyProduct(
      sort: { fields: variants, order: DESC }
      limit: 2400
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
