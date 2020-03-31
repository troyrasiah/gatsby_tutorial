import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SignupForm from "../components/signup_form"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <Img fixed={data.file.childImageSharp.fixed} alt="Gatsby Docs are awesome" />
            <p>
                We're the only site running on your computer dedicated to showing the best
                photos and videos of pandas eating lots of food.
            </p>
            <SignupForm />
        </Layout>
    )
}

//export default SignupForm

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/gatsby.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 400, height: 400, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
    }
  }
`