import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import Img from "gatsby-image"

import { Container, Col, Row } from "reactstrap"

const PostersPage = ({ data }) => {
  console.log("data", data)

  const { talks } = data

  const talkNodes = talks.edges.map(edge => edge.node).filter(node => node.frontmatter.poster)

  return (
    <Layout>
      <h2>Alle JUG-Plakate</h2>
      <Container>
        <Row>
      {
        talkNodes.map(node => (
          <Col md={6} sm={12}>
            <div style={{margin: ".5rem 0"}} id={node.frontmatter.poster.childImageSharp.id} key={node.id}>
              <Link to={node.fields.slug}>
                <Img style={{ border: "solid 1px #aaa"}} fluid={node.frontmatter.poster.childImageSharp.fluid} />
              </Link>
            </div>
          </Col>
        ))
      }
        </Row>
      </Container>

    </Layout>
  )
}

export default PostersPage

export const query = graphql`
  query {
    talks: allMarkdownRemark(
      sort: { fields: frontmatter___date,  order: DESC}
      filter: { 
        fields: { sourceName: { in: ["talks", "posts"] } } 
      }) {
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
