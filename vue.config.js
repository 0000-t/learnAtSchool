module.exports = {
  configureWebpack: {
    resolve: {
      //省略文件后缀名
      extensions: ['js', 'css', 'vue'],
      //@指src，vue cli3 自动配置
      alias: {
        'components': '@/components',
        'views': '@/views',
        'assets': '@/assets',
        'network': '@/network',
        'router': '@/router',
        'element': '@/element',
        'common': '@/common'
      }
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}