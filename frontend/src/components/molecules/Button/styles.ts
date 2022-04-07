import type { IButtonStyleProps } from './types'

import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;

  border-radius: 8px;

  ${({ theme, colors, stroke, padding }) => css`
    padding: ${padding || '4px 8px'};
    color: ${colors?.text || theme.colors.secondary};
    background-color: ${colors?.background || theme.colors.primary};
    border: ${`solid ${stroke}px ${colors?.border || theme.colors.secondary}`};
  `};

  span {
    margin-left: 4px;
  }
`

export { ButtonStyle }
