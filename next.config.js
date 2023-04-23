module.exports = {
    distDir: '_next',
    env: {
        WORDPRESS_GRAPHQL_ENDPOINT: 'http://amidashk.com/graphql',
      },
    // basePath: '/myapp',
    // assetPrefix: '/myapp/'
}

// const withCSS = require('@zeit/next-css');
// const withImages = require('next-images');

// module.exports = withCSS(
//   withImages({
//     webpack: (config, { isServer }) => {
//       // Add support for importing CSS modules
//       config.module.rules.push({
//         test: /\.module\.css$/,
//         use: [
//           isServer ? 'css-loader' : 'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: '[local]_[hash:base64:5]',
//             },
//           },
//         ],
//       });

//       // Add support for importing GraphQL files
//       config.module.rules.push({
//         test: /\.(graphql|gql)$/,
//         exclude: /node_modules/,
//         loader: 'graphql-tag/loader',
//       });

//       return config;
//     },
//     env: {
//       WORDPRESS_GRAPHQL_ENDPOINT: 'http://amidashk.com/graphql',
//     },
//   })
// );
