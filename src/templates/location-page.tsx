import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import TalkOverview from "../components/talk-overview"

const LocationPage = ({ data }) => {
  const { location, talks } = data

  return (
    <Layout>
      <h2>{location.frontmatter.name}</h2>

      <address>
        {location.frontmatter.name}
        <br />
        {location.frontmatter.info && (
          <>
            {location.frontmatter.info}
            <br />
          </>
        )}
        {`${location.frontmatter.street} ${location.frontmatter.number}`}
        <br />
        {`${location.frontmatter.zip} ${location.frontmatter.city}`}
        <br />
      </address>
      <hr />

      {talks && <TalkOverview talks={talks.edges.map((edge) => edge.node)} />}
    </Layout>
  )
}
export default LocationPage

export const query = graphql`
  query ($locationSlug: String!, $locationId: String!) {
    location: markdownRemark(fields: { slug: { eq: $locationSlug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        name
        info
        street
        number
        zip
        city
      }
    }
    talks: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "talks" } }, frontmatter: { location: { eq: $locationId } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
