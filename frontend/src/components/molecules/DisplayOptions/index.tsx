import { Container } from './styles'
import { DisplayOptionsLogic } from './logic'

import DisplayHorizontal from 'components/atoms/icons/DisplayHorizontal'
import DisplayVertical from 'components/atoms/icons/DisplayVertical'
import React from 'react'

const DisplayOptions = () => {
  const { onLiClick, horizontalColor, verticalColor } = DisplayOptionsLogic()

  return (
    <Container>
      <li onClick={() => onLiClick('horizontal')}>
        <DisplayHorizontal size={24} color={horizontalColor} />
      </li>

      <li onClick={() => onLiClick('vertical')}>
        <DisplayVertical size={24} color={verticalColor} />
      </li>
    </Container>
  )
}

export default DisplayOptions
