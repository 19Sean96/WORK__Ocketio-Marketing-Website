const fs = require('fs');
const webpack = require('webpack')
// const { withPlaiceholder } = require('@')
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self' 'unsafe-eval' 'unsafe-inline' wirewise.io *.wirewise-dev.com *.wirewise.io https://cms.wirewise-dev.com cms.wirewise-dev.com; img-src data: 'self' *; style-src 'self' 'unsafe-inline'; script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analyics.com https://*.google.com https://*.doubleclick.net",
  },
];

module.exports = {
  // async headers() {
  //     return [
  //         {
  //             source: '/(.*)',
  //             // headers: securityHeaders
  //         }
  //     ]
  // },
  images: {
    domains: ["cms.wirewise-dev.com"],
  },
  env: {
    MANAGED_DEVICE_DOWNLOAD_URL: process.env.MANAGED_DEVICE_DOWNLOAD_URL,
    rawGtmScriptFromFile: fs.readFileSync('./lib/preLoadAnalyticScripts/gtm.js').toString(),
    rawSibScriptFromFile: fs.readFileSync('./lib/preLoadAnalyticScripts/sib.js').toString(),
    SIB_KEY: process.env.SIB_KEY,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    THIS_URL: process.env.THIS_URL,
    DIRECTUS_CMS_URL: process.env.DIRECTUS_CMS_URL,
    DIRECTUS_CMS_ACCESS_KEY: process.env.DIRECTUS_CMS_ACCESS_KEY,
    GTM_TESTING: process.env.GTM_TESTING
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      // use: ['@svgr/webpack', {
      //   options: {
      //     dimensions: false,
      //     svgo: {
      //       cleanupIDs: false
      //     }
      //   }
      // }],
      use: {
        loader: '@svgr/webpack',
        options: {
          ref: true,
          svgoConfig: {
            plugins: [
              {
                name: 'removeDimensions',
                active: true
              },
              {
                name: 'cleanupIDs',
                active: false
              }
            ]
          }
        }
      }
    })

    return config
  }
 };
