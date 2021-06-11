/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Melwy",
    description: "",
    siteUrl: "https://github.com/ekafyi/starter-musician-theme"
  },
  plugins: [
    // Add gatsby-theme-musician to your site
    {
      resolve: "the_fhtamim",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        // pwaName: null
      }
    }
  ],
  
   proxy: {
    prefix: "/blog",
    url: "https://epic-turing-b4c9c4.netlify.com",
  },
  
};
