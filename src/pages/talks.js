import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import formatDate from "../utils/format-date"

import * as R from "ramda"

import getUpcomingEvent from "../utils/get-upcoming-event"
import findSpeakersForTalk from "../utils/find-speakers-for-talk"

const TalksPage = ({ data }) => {
  const talks = data.talks.edges.map(edge => edge.node)

  const allSpeakers = data.speakers.edges.map(edge => edge.node)

  const today = new Date()

  const upcomingEvent = getUpcomingEvent({ allEvents: talks, today })

  return (
    <Layout>
      <h2>Alle Vortragsthemen</h2>

      <ul>
        {talks.map(talk => {
          const speakersOfTalk = findSpeakersForTalk({ allSpeakers, talk })

          const speakersString = R.join(", ")(speakersOfTalk.map(speaker => speaker.frontmatter.name))

          const isNextTalk = upcomingEvent && talk.frontmatter.date === upcomingEvent.frontmatter.date

          const style = isNextTalk ? { backgroundColor: "rgb(231, 231, 231)" } : undefined

          return (
            <li key={talk.id} style={style}>
              <span className="lead">
                <Link to={talk.fields.slug}>{talk.frontmatter.title}</Link>
              </span>
              {" | "}
              <time dateTime={talk.frontmatter.date}>{formatDate(talk.frontmatter.date)}</time>
              <p>von {speakersString}</p>
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
    talks: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "talks" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            time
            virtual
            tags
            speaker
          }
          fields {
            slug
          }
        }
      }
    }

    speakers: allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`
