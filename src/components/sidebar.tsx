import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import bannerJSON from "../../content/banner.json"

import { faFacebook, faGithub, faTwitter, faMastodon } from "@fortawesome/free-brands-svg-icons"
import { faCalendarAlt, faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons"

import { Col, Row } from "reactstrap"

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Row>
        <Col sm="6" xs="12" md="12">
          <img alt="Logo der JUG Görlitz" src={require("../../content/images/logo.png").default} />
        </Col>
        <Col sm="6" xs="12" md="12">
          <strong>Organisiert vom <br/><a href="https://digitale-oberlausitz.eu">Digitale Oberlausitz e.V.</a></strong>
          <p>
            Wir sind Mitglied im
            <br />
            <a href="http://www.ijug.eu/">iJUG Verband</a>
          </p>

          <p>Links:</p>
          <ul className="list-unstyled">
            <li>
              <a href="https://ijug.social/@Juggr">
                <FontAwesomeIcon icon={faMastodon} /> Mastodon
              </a>
            </li>
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
              <a href="/jug-goerlitz.ics">
              <FontAwesomeIcon icon={faCalendarAlt} /> Kalender
                (ICAL)
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faRss} /> Feeds:
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

    {bannerJSON.banner.map((banner) => (
      <div key={banner.id} className="banner">
        <a href={banner.linkTarget}>
          <img alt={banner.altText} src={require(`../../content/images/${banner.imageName}`).default} />
        </a>
      </div>
    ))}
  </div>
)

export default Sidebar
