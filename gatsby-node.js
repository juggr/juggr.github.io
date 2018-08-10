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