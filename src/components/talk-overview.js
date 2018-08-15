import React from "react"

import { Link } from "gatsby"

const TalkOverview = ({ talks }) => (
  <>
    {talks.length} Talks:
    <ul>
      {talks.map(talk => (
        <li key={talk.fields.slug}>
          <Link to={talk.fields.slug}>{talk.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </>
)

export default TalkOverview
