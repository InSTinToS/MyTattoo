import { Container } from './styles'
import React from 'react'

interface IProps {
  label: string
}

const InputLabel = ({ label }: IProps) => <Container>{label}</Container>

export default InputLabel
