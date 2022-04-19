import { useAuthOptions } from './logic'
import { AuthOptionsStyle, SignInButton, SignUpButton } from './styles'
import type { IAuthOptionsProps } from './types'

const AuthOptions = (props: IAuthOptionsProps) => {
  const { onSignInClick, onSignUpClick } = useAuthOptions()

  return (
    <AuthOptionsStyle {...props}>
      <li>
        <SignInButton onClick={onSignInClick} buttonTheme='secondary'>
          Entrar
        </SignInButton>
      </li>

      <li>
        <SignUpButton onClick={onSignUpClick}>Registrar</SignUpButton>
      </li>
    </AuthOptionsStyle>
  )
}

export default AuthOptions
