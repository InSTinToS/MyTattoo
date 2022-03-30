import styled from 'styled-components'

import {
  IContainer as IIconContainer,
  Container as IconContainer
} from '../styles'

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
