import React from "react"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const SpeakerPage = ({ data }) => {
  const { speaker, talks } = data

  return (
    <Layout>
      <h2>{speaker.frontmatter.name}</h2>

      {speaker.frontmatter.pic && (
        <div style={{ maxWidth: "400px" }}>
          <Img alt="speaker" fluid={speaker.frontmatter.pic.childImageSharp.fluid} />
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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    talks: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "talks" } }, frontmatter: { speaker: { eq: $speakerId } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
