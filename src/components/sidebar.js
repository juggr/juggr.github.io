import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCalendarAlt, faRss } from "@fortawesome/free-solid-svg-icons"

import { Col, Row } from "reactstrap"

const Sidebar = ({ logo }) => (
  <div className="sidebar">
    <div>
      <Row>
        <Col sm="6" xs="12" md="12">
          <img alt="Logo der JUG Görlitz" src={require("../../content/images/logo.png")}/>
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
            <li>
              <FontAwesomeIcon icon={faRss}/> Feeds:
              <ul>
                <li>
                  <a href="/atom.xml">Atom</a>
                </li>
                <li>
                  <a href="/rss.xml">RSS</a>
                </li>
                <li>
                  <a href="/feed.json">JSON</a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
    </div>

    <br />

    <br/>
    <a href="https://jax.de/">
      <img alt="Banner für die JAX 2021" src={require("../../content/images/jax21_banner.jpg")} />
    </a>

    <br />

  </div>
)

export default Sidebar
