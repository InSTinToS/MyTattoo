import { InputStyle } from './styles'
import type { IInputProps } from './types'

const Input = (props: IInputProps) => <InputStyle {...(props as any)} />

export default Input
