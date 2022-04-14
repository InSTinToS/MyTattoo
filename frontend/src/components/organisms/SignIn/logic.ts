import type { ISignInValues } from './types'

import { FeedContext } from 'components/templates/Feed/logic'

import { useFormik } from 'formik'
import { useContext } from 'react'
import * as Yup from 'yup'

const signInSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required(
    'Informe um nome de usuário ou e-mail!'
  ),

  password: Yup.string()
    .matches(/^(?=.*[@$!%*?&])/, 'Senha inválida!')
    .matches(/^(?=.*[A-Z])/, 'Senha inválida!')
    .matches(/^(?=.*[a-z])/, 'Senha inválida!')
    .matches(/^(?=.*\d)/, 'Senha inválida!')
    .min(8, 'Senha inválida!')
    .required('Informe uma senha!')
})

const initialValues: ISignInValues = {}

const useSignIn = () => {
  const onSignInSubmit = async ({
    password,
    usernameOrEmail
  }: ISignInValues) => {
    console.log(password, usernameOrEmail)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSignInSubmit,
    validationSchema: signInSchema
  })

  const { toggleShowAuthModal } = useContext(FeedContext)

  const onSignUpClick = () => {
    toggleShowAuthModal({ page: 'sign-up', open: true })
  }

  const onCloseClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: false })
  }

  return { onCloseClick, onSignUpClick, formik }
}
export { useSignIn }
