import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

import TalkContent from "../components/talk-content"

const TalkPage = ({ data }) => {
  const { talk, speakers, location } = data

  const speakerList = speakers.edges.map(edge => edge.node)

  return (
    <Layout>
      <TalkContent talk={talk} speakerList={speakerList} location={location} linkToDetailsPage={false} />
    </Layout>
  )
}

export default TalkPage

export const query = graphql`
  query($slug: String!, $speakerSlugs: [String]!, $locationSlug: String!) {
    talk: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        time
        virtual
        tags
        poster {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    speakers: allMarkdownRemark(
      filter: { fields: { slug: { in: $speakerSlugs } } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            pic {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            twitter_name
          }
          fields {
            slug
          }
        }
      }
    }

    location: markdownRemark(fields: { slug: { eq: $locationSlug } }) {
      fields {
        slug
      }
      frontmatter {
        name
        number
        info
        zip
        city
        street
      }
    }
  }
`
