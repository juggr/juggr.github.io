import React from "react"

import { graphql, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"

import { Badge } from "reactstrap"

import * as R from "ramda"

import Layout from "../components/layout"
import { findSpeakersForTalk } from "../utils/find-speakers-for-talk"
import formatDate from "../utils/format-date"

const TagsPage = ({ data }) => {
  const talks = data.talks.edges.map((edge) => edge.node)

  const allSpeakers = data.speakers.edges.map((edge) => edge.node)

  const tags = R.filter(
    (s) => s,
    R.uniq(
      // R.chain is equal to flatMap
      R.chain((talk) => talk.frontmatter.tags)(talks)
    )
  ).sort()

  const talksWithSpeakers = talks.map((talk) => {
    const speakersOfTalk = findSpeakersForTalk({ allSpeakers, talk })

    return { ...talk, speakersOfTalk }
  })

  const talksGroupedByTag = tags.map((tag) => {
    const filteredTalk = talksWithSpeakers
      .filter((talk) => talk.frontmatter.tags)
      .filter((talk) => talk.frontmatter.tags.includes(tag))

    return {
      tag,
      talks: filteredTalk,
    }
  })

  return (
    <Layout>
      <h2>Tags</h2>
      <p>
        {tags.map((tag) => (
          <Badge key={tag} style={{ margin: "0.1rem" }} href={`#${tag}`}>
            <FontAwesomeIcon icon={faTag} /> {tag}
          </Badge>
        ))}
      </p>

      {talksGroupedByTag.map((tagGroup) => {
        const { tag, talks } = tagGroup

        return (
          <React.Fragment key={tag}>
            <h3 id={tag}>{tag}</h3>
            <ul>
              {talks.map((talk) => {
                const speakersString = R.join(", ")(talk.speakersOfTalk.map((speaker) => speaker.frontmatter.name))

                return (
                  <li key={talk.id}>
                    <span className="lead">
                      <Link to={talk.fields.slug}>{talk.frontmatter.title}</Link>
                    </span>
                    {" | "} <time dateTime={talk.frontmatter.date}>{formatDate(talk.frontmatter.date)}</time>
                    <p>von {speakersString}</p>
                  </li>
                )
              })}
            </ul>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query {
    talks: allMarkdownRemark(filter: { fields: { sourceName: { eq: "talks" } } }) {
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
