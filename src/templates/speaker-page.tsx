import React from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import TalkOverview from "../components/talk-overview"

const SpeakerPage = ({ data }) => {
  const { speaker, talks } = data

  return (
    <Layout>
      <h2>{speaker.frontmatter.name}</h2>

      {speaker.frontmatter.pic && (
        <div style={{ maxWidth: "400px" }}>
          <GatsbyImage image={speaker.frontmatter.pic.childImageSharp.gatsbyImageData} alt="picture of the speaker" />
        </div>
      )}

      {speaker.frontmatter.twitter_name && (
        <p>
          Twitter:{" "}
          <a
            href={`https://twitter.com/${speaker.frontmatter.twitter_name}`}
          >{`@${speaker.frontmatter.twitter_name}`}</a>
        </p>
      )}

      <div className="description" dangerouslySetInnerHTML={{ __html: speaker.html }} />

      <hr />
      {talks && <TalkOverview talks={talks.edges.map((edge) => edge.node)} />}
    </Layout>
  )
}

export default SpeakerPage

export const query = graphql`
  query ($speakerSlug: String!, $speakerId: String!) {
    speaker: markdownRemark(fields: { slug: { eq: $speakerSlug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        name
        twitter_name
        pic {
          childImageSharp {
            gatsbyImageData(width: 400, layout: CONSTRAINED)
          }
        }
      }
    }
    talks: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "talks" } }, frontmatter: { speaker: { eq: $speakerId } } }
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

export { Head } from "../components/head"
