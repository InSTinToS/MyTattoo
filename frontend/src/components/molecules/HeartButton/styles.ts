import styled from 'styled-components'

const HeartButtonStyle = styled.button`
  width: 100%;
  height: 100%;

  .Icon {
    width: 24px;
    height: 24px;

    svg path {
      stroke: ${({ theme }) => theme.colors.secondary};
    }

    &.liked svg path {
      fill: ${({ theme }) => theme.colors.red};
      stroke: ${({ theme }) => theme.colors.red};
    }
  }
`

export { HeartButtonStyle }
