require("dotenv").config()

module.exports = {
  siteMetadata: {
  siteTitle: "THIN RED LINE",
  siteTitleDefault: "Fine Men's formal and casual shirts",
  siteUrl: "https://thinredline.com",
  hrefLang: "en",
  siteDescription:
    "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
  siteImage: "/default-og-image.jpg",
  twitter: "@gatsbyjs",  
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "", // Google Analytics / GA
    //       "", // Google Ads / Adwords / AW
    //     ],
        
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
         
    //       // Defaults to https://www.googletagmanager.com
    //       origin: "YOUR_SELF_HOSTED_ORIGIN",
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.SHOPIFY_STORE_NAME,
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        shopifyConnections: ["collections"],
      },
      
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}


