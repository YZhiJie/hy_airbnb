import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
  
  .item {
    padding: 10px 15px;
    cursor: pointer;

    .text {
      font-size: 15px;
    }

    &.active {
      .bottom {
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
      }
    }
  }
`
