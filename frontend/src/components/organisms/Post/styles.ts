import { lighten } from 'polished'
import styled from 'styled-components'

const PostStyle = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 16px;

  background-color: ${({ theme }) => lighten(0.03, theme.colors.background)};

  img {
    border-radius: 8px;
  }

  article {
    position: relative;
  }
`

export { PostStyle }
