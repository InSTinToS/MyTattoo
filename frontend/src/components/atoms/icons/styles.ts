import type { IIconStyleProps, IOutlinedIconStyleProps } from './types'

import styled, { css } from 'styled-components'

const IconStyle = styled.div<IIconStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${({ size }) =>
      size &&
      css`
        height: ${size}px;
      `};
  }

  path {
    ${({ color }) =>
      color &&
      css`
        fill: ${color};
      `};
  }
`

const OutlinedIconStyle = styled(IconStyle)<IOutlinedIconStyleProps>`
  ${({ outlined, color }) =>
    outlined &&
    css`
      path {
        stroke: ${color};
        fill: transparent;
      }
    `};
`

export { IconStyle, OutlinedIconStyle }
