interface ISignInValues {
  password?: string
  usernameOrEmail?: string
}

interface ISignInStyleProps {}

interface ISignInProps extends ISignInStyleProps {}

export type { ISignInProps, ISignInStyleProps, ISignInValues }
