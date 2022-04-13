import { useSignUp } from './logic'
import { SignUpStyle } from './styles'
import type { ISignUpProps } from './types'

import { GoogleButton, InputLabel, ModalButton } from '../AuthModal/styles'

import Input from 'components/atoms/Input'
import Google from 'components/atoms/icons/Google'

const SignUp = (props: ISignUpProps) => {
  const { formik } = useSignUp()

  return (
    <SignUpStyle {...props} onSubmit={formik.handleSubmit}>
      <InputLabel>
        <label htmlFor='username'>Nome de usuário</label>

        <Input
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </InputLabel>

      <InputLabel>
        <label htmlFor='email'>E-mail</label>

        <Input
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </InputLabel>

      <InputLabel>
        <label htmlFor='password'>Senha</label>

        <Input
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </InputLabel>

      <InputLabel>
        <label htmlFor='confirmPassword'>Confirmar Senha</label>

        <Input
          name='confirmPassword'
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </InputLabel>

      <ModalButton>Cadastrar</ModalButton>

      <GoogleButton icon={<Google size={24} />}>
        Cadastrar com o Google
      </GoogleButton>
    </SignUpStyle>
  )
}

export default SignUp
