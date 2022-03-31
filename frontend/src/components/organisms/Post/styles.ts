import styled from 'styled-components'

import { lighten } from 'polished'

const Container = styled.div`
  padding: 16px;
  border-radius: 16px;

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

export { Container }
