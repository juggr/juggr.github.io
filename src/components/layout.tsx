import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/style.css"

import PageHeader from "./page-header"
import PageFooter from "./page-footer"
import Sidebar from "./sidebar"

import fontawesome from "@fortawesome/fontawesome"

fontawesome.config = {
  ...fontawesome.config,
  autoAddCss: false,
}

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Container
        style={{
          marginTop: "1em",
        }}
      >
        <Row>
          <Col md="9">{children}</Col>

          <Col md="3">
            <Sidebar />
          </Col>
        </Row>
      </Container>

      <PageFooter />
    </>
  )
}

export default Layout
