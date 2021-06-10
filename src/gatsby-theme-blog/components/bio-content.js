import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Bio() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <>
      { site.siteMetadata.description }
      <br />
      All views are my own.
    </>
  )
}
