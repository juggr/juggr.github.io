import React from "react"
import { SpeakerFrontMatter } from "../types"
import { faMastodon, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function SpeakerLinks({ frontmatter }: { frontmatter: SpeakerFrontMatter }) {
  return (
    <ul className="list-unstyled" style={{ marginLeft: "0" }}>
      {frontmatter.mastodon && (
        <li>
          <a href={frontmatter.mastodon}>
            <FontAwesomeIcon icon={faMastodon} /> Mastodon
          </a>
        </li>
      )}

      {frontmatter.linkedin && (
        <li>
          <a href={frontmatter.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
        </li>
      )}

      {frontmatter.blog && (
        <li>
          <a href={frontmatter.blog}>
            <FontAwesomeIcon icon={faPencil} /> Blog
          </a>
        </li>
      )}

      {frontmatter.github && (
        <li>
          <a href={frontmatter.github}>
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </li>
      )}
    </ul>
  )
}
