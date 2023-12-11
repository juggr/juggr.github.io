import * as fs from "fs"
import * as path from "path"
import * as mkdirp from "mkdirp"

import ical from "ical-generator"

import { DateTime } from "luxon"

type FrontmatterDate = string
type FrontmatterTime = `${number}:${number}`

type TalkFrontmatter = {
  title: string
  date: FrontmatterDate
  time: FrontmatterTime
  tags: Array<string>
  speaker: Array<string>
  location: string
  virtual: boolean
}

type TalkNode = {
  frontmatter: TalkFrontmatter
  fields: {
    slug: string
  }
  html: string
  excerpt: string
}

type LocationFrontmatter = {
  name: string
  number: string
  info: string
  zip: string
  city: string
  street: string
}

type LocationNode = {
  frontmatter: LocationFrontmatter
  id: string
  fields: {
    slug: string
    locationId: string
  }
}

type SpeakerFrontmatter = {
  name: string
}

type SpeakerNode = {
  frontmatter: SpeakerFrontmatter
  fields: {
    speakerId: string
  }
}

export const createIcal = ({
  graphql,
  icalTargetPath,
  icalUrl,
  icalName,
  icalTimezone = "Europe/Berlin",
}: {
  graphql: any
  icalTargetPath: string
  icalUrl: string
  icalName: string
  icalTimezone?: string
}) => {
  return graphql(`
    {
      talks: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fields: { sourceName: { eq: "talks" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              time
              tags
              speaker
              location
              virtual
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }

      locations: allMarkdownRemark(filter: { fields: { sourceName: { eq: "locations" } } }) {
        edges {
          node {
            id
            fields {
              slug
              locationId
            }
            frontmatter {
              name
              number
              info
              zip
              city
              street
            }
          }
        }
      }

      speakers: allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
        edges {
          node {
            id
            fields {
              speakerId
            }
            frontmatter {
              name
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const talks: Array<TalkNode> = result.data.talks.edges.map((edge) => edge.node)
    const locations: Array<LocationNode> = result.data.locations.edges.map((edge) => edge.node)
    const speakers: Array<SpeakerNode> = result.data.speakers.edges.map((edge) => edge.node)

    const cal = ical({
      url: icalUrl,
      name: icalName,
      timezone: icalTimezone,
    })

    talks.forEach((talk) => {
      const { excerpt, html } = talk
      const { title, date, time, location, speaker, virtual } = talk.frontmatter

      const speakerNodes = speakers.filter((s) => speaker.includes(s.fields.speakerId))

      const start = createDate(date, time ?? "19:00")
      if (!start.isValid) {
        console.error("start date is not valid", start)
      }
      const end = start.plus({ hours: 3 })
      if (!end.isValid) {
        console.error("end date is not valid", end)
      }

      let icalLocation

      if (virtual) {
        icalLocation = {
          title: "virtual",
        }
      } else {
        const locationNode = locations.find((loc) => loc.fields.locationId === location)
        if(locationNode) {
          icalLocation = {
            title: locationNode.frontmatter.name,
            address: `${locationNode.frontmatter.street} ${locationNode.frontmatter.number},${locationNode.frontmatter.zip} ${locationNode.frontmatter.city}`,
          }
        }
      }

      cal.createEvent({
        start: start.toJSDate(),
        end: end.toJSDate(),
        timezone: "Europe/Berlin",
        summary: `Vortrag "${title}" - ${speakerNodes.map((node) => node.frontmatter.name).join(", ")}`,
        description: {
          plain: excerpt,
          html,
        },
        location: icalLocation,
      })
    })
    return writeIcalFile(cal.toString(), icalTargetPath)
  })
}

const writeIcalFile = (content, icalTargetPath) => {
  const outputDir = path.dirname(icalTargetPath)

  if (!fs.existsSync(outputDir)) {
    mkdirp.sync(outputDir)
  }

  return fs.promises.writeFile(icalTargetPath, content)
}

export const createDate = (date: FrontmatterDate, time: FrontmatterTime): DateTime => {
  const iso = `${date.split("T")[0]}T${time}`
  return DateTime.fromISO(iso)
}
