import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Col, Row } from "reactstrap"

const PostersPage = ({ data }) => {
  const { talks } = data

  const talkNodes = talks.edges.map((edge) => edge.node).filter((node) => node.frontmatter.poster)

  return (
    <Layout>
      <h2>Alle JUG-Plakate</h2>
      <Container>
        <Row>
          {talkNodes.map((node) => (
            <Col key={node.id} md={6} sm={12}>
              <div style={{ margin: ".5rem 0" }} id={node.frontmatter.poster.childImageSharp.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    alt={`poster for ${node.frontmatter.title}`}
                    image={node.frontmatter.poster.childImageSharp.gatsbyImageData}
                    style={{ border: "solid 1px #aaa" }}
                  />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default PostersPage

export const query = graphql`
  {
    talks: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { sourceName: { in: ["talks", "posts"] } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            speaker
            poster {
              childImageSharp {
                id
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

export { Head } from "../components/head"
