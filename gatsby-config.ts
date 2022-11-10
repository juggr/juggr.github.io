import * as path from "path"
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://jug-gr.de",
  },
  // enable when there are any errors in prod-build only
  // flags: {
  //   DEV_SSR: true,
  // },
  plugins: [
    "gatsby-plugin-nullish-coalescing-operator",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.resolve("content/posts"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: path.resolve("content/speakers"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve("content/pages"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "talks",
        path: path.resolve("content/talks"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locations",
        path: path.resolve("content/locations"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve("content/images"),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.ts",
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "JUG Görlitz",
        short_name: "JUG Görlitz",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#337ab7",
        display: "minimal-ui",
        icon: "content/images/icon.png",
      },
    },
  ],
}

export default config
