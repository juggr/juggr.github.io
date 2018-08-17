import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import {Container, Row, Col} from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/style.css"

import PageHeader from "./page-header"
import PageFooter from "./page-footer"
import Sidebar from "./sidebar"

const Layout = ({ children, data }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }

          logo: file(relativePath:{eq: "logo.png"}) {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: data.site.siteMetadata.description },
              {
                name: "keywords",
                content: "java, usergroup, görlitz, programmierung",
              },
            ]}
          />

          <PageHeader />
          <Container style={{
            marginTop: "1em"
          }}>
            <Row>
              <Col md="9">
                {children}
              </Col>

              <Col md="3">
                  <Sidebar logo={data.logo}/>
              </Col>
            </Row>
          </Container>

          <PageFooter />
        </>
      )}
    />
  )
}


export default Layout
