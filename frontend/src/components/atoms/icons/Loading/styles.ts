import { IconStyle } from '../styles'

import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingStyle = styled(IconStyle)`
  animation: ${loading} 1200ms cubic-bezier(0.35, 0.78, 0.76, 0.9) infinite;
`

export { LoadingStyle }
