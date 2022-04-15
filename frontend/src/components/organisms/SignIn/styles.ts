import type { ISignInStyleProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import styled, { css } from 'styled-components'

interface ISignInButtonStyleProps {
  active?: boolean
}

const SignInButton = styled(ModalButton)<ISignInButtonStyleProps>`
  margin-bottom: 24px;

  ${({ theme, active }) =>
    active
      ? css`
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: solid 1px ${theme.colors.primary};
        `}
`

const SignInStyle = styled.section<ISignInStyleProps>`
  nav {
    justify-content: flex-end;
  }
`

export { SignInStyle, SignInButton }
