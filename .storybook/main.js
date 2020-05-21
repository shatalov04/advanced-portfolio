const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  stories: ['../src/admin/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {

    config.plugins.push(new SpriteLoaderPlugin({ plainSprite: true }));
      
    config.module.rules.push({
      test: /\.(p|post|)css$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }); 

    // config.module.rules.unshift({
    //   test: /\.svg$/,
    //   use: [
      
    //     'svg-transform-loader',
    //     {
    //       loader: 'svgo-loader',
    //       options: {
    //         plugins: [
    //           { removeTitle: true },
    //           {
    //             removeAttrs: {
    //               attrs: '(fill|stroke)',
    //             },
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       loader: 'svg-sprite-loader',
    //       options: {
    //         extract: true,
    //         spriteFilename: (svgPath) => `sprite${svgPath.substr(-4)}`,
    //       },
    //     },
    //   ],
    // });

    config.module.rules.push({
      test: /\.pug$/,
      use: ['pug-plain-loader'],
    }); 

    return config;
  },
};
