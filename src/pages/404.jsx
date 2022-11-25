import * as React from "react"
import { Layout } from "../components/layout"
import  Loader  from "../components/loader"

export default function NotFoundPage() {
  return (
    <Layout>
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1 Aftika_Bold">404</h1>
        <h1 className="Aftika_Bold fs-5 pt-4">The page could not be found</h1>
      </div>
    </section>
  </Layout>
  )
}
