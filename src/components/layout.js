import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/style.css"

import PageHeader from "./page-header"
import PageFooter from "./page-footer"

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

          <div className="container main-content">{children}</div>

          <PageFooter />
        </>
      )}
    />
  )
}


export default Layout
