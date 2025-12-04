const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Yousef Akbari',
    description:
      'Yousef Akbari is a Computer Engineer specializing in AI, Linux system administration, and DevOps.',
    siteUrl: 'https://usfakbari.github.io', // Placeholder
    image: '/og.png', // Placeholder
    twitterUsername: '@USFAkbari', // Placeholder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yousef Akbari`,
        short_name: `Yousef`,
        start_url: `/`,
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
