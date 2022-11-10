import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import * as R from "ramda"

const SpeakersPage = ({ data }) => {
  const locations = data.locations.edges.map((edge) => edge.node)
  const allTalks = data.talks.edges.map((edge) => edge.node)

  const locationsWithTalks = locations.map((location) => {
    const talksOfLocation = R.filter((talk) => talk.frontmatter.location.includes(location.fields.locationId))(
      R.filter((talk) => talk.frontmatter.location)(allTalks) // it's possible that a talk has no location (yet)
    )

    return { ...location, talks: talksOfLocation }
  })

  const locationsSorted = R.sortWith([
    R.descend((location) => location.talks.length),
    R.ascend((location) => location.frontmatter.name),
  ])(locationsWithTalks)

  return (
    <Layout>
      <h2>Alle Locations</h2>

      <ul>
        {locationsSorted.map((location) => (
          <li key={location.fields.slug}>
            <Link to={location.fields.slug}>{location.frontmatter.name}</Link> ({location.talks.length} Talks)
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default SpeakersPage

export const query = graphql`
  query {
    locations: allMarkdownRemark(filter: { fields: { sourceName: { eq: "locations" } } }) {
      edges {
        node {
          fields {
            slug
            locationId
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
      }
    }

    talks: allMarkdownRemark(filter: { fields: { sourceName: { eq: "talks" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            location
          }
        }
      }
    }
  }
`

export { Head } from "../components/head"
