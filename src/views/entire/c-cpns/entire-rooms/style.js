import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 128px;

  .title {
    font-size: 22px;
    color: #222;
    margin: 0 0 10px 10px;

    .total-count {
      font-weight: 400;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;

    /* 绝对定位元素宽高撑满父元素 */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(255,255,255,.8);
  }
`