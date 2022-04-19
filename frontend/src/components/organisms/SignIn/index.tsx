import { useSignIn } from './logic'
import { SignInButton, SignInStyle } from './styles'
import type { ISignInProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import Close from 'components/atoms/icons/Close'
import Loading from 'components/atoms/icons/Loading'

import Field from 'components/molecules/Field'

const SignIn = (props: ISignInProps) => {
  const {
    theme,
    formik,
    loading,
    onCloseClick,
    isSignInFilled,
    onSignUpClick
  } = useSignIn()

  return (
    <SignInStyle {...props}>
      <nav>
        <Close id='close' onClick={onCloseClick} />
      </nav>

      {loading ? (
        <Loading color={theme.colors.secondary} size={48} />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Field
            formik={formik}
            name='usernameOrEmail'
            label='Nome de usuário ou E-mail'
          />

          <Field
            type='password'
            label='Senha'
            name='password'
            formik={formik}
          />

          <SignInButton
            type='submit'
            active={isSignInFilled}
            disabled={!isSignInFilled}
            buttonTheme='secondary'
          >
            Entrar
          </SignInButton>

          <ModalButton onClick={onSignUpClick}>Cadastrar</ModalButton>

          {/* <GoogleButton icon={<Google size={24} />}>
            Entrar com o Google
          </GoogleButton> */}
        </form>
      )}
    </SignInStyle>
  )
}

export default SignIn
