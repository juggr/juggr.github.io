import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import formatDate from "../utils/format-date"

import * as R from "ramda"
import moment from "moment"

import getUpcomingEvent from "../utils/get-upcoming-event"

const TalksPage = ({ data }) => {
  const talks = data.allMarkdownRemark.edges

  const today = new Date()

  const upcomingEvent = getUpcomingEvent({ allEvents: talks, today })

  return (
    <Layout>
      <h2>Alle Vortragsthemen</h2>

      <ul>
        {talks.map(talkEdge => {
          const talk = talkEdge.node

          const isNextTalk = upcomingEvent && talk.frontmatter.date === upcomingEvent.node.frontmatter.date

          const style = isNextTalk ? { backgroundColor: "rgb(231, 231, 231)" } : undefined

          return (
            <li key={talk.id} style={style}>
              <span className="lead">
                <Link to={talk.fields.slug}>{talk.frontmatter.title}</Link>
              </span>
              {" | "}
              <time dateTime={talk.frontmatter.date}>{formatDate(talk.frontmatter.date)}</time>
              <p>von TODO </p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default TalksPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "talks" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
