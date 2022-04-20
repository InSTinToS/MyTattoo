import { useSignIn } from './logic'
import { SignInButton, SignInStyle } from './styles'
import type { ISignInProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import Close from 'components/atoms/Icon/icons/Close'
import Loading from 'components/atoms/Icon/icons/Loading'

import Field from 'components/molecules/Field'

const SignIn = (props: ISignInProps) => {
  const { formik, loading, onCloseClick, isSignInFilled, onSignUpClick } =
    useSignIn()

  return (
    <SignInStyle {...props}>
      <nav>
        <Close onClick={onCloseClick} />
      </nav>

      {loading ? (
        <div className='loadingWrapper'>
          <Loading />
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Field
            formik={formik}
            name='usernameOrEmail'
            label='Nome de usuário ou E-mail'
          />

          <Field
            label='Senha'
            name='password'
            type='password'
            formik={formik}
          />

          <SignInButton
            type='submit'
            variant='secondary'
            active={isSignInFilled}
            disabled={!isSignInFilled}
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
