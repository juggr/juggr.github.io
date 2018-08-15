import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { speaker, talks } = data

  console.log("talks", talks)

  return (
    <Layout>
      <h2>{speaker.frontmatter.name}</h2>

      {speaker.frontmatter.pic && <img className="event-poster" alt="speaker" src={`${speaker.frontmatter.pic}`} />}

      {speaker.frontmatter.twitter_name && (
        <p>
          Twitter:{" "}
          <a href={`https://twitter.com/${speaker.frontmatter.twitter_name}`}>{`@${
            speaker.frontmatter.twitter_name
          }`}</a>
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

export const query = graphql`
  query($speakerSlug: String!, $speakerId: String!) {
    speaker: markdownRemark(fields: { slug: { eq: $speakerSlug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        name
        twitter_name
        pic
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
