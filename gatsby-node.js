const {createFilePath} = require("gatsby-source-filesystem")
const path = require("path")


exports.onCreateNode = params => {
  const { node, getNode } = params

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)

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
        break
      }

      case "talks": {
        createSlug({ ...params, basePath: "content/talks", prefix: "talks" })
        break
      }
    }
  }
}

const createSlug = ({ node, getNode, actions, basePath, prefix }) => {
  const { createNodeField } = actions

  const path = createFilePath({ node, getNode, basePath })


  createNodeField({
    node,
    name: "slug",
    value: prefix ? `/${prefix}${path}` : path,
  })
}

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  const talksPromise = createTalkPages({createPage, graphql})
  const staticPagesPromise = createStaticPages({createPage, graphql})

  return Promise.all([
    talksPromise
  ])
}

const createTalkPages = ({ createPage, graphql}) => {
  return new Promise((resolve, reject) => {
    graphql(`
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
              }
              html
              fields {
                slug
              }
            }
          }
        }
      }    
    `).then(result => {
      const edges = result.data.allMarkdownRemark.edges

      edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/talk-page.js"),
          context: {
            slug: node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}



const createStaticPages = ({ createPage, graphql}) => {
  return new Promise((resolve, reject) => {
    graphql(`
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
    `).then(result => {
      const edges = result.data.allMarkdownRemark.edges

      edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/static-page.js"),
          context: {
            slug: node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}