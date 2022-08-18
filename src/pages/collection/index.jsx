import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Layout } from "../../components/layout"
import  Loader  from "../../components/loader"

export default function NotFoundPage() {
const [loading,setLoading] = useState(true)

// useEffect(() =>{
// setTimeout(() => {
//  setLoading(false)
// },2000)
// },[])
  return (
    <Layout>
      {/* {loading ? <Loader /> : */}
      <p className="text-primary">
          hello
        </p>
{/* } */}
    </Layout>
  )
}