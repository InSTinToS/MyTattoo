import type { ISignUpValues, TOnSignupSubmit } from './types'

import { FeedContext } from 'components/templates/Feed/logic'

import type { IRequest } from '@backend/modules/Users/useCases/createUser/CreateUser.types'

import { api } from 'api'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'

const initialValues: ISignUpValues = {}

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Nome de usuário muito curto!')
    .max(30, 'Nome de usuário muito longo!')
    .matches(
      /^([A-z0-9])+$/,
      'Nome de usuário deve conter apenas números ou letras!'
    )
    .required('Informe um nome de usuário!'),

  email: Yup.string()
    .email('E-mail inválido!')
    .matches(/^(\w\.?)+@(\w\.?)+\.(\w\.?)+$/, 'E-mail inválido!')
    .required('Informe um e-mail!'),

  password: Yup.string()
    .matches(/^(?=.*[@$!%*?&])/, 'Sua senha deve conter um caractere especial!')
    .matches(/^(?=.*[A-Z])/, 'Sua senha deve conter uma letra maiúscula!')
    .matches(/^(?=.*[a-z])/, 'Sua senha deve conter uma letra minúscula!')
    .matches(/^(?=.*\d)/, 'Sua senha deve conter um número!')
    .min(8, 'Sua senha deve conter mais que 8 caracteres!')
    .required('Informe uma senha!'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não se correspondem!')
    .required('Você precisa confirmar sua senha!')
})

const useSignUp = () => {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const { triggeringFeedback, toggleShowAuthModal } = useContext(FeedContext)

  const onSignUpSubmit: TOnSignupSubmit = async (dataToCreate: IRequest) => {
    setLoading(true)

    try {
      await api.post('/users', dataToCreate)

      triggeringFeedback({
        title: 'Sucesso',
        content: 'Cadastrado com sucesso.',
        color: theme.colors.green
      })

      toggleShowAuthModal({ page: 'sign-in', open: true })
    } catch (error) {
      triggeringFeedback({
        title: 'Error',
        color: theme.colors.red,
        content: 'Error ao se cadastrar, tente novamente mais tarde.'
      })
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSignUpSubmit,
    validationSchema: signupSchema
  })

  const { email, confirmPassword, password, username } = formik.errors
  const enableSubmit =
    !confirmPassword && !email && !password && !username && formik.dirty

  const onArrowClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: true })
  }

  const onCloseClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: false })
  }

  return { formik, onArrowClick, onCloseClick, loading, enableSubmit }
}

export { useSignUp }
