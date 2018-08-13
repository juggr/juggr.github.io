import React from "react"

import { graphql} from "gatsby"

import Layout from "../components/layout"

import formatDate from "../utils/format-date"

export default ({data}) => {

  const talk = data.markdownRemark

  return (
    <Layout>

      <h2>{talk.frontmatter.title}</h2>
      <p className="lead">
        von {talk.frontmatter.speaker} | {formatDate(talk.frontmatter.date)}
      </p>

      <article>
        <div dangerouslySetInnerHTML={{ __html: talk.html}} />

        <br />
        <p>Die Veranstaltung wird durch die <i>Java User Group Görlitz</i> (im <a href="http://www.ijug.eu/">iJUG Verband</a>) organisiert.</p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
        speaker
      }
    }
  }
`