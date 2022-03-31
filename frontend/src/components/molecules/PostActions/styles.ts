import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0 8px;
  margin: 16px 0;

  > li + li {
    margin-left: 16px;
  }
`

export { Container }
