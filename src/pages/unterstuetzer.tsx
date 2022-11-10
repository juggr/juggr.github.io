import React, { FC } from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Row, Col } from "reactstrap"

import Layout from "../components/layout"

const maxWidth = 500

const Address: FC<{ name: string; link: string; mapsLink: string; addressFields: Array<string> }> = ({
  name,
  link,
  mapsLink,
  addressFields,
}) => (
  <div style={{ marginBottom: "2rem" }}>
    <p style={{ marginBottom: "0" }}>
      <a href={link}>
        <strong>{name}</strong>
      </a>
    </p>

    {addressFields.map((field) => (
      <p key={field} style={{ marginBottom: "0" }}>
        {field}
      </p>
    ))}

    <p>
      <a href={mapsLink}>in Google Maps anzeigen</a>
    </p>
  </div>
)

const style: React.CSSProperties = {
  maxWidth: `${maxWidth}px`,
  marginTop: "2em",
  marginBottom: "3em",
  borderBottom: "solid 1px #ddd",
}

type Sponsor = {
  link: string
  logo: React.ReactElement
}

const IMAGE_BASE_PATH = "../../content/images"

const SupporterBoxMultiImage: FC<{ sponsors: Array<Sponsor>; children: React.ReactNode }> = ({
  sponsors,
  children,
}) => (
  <div style={style}>
    <Row>
      {sponsors.map((sponsor) => (
        <Col key={sponsor.link}>
          <a aria-label="Link zum Sponsor" href={sponsor.link}>
            {sponsor.logo}
          </a>
        </Col>
      ))}
    </Row>
    <p style={{ marginTop: "1em" }}>{children}</p>
  </div>
)

const SupporterBox: FC<{ sponsor: Sponsor; children: React.ReactNode }> = ({ sponsor, children }) => (
  <SupporterBoxMultiImage sponsors={[sponsor]}>{children}</SupporterBoxMultiImage>
)

const UnterstuetzerPage: FC = () => {
  return (
    <Layout>
      <h2>Unterstützer</h2>

      <h3>Sponsoren</h3>
      <p>Diese Firmen unterstützen uns!</p>

      <SupporterBox
        sponsor={{
          link: "https://www.zeiss.com/digital-innovation",
          logo: (
            <StaticImage
              src={`${IMAGE_BASE_PATH}/zeiss-logo-rgb.png`}
              alt="Logo von ZEISS Digitial Innovation"
              style={{ maxHeight: "200px", maxWidth: "200px" }}
            />
          ),
        }}
      >
        <strong>ZEISS Digital Innovation</strong> sponsert unser Catering und Getränke.
      </SupporterBox>

      <SupporterBoxMultiImage
        sponsors={[
          {
            logo: (
              <StaticImage src={`${IMAGE_BASE_PATH}/entwickler_tutorials_logo.jpg`} alt="Logo von Entwickler Press" />
            ),
            link: "https://entwickler.de/",
          },
          {
            logo: <StaticImage src={`${IMAGE_BASE_PATH}/sands_logo.png`} alt="Logo von S&S Media" />,
            link: "https://sandsmedia.com/de",
          },
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

export { Head } from "../components/head"