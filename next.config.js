module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    locales: ['en-US', 'pl'],
    defaultLocale: 'en-US',
    // domains: [
    //   {
    //     domain: "example.com",
    //     defaultLocale: "en-US",
    //   },
    //   {
    //     domain: "example.pl",
    //     defaultLocale: "pl",
    //   },
    // ],
  },
};
