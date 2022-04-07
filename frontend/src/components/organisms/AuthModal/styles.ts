import Button from 'components/molecules/Button'

import { darken, transparentize } from 'polished'
import styled from 'styled-components'

const InputLabel = styled.div`
  position: relative;
  border: solid 1px ${({ theme }) => theme.colors.secondary};

  border-radius: 16px;
  margin-bottom: 24px;

  input {
    height: 40px;
  }

  label {
    position: absolute;
    top: -50%;

    padding: 0 8px;
    margin-left: 16px;
    transform: translateY(50%);

    background-color: ${({ theme }) => theme.colors.background};
  }
`

const ModalButton = styled(Button)`
  display: flex;
  justify-content: center;

  padding: 8px;
`

const SignInButton = styled(ModalButton)`
  margin-bottom: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
`

const GoogleButton = styled(ModalButton)`
  color: gray;
  margin-top: 16px;
  background-color: white;

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

    form {
      > * {
        width: 100%;
      }
    }
  }

  #sign-up {
    nav {
      justify-content: space-between;
    }
  }
`

export { InputLabel, SignInButton, ModalButton, GoogleButton, AuthModalStyle }
