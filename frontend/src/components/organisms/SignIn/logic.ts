import { FeedContext } from 'components/templates/Feed/logic'

import useAppDispatch from 'hooks/useAppDispatch'

import user from 'store/user'

import type {
  IResponse,
  IRequest as ISignInValues
} from '@backend/modules/Authentication/useCases/signIn/SignIn.types'
import type { UserModel } from '@backend/modules/Users/useCases/readUsers/ReadUsers.types'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
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

const initialValues: ISignInValues = {
  password: '',
  usernameOrEmail: ''
}

const useSignIn = () => {
  const { toggleShowAuthModal, triggeringFeedback } = useContext(FeedContext)
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  const dispatch = useAppDispatch()

  const onSignInSubmit = async (dataToAuthenticate: ISignInValues) => {
    setLoading(true)

    try {
      const { data: authData }: AxiosResponse<IResponse> = await api.post(
        '/auth/sign-in',
        dataToAuthenticate
      )

      const { data: userData }: AxiosResponse<UserModel> = await api.get(
        `/users/${authData.id}`,
        { headers: { Authorization: `Bearer ${authData.token}` } }
      )

      dispatch(user.actions.setUser(userData))

      triggeringFeedback({
        title: 'Sucesso',
        color: theme.colors.green,
        content: `Bem-vindo de volta, ${userData.username}!`
      })

      toggleShowAuthModal({ page: 'sign-in', open: false })
    } catch (error) {
      triggeringFeedback({
        title: 'Error',
        color: theme.colors.red,
        content: 'Error ao conectar, tente novamente mais tarde.'
      })
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSignInSubmit,
    validationSchema: signInSchema
  })

  const isSignInFilled =
    !formik.errors.usernameOrEmail && !formik.errors.password

  const onSignUpClick = () => {
    toggleShowAuthModal({ page: 'sign-up', open: true })
  }

  const onCloseClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: false })
  }

  return { onCloseClick, onSignUpClick, formik, isSignInFilled, loading }
}

export { useSignIn }
