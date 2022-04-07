import type { ICreatePostStyleProps } from './types'

import Button from 'components/molecules/Button'

import { transparentize } from 'polished'
import styled from 'styled-components'

const CreatePostStyle = styled.div<ICreatePostStyleProps>`
  padding: 16px;
  border-radius: 8px;
  width: clamp(304px, 100% - 16px, 65vh);

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

const ShareButton = styled(Button)`
  padding: 4px 16px;

  border: solid 1px ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.primary)};
`

const AddButton = styled(Button)`
  border: none;
  background-color: transparent;

  span {
    margin-left: 8px;
  }
`

export { CreatePostStyle, ShareButton, AddButton }
