const webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = webpackHotHtmlMiddleware;

function webpackHotHtmlMiddleware(webpackCompiler, webpackHotMiddlewareOptions) {
  const hotMiddleware = webpackHotMiddleware(webpackCompiler, webpackHotMiddlewareOptions);

  webpackCompiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () => {
    hotMiddleware.publish({
      action: 'reload'
    });
  });

  return hotMiddleware;
}
