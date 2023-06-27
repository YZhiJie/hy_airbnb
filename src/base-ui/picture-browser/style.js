import styled from 'styled-components'

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999; // -1 1 9 99 999
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      z-index: 9;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .control {
      position: absolute;
      z-index: 1;

      /* 绝对定位元素宽高占满最近一个定位元素 */
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;

        /* 绝对定位元素水平居中显示 */
        left: 0;
        right: 0;
        margin: 0 auto;

        height: 100%;
        
        /* 用户不可选中文本 */
        user-select: none;
      }

      /* 动画的样式 */
      .pic-enter {
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        height: ${props => props.showList ? '67px' : '0'};
        transition: height 300ms ease;
        
        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`