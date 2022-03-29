import { Container } from './styles'

import DisplayOptions from 'components/molecules/DisplayOptions'
import Filter from 'components/molecules/Filter'
import ProfileOptions from 'components/molecules/ProfileOptions'
import React from 'react'

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <DisplayOptions />
        </li>

        <li>
          <Filter />
        </li>

        <li>
          <ProfileOptions />
        </li>
      </ul>
    </Container>
  )
}

export default Navbar
