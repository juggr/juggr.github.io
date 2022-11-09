import React from "react"

import * as R from "ramda"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { getUpcomingEvent } from "../utils/get-upcoming-event"
import formatDate from "../utils/format-date"
import TalkContent from "../components/talk-content"
import { findSpeakersForTalk } from "../utils/find-speakers-for-talk"

const PostPage = ({ post }) => (
  <div>
    <h2>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h2>

    {post.frontmatter.date && <p>{formatDate(post.frontmatter.date)}</p>}

    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    <hr />
  </div>
)

const IndexPage = ({ data }) => {
  const talks = data.talks.edges.map((edge) => edge.node)
  const posts = data.posts ? data.posts.edges.map((edge) => edge.node) : []

  if (posts.length > 0) {
    const sortedPosts = R.sortWith([R.descend((post) => post.frontmatter.date)])(posts)

    return (
      <Layout>
        {sortedPosts.map((post) => (
          <PostPage key={post.fields.slug} post={post} />
        ))}
      </Layout>
    )
  } else {
    const today = new Date()

    const upcomingEvent = getUpcomingEvent({ allEvents: talks, today })

    const { speakers, locations } = data

    const allSpeakers = speakers.edges.map((edge) => edge.node)
    const allLocations = locations.edges.map((edge) => edge.node)

    const location = R.filter((location) => location.fields.locationId === upcomingEvent.frontmatter.location)(
      allLocations
    )[0]
    const speakersOfTalk = findSpeakersForTalk({ allSpeakers, talk: upcomingEvent })

    return (
      <Layout>
        <TalkContent talk={upcomingEvent} speakerList={speakersOfTalk} location={location} linkToDetailsPage={true} />
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    talks: allMarkdownRemark(filter: { fields: { sourceName: { eq: "talks" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
            time
            speaker
            location
            virtual
            poster {
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
          fields {
            slug
            sourceName
          }
        }
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "posts" } }, frontmatter: { show_on_frontpage: { eq: true } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
            show_on_frontpage
          }
          fields {
            slug
            sourceName
          }
        }
      }
    }

    speakers: allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            pic {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            twitter_name
          }
          fields {
            slug
            speakerId
          }
        }
      }
    }

    locations: allMarkdownRemark(filter: { fields: { sourceName: { eq: "locations" } } }) {
      edges {
        node {
          fields {
            slug
            locationId
          }
          frontmatter {
            name
            number
            info
            zip
            city
            street
          }
        }
      }
    }
  }
`
