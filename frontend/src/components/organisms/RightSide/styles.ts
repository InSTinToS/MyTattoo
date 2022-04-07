import type { IRightSideStyleProps } from './types'

import styled from 'styled-components'

const RightSideStyle = styled.aside<IRightSideStyleProps>`
  right: 0;

  padding: 0 24px;
  max-width: 400px;
`

export { RightSideStyle }
