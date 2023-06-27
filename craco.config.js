const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports =  {
  // less
  // https://github.com/DocSpring/craco-less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1DA57A' },
      //       javascriptEnabled: true,
      //     }
      //   }
      // }
    }
  ],
  // webpack 配置: https://craco.js.org/docs/configuration/webpack/
  webpack: {
    alias: {
      // 要求传入绝对路径
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
    }
  },
}