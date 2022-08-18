import React,{useState} from 'react'
import { StaticQuery, graphql } from "gatsby"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { navigate } from "@reach/router"




const Acode = () => {
  
    
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      // console.log(string, results)
    }
    const handleOnSelect = (item) => {
      // the item selected
      console.log(item.title)
      // window.location.reload()
      navigate(`${item.slug}`, { replace: true })
      window.location.reload()
    }
  
   
    
    const handleOnFocus = (item) => {
      // console.log("Focused")
    }
    const formatResult = (item) => {
      return (
        <>
          {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
          <p style={{ display: "block", textAlign: "left"}}>
            {/* <img src={item.images[0].GatsbyImageData.images.fallback.src} className="img-fluid" alt="" /> */}
            {item.title}
          </p>
        </>
      )
    }
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
    
  
  return (
    <div>
   <StaticQuery
      query={graphql`
      query ourQueryy {
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
      }`}



      render={(data) => (
        <div className='d-none d-lg-block container-fluid'>

        <div className='row fixed-top justify-content-between py-2 mb-5 ' style={{backgroundColor:"#212529"}}>
          <div className='col-md-6'>
        
      <div className="announce text-start bg-dark text-white Aftika_Light py-2 d-md-block d-none"style={{"fontSize":"13px","paddingLeft":"120px"}}>
    Get 20% Off on your First Order. Use Code: FirstBuy
    </div>
      </div>
      <div className='col-md-4'>
      <div className="container searchWrapper"style={{ width: "60%" }}>
        <ReactSearchAutocomplete
          items={data.productDataSearch.nodes}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
        
          fuseOptions={{ keys: ["title", "images"] }}
          resultStringKeyName="title"
          formatResult={formatResult}
          placeholder="Search products"
          className="ser cursor"

          styling={{
            backgroundColor: "#ffffff",
            hoverBackgroundColor: "rgb(51 65 85)",
            color: "rgb(148 163 184)",
            zIndex: "999",
            borderRadius: "20px",
            paddingBottom:"2px",
            paddingTop:"2px",
            clearIconMargin: '3px 14px 0 0',
            height:"30px",
            iconColor: "grey",
            fontSize: "10px",
            cursor:"pointer",
            showIcon:"true",
            hoverCursor:"pointer"

          }}
        />
      </div>
    </div>
  
  </div>
  </div>
  )

}
/>
</div>
  );
}
export default Acode