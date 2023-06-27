export function isEmptyObject(obj) {
  // !! 可以将一个数据转换为其对应的布尔值
  return !!Object.keys(obj).length
}