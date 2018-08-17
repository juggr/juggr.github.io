import React from "react"
import formatDate from "../utils/format-date"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"

import * as R from "ramda"
import SpeakerProfile from "./speaker-profile"

import Img from "gatsby-image"

const SpeakerHeadline = ({ speakerList }) => (
  <span className="lead">
    von{" "}
    {R.intersperse(", ")(
      speakerList.map(speaker => (
        <Link key={speaker.fields.slug} to={speaker.fields.slug}>
          {speaker.frontmatter.name}
        </Link>
      ))
    )}
  </span>
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

const TagsLine = ({ tags }) => {
  if (tags) {
    return (
      <>
        {R.intersperse(", ")(
          tags.map(tag => (
            <Link key={tag} to={`/tags/#${tag}`}>
              <FontAwesomeIcon icon={faTag} /> {tag}
            </Link>
          ))
        )}
      </>
    )
  } else {
    return null
  }
}

const Headline = ({ talk, linkToDetailsPage }) => {
  if (linkToDetailsPage) {
    return (
      <h2>
        <Link to={talk.fields.slug}>{talk.frontmatter.title}</Link>
      </h2>
    )
  } else {
    return <h2>{talk.frontmatter.title}</h2>
  }
}

const TalkContent = ({ talk, speakerList, location, linkToDetailsPage }) => (
  <>
    <Headline talk={talk} linkToDetailsPage={linkToDetailsPage} />
    <SpeakerHeadline speakerList={speakerList} /> | {formatDate(talk.frontmatter.date)}
    <p>
      <TagsLine tags={talk.frontmatter.tags} />
    </p>
    <article>
      <div dangerouslySetInnerHTML={{ __html: talk.html }} />

      {talk.frontmatter.poster && <Img sizes={talk.frontmatter.poster.childImageSharp.sizes} />}

      <hr />

      {speakerList.map(speaker => (
        <SpeakerProfile key={speaker.id} speaker={speaker} />
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

export default TalkContent
