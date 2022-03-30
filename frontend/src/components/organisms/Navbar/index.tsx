import { Container } from './styles'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'
import React from 'react'

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <DisplayOptions />
        </li>

        <li>
          <Search />
        </li>

        <li>
          <ProfileOptions />
        </li>
      </ul>
    </Container>
  )
}

export default Navbar
