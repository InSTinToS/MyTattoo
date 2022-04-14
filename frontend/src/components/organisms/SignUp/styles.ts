import type { ISignUpStyleProps } from './types'

import styled from 'styled-components'

const SignUpStyle = styled.form<ISignUpStyleProps>`
  .Field .Tooltip .content {
    width: min(354px, 100vw - 48px - 16px);
  }
`

export { SignUpStyle }
