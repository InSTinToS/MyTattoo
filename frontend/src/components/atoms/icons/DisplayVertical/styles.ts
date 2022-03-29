import styled from 'styled-components'

interface IContainer {
  size: number
  color: string
}

const Container = styled.div<IContainer>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  path {
    fill: ${({ color }) => color};
  }
`

export { Container }
export type { IContainer }
