module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `josh aaseby`,
    author: `Josh Aaseby`,
    description: `A collection of my thoughts and writings.`,
    siteUrl: "https://josh.ozbe.io",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ozbe`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-roboto',
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'josh',
      }
    },
  ],
}
