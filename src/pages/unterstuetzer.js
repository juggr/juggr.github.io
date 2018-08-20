import React from "react"

import { graphql } from "gatsby"

import Img from "gatsby-image"

import {  Row, Col } from "reactstrap"

import Layout from "../components/layout"

const maxWidth = 500

const Address = ({ name, link, mapsLink, addressFields }) => (
  <div style={{marginBottom: "2rem"}}>
    <p style={{marginBottom: "0"}}>
      <a href={link}>
        <strong>{name}</strong>
      </a>
    </p>

    {addressFields.map(field => (
      <p style={{marginBottom: "0"}}>{field}</p>
    ))}

    <p>
      <a href={mapsLink}>in Google Maps anzeigen</a>
    </p>
  </div>
)

const UnterstuetzerPage = ({ data }) => {
  const { saxsys_logo, mitp_logo, sands_logo, entwickler_tutorials_logo } = data

  const style = {
    maxWidth: `${maxWidth}px`,
    marginBottom: "3em",
    borderBottom: "solid 1px #ddd",
  }

  return (
    <Layout>
      <h2>Unterstützer</h2>

      <h3>Sponsoren</h3>
      <p>Diese Firmen unterstützen uns!</p>

      <div style={style}>
        <a href="https://www.sogehtsoftware.de">
          <Img fluid={saxsys_logo.childImageSharp.fluid} />
        </a>
        <p>
          <strong>Saxonia Systems AG</strong> sponsert unser Catering und Getränke.
        </p>
      </div>

      <div style={style}>
        <a href="https://mitp.de/">
          <Img fluid={mitp_logo.childImageSharp.fluid} />
        </a>

        <p>
          Der <strong>mitp Verlag</strong> unterstützt uns regelmäßig mit Sachpreisen zur Verlosung.
        </p>
      </div>

      <div style={style}>
        <Row>
          <Col>
            <a href="https://entwickler.de/">
              <Img fluid={entwickler_tutorials_logo.childImageSharp.fluid} />
            </a>
          </Col>

          <Col>
            <a href="https://sandsmedia.com/de">
              <Img fluid={sands_logo.childImageSharp.fluid} />
            </a>
          </Col>
        </Row>

        <p>
          <strong>Entwickler Press / S&S Media</strong> unterstützt uns regelmäßig mit Preisen zur Verlosung.
        </p>
      </div>

      <p>
        Wir würden uns über weitere Unterstützer freuen! Sie können uns z. B. Preise für unsere Verlosungen unter den
        Teilnehmern zur Verfügung stellen.
      </p>

      <hr />

      <h3>Veranstalter</h3>

      <p>Diese Firmen und Organisationen stellen uns regelmäßig ihre Räumlichkeiten zur Verfügung.</p>

      <Address
        name="SQS Software Quality Systems AG"
        link="https://www.sqs.com"
        mapsLink="https://www.google.de/maps/place/SQS+Software+Quality+Systems+AG/@51.1467704,14.9950574,17z/data=!3m1!4b1!4m5!3m4!1s0x4708dc2a5e9553cf:0xf21a88b2bb3bf733!8m2!3d51.1467704!4d14.9972461?hl=de"
        addressFields={["Brückenstraße 10", "02826 Görlitz"]}
      />

      <Address
        name="Hochschule Zittau/Görlitz"
        link="https://www.hszg.de/f-ei"
        mapsLink="https://www.google.de/maps?q=G%C3%B6rlitz+Obermarkt+17&hl=de&ie=UTF8&ll=51.155232,14.98606&spn=0.006716,0.021136&sll=51.154047,14.986725&sspn=0.006716,0.021136&hnear=Obermarkt+17,+02826+G%C3%B6rlitz&t=m&z=16"
        addressFields={["Obermarkt 17 (G III)", "Raum 0.2", "02826 Görlitz"]}
      />

      <Address
        name="Saxonia Systems AG"
        link="https://www.sogehtsoftware.de"
        mapsLink="https://www.google.de/maps?q=G%C3%B6rlitz+Berliner+Stra%C3%9Fe+63&ie=UTF8&sll=51.139990000000004,14.964935399999993&sspn=0.25938504233517495,0.9385794045212804&t=m&dg=opt&hnear=Berliner+Stra%C3%9Fe+63,+02826+G%C3%B6rlitz&z=16"
        addressFields={["Berliner Straße 63", "02826 Görlitz"]}
      />
    </Layout>
  )
}

export default UnterstuetzerPage

export const query = graphql`
  query {
    saxsys_logo: file(relativePath: { eq: "saxsys_logo.jpg" }, sourceInstanceName: { eq: "images" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mitp_logo: file(relativePath: { eq: "mitp_logo_gross.png" }, sourceInstanceName: { eq: "images" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sands_logo: file(relativePath: { eq: "sands_logo.png" }, sourceInstanceName: { eq: "images" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    entwickler_tutorials_logo: file(
      relativePath: { eq: "entwickler_tutorials_logo.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
