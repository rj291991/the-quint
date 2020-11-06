const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:4000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "https://www.thequint.com/api/v1/stories"
      }
    })
  );

  app.use(morgan('combined'));
};
