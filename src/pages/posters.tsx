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
        <p>
          Unsere Plakate werden von <Link to="/speakers/marlene_knoche">Marlene Knoche</Link> gestaltet. Sie macht auch
          viele andere Kunstprojekte. <br />
          Schaut doch mal auf ihrer Webseite <a href="https://www.sanguinik.de/">www.sanguinik.de</a> vorbei.
        </p>
        <Row>
          {talkNodes.map((node) => (
            <Col key={node.id} md={6} sm={12}>
              <div style={{ margin: ".5rem 0" }} id={node.frontmatter.poster.childImageSharp.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    title={node.frontmatter.poster_alt}
                    alt={node.frontmatter.poster_alt ?? `Poster für ${node.frontmatter.title}`}
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
            poster_alt
          }
        }
      }
    }
  }
`

export { Head } from "../components/head"
