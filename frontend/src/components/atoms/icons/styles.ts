import styled, { css } from 'styled-components'

interface IContainer {
  size: number
  color: string
}

interface IOutlined extends IContainer {
  outlined?: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }

  path {
    fill: ${({ color }) => color};
  }
`

const Outlined = styled(Container)<IOutlined>`
  ${({ outlined, color }) =>
    outlined &&
    css`
      path {
        stroke: ${color};
        fill: transparent;
      }
    `};
`

export { Container, Outlined }
export type { IContainer, IOutlined }
