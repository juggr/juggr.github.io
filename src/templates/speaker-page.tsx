import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

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
      {talks && (
        <>
          {talks.edges.length} Talks:
          <ul>
            {talks.edges.map(({ node }) => (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
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
