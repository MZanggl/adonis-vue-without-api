const path = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /Actions/, 
        use: {
          loader: 'seamlessly/loaders/webpack',
          options: { rcPath: path.join(__dirname, '..') }
        }
      }]
    }
  },
  lintOnSave: false
}
