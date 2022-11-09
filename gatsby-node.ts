import { createFilePath } from "gatsby-source-filesystem"
import * as path from "path"
import moment from "moment/moment"
import { createFeeds } from "./src/utils/create-feeds"
import type { CreateNodeArgs, GatsbyNode } from "gatsby"

/**
 * The old website had another schema for URLs for talks. We need to create redirects to the new schema
 * so thaWt existing old links still work.
 * However, for newer talks we don't need to create these redirects.
 * This date is used as a dividing line. All talks that are after this date won't get a redirect.
 */
const MIGRATION_DATE = moment("2018-10-01")

export const onCreateNode: GatsbyNode["onCreateNode"] = (params) => {
  const { node, getNode, actions } = params

  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: "sourceName",
      value: fileNode.sourceInstanceName,
    })

    switch (fileNode.sourceInstanceName) {
      case "pages": {
        createSlug({ ...params, basePath: "content/pages" })
        break
      }

      case "posts": {
        createSlug({ ...params, basePath: "content/posts", prefix: "posts" })
        break
      }

      case "speakers": {
        createSlug({ ...params, basePath: "content/speakers", prefix: "speakers" })
        createNodeId({ ...params, idFieldName: "speakerId" })
        break
      }

      case "talks": {
        createSlug({ ...params, basePath: "content/talks", prefix: "talks" })
        createLegacySlug({ ...params })
        break
      }

      case "locations": {
        createSlug({ ...params, basePath: "content/locations", prefix: "locations" })
        createNodeId({ ...params, idFieldName: "locationId" })
        break
      }
    }
  }
}

/**
 * This method is used to create a field containing the legacy slug (URL) for older talks (
 * older then {@link MIGRATION_DATE}).
 */
const createLegacySlug = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.frontmatter.date) {
    const date = moment(node.frontmatter.date)

    if (date.isBefore(MIGRATION_DATE)) {
      const nodeName = getNode(node.parent).name

      const nodeNameWithoutDate = nodeName.substring("2018-01-01-".length, nodeName.length)

      const legacySlug = `/${date.year()}/${date.format("MM")}/${date.format("DD")}/${nodeNameWithoutDate}`

      createNodeField({
        node,
        name: "legacySlug",
        value: legacySlug,
      })
    }
  }
}

const createSlug = ({
  node,
  getNode,
  actions,
  basePath,
  prefix,
}: Pick<CreateNodeArgs, "node" | "getNode" | "actions"> & { basePath: string; prefix?: string }) => {
  const { createNodeField } = actions

  const path = createFilePath({ node, getNode, basePath })

  createNodeField({
    node,
    name: "slug",
    value: prefix ? `/${prefix}${path}` : path,
  })
}

const createNodeId = ({ node, getNode, actions, idFieldName }) => {
  const { createNodeField } = actions

  const fileNode = getNode(node.parent)

  // we use the filename (without file extension) as id
  const path = fileNode.name

  createNodeField({
    node,
    name: idFieldName,
    value: path,
  })
}

export const createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const talksPromise = createTalkPages({ createPage, graphql, createRedirect })
  const staticPagesPromise = createStaticPages({ createPage, graphql })
  const speakersPagesPromise = createSpeakersPages({ createPage, graphql })
  const locationPagesPromise = createLocationPages({ createPage, graphql })
  const postsPagesPromise = createPostsPages({ createPage, graphql })

  return Promise.all([talksPromise, staticPagesPromise, speakersPagesPromise, locationPagesPromise, postsPagesPromise])
}

const createTalkPages = async ({ createPage, graphql, createRedirect }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { sourceName: { eq: "talks" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
              speaker
              location
            }
            html
            fields {
              slug
              legacySlug
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/talk-page.tsx"),
      context: {
        slug: node.fields.slug,
        speakerSlugs: node.frontmatter.speaker.map((speaker) => `/speakers/${speaker}/`),
        locationSlug: `/locations/${node.frontmatter.location}/`,
      },
    })

    if (node.fields.legacySlug) {
      const f = (legacySlug) => {
        createRedirect({
          fromPath: legacySlug,
          toPath: node.fields.slug,
          isPermanent: true,
          redirectInBrowser: true,
        })
      }

      f(node.fields.legacySlug)
      f(node.fields.legacySlug + ".html")
    }
  })
}

const createStaticPages = async ({ createPage, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { sourceName: { eq: "pages" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/static-page.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createSpeakersPages = async ({ createPage, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "speakers" } } }) {
        edges {
          node {
            id
            fields {
              slug
              speakerId
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/speaker-page.tsx"),
      context: {
        speakerSlug: node.fields.slug,
        speakerId: node.fields.speakerId,
      },
    })
  })
}

const createLocationPages = async ({ createPage, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "locations" } } }) {
        edges {
          node {
            id
            fields {
              slug
              locationId
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/location-page.tsx"),
      context: {
        locationSlug: node.fields.slug,
        locationId: node.fields.locationId,
      },
    })
  })
}

const createPostsPages = async ({ createPage, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "posts" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/static-page.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

export const onPostBuild: GatsbyNode["onPostBuild"] = async ({ graphql }) => {
  createFeeds({ graphql })
}
