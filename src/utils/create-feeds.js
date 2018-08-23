
const R = require("ramda")
const fs = require("fs")
const path = require("path")
const {Feed} = require("feed")
const moment = require("moment")
const mkdirp = require("mkdirp")
const pify = require("pify")

const publicPath = "./public"

const writeFile = pify(fs.writeFile)

const findSpeakersForTalk = require("./find-speakers-for-talk")

/**
 * returns a promise of the process of writing the given feed content
 * to the file.
 * @param content
 * @param filename
 */
const writeFeedFile = (content, filename) => {
  const outputPath = path.join(publicPath, filename)

  const outputDir = path.dirname(outputPath)

  if (!fs.existsSync(outputDir)) {
    mkdirp.sync(outputDir)
  }

  return writeFile(outputPath, content)
}

const createDescription = ({talk, speakers, location}) => {
  const speakerLine = R.join(", ", speakers.map(speaker => speaker.frontmatter.name))

  const locationLine = location ? `<address>
        ${location.frontmatter.name}
        <br />
        ${location.frontmatter.street} ${location.frontmatter.number}
        <br />
        ${location.frontmatter.zip} ${location.frontmatter.city}
      </address>` : "wird noch bekannt gegeben"

  return `
      <h1>${talk.frontmatter.title}</h1>
      <p>Speakers: ${speakerLine}</p>
      <p>Location:</p>
      ${locationLine}
  `
}

const createFeeds = ({ graphql }) => {
  return graphql(`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
        }
      }

      talks: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { sourceName: { eq: "talks" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              speaker
              location
            }
            fields {
              slug
            }
            html
          }
        }
      }

      speakers: allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
            }
          }
        }
      }

      locations: allMarkdownRemark(filter: { fields: { sourceName: { eq: "locations" } } }) {
        edges {
          node {
            fields {
              slug
              locationId
            }

            frontmatter {
              name
              info
              street
              number
              zip
              city
            }
          }
        }
      }
    }
  `).then(result => {
    const siteMetadata = result.data.site.siteMetadata
    const speakers = result.data.speakers.edges.map(edge => edge.node)
    const locations = result.data.locations.edges.map(edge => edge.node)
    const talks = result.data.talks.edges.map(edge => edge.node)


    const feed = new Feed({
      title: siteMetadata.title,
      description: siteMetadata.description,
      link: siteMetadata.siteUrl + "/",
      id: siteMetadata.siteUrl + "/",
      feedLinks: {
        atom: siteMetadata.siteUrl + "/atom.xml",
        json: siteMetadata.siteUrl + "/feed.json",
        rss2: siteMetadata.siteUrl + "/rss.xml",
      },
    })

    talks.forEach(talk => {
      const speakersOfTalk = findSpeakersForTalk({ allSpeakers: speakers, talk})

      const locationOfTalk = R.find(location => location.fields.locationId === talk.frontmatter.location)(locations)

      const url = siteMetadata.siteUrl + talk.fields.slug


      feed.addItem({
        title: talk.frontmatter.title,
        id: url,
        link: url,
        description: createDescription({talk, speakers: speakersOfTalk, location: locationOfTalk}),
        date: moment(talk.frontmatter.date).toDate(),
        content: talk.html,
      })

    })

    const rss2 = feed.rss2()
    const atom1 = feed.atom1()
    const json1 = feed.json1()

    return Promise.all([
      writeFeedFile(rss2, "rss.xml"),
      writeFeedFile(atom1, "atom.xml"),
      writeFeedFile(json1, "feed.json"),
    ])
  })
}

module.exports = createFeeds
