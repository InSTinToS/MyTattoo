import styled from 'styled-components'

export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px 24px;
  }
`
