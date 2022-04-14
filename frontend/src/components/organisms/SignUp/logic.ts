import type { ISignUpValues, TOnSignupSubmit } from './types'

import { FeedContext } from 'components/templates/Feed/logic'

import type {
  IRequest,
  IResponse
} from '@backend/modules/Users/useCases/createUser/CreateUser.types'
import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useFormik } from 'formik'
import { useContext } from 'react'
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
  const { triggeringFeedback } = useContext(FeedContext)

  const createUser = async (dataToCreate: IRequest) => {
    try {
      const response: AxiosResponse<IResponse> = await api.post(
        '/users',
        dataToCreate
      )

      triggeringFeedback({
        title: 'Sucesso',
        content: 'Cadastrado com sucesso.',
        color: theme.colors.green
      })

      return response
    } catch (error) {
      triggeringFeedback({
        title: 'Error',
        content: 'Error ao se cadastrar, tente novamente mais tarde.',
        color: theme.colors.red
      })
    }
  }

  const onSignUpSubmit: TOnSignupSubmit = async ({
    email,
    password,
    username
  }) => await createUser({ email, password, username })

  const formik = useFormik({
    initialValues,
    onSubmit: onSignUpSubmit,
    validationSchema: signupSchema
  })

  return { formik }
}

export { useSignUp }
