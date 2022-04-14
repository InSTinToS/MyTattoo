import { useSignIn } from './logic'
import { SignInStyle } from './styles'
import type { ISignInProps } from './types'

import { GoogleButton, ModalButton } from '../AuthModal/styles'

import Close from 'components/atoms/icons/Close'
import Google from 'components/atoms/icons/Google'

import Field from 'components/molecules/Field'

const SignIn = (props: ISignInProps) => {
  const { onCloseClick, onSignUpClick, formik } = useSignIn()

  return (
    <SignInStyle {...props}>
      <nav>
        <Close id='close' onClick={onCloseClick} />
      </nav>

      <form>
        <Field
          name='username'
          formik={formik}
          label='Nome de usuário ou E-mail'
        />

        <Field type='password' label='Senha' name='password' formik={formik} />

        <ModalButton onClick={onSignUpClick}>Cadastrar</ModalButton>

        <GoogleButton icon={<Google size={24} />}>
          Entrar com o Google
        </GoogleButton>
      </form>
    </SignInStyle>
  )
}

export default SignIn
