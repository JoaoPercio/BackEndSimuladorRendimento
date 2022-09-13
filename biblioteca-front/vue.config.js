const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.emitError = true;
        return options;
      });
  },
  configureWebpack: config => {
    config.devServer = {
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3333',
        },
      },
    };
    config.resolve = {
      ...config.resolve,
      alias: {
        Vue: 'vue',
        '@': resolve('src'),
        src: resolve('src'),
      },
    };
    config.performance = {
      ...config.performance,
      hints: false,
    };
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
      },
    };
  },
};
