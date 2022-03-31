import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    img {
      border-radius: 50%;
    }

    & + li {
      margin-left: 16px;
    }
  }
`
