import React from "react"
import { Link } from "gatsby"

import { Container, Col, Row } from "reactstrap"

const SpeakerProfile = ({ speaker }) => {
  return (
    <Container>
      <Row>
        {speaker.frontmatter.pic && (
          <Col sm="6" xs="12" style={{textAlign: "center"}}>
            <Link to={speaker.fields.slug}>
              <img alt="speaker" className="img-responsive" src={speaker.frontmatter.pic} />
            </Link>
          </Col>
        )}

        <Col sm="6" xs="12">
          <div>
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
        </Col>
      </Row>
    </Container>
    // <div className="speaker-info">
    //   <div className="short-info">
    //     {speaker.frontmatter.pic && (
    //       <Link to={speaker.fields.slug}>
    //         <img className="event-poster" alt="speaker" src={`${speaker.frontmatter.pic}`} />
    //       </Link>
    //     )}
    //     <p>
    //       <Link to={speaker.fields.slug}>
    //         <strong>{speaker.frontmatter.name}</strong>
    //       </Link>
    //     </p>
    //     {speaker.frontmatter.twitter_name && (
    //       <p>
    //         Twitter:{" "}
    //         <a href={`https://twitter.com/${speaker.frontmatter.twitter_name}`}>{`@${
    //           speaker.frontmatter.twitter_name
    //           }`}</a>
    //       </p>
    //     )}
    //   </div>
    //   <div className="description" dangerouslySetInnerHTML={{ __html: speaker.html }} />
    // </div>
  )
}

export default SpeakerProfile
