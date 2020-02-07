import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to<br/>design and code <span>modern apps</span>
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.
        </p>
        <Link className="HeroBtn" to="/about/">
          Watch the video &rarr;
        </Link>
      </div>
    </div>

  </Layout>
)

export default IndexPage
