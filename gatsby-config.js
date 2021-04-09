require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'Nathaniel J. Liberty',
    description:
      'A stellar software engineer building things that are out of this world.',
    title: 'Nathaniel J. Liberty, Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nathaniel J. Liberty, Software Engineer',
        short_name: 'Nathaniel J. Liberty',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment:
          process.env.NODE_ENV === 'development' ? 'development' : 'master',
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
  ],
};
