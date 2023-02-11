module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8500,
    host: "localhost",
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "Boilerplate v1.0",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
