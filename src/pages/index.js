import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p> 
          I'm making this by following the Gatsby tutorial
        </p>
        <StaticImage 
          alt="Impressive Primic"
          src="../images/tribe.jpeg"/>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage