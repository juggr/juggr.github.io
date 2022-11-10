import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Col, Row } from "reactstrap"

const SpeakerProfile = ({ speaker }) => {
  return (
    <Container>
      <Row>
        {speaker.frontmatter.pic && (
          <Col sm="6" xs="12" style={{ textAlign: "center", maxWidth: "400px" }}>
            <Link to={speaker.fields.slug}>
              <GatsbyImage
                image={speaker.frontmatter.pic.childImageSharp.gatsbyImageData}
                alt="picture of the speaker"
              />
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
                <a
                  href={`https://twitter.com/${speaker.frontmatter.twitter_name}`}
                >{`@${speaker.frontmatter.twitter_name}`}</a>
              </p>
            )}
          </div>

          <div className="description" dangerouslySetInnerHTML={{ __html: speaker.html }} />
        </Col>
      </Row>
    </Container>
  )
}

export default SpeakerProfile
