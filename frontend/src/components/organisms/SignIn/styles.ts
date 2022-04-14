import type { ISignInStyleProps } from './types'

import styled from 'styled-components'

const SignInStyle = styled.section<ISignInStyleProps>`
  nav {
    justify-content: flex-end;
  }
`

export { SignInStyle }
