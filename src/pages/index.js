import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p> 
          I've achieved this blog thanks to Gatsby.
        </p>
        <StaticImage 
          alt="Impressive Primic"
          src="../images/pexels.jpeg"/>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page"/>
 

export default IndexPage