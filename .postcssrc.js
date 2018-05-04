// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-cssnext": {
    	// 自动处理浏览器前缀
      browsers: ['last 2 versions', '> 5%'],// 主流浏览器的最新两个版本 //  全球统计有超过5%的使用率
    },
    "postcss-url": {}
  }
}
