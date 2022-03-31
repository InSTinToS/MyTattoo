import { Container, IContainer } from './styles'
import React, { HTMLProps } from 'react'

interface IProps extends HTMLProps<HTMLInputElement>, IContainer {}

const Input = (props: IProps) => <Container {...(props as any)} />

export default Input
