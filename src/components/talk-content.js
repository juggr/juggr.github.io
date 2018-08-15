import React from "react"
import formatDate from "../utils/format-date"

import { Link } from "gatsby"

import * as R from "ramda"


const SpeakerHeadline = ({ speakerList }) => (
  <span className="lead">
    von {R.intersperse(", ")(speakerList.map(speaker => <Link key={speaker.fields.slug} to={speaker.fields.slug}>{speaker.frontmatter.name}</Link>))}
  </span>
)


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

const TalkContent = ({talk, speakerList, location, linkToDetailsPage}) => {

  let header

  if(linkToDetailsPage) {
    header = <h2><Link to={talk.fields.slug}>{talk.frontmatter.title}</Link></h2>
  } else {
    header = <h2>{talk.frontmatter.title}</h2>
  }


  return (
    <>
      {header}
      <SpeakerHeadline speakerList={speakerList} /> | { formatDate(talk.frontmatter.date)}

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

      </>
  )
}

export default TalkContent