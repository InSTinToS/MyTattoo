import Button from 'components/molecules/Button'

import { darken, transparentize } from 'polished'
import styled from 'styled-components'

const ModalButton = styled(Button)`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;
`

const SignInButton = styled(ModalButton)`
  background-color: transparent;

  color: ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
`

const GoogleButton = styled(ModalButton).attrs({ type: 'button' })`
  color: gray;
  background-color: white;
  margin-top: 24px;

  span {
    margin-left: 16px;
  }
`

const AuthModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>
    transparentize(0.3, darken(0.3, theme.colors.background))};

  > section {
    width: 400px;
    padding: 24px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.colors.background};

    nav {
      display: flex;
      justify-content: flex-end;

      margin-bottom: 24px;
    }
  }

  #sign-up nav {
    justify-content: space-between;
  }
`

export { ModalButton, SignInButton, GoogleButton, AuthModalStyle }
