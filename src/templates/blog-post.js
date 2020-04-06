import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage ?
    (<Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />) : ('')
  let seo_title = post.frontmatter.searchengine_title ? (post.frontmatter.searchengine_title) : (post.frontmatter.title)
  
  return (
    <Layout>
      <SEO title={seo_title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        {featuredImgFluid}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        searchengine_title
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
      excerpt
    }
  }
`