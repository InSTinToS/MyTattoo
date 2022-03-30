import {
  Container as IconContainer,
  IContainer as IIconContainer
} from '../styles'

import styled from 'styled-components'

interface IContainer extends IIconContainer {
  heartColor?: string
}

const Container = styled(IconContainer)<IContainer>`
  path + path {
    fill: ${({ theme, heartColor }) =>
      heartColor ? heartColor : theme.colors.red};
  }
`

export { Container }
export type { IContainer }
