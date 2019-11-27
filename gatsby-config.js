module.exports = {
  siteMetadata: {
    author: `Nathaniel J. Liberty`,
    description:
      'A driven software developer using JavaScript and web technologies to build creative solutions for the healthcare industry and more.',
    title: `Nathaniel J. Liberty, Software Developer`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nathaniel J. Liberty, Software Developer`,
        short_name: `Nathaniel J. Liberty`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        // icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
