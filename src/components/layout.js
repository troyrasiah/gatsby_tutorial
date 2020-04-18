import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import {MDXProvider} from '@mdx-js/react'
import SignupForm from "./signup_form"
import SEO from "../components/seo"

const shortcodes = { SignupForm }

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <SEO title={data.site.siteMetadata.title} />
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      <Link
        to={`/cloudinary/`}
        css={css`
          float: right;
        `}
      >
        Image Gallery
      </Link>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </div>
  )
}