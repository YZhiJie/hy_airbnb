import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    .title {
      font-weight: 700;
      padding-left: 5px;
    }
  }
`
