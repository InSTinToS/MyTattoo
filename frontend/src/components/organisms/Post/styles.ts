import { lighten } from 'polished'
import styled from 'styled-components'

const PostStyle = styled.div`
  padding: 16px;
  border-radius: 16px;
  width: 100%;

  background-color: ${({ theme }) => lighten(0.03, theme.colors.background)};

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin-bottom: 16px;

    img {
      border-radius: 50%;
    }

    > div {
      flex: 1;

      margin-left: 16px;

      font-weight: bold;

      div {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    p {
      margin-top: 8px;
    }
  }

  img {
    border-radius: 8px;
  }
`

export { PostStyle }
