import styled, { css } from 'styled-components'

interface IContainerProps {
  isArtist: boolean
}

const Container = styled.div<IContainerProps>`
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

export type { IContainerProps }
export { Container }
