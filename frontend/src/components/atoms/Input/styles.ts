import styled, { css } from 'styled-components'

interface IContainer {
  outlined?: boolean
}

const Container = styled.input<IContainer>`
  width: 100%;
  height: 100%;

  padding-left: 16px;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};

  &:-webkit-autofill {
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;
  }

  ${({ theme, outlined }) =>
    outlined &&
    css`
      border-radius: 16px;
      border: solid 1px ${theme.colors.secondary};
    `}
`

export { Container }
export type { IContainer }
