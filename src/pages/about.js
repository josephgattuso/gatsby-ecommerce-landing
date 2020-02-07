import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About the course</h1>
    <p><em>TODO: course video</em></p>
    <Link to="/">&larr; Go back to home</Link>
  </Layout>
)

export default SecondPage
