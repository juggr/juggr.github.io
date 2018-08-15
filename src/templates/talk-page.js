import React from "react"

import { graphql, Link } from "gatsby"

import * as R from "ramda"

import Layout from "../components/layout"

import formatDate from "../utils/format-date"

const SpeakerInfo = ({ speaker }) => (
  <div className="speaker-info">
    <div className="short-info">
      {speaker.frontmatter.pic && (
        <Link to={speaker.fields.slug}>
          <img className="event-poster" alt="speaker" src={`${speaker.frontmatter.pic}`} />
        </Link>
      )}
      <p>
        <Link to={speaker.fields.slug}>
          <strong>{speaker.frontmatter.name}</strong>
        </Link>
      </p>
      {speaker.frontmatter.twitter_name && (
        <p>
          Twitter:{" "}
          <a href={`https://twitter.com/${speaker.frontmatter.twitter_name}`}>{`@${
            speaker.frontmatter.twitter_name
          }`}</a>
        </p>
      )}
    </div>
    <div className="description" dangerouslySetInnerHTML={{ __html: speaker.html }} />
  </div>
)

const LocationInfo = ({ location }) => {
  const { frontmatter } = location

  return (
    <Link to={location.fields.slug}>
      <address>
        {frontmatter.name}
        <br />
        {frontmatter.info && (
          <>
            {frontmatter.info}
             <br />
          </>
        )}
        {`${frontmatter.street} ${frontmatter.number}`}
        <br />
        {`${frontmatter.zip} ${frontmatter.city}`}
        <br />
      </address>
    </Link>
  )
}

const SpeakerHeadline = ({ speakerList }) => (
  <span>
    {R.intersperse(", ")(speakerList.map(speaker => <Link to={speaker.fields.slug}>{speaker.frontmatter.name}</Link>))}
  </span>
)

export default ({ data }) => {
  const { talk, speakers, location } = data

  const speakerList = speakers.edges.map(edge => edge.node)

  return (
    <Layout>
      <h2>{talk.frontmatter.title}</h2>
      <p className="lead">
        von <SpeakerHeadline speakerList={speakerList} /> | {formatDate(talk.frontmatter.date)}
      </p>

      <article>
        <div dangerouslySetInnerHTML={{ __html: talk.html }} />

        {talk.frontmatter.poster && <img alt="event poster" src={talk.frontmatter.poster} />}

        <hr />

        {speakerList.map(speaker => (
          <SpeakerInfo key={speaker.id} speaker={speaker} />
        ))}

        <hr />

        <div>
          <p>Datum: {formatDate(talk.frontmatter.date)}, 19:00 Uhr</p>
          Ort: {location ? <LocationInfo location={location} /> : <span>wird noch bekannt gegeben</span>}
        </div>

        <br />
        <p>
          Die Veranstaltung wird durch die <i>Java User Group Görlitz</i> (im{" "}
          <a href="http://www.ijug.eu/">iJUG Verband</a>) organisiert.
        </p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $speakerSlugs: [String]!, $locationSlug: String!) {
    talk: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
        poster
      }
    }

    speakers: allMarkdownRemark(
      filter: { fields: { slug: { in: $speakerSlugs } } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            pic
            twitter_name
          }
          fields {
            slug
          }
        }
      }
    }

    location: markdownRemark(fields: { slug: { eq: $locationSlug } }) {
      fields {
        slug
      }
      frontmatter {
        name
        info
        zip
        city
        street
      }
    }
  }
`
