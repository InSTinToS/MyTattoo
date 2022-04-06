import type { ILeftSideStyleProps } from './types'

import styled from 'styled-components'

const LeftSideStyle = styled.aside<ILeftSideStyleProps>`
  left: 0;
  height: 100%;

  section {
    display: flex;
    flex-flow: column nowrap;

    height: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;

      padding: 12px;

      li {
        padding: 8px 12px;
        cursor: pointer;
      }
    }

    header {
      display: flex;
      padding: 0 24px;

      form {
        display: flex;
        flex: 1;

        padding: 8px;
        border-radius: 8px;
        margin-right: 16px;

        border: solid 1px ${({ theme }) => theme.colors.secondary};

        input {
          padding-left: 8px;
        }
      }
    }

    footer {
      ul {
        :first-child {
          padding-bottom: 0;
        }

        + ul {
          padding-top: 0;
        }
      }
    }

    > div {
      flex: 1;
      overflow: hidden;
    }
  }
`
export { LeftSideStyle }
