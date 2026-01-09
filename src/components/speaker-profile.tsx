import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Col, Row } from "reactstrap"
import { SpeakerLinks } from "./speaker-links"

const SpeakerProfile = ({ speaker }) => {
  return (
    <Container style={{ marginBottom: "1.5em" }}>
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
          </div>

          <div className="description" dangerouslySetInnerHTML={{ __html: speaker.html }} />
          <SpeakerLinks frontmatter={speaker.frontmatter} />
        </Col>
      </Row>
    </Container>
  )
}

export default SpeakerProfile
