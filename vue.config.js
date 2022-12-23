const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'./',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target:'http://backend-api-01.newbee.ltd',
        changeOrigin:true
      }
    },
  }
})
