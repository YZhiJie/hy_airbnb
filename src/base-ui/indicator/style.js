import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    /* 任意子元素不压缩, 都在一行显示 */
    > * {
      flex-shrink: 0;
    }
  }
`
