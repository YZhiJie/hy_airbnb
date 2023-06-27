import styled from 'styled-components'

export const SectionsWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px 0;
  background-color: #fff;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    width: 230px;
    cursor: pointer;

    .info {
      .title {
        font-size: 12px;
        font-weight: 700;
      }

      .desc {
        font-size: 13px;
        color: rgba(0,0,0,0.6);
      }
    }

    .divider {
      width: 1px;
      height: 100%;
      background-color: #eee;
    }
  }

`
