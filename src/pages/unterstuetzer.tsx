import React, { FC, ReactChild } from "react"

import { graphql } from "gatsby"

import Img from "gatsby-image"

import { Row, Col } from "reactstrap"

import Layout from "../components/layout"

const maxWidth = 500

const Address = ({ name, link, mapsLink, addressFields }) => (
  <div style={{ marginBottom: "2rem" }}>
    <p style={{ marginBottom: "0" }}>
      <a href={link}>
        <strong>{name}</strong>
      </a>
    </p>

    {addressFields.map((field) => (
      <p style={{ marginBottom: "0" }}>{field}</p>
    ))}

    <p>
      <a href={mapsLink}>in Google Maps anzeigen</a>
    </p>
  </div>
)

const style = {
  maxWidth: `${maxWidth}px`,
  marginTop: "2em",
  marginBottom: "3em",
  borderBottom: "solid 1px #ddd",
}

type Link = {
  link: string
  logo: any
  logoStyle?: object
}

const SupporterBoxMultiImage: FC<{ links: Array<Link>; children: React.ReactNode }> = ({ links, children }) => (
  <div style={style}>
    <Row>
      {links.map((linkTuple, i) => (
        <Col key={i}>
          <a aria-label="Link zum Sponsor" href={linkTuple.link}>
            <Img style={linkTuple.logoStyle} fluid={linkTuple.logo.childImageSharp.fluid} />
          </a>
        </Col>
      ))}
    </Row>
    <p style={{ marginTop: "1em" }}>{children}</p>
  </div>
)

const SupporterBox: FC<{ link: string; logo: any; logoStyle?: object; children: React.ReactNode }> = ({
  link,
  logo,
  logoStyle,
  children,
}) => <SupporterBoxMultiImage links={[{ link, logo, logoStyle }]}>{children}</SupporterBoxMultiImage>

const UnterstuetzerPage = ({ data }) => {
  const { zeiss_logo, mitp_logo, sands_logo, entwickler_tutorials_logo } = data

  return (
    <Layout>
      <h2>Unterstützer</h2>

      <h3>Sponsoren</h3>
      <p>Diese Firmen unterstützen uns!</p>

      <SupporterBox
        link="https://www.zeiss.com"
        logo={zeiss_logo}
        logoStyle={{ maxHeight: "200px", maxWidth: "200px" }}
      >
        <strong>ZEISS Digital Innovation</strong> sponsert unser Catering und Getränke.
      </SupporterBox>

      <SupporterBoxMultiImage
        links={[
          { link: "https://entwickler.de/", logo: entwickler_tutorials_logo },
          { link: "https://sandsmedia.com/de", logo: sands_logo },
        ]}
      >
        <strong>Entwickler Press / S&S Media</strong> unterstützt uns regelmäßig mit Preisen zur Verlosung.
      </SupporterBoxMultiImage>

      <p>
        Wir würden uns über weitere Unterstützer freuen! Sie können uns z. B. Preise für unsere Verlosungen unter den
        Teilnehmern zur Verfügung stellen.
      </p>

      <hr />

      <h3>Veranstalter</h3>

      <p>Diese Firmen und Organisationen stellen uns regelmäßig ihre Räumlichkeiten zur Verfügung.</p>

      <Address
        name="CIDEON Software & Services GmbH & Co. KG"
        link="https://www.cideon.de"
        mapsLink="https://www.google.com/maps/place/CIDEON+Software+%26+Services+GmbH+%26+Co.+KG/@51.156937,14.9891214,17z/data=!3m1!4b1!4m5!3m4!1s0x4708dc3980ef431f:0x781d96282d404f3!8m2!3d51.156937!4d14.99131"
        addressFields={["Peterstraße 1", "02826 Görlitz"]}
      />

      <Address
        name="Hochschule Zittau/Görlitz"
        link="https://www.hszg.de/f-ei"
        mapsLink="https://www.google.de/maps/place/Hochschule+Zittau%2FG%C3%B6rlitz+(HSZG)/@51.1491033,14.9954413,17z/data=!3m1!4b1!4m5!3m4!1s0x4708dc2297028feb:0x9ebf92a61b56859a!8m2!3d51.1491!4d14.99763"
        addressFields={["Brückenstraße 1 (G II)", "02826 Görlitz"]}
      />

      <Address
        name="Carl Zeiss Digital Innovation"
        link="https://www.zeiss.com"
        mapsLink="https://www.google.de/maps?q=G%C3%B6rlitz+Berliner+Stra%C3%9Fe+63&ie=UTF8&sll=51.139990000000004,14.964935399999993&sspn=0.25938504233517495,0.9385794045212804&t=m&dg=opt&hnear=Berliner+Stra%C3%9Fe+63,+02826+G%C3%B6rlitz&z=16"
        addressFields={["Berliner Straße 63", "02826 Görlitz"]}
      />
    </Layout>
  )
}

export default UnterstuetzerPage

export const query = graphql`
  query {
    zeiss_logo: file(relativePath: { eq: "zeiss-logo-rgb.png" }, sourceInstanceName: { eq: "images" }) {
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
