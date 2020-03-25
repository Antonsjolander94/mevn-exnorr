const path = require("path")

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";`
      }
    }
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
};