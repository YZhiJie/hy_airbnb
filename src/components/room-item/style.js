import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${(props) => props.width};
  padding: 10px 8px;
  cursor: pointer;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    /* 这里的 padding 的百分比相对的是当前元素的宽度(width/由内容撑开的宽度) */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      /* 设置图片占满父元素 */
      width: 100%;
      height: 100%;

      /* 保持图片原有宽高比 */
      object-fit: cover;
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);
        }
      }
      
    }

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;

      /* 绝对定位元素宽度占满父元素, 同时设置内容水平居中显示 */
      left: 0;
      right: 0;
      margin: 0 auto;

      width: 30%;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 显示 7 个 => 根据百分比决定显示圆点的个数 */
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
            /* background-color: red; */
          }
        }
      }
    }
  }

  indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    z-index: 9;
    margin: 0 auto;
    width: 30%;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;

      .dot {
        width: 6px;
        height: 6px;
        background-color: #fff;
      }
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.color};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    /* 文本超过两行溢出时, 显示省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    /* 一些可以继承的样式可以直接在 Rating 组件的 sx 属性中设置, 如 font-size/color等 */
    /* 一些不可以继承的样式, 可以通过 css 的方式给 svg 元素的父元素设置 */
    /* 对 Rating 组件中的 svg 组件的父元素设置样式, 可以直接控制 svg 的样式 */
    /* svg 组件默认继承父元素的样式 */
    .MuiRating-icon {
      margin-right: -2px;
    }

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`
