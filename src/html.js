import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="google-site-verification" content="qhgh2mx2Rx66NjUFVzJZxxtAS4O-4a90MRv2eSfWtMo" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-151754883-1`}
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-151754883-1');
`}
        </script>
        <script>
          {`
  gtag('event', 'conversion', {
      'send_to': 'AW-755510780/qNTMCM-Z9ckCEPzboOgC',
      'value': 1.0,
      'currency': 'INR',
      'transaction_id': ''
  });
`}
        </script>
        <script>
          {`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFBTXNH');
`}
        </script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KFBTXNH`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
