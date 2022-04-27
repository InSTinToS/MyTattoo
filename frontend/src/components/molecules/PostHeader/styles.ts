import { IPostHeaderStyleProps } from './types'

import styled from 'styled-components'

const PostHeaderStyle = styled.header<IPostHeaderStyleProps>`
  display: grid;
  grid:
    'avatar name' calc(40px / 2)
    'avatar isArtist' calc(40px / 2)
    'description description' auto / 40px auto;

  margin-bottom: 16px;

  img {
    grid-area: avatar;

    border-radius: 50%;
    outline-offset: -2px;
  }

  strong {
    margin-left: 8px;
    grid-area: name;
  }

  b {
    grid-area: isArtist;
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    grid-area: description;

    margin-top: 8px;
  }
`

export { PostHeaderStyle }
