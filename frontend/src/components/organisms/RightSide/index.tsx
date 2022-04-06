import { RightSideStyle } from './styles'
import type { IRightSideProps } from './types'

import Recommendations from 'components/molecules/Recommendations'

const RightSide = (props: IRightSideProps) => (
  <RightSideStyle {...props}>
    <Recommendations title='Sugestões' />

    <Recommendations title='Em alta' />
  </RightSideStyle>
)

export default RightSide
