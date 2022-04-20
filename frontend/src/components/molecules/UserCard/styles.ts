import type { IUserCardStyleProps } from './types'

import { darken, lighten } from 'polished'
import styled from 'styled-components'

const UserCardStyle = styled.div<IUserCardStyleProps>`
  display: grid;
  grid:
    'avatar name' 23px
    'avatar smallBio' 23px / 62px auto;

  padding: 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.background)};
  }

  span {
    &.name {
      grid-area: name;
    }

    &.smallBio {
      grid-area: smallBio;

      color: ${({ theme }) => lighten(0.6, theme.colors.background)};
    }
  }
`

export { UserCardStyle }
