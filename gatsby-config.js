/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Siddhant's Personal Flex-site`,
    author: {
      name: `Siddhant Sharma`,
    },
    description: `Sid's personal website`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      github: `siddhantsharma301`,
      linkedin: `siddhant-sharma-b24a531a0`,
      twitter: `clearlynotsid`,
      instagram: `clearly_not_sid`,
    },
  },
  plugins: [
    'gatsby-plugin-svgr',
  ],
}
