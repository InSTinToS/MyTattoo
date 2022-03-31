import styled from 'styled-components'

const Container = styled.div`
  padding: 2px 4px;
  font-style: italic;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export { Container }
