import { useSignUp } from './logic'
import { SignUpStyle } from './styles'
import type { ISignUpProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import Arrow from 'components/atoms/Icon/icons/Arrow'
import Close from 'components/atoms/Icon/icons/Close'
import Loading from 'components/atoms/Icon/icons/Loading'

import Field from 'components/molecules/Field'

const SignUp = (props: ISignUpProps) => {
  const { formik, onArrowClick, onCloseClick, loading } = useSignUp()

  return (
    <SignUpStyle {...props}>
      <nav>
        <Arrow onClick={onArrowClick} />

        <Close onClick={onCloseClick} />
      </nav>

      {loading ? (
        <div className='loadingWrapper'>
          <Loading />
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Field name='username' label='Nome de usuário' formik={formik} />

          <Field type='email' name='email' label='E-mail' formik={formik} />

          <Field
            type='password'
            name='password'
            label='Senha'
            formik={formik}
          />

          <Field
            type='password'
            formik={formik}
            name='confirmPassword'
            label='Confirmar senha'
          />

          <ModalButton type='submit'>Cadastrar</ModalButton>

          {/* <GoogleButton icon={<Google size={24} />}>
            Cadastrar com o Google
          </GoogleButton> */}
        </form>
      )}
    </SignUpStyle>
  )
}

export default SignUp
