import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to <br />design and code<br/>React apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
    <Link to="/about/">Watch the video &rarr;</Link>
  </Layout>
)

export default IndexPage
