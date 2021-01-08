import React from "react"

import { Link } from "gatsby"

const PageFooter = () => (
  <footer className="container footer">
    <p>
      <Link to="/impressum">Impressum</Link> |{" "}
      <Link to="/datenschutz">Datenschutz</Link>
    </p>
  </footer>
)

export default PageFooter
