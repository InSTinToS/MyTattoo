import type { ICreatePostStyleProps } from './types'

import Button from 'components/molecules/Button'

import { transparentize } from 'polished'
import styled from 'styled-components'

const ShareButton = styled(Button)`
  padding: 4px 16px;

  border: solid 1px ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.primary)};
`

const AddButton = styled(Button)`
  border: none;
  background-color: transparent;

  svg {
    margin-right: 0px;
  }

  span {
    display: none;
  }

  @media screen and (min-width: 528px) {
    span {
      display: block;
    }

    svg {
      margin-right: 8px;
    }
  }
`

const CreatePostStyle = styled.div<ICreatePostStyleProps>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  textarea {
    width: 100%;
    border: none;
    resize: none;
    height: 100px;
    margin-bottom: 16px;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
  }

  > div {
    display: flex;
    justify-content: flex-end;

    button + button {
      margin-left: 8px;
    }
  }
`

export { CreatePostStyle, ShareButton, AddButton }
