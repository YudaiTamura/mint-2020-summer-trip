module.exports = {
  siteMetadata: {
    title: `ミントお盆旅行2020`,
    description: `ミント同期での2020年お盆旅行のしおり。漢気の金額が不安じゃ。`,
    lang: `ja`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
