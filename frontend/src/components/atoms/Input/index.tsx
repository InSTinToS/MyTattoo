import { InputStyle } from './styles'
import { IInputProps } from './types'

const Input = (props: IInputProps) => <InputStyle {...(props as any)} />

export default Input
