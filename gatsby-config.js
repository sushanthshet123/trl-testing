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
    PARALLEL_QUERY_RUNNING: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.SHOPIFY_STORE_NAME,
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        shopifyConnections: ["collections"],
      },
      
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2146906,
        sv: 6,
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "1152099199069496",
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MFG6X4G",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
  
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}


