// // Direct use of Sass without css module
// const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//     cssModules: true
// });

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: isServer ? 'file-loader' : 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        { loader: 'scoped-css-loader' },
        {
          loader: 'sass-loader'
        }
      ]
    });

    return config;
  }
};
