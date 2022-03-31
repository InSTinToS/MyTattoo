import type { ICommentStyleProps } from './types'

import styled, { css } from 'styled-components'

const CommentStyle = styled.div<ICommentStyleProps>`
  display: flex;

  img {
    border-radius: 50%;
  }

  p {
    margin-left: 16px;
    width: calc(100% - 40px - 16px);

    b {
      ${({ theme, isArtist }) =>
        isArtist &&
        css`
          color: ${theme.colors.primary};
        `};
    }
  }
`

export { CommentStyle }
