import styled from 'styled-components'

const LabelStyle = styled.div`
  padding: 2px 4px;
  font-style: italic;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export { LabelStyle }
