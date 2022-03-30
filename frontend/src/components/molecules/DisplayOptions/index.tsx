import { Container } from './styles'
import React from 'react'

import { DisplayOptionsLogic } from './logic'

import DisplayHorizontal from 'components/atoms/icons/DisplayHorizontal'
import DisplayVertical from 'components/atoms/icons/DisplayVertical'

const DisplayOptions = () => {
  const { onLiClick, horizontalColor, verticalColor } = DisplayOptionsLogic()

  return (
    <Container>
      <li onClick={() => onLiClick('horizontal')}>
        <DisplayHorizontal size={29} color={horizontalColor} />
      </li>

      <li onClick={() => onLiClick('vertical')}>
        <DisplayVertical size={29} color={verticalColor} />
      </li>
    </Container>
  )
}

export default DisplayOptions
