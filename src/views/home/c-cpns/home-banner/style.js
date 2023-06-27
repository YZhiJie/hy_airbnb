import styled from 'styled-components'
// 在 webpack 构建的项目中, 如果想使用本地图片, 有两种方式: 
// 1.将图片当成一个模块引入, 然后将可以将其作为 img 标签的 src 属性值, 或者 background: url(imageModuleName)
// 2.使用 require() 包裹图片的引用路径, 然后将可以将其作为 img 标签的 src 属性值, 或者 background: url(require(imgPath))
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  height: 529px;
  /* background: url(${coverImg}) center/cover; */
  background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover;
`