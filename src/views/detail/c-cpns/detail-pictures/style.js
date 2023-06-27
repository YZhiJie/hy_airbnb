import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  position: relative;

  .pictures {
    display: flex;
    height: 600px;

    .left,
    .right {
      flex: 1;
      display: flex;

      .item {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        border: 1px solid #000;

        img {
          width: 100%;
          height: 100%;
          /* 保持图片的宽高比 */
          object-fit: cover;
        }

        /* 蒙版 */
        .cover {
          position: absolute;
          /* 宽高占满父元素 */
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;

          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }

    .right {
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
      }
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`
