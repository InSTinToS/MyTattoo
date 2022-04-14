import { useSignUp } from './logic'
import { SignUpStyle } from './styles'
import type { ISignUpProps } from './types'

import { GoogleButton, ModalButton } from '../AuthModal/styles'

import Google from 'components/atoms/icons/Google'

import Field from 'components/molecules/Field'

const SignUp = (props: ISignUpProps) => {
  const { formik } = useSignUp()

  return (
    <SignUpStyle {...props} onSubmit={formik.handleSubmit}>
      <Field name='username' label='Nome de usuário' formik={formik} />

      <Field type='email' name='email' label='E-mail' formik={formik} />

      <Field type='password' name='password' label='Senha' formik={formik} />

      <Field
        type='password'
        formik={formik}
        name='confirmPassword'
        label='Confirmar senha'
      />

      <ModalButton type='submit'>Cadastrar</ModalButton>

      <GoogleButton icon={<Google size={24} />}>
        Cadastrar com o Google
      </GoogleButton>
    </SignUpStyle>
  )
}

export default SignUp
