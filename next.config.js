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
  },
  webpack: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
    ],
    resolve: {
      preferRelative: true,
    },
  },
};
