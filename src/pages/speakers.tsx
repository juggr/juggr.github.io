import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import * as R from "ramda"

const SpeakersPage = ({ data }) => {
  const speakers = data.speakers.edges.map((edge) => edge.node)
  const allTalks = data.talks.edges.map((edge) => edge.node)

  const speakersWithTalks = speakers.map((speaker) => {
    const talksOfSpeaker = R.filter((talk) => talk.frontmatter.speaker.includes(speaker.fields.speakerId))(allTalks)

    return { ...speaker, talks: talksOfSpeaker }
  })

  const speakersSorted = R.sortWith([
    R.descend((speaker) => speaker.talks.length),
    R.ascend((speaker) => speaker.frontmatter.name),
  ])(speakersWithTalks)

  return (
    <Layout>
      <h2>Alle Speaker</h2>

      <ul>
        {speakersSorted.map((speaker) => (
          <li key={speaker.fields.slug}>
            <Link to={speaker.fields.slug}>{speaker.frontmatter.name}</Link> ({speaker.talks.length} Talks)
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default SpeakersPage

export const query = graphql`
  query {
    speakers: allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
      edges {
        node {
          fields {
            slug
            speakerId
          }

          frontmatter {
            name
          }
        }
      }
    }

    talks: allMarkdownRemark(filter: { fields: { sourceName: { eq: "talks" } } }) {
      edges {
        node {
          id
          frontmatter {
            speaker
          }
        }
      }
    }
  }
`

export { Head } from "../components/head"
