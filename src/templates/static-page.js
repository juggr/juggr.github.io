import React from "react"

import {graphql} from "gatsby"

import Layout from "../components/layout"

export default ({data}) => {
  const page = data.markdownRemark



  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: page.html}} />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`