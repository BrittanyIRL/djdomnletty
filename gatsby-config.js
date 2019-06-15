module.exports = {
  siteMetadata: {
    title: `DJ Dom & Letty`,
    description: `DJ duo spinning all vinyl all the time. We also love fast and furious.`,
    author: `@brittanyIRL`,
    owners: "Brittany & Gerrit Feenstra",
    url: "https://www.djdomnletty.com", // No trailing slash allowed!
    image: "/images/apple-touch-icon.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Kanit`,
            subsets: [`latin`],
            variants: [`900i`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142194045-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/apple-touch-icon.png",
        start_url: "/",
        version: "1.0",

        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `https://brittanyirl.github.io/djdomnletty`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
