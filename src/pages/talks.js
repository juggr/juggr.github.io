import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import formatDate from "../utils/format-date"

import * as R from "ramda"

import getUpcomingEvent from "../utils/get-upcoming-event"

/**
 * For each talk we cannot directly query the speaker info (especially the name) but only the speakerSlugs (not the full slug but the important
 * speaker-identifier with which we can create the slug)
 * we have to query all speakers in a separate query. Then we need to extract from this allSpeakers-list
 * only those speaker info objects that belong to a given talk. This is what this method is doing.
 *
 * @param allSpeakers an array of all speaker objects
 * @param talk a talk object
 */
const findSpeakersForTalk = ({ allSpeakers, talk }) => {
  return R.innerJoin(
    (speaker, slug) => speaker.node.fields.slug === `/speakers/${slug}/`,
    allSpeakers,
    talk.frontmatter.speaker
  )
}

const TalksPage = ({ data }) => {
  const talks = data.talks.edges

  const allSpeakers = data.speakers.edges

  const today = new Date()

  const upcomingEvent = getUpcomingEvent({ allEvents: talks, today })

  return (
    <Layout>
      <h2>Alle Vortragsthemen</h2>

      <ul>
        {talks.map(talkEdge => {
          const talk = talkEdge.node

          const speakersOfTalk = findSpeakersForTalk({ allSpeakers, talk })

          const speakersString = R.join(", ")(speakersOfTalk.map(speaker => speaker.node.frontmatter.name))

          const isNextTalk = upcomingEvent && talk.frontmatter.date === upcomingEvent.node.frontmatter.date

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
