module.exports = {
  siteMetadata: {
    author: `Nathaniel J. Liberty`,
    description:
      'A stellar full-stack web developer building things that are out of this world.',
    title: `Nathaniel J. Liberty, Full-Stack Web Developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nathaniel J. Liberty, Full-Stack Web Developer`,
        short_name: `Nathaniel J. Liberty`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
};
