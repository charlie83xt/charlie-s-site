import * as React from 'react'  
import Seo from "../../components/seo"
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2><Link to={`/blog/${node.frontmatter.slug}` }>
                            {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "D MMMM YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
  `

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage