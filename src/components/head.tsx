import React from "react"
import fontawesome from "@fortawesome/fontawesome"
import { HeadFC } from "gatsby"

export const Head: HeadFC = () => {
  return (
    <>
      <title>Java User Group Görlitz</title>
      <meta
        name="description"
        content="Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"
      />
      <meta name="keywords" content="java, usergroup, görlitz, programmierung" />
      <style>{fontawesome.dom.css()}</style>
    </>
  )
}
