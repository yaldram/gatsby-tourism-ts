require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "HampiToursim",
    description: "Information, blog posts and photos of Hampi, the city of ruins, is a UNESCO World Heritage Site.",
    author: "Arsalan Ahmed Yaldram",
    twitterUsername: "@ArsalanYaldram",
    image: '/VirupakshaTemple20.jpg',
    siteUrl: 'https://amazinghampi.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          './src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-background-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}

