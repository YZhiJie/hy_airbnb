import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination {
    /* 自定义当前页码的样式 */
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }

  .info {
    padding: 10px 0;
  }
`
