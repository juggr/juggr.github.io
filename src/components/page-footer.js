import React from "react"

import { Link } from "gatsby"

const PageFooter = () => (
  <footer className="container footer">
    <p>
      &copy; Manuel Mauky 2018 | <Link to="/impressum">Impressum</Link> |{" "}
      <Link to="/datenschutz">Datenschutz</Link>
    </p>
  </footer>
)

export default PageFooter
