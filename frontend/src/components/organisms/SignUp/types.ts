import { IRequest } from '@backend/modules/Users/useCases/createUser/CreateUser.types'
import { FormikConfig } from 'formik'

interface ISignUpStyleProps {}

interface ISignUpProps extends ISignUpStyleProps {}

interface ISignUpValues extends IRequest {
  confirmPassword: IRequest['password']
}

type TOnSignupSubmit = FormikConfig<ISignUpValues>['onSubmit']

export type { ISignUpProps, ISignUpStyleProps, ISignUpValues, TOnSignupSubmit }
