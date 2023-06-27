import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* 消除第一个子元素左侧内边距的 8px 和最后一个子元素的右侧内边距的 8px */
  margin: 0 -8px;
`
