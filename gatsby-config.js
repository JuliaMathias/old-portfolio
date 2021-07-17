module.exports = {
  siteMetadata: {
    title: `hi, i'm julia :)`,
    description: `I love to work on products that impact the world.`,
    author: `Saimir Kapaj & Julia Mathias`
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-typescript`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        plugins: [ `gatsby-remark-images`,`gatsby-remark-line-breaks`],
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [`gatsby-remark-line-breaks`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 100000,
              linkImagesToOriginal: false,
              withWebp: true,
              showCaptions: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-personal-website-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ed64a6`,
        theme_color: `#ed64a6`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
