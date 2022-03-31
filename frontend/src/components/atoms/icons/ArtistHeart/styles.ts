import type { IArtistHeartProps } from './types'

import { IconStyle } from '../styles'

import styled from 'styled-components'

const ArtistHeartStyle = styled(IconStyle)<IArtistHeartProps>`
  path + path {
    fill: ${({ theme, heartColor }) =>
      heartColor ? heartColor : theme.colors.red};
  }
`

export { ArtistHeartStyle }
