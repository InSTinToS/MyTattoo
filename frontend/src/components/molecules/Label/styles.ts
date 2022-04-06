import type { ILabelStyleProps } from './types'

import styled, { css } from 'styled-components'

const LabelStyle = styled.div<ILabelStyleProps>`
  display: flex;

  padding: 4px 8px;
  font-style: italic;
  border-radius: 8px;

  ${({ theme, colors, stroke }) => css`
    color: ${colors?.text || theme.colors.secondary};
    background-color: ${colors?.background || theme.colors.primary};
    border: ${`solid ${stroke}px ${colors?.border || theme.colors.secondary}`};
  `};

  .icon {
    margin-right: 4px;
  }
`

export { LabelStyle }
