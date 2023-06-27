// 作用: 用法解析组件上的 style 属性的字符串类型属性值, 将字符串解析为对应的对象
function styleStrToObject(str) {
  const obj = {}
  // 例如: 将 font-size 中的 -s 转换成 
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定一个函数作为参数

  // 都是全局替换, 只要包含就替换
  // 第一个 replace 的作用: 例如 -s 替换为 S
  // 第二个 replace 的作用: 将字符串中的;或者; 删除
  // split 方法的作用就是以 : 或者 ; 为分隔符, 分割字符串, 返回的格式为: [key1, value1, key2, value2, ...]

  const s = str.toLowerCase().replace(/-(.)/g, function (m, g) {
    // g 匹配的是参数1 正则表达式中的第一个 () 中匹配到的内容
    // 如果是 font-size, 则匹配到的是 s
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g);

  // 遍历数组: [key1, value1, key2, value2, ...]
  for (var i = 0; i < s.length; i += 2) {
    // 左侧 replace 的作用: 将字符串中的空格全部移除
    // 右侧 replace 的作用: 将首尾的连续空格移除
    // 左侧设置的是css样式属性的key, 右侧设置的是css样式属性的值
    // css 属性格式示例: border: 1px solid red;  => { border: '1px solid red' }
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
  }
      

  return obj;
}

export default styleStrToObject