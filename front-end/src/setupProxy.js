const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['api/v1'],
        createProxyMiddleware({
          target: 'https://0484-182-1-83-99.ngrok.io/',
          changeOrigin: true,
        })
      );
      
};