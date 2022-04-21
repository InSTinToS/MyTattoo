import GlobalProvider from 'components/providers/GlobalProvider'

import SignUp from '.'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

const fakeEmail = 'example@example.com'
const fakePassword = 'Password@1234'
const fakeUsername = 'username'

const typeAndVerify = async (input: Element, value: string) => {
  userEvent.type(input, value)
  await waitFor(() => expect(input).toHaveValue(value))
}

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <GlobalProvider>
        <SignUp />
      </GlobalProvider>
    )
  })

  it('sign up submit button should be disabled by default', () => {
    const signUpButton = screen.getByRole('button', { name: 'Cadastrar' })

    expect(signUpButton).toBeDisabled()
  })

  it('sign up submit button should be enabled when all inputs are correctly filled', async () => {
    const passwordInput = screen.getByLabelText('Senha')
    const emailInput = screen.getByRole('textbox', { name: 'E-mail' })
    const confirmPasswordInput = screen.getByLabelText(/Confirmar senha/i)
    const signUpButton = screen.getByRole('button', { name: 'Cadastrar' })
    const usernameInput = screen.getByRole('textbox', {
      name: 'Nome de usuário'
    })

    await act(async () => {
      await typeAndVerify(emailInput, fakeEmail)
      await typeAndVerify(usernameInput, fakeUsername)
      await typeAndVerify(passwordInput, fakePassword)
      await typeAndVerify(confirmPasswordInput, fakePassword)
    })

    expect(usernameInput).toHaveValue(fakeUsername)
    expect(emailInput).toHaveValue(fakeEmail)
    expect(passwordInput).toHaveValue(fakePassword)
    expect(confirmPasswordInput).toHaveValue(fakePassword)

    await waitFor(() => {
      expect(signUpButton).toBeEnabled()
    })
  })

  it('username should not be less than 2 characters', async () => {
    const usernameInput = screen.getByRole('textbox', {
      name: 'Nome de usuário'
    })

    await act(async () => {
      await typeAndVerify(usernameInput, `a`)

      userEvent.keyboard('{Tab}')
    })

    await act(async () => {
      userEvent.hover(
        await screen.findByRole('button', { name: 'usernameTrigger' })
      )
    })

    expect(screen.getByRole('tooltip')).toHaveTextContent(
      'Nome de usuário muito curto!'
    )
  })
})
