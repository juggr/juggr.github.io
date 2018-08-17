module.exports = {
  siteMetadata: {
    title: "Java User Group Görlitz",
    description:
      "Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java",
    siteUrl: "https://jug-gr.de",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/content/speakers`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "talks",
        path: `${__dirname}/content/talks`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locations",
        path: `${__dirname}/content/locations`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "poster",
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    "gatsby-remark-source-name",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],
}
