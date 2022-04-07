import type { IAuthOptionsStyleProps } from './types'

import Button from 'components/molecules/Button'

import styled from 'styled-components'

const AuthOptionsStyle = styled.div<IAuthOptionsStyleProps>`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  li + li {
    margin-left: 16px;
  }
`

const SignInButton = styled(Button)`
  padding: 4px 16px;
  border-radius: 16px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
`

const SignUpButton = styled(Button)`
  padding: 4px 16px;
  border-radius: 16px;
`

export { AuthOptionsStyle, SignUpButton, SignInButton }
