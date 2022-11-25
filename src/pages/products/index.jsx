import * as React from "react"
import { Layout } from "../../components/layout"

import { Seo } from "../../components/seo"

export default function Products() {


  return (
    <Layout>
      <Seo title="All Products" />
      <div className="mt-5 pt-5 col-md-9 mx-auto">
        Products
      </div>
    </Layout>
  )
}

