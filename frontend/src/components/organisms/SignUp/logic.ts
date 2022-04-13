import type { ISignUpValues, TOnSignupSubmit } from './types'

import type {
  IRequest,
  IResponse
} from '@backend/modules/Users/useCases/createUser/CreateUser.types'
import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useFormik } from 'formik'

const initialValues: ISignUpValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const useSignUp = () => {
  const createUser = async (dataToCreate: IRequest) => {
    console.log('HERE', process.env.NEXT_PUBLIC_API_URL)

    const response: AxiosResponse<IResponse> = await api.post(
      '/users',
      dataToCreate
    )

    if (response.status !== 201) throw new Error('Failed to create an user')

    return response
  }

  const onSignUpSubmit: TOnSignupSubmit = async ({
    email,
    password,
    username
  }) => {
    return await createUser({ email, password, username })
  }

  const formik = useFormik({ initialValues, onSubmit: onSignUpSubmit })

  return { formik }
}

export { useSignUp }
