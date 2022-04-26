import styled from 'styled-components'

const PostHeaderStyle = styled.header<{ avatarSize: number }>`
  display: grid;
  grid:
    'avatar name' calc(40px / 2)
    'avatar isArtist' calc(40px / 2)
    'description description' auto / 40px auto;

  margin-bottom: 16px;

  img {
    grid-area: avatar;

    border-radius: 50%;
  }

  strong {
    margin-left: 8px;
    grid-area: name;
  }

  b {
    margin-left: 8px;
    grid-area: isArtist;
  }

  .isArtist {
    grid-area: isArtist;

    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    grid-area: description;

    margin-top: 8px;
  }
`

export { PostHeaderStyle }
