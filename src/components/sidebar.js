import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faTwitter, faFacebook, faGooglePlus, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import { Container, Col, Row } from "reactstrap"

const Sidebar = ({ logo }) => (
  <div className="sidebar">
    <Container>
      <Row>
        <Col sm="6" xs="12" md="12">
          <Img alt="Logo der JUG Görlitz" fluid={logo.childImageSharp.fluid} />
        </Col>
        <Col sm="6" xs="12" md="12">
          <h3>
            Wir sind Mitglied im
            <br />
            <a href="http://www.ijug.eu/">iJUG Verband</a>
          </h3>

          <h3>Andere Medien</h3>
          <ul className="list-unstyled">
            <li>
              <a href="https://twitter.com/jug_gr">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/juggr">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://plus.google.com/+Jug-grDe" rel="publisher">
                <FontAwesomeIcon icon={faGooglePlus} /> Google+
              </a>
            </li>
            <li>
              <a href="https://groups.google.com/d/forum/juggr">
                <FontAwesomeIcon icon={faEnvelope} /> Mailing-List
              </a>
            </li>
            <li>
              <a href="https://github.com/juggr">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </li>
            <li>
              <a href="https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin">
                <FontAwesomeIcon icon={faCalendarAlt} /> Kalender
              </a>
              <a href="https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics">
                (ICAL)
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

    <br />

    <a href="https://jax.de/">
      <img alt="Banner für die WJAX 2018" className="img-responsive" src="/images/jax_banner.png" />
    </a>

    <br />

    <p>Unterstützt durch:</p>
    <a href="https://www.sogehtsoftware.de">
      <img alt="Logo von Saxonia Systems AG" className="img-responsive" src="/images/saxonia_logo.png" />
    </a>

    <br />
    <br />

    <a href="https://mitp.de/">
      <img alt="Logo des mitp Verlags" className="img-responsive" src="/images/mitp_logo.jpeg" />
    </a>
  </div>
)

export default Sidebar
