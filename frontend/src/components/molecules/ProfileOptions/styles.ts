import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  align-items: center;

  li + li {
    margin-left: 16px;
  }
`
