import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"

const DebugRedirectsPage = ({ data }) => (
  <Layout>
    <h2>Debug: Redirects</h2>
    <p>This page lists all redirects that are present in the website</p>

    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        {data.talks &&
          data.talks.edges.map(edge => edge.node).map(talk => (
            <React.Fragment key={talk.id}>
              <tr>
                <td>
                  <Link to={talk.fields.legacySlug}>{talk.fields.legacySlug}</Link>
                </td>
                <td>
                  <Link to={talk.fields.slug}>{talk.fields.slug}</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={`${talk.fields.legacySlug}.html`}>{`${talk.fields.legacySlug}.html`}</Link>
                </td>
                <td>
                  <Link to={talk.fields.slug}>{talk.fields.slug}</Link>
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </table>
  </Layout>
)

export default DebugRedirectsPage

export const query = graphql`
  query {
    talks: allMarkdownRemark(
      filter: { fields: { legacySlug: { ne: null }, sourceName: { eq: "talks" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            legacySlug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
